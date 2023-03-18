const popup = document.querySelector(".popup");
const cancel = document.querySelector("#cancel");
const chapters = document.querySelectorAll(".chapter");
const documentiFrame  = document.querySelector("#document");
const popuptitle = document.querySelector("#popuptitle");


const osfiles = {
    "chap1" : "https://drive.google.com/file/d/1RV_pGkbolAqaHIAnQeKsMpdJX59ltsN2/preview",
    "chap2" : "https://drive.google.com/file/d/1ov4xL9iLHYU9lAe3kAKKuV2RVn5So7p9/preview",
    "chap3" : "https://drive.google.com/file/d/1lv6Fc8gMORghS9_NRNhZEWF984YGyELT/preview",
    "chap4" : "https://drive.google.com/file/d/15dOeIlEATa7soruqN1juuzAJYLrA0g3C/preview",
    "chap5" : "https://drive.google.com/file/d/16-eVJlpuqzIo1oBIWH_K1iC8K0fHJeTp/preview",
    "chap6" : "https://drive.google.com/file/d/160VIyG0e_ISNDtmGimXYo-osT0xYdwlL/preview"
}

const cnfiles = {
    "chap1" : "https://drive.google.com/file/d/1Q4v14i_kzUdIQZ8OZqgmN2y8gAYzXMuI/preview",
    "chap2" : "https://drive.google.com/file/d/1iknvus-f08_trRQO_2XaOCe-8tjOly_B/preview",
    "chap3" : "https://drive.google.com/file/d/184RUAhfn9tMOlg83o0iq2CmSnQrmcI40/preview",
    "chap4" : "https://drive.google.com/file/d/1iyT3fMJWfUKwGKdE3S0QHv_GhA0LZKs8/preview",
    "chap5" : "https://drive.google.com/file/d/1iz9x8gG-ZvZz15b82IgMqiWmx4_3q4PR/preview",
}



chapters.forEach((items)=>{
    items.addEventListener("click",()=>{
        popup.style.display = "flex";
        popuptitle.innerHTML = items.innerHTML;

        console.log(window.location.pathname)
        if(window.location.pathname === "/os.html") {

            documentiFrame.setAttribute("src",osfiles[items.id]);
            console.log("os");

        } else if (window.location.pathname === "/cn.html") {
            
            documentiFrame.setAttribute("src",cnfiles[items.id]);
            console.log("cn");

        }
    })
})


cancel.addEventListener("click",()=>{
    popup.style.display = "none";
})