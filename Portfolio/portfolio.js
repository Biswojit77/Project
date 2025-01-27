//nav bar

let navH1=document.querySelector(".nav-h1");
let navOption=document.querySelector(".nav-option");
let navBtn = document.querySelector(".nav-button");
let body=document.querySelector("body");

navH1.addEventListener("click",function(){
    body.style.backgroundColor="black";
    navH1.style.display="none";
    navOption.style.display="none";
    navBtn.style.display="none";
    body.innerHTML=`<h1>PORTFOLIO</H1>`;
    body.style.color="palegreen";
    body.style.display="flex";
    body.style.alignItems="center";
    body.style.justifyContent="center";
    body.style.fontSize="80px";
})

//herosection part

let herosecRightImage= document.querySelector(".herosecright-image-myimage");
let originalSrc="photo3.png";
let changeSrc="photo2.png";

herosecRightImage.addEventListener("click",function(){
    if(herosecRightImage.src.includes(originalSrc)){
        herosecRightImage.src=changeSrc;
    }else{
        herosecRightImage.src=originalSrc;
    }
})
