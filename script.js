let home_sec_div_1 = document.querySelector(".home-sec-div-1");
let home_sec_div_2 = document.querySelector(".home-sec-div-2");
let hello = document.querySelector(".hello");
let div_1_content = document.querySelector(".home-sec-div-1-content");
let div_2_content = document.querySelector(".home-sec-div-2-content");
let bg_animation_div_1 = document.querySelector(".bg-bubbles-div-1");
let bg_animation_div_2 = document.querySelector(".bg-bubbles-div-2");
let card1 = document.querySelector(".card-1");
let card1_btn = document.querySelector(".card-1-btn");
let card2 = document.querySelector(".card-2");
let card2_btn = document.querySelector(".card-2-btn");


function over1(){
   home_sec_div_1.classList.add("width_inc_div1");
   home_sec_div_2.classList.add("width_dec");
   div_2_content.style.opacity=".3";
   hello.style.display="none";
   bg_animation_div_1.style.display="block";
}

function out1(){
   home_sec_div_1.classList.remove("width_inc_div1");
   home_sec_div_2.classList.remove("width_dec");
   div_2_content.style.opacity="1";
   hello.style.display="block";
   bg_animation_div_1.style.display="none";
}

function over2(){
   home_sec_div_2.classList.add("width_inc_div2");
   home_sec_div_1.classList.add("width_dec");
   div_1_content.style.opacity="0.2";
   hello.style.display="none";
   bg_animation_div_2.style.display="block";
}
function out2(){
   home_sec_div_2.classList.remove("width_inc_div2");
   home_sec_div_1.classList.remove("width_dec");
   hello.style.display="block";
   div_1_content.style.opacity="1";
   bg_animation_div_2.style.display="none";   
}

function card1Over(){
   card1.classList.add("card-animation-js");
   card1_btn.style.display="unset";
}

function card1Out(){
   card1.classList.remove("card-animation-js");
   card1_btn.style.display="none";
}

function card2Over(){
   card2.classList.add("card-animation-js");
   card2_btn.style.display="unset";
}

function card2Out(){
   card2.classList.remove("card-animation-js");
   card2_btn.style.display="none";
}