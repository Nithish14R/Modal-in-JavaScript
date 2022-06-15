let open_btn=document.querySelector('.open-btn');

open_btn.addEventListener('click', ()=>{
    document.querySelector('.parent').style.visibility = "visible";
    document.querySelector('.parent').style.zIndex = "10";
    document.querySelector('.open-modal').style.visibility = "hidden";
});

let close_btn=document.querySelector('.close-btn');

close_btn.addEventListener('click', ()=>{
    document.querySelector('.parent').style.visibility = "hidden";
    document.querySelector('.parent').style.zIndex = "-10";
    document.querySelector('.open-modal').style.visibility = "visible";
})