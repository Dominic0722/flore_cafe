window.addEventListener("load",function(){

    let rem= 20

    const station5 = new Swiper(".station5",{
        slidesPerView: 1,
        spaceBetween: 14,
        loop:true,
        breakpoints:{
            768:{
                slidesPerView: 2.2,
                spaceBetween: 18,
            },
            1280:{
                slidesPerView: 2.5,
                spaceBetween: 18,
            },
            1400:{
                slidesPerView: 4,
                spaceBetween: 20,
            }
        },
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
          },
    })

})