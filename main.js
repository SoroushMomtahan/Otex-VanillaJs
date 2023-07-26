let social_media_divs = document.querySelectorAll(".social-media div");
let otex_logo = document.querySelector(".otex-logo");
otex_logo.style.transform = "translateY(250px)"

const  co = [1];
co.push()
function showSocialMedia() {
    social_media_divs.forEach((item)=>{
        item.style.transform = "translateX(0)";
    });
}
function hideSocialMedia() {
    social_media_divs.forEach((item)=>{
        item.style.transform = "translateX(1000px)";
    });
}
function hideSocialMedia1() {
    social_media_divs.forEach((item)=>{
        item.style.transform = "translateY(-1000px)";
    });
}

document.addEventListener("scroll", ()=>{
    if (window.pageYOffset > 160){
        hideSocialMedia1();
        otex_logo.style.transform = "translateY(-250px)"
    }else {
        showSocialMedia();
        otex_logo.style.transform = "translateY(250px)"
    }
})




