window.addEventListener("load",function(){

    let rem= 20

    const station7 = new Swiper(".station7",{
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