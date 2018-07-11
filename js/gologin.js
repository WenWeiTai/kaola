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
                }
            })
            $('#checkpsw').on('blur',function () {
                var pswVal = this.value
                if(reg_psw.test(pswVal)){
                    $('.warn').html('密码通过').css('color','green')
                }else{
                    $('.warn').html('密码8~12位,字母开头').css('color','red')
                }
            })
            $('#pswAgain').on('blur',function () {
                var val = this.value
                var val_psw = $('#checkpsw').val()
                if(val == val_psw && val != ''){
                    $('.warn').html('密码通过').css('color','green')
                }else {
                    $('.warn').html('密码不一致，请重新输入').css('color','red')    
                }
            })
            $('#bgCol').on('click',function(){
                if(reg_phone.test($('#phonecheck').val()) == true && reg_psw.test($('#checkpsw').val()) == true && $('#pswAgain').val() == $('#checkpsw').val()){
                    var params = {
                        phone : $('#phonecheck').val(),
                        password : $('#checkpsw').val()
                    }
                    $.post('../php/login.php',params,function(json){
                        json = JSON.parse(json)
                        if(json.code == 200){
                            console.log(json)
                        }else{
                            alert(111)
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