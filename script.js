let share = document.querySelector("#share"),
    label = document.querySelector(".section-3"),
    show = document.querySelector(".section-4"),
    hide = document.querySelector(".section-2");

share.addEventListener("mouseover", function () {

    //desktop design
    label.style.visibility = "visible";
    
    //mobile design
    show.style.display = "block";
    hide.style.display = "none";
});

share.addEventListener("mouseout", function () {

    //desktop design
    label.style.visibility = "hidden";
    
    //mobile design
    show.style.display = "none";
    hide.style.display = "block";
});
