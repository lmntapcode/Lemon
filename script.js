const next = document.querySelector('.next')
const prev = document.querySelector('.prev')
const comment = document.querySelector('#list-comment')
const commentItem = document.querySelector('#list-comment .item')
var translateY = 0
var count = commentItem.length

next.addEventListener('click',function(event){
 event.preventDefault()
 if(count == 1){
    //xem het comment
    return false
 }
 translateY += -400
 comment.style.transform = `translateY(${translateY}px)`
 count--
})

prev.addEventListener('click',function(event){
    event.preventDefault()
    if(count == 3){
       //xem het comment
       return false
    }
    translateY += 400
    comment.style.transform = `translateY(${translateY}px)`
    count++
   })



   const continune = document.querySelector('.continue')
   const back = document.querySelector('.back')
   const bannertong = document.querySelector('#bannertong')
   const banner = document.querySelectorAll('#bannertong .banner')
   var translateX = 0
   var count = banner.length
   
   continune.addEventListener('click',function(event){
       event.preventDefault()
       if(count == 1){return false}
       translateX += -100
       bannertong.style.transform = `translateX(${translateX}vw)`
       count--
       })
   
   back.addEventListener('click',function(event){
       event.preventDefault()
       if(count == 2){return false}
       translateX += 100
       bannertong.style.transform = `translateX(${translateX}vw)`
       count++
       })



       const hinh1 = document.querySelector('.hinh1')
       const hinh2 = document.querySelector('.hinh2')
       const hinh3 = document.querySelector('.hinh3')
       const contenta1 = document.querySelector('.hinh1 a')
       const contenta2 = document.querySelector('.hinh2 a')
       const contenta3 = document.querySelector('.hinh3 a')
       const contentp1 = document.querySelector('.hinh1 p')
       const contentp2 = document.querySelector('.hinh2 p')
       const contentp3 = document.querySelector('.hinh3 p')

       
       
         contenta1.addEventListener('mouseover',function(event){
           hinh1.style.height = `85vh`
           hinh1.style.width = `100vh`
           hinh1.style.paddingTop = `30vh`
           contentp1.style.color = `#f5f5f5`
           })
         hinh1.addEventListener('mouseout',function(event){
            hinh1.style.height = `500px`
            hinh1.style.width = `130px`
            hinh1.style.paddingTop = `22.5vh`
            contentp1.style.color = `transparent`
            })

         contenta2.addEventListener('mouseover',function(event){
                hinh2.style.height = `85vh`
                hinh2.style.width = `100vh`
                hinh2.style.paddingTop = `30vh`
                contentp2.style.color = `#f5f5f5`
                })
         hinh2.addEventListener('mouseout',function(event){
                 hinh2.style.height = `500px`
                 hinh2.style.width = `130px`
                 hinh2.style.paddingTop = `22.5vh`
                 contentp2.style.color = `transparent`
                 })
         contenta3.addEventListener('mouseover',function(event){
                    hinh3.style.height = `85vh`
                    hinh3.style.width = `100vh`
                    hinh3.style.paddingTop = `30vh`
                    hinh3.style.backgroundPosition = `90px`
                    contentp3.style.color = `#f5f5f5`
                    })
         hinh3.addEventListener('mouseout',function(event){
                     hinh3.style.height = `500px`
                     hinh3.style.width = `130px`
                     hinh3.style.paddingTop = `22.5vh`
                     hinh3.style.backgroundPosition = `-80px`
                     contentp3.style.color = `transparent`
                     })            