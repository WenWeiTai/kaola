$('.bodyTopContBox_l').on('click', '.ljqg',function(){
    var id = $(this).attr('data-id')
    location.href = `details.html?id=${id}`
})
