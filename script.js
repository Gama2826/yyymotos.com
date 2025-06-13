var swiper = new Swiper(".mySwiper-1", {
    slidesPerview:1,
    spaceBetween: 30,
    loop:true,
    pagination: {
        el:".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl:".swiper-button-next",
        prevEl:".swiper-button-prev",
    },
    // Slide automático
    autoplay: {
        delay: 3000, // Cambia de slide cada 3 segundos
        disableOnInteraction: false, // Sigue el autoplay aunque el usuario interactúe
    }
});

var swiper = new Swiper(".mySwiper-2", {
    slidesPerview:3,
    spaceBetween: 20,
    loop:true,
    loopFillGroupWithBlank:true,
    navigation: {
        nextEl:".swiper-button-next",
        prevEl:".swiper-button-prev",
    },
    breakpoints:{
        0:{
            slidesPerview:1,
        },
        520:{
            slidesPerview:2,
        },
        950:{
            slidesPerview:3,
        },
    }
});

let tabInputs = document.querySelectorAll(".tabInput");

tabInputs.forEach(function(input) {

    input.addEventListener("change", function() {
        let id = input.ariaValueMax;
        let thisSwiper = document.getElementById("swiper" + id);
        thisSwiper.swiper.update();
    })

})


// Funcionamiento de las diferentes secciones de productos
function E(selector, parent) {
    if (selector instanceof HTMLElement)
        return selector;

    return (parent || document).querySelectorAll(selector);
}

function hasClass(element, className) {
    return element.classList.contains(className);
}

function radioClass(element, className) {
    E("." + className).forEach((elem) =>
    elem.classList.remove(className));
    element.classList.toggle(className);
}

function tabs(nav) {
    let navElem = E(nav)[0];

    navElem.addEventListener("click", (e) => {
        let target = e.target;

        if(hasClass(target, "tab"))
            radioClass(target, "active");

        let linkedTab = E("." + target.id)[0];

        radioClass(linkedTab, "visible");
    

    });

    let active = E(".tab.active")[0];
    if (active) {
            radioClass(E("."+active.id)[0], "visible");
    }   

}

tabs(".menu-nav")



// Funcionamiento del boton cargar mas de la seccion 1
let loadMoreBtn1 = document.querySelector("#load-more-1");
let currentItem1 = 4;

loadMoreBtn1.onclick = () => {
    let boxes = [...document.querySelectorAll(".box-container-1 .box-1")];
    for (var i = currentItem1; i < currentItem1 + 4; i++) {
        boxes[i].style.display = "inline-block";
    }
    currentItem1 += 4;
    if(currentItem1 >= boxes.length) {
        loadMoreBtn1.style.display = "none";
    }
}


// Funcionamiento del boton cargar mas de la seccion 2
let loadMoreBtn2 = document.querySelector("#load-more-2");
let currentItem2 = 4;

loadMoreBtn2.onclick = () => {
    let boxes = [...document.querySelectorAll(".box-container-2 .box-2")];
    for (var i = currentItem2; i < currentItem2 + 4; i++) {
        boxes[i].style.display = "inline-block";
    }
    currentItem2 += 4;
    if(currentItem2 >= boxes.length) {
        loadMoreBtn2.style.display = "none";
    }
}


// Funcionamiento del boton cargar mas de la seccion 3
let loadMoreBtn3 = document.querySelector("#load-more-3");
let currentItem3 = 4;

loadMoreBtn3.onclick = () => {
    let boxes = [...document.querySelectorAll(".box-container-3 .box-3")];
    for (var i = currentItem3; i < currentItem3 + 4; i++) {
        boxes[i].style.display = "inline-block";
    }
    currentItem3 += 4;
    if(currentItem3 >= boxes.length) {
        loadMoreBtn3.style.display = "none";
    }
}


// Funcionamiento del boton cargar mas de la seccion 4
let loadMoreBtn4 = document.querySelector("#load-more-4");
let currentItem4 = 4;

loadMoreBtn4.onclick = () => {
    let boxes = [...document.querySelectorAll(".box-container-4 .box-4")];
    for (var i = currentItem4; i < currentItem4 + 4; i++) {
        boxes[i].style.display = "inline-block";
    }
    currentItem4 += 4;
    if(currentItem4 >= boxes.length) {
        loadMoreBtn4.style.display = "none";
    }
}