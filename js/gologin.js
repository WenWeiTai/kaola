// 表单验证
var CheckIpn = (function(){
    return {
        init : function () {
            this.event()
        },
        event : function () {
            var reg_phone = /^1[35789]\d{9}$/
            var reg_psw = /^[a-zA-z]+\w{7,11}$/
            $('#phonecheck').on('blur',function () {
                var phoneVal = this.value
                if(reg_phone.test(phoneVal)){
                    $('.warn').html('手机号码输入正确').css('color','green')  
                }else{
                    $('.warn').html('手机号码输入有误').css('color','red')
                    $('#phonecheck').attr("placeholder","手机输入有误，请重新输入")
                }
            })
            $('#checkpsw').on('blur',function () {
                var pswVal = this.value
                if(reg_psw.test(pswVal)){
                    $('.warn').html('密码通过').css('color','green')
                }else{
                    $('.warn').html('密码8~12位,字母开头').css('color','red')
                    $('#checkpsw').attr("placeholder","密码输入有误，请重新输入")
                }
            })
            $('#pswAgain').on('blur',function () {
                var val = this.value
                var val_psw = $('#checkpsw').val()
                if(val == val_psw && val != ''){
                    $('.warn').html('密码通过').css('color','green')
                }else {
                    $('.warn').html('密码不一致，请重新输入').css('color','red')
                    $('#pswAgain').attr("placeholder","两次密码不一致，请重新输入")
                }
            })
            $('#btn_Check').on('click',function() {
                $('#btn_Check').html(checkStr(4))
            })
            $('#check_Code').on('blur',function(){
                if($('#check_Code').val() ==  $('#btn_Check').html() && $('#check_Code').val() != ''){
                    $('.warn').html('验证码输入正确').css('color','green')
                }else{
                    $('.warn').html('验证码输入有误').css('color','red')
                    $('#phonecheck').attr("placeholder","验证码输入有误，请重新输入")
                } 
            })
            $('#bgCol').on('click',function(){
                if(reg_phone.test($('#phonecheck').val()) == true && reg_psw.test($('#checkpsw').val()) == true && $('#pswAgain').val() == $('#checkpsw').val() && $('#check_Code').val() ==  $('#btn_Check').html() && $('#check_Code').val() != ''){
                    var params = {
                        phone : $('#phonecheck').val(),
                        password : $('#checkpsw').val()
                    }
                    $.post('../php/gologin.php',params,function(json){
                        json = JSON.parse(json)
                        if(json.code == 200){
                            alert("登录成功,点击“确定”返回首页")
                            location.href = "../page/kaola_index.html"
                        }else{
                            alert(json.msg)
                        }
                    })
                }else {
                    alert('信息不对，请重新输入')
                }
            })
        }
    }
})()
CheckIpn.init()



//生成字母+数字验证码
//生成验证码
function checkCode(n){
    var n = n || 6
    var str = ''
    while(str.length < n){
        var num = parseInt(47 + Math.random()*(123-47))
        if((num > 47 && num < 58) || (num > 64 && num < 91) || (num > 96 && num < 123)){
            str += String.fromCharCode(num)
        }
    }
    return str
}
//判断验证码
function checkStr(n){
    var newStr = checkCode(n)
    for(var i = 0; i < newStr.length; i++){
        if(!(isNaN(Number(newStr[i])))){
            return newStr
        }
    }
    return checkStr(n)
}