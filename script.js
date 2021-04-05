let home_sec_div_1 = document.querySelector(".home-sec-div-1");
let home_sec_div_2 = document.querySelector(".home-sec-div-2");
let hello = document.querySelector(".hello");
let div_1_content = document.querySelector(".home-sec-div-1-content");
let div_2_content = document.querySelector(".home-sec-div-2-content");
let bg_animation_div_1 = document.querySelector(".bg-bubbles-div-1");
let bg_animation_div_2 = document.querySelector(".bg-bubbles-div-2");
let nav = document.querySelector('input');
let change = false;

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


function navChange(){
   if(change==false){
      hello.style.display="none";
      change = !change;
   }else{
      hello.style.display="block";
      change = !change;
   }
}
