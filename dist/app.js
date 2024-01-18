var addbtn = document.getElementById("add");
var subbtn = document.getElementById("sub");
var counting = document.getElementById("number");


addbtn.addEventListener("click", function () {
    if (counting.innerHTML < 20)
        counting.innerHTML = addzero(+counting.innerHTML + 1);
})
subbtn.addEventListener("click", function () {
    if (counting.innerHTML > 1) {
        counting.innerHTML = addzero(counting.innerHTML - 1);
    }

})
function addzero(num) {
    return num < 10 ? "0" + num : num;
}
let imgs = document.getElementById("images");
let change1 = document.getElementById("change1");
let change2 = document.getElementById("change2");
let change3 = document.getElementById("change3");
let change4 = document.getElementById("change4");
let change5 = document.getElementById("change5");
let change6 = document.getElementById("change6");
let change7 = document.getElementById("change7");
let change8 = document.getElementById("change8");
let change9 = document.getElementById("change9");
let change10 = document.getElementById("change10");
let change11 = document.getElementById("change11");
let change12 = document.getElementById("change12");
let change13 = document.getElementById("change13");
let change14 = document.getElementById("change14");
let change15 = document.getElementById("change15");
let change16 = document.getElementById("change16");
let change17 = document.getElementById("change17");
let change18 = document.getElementById("change18");
let change19 = document.getElementById("change19");
let change20 = document.getElementById("change20");


change1.addEventListener("click", () => {

    imgs.src =
        "https://i.ibb.co/wSfkS5y/Hugh-left-big-img.png";

});
change2.addEventListener("click", () => {
    imgs.src =
        "https://i.ibb.co/gtWwVLm/Rambo-left-big-img-2.png";
});
change3.addEventListener("click", () => {
    imgs.src =
        "https://i.ibb.co/YXbrf7d/big-img-3.png";
});
change4.addEventListener("click", () => {
    imgs.src =
        "https://i.ibb.co/17mCDXR/big-img-4.png";
});
change5.addEventListener("click", () => {
    imgs.src =
        "https://i.ibb.co/ygWVdYG/big-img-5.png";

});
change6.addEventListener("click", () => {
    imgs.src =
        "https://i.ibb.co/RQgJvBp/right-side-big-1.png";

});
change7.addEventListener("click", () => {
    imgs.src =
        "https://i.ibb.co/XxY0bXJ/right-side-big-2.png";

});
change8.addEventListener("click", () => {
    imgs.src =
        "https://i.ibb.co/wzxmH82/right-side-big-3.png";

});
change9.addEventListener("click", () => {
    imgs.src =
        "https://i.ibb.co/kc3CML8/right-side-4-big.png";

});
change10.addEventListener("click", () => {
    imgs.src =
        "https://i.ibb.co/wSfkS5y/Hugh-left-big-img.png";

});

change11.addEventListener("click", () => {

    imgs.src =
        "https://i.ibb.co/wSfkS5y/Hugh-left-big-img.png";

});
change12.addEventListener("click", () => {
    imgs.src =
        "https://i.ibb.co/gtWwVLm/Rambo-left-big-img-2.png";
});
change13.addEventListener("click", () => {
    imgs.src =
        "https://i.ibb.co/YXbrf7d/big-img-3.png";
});
change14.addEventListener("click", () => {
    imgs.src =
        "https://i.ibb.co/17mCDXR/big-img-4.png";
});
change15.addEventListener("click", () => {
    imgs.src =
        "https://i.ibb.co/ygWVdYG/big-img-5.png";

});
change16.addEventListener("click", () => {
    imgs.src =
        "https://i.ibb.co/RQgJvBp/right-side-big-1.png";

});
change17.addEventListener("click", () => {
    imgs.src =
        "https://i.ibb.co/XxY0bXJ/right-side-big-2.png";

});
change18.addEventListener("click", () => {
    imgs.src =
        "https://i.ibb.co/wzxmH82/right-side-big-3.png";

});
change19.addEventListener("click", () => {
    imgs.src =
        "https://i.ibb.co/kc3CML8/right-side-4-big.png";

});
change20.addEventListener("click", () => {
    imgs.src =
        "https://i.ibb.co/wSfkS5y/Hugh-left-big-img.png";

});

$('.slick').slick({
    dots: false,
    infinite: true,
    arrows: false,
    autoplay: true,
    cssEase: 'linear',
    speedAutoplay: null,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
        {
            breakpoint: 9999,
            settings: "unslick"
        },
        {
            breakpoint: 1445,
            settings: {
                slidesToShow: 4,
                slidesToScroll: 1,
            }
        },
        {
            breakpoint: 1200,
            settings: {
                slidesToShow: 5,
                slidesToScroll: 1,
            }
        },
        {
            breakpoint: 990,
            settings: {
                slidesToShow: 4,
                slidesToScroll: 1,
            }
        },
        {
            breakpoint: 820,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
            }
        },
        {
            breakpoint: 620,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
            }
        },
        {
            breakpoint: 400,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
            }
        }

    ]
});

// document.body.querySelector(".change1").click();
//     const tabshow = document.querySelectorAll('.tabshow')
//     const tabbtn = document.querySelectorAll('.tabs button')
//     tabshow.forEach(content => {
//         content.style.display = 'none'
//     })
//     const selecttoshow = document.getElementById(tabs)
//     selecttoshow.style.display = 'block'

// }
// navtabs('tab1')