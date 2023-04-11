let p_photos=document.getElementsByClassName('p_photo')
let g_photo=document.querySelector('#g_photo')
let gris=document.querySelector('#gris')
let pg_photo=document.querySelector('#pg_photo')
let arrow_left=document.querySelector('.fa-arrow-left')
let arrow_right=document.querySelector('.fa-arrow-right')
let btn_close=document.querySelector('.fa-xmark')
let indice=0


for(photo of p_photos)
{
    photo.addEventListener('click',function(){
        // console.log(this)
        g_photo.setAttribute('src',this.getAttribute('src'))
        indice=this.getAttribute('rel')
    })
}
g_photo.addEventListener('click',function(){
    gris.style.display="flex"
    pg_photo.src=this.src
    document.documentElement.style.overflow='hidden';
    document.body.scroll="no";
})
arrow_right.addEventListener('click',()=>{
    indice++
    if(indice>=p_photos.length){
        indice=0
    }
    // console.log( p_photos[indice])
    pg_photo.setAttribute('src',p_photos[indice].getAttribute('src'))
})
arrow_left.addEventListener('click',()=>{
    indice--
    indice=indice<=0 ? p_photos.length-1 :indice
    pg_photo.setAttribute('src',p_photos[indice].getAttribute('src'))
})
btn_close.addEventListener('click',function(){
    gris.style.display="none"
    document.documentElement.style.overflow='auto';
    document.body.scroll="yes";
})