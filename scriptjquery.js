$(function(){
    let tabPhotos=[]
    $.ajax('https://jsonplaceholder.typicode.com/photos',{
    data:{},
    dataType:"json",
    timeout:5000,
    success:function(data,status,xhr)
    {
        console.log(data)
        tabPhotos=data
        data.map((photo)=>{
            $('#footer').append('<img src="'+photo.thumbnailUrl+'" alt="" class="p_photo" rel="'+photo.id+'">')     
        })
       
    },
    error:function(xhr,status,msg)
    {
        console.log(xhr)
    }
    })
    
    
    
  
    let position=0;
    console.log(tabPhotos)
   


    //////////////////
    $('#footer').on('click','.p_photo',function(){
        let self=$(this)
        position=$(this).attr('rel')
        $('#g_photo').slideUp(500,function(){
             $('#g_photo').attr('src',self.attr('src'))
             $(this).slideDown(500,function(){
             })
        })
    })

    /////////////////
    $('#g_photo').click(function(){
        $('#gris').fadeIn(500,function(){
            $(this).css("display","flex")
            $('#pg_photo').attr('src',$('#g_photo').attr('src'))
            $('#pg_photo').slideDown(500,function(){
                $('.fa-arrow-left').animate({
                    left:"5%",
                    opacity:"1"
                })
                $('.fa-arrow-right').animate({
                    right:"5%",
                    opacity:"1"
                })
                $('.fa-xmark').animate({
                    right:"5%",
                    opacity:"1"
                })
            })
        })
    })

    ////////////////
    $('.fa-xmark').click(function(){
        $('.fa-arrow-left').animate({
            left:"50%",
            opacity:"0"
        })
        $('.fa-arrow-right').animate({
            right:"50%",
            opacity:"0"
        })
        $('.fa-xmark').animate({
            right:"50%",
            opacity:"0"
        })
        $('#pg_photo').slideUp(500,function(){
            $('#gris').fadeOut(500)
        })
    })

    /////////////
    $('.fa-arrow-left').click(function(){
        position--
        if(position<0)
        {
            position=tabPhotos.length-1
        }
       console.log(tabPhotos[position])
       $('#pg_photo').fadeOut(500,function(){
         $(this).attr('src',tabPhotos[position].url )
         $(this).fadeIn(500)
       })
       
    })


    $('.fa-arrow-right').click(function(){
        position++
        if(position>=tabPhotos.length)
        {
            position=0
        }
       console.log(tabPhotos[position])
       $('#pg_photo').fadeOut(500,function(){
        $(this).attr('src',tabPhotos[position].url)
        $(this).fadeIn(500)
      })
    })
})