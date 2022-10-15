var countryButton=document.querySelector(".countryButton")
var countrylist=document.querySelector(".country-list")
var countryButton_i=document.querySelector(".countryButton>i")




var flag=0;
countryButton.addEventListener("click",function()
{
    if(flag===0){
        countrylist.style.display= "initial";
        countryButton_i.style.transform="rotate(180deg)";
        // countryButton_i.style.transform="translateX(1000%)";
        flag=1;
    }else{
        countrylist.style.display= "none";
        countryButton_i.style.transform="rotate(0deg)";
        flag=0;
    }
    
})

var arrowall=document.querySelector(".arrowall");

arrowall.addEventListener("click",function(){
    window.scrollTo({top: 0,behavior:'smooth'});

})

var container1_nav1_menutop=document.querySelector(".container1>.nav1>.menutop");
var menubar_list_right=document.querySelector(".menubar_list_right");


container1_nav1_menutop.addEventListener("click",function(){
        menubar_list_right.style.transform="translateX(0%)"; 

})

var menubar_list_right_navbar_i=document.querySelector(".menubar_list_right_navbar>i");

menubar_list_right_navbar_i.addEventListener("click",function(){
     menubar_list_right.style.transform="translateX(100%)";  
})

