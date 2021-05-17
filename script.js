//create the button
let btn = document.createElement('button');
let i = document.createElement('i');
btn.setAttribute('class', 'top');
i.setAttribute('class', 'fa fa-arrow-up');
console.log(btn);

btn.appendChild(i);
document.body.appendChild(btn);

window.addEventListener('scroll', ()=>{
    if(document.documentElement.scrollTop > 20){
        btn.style.display = "block";
    }else{
        btn.style.display = "none";
    }

    let scrl= document.querySelector('.scrl_div');
    let persent = document.querySelector('.persent');
    let totalHeight = document.body.scrollHeight  - window.innerHeight;
    let pres = Math.floor(window.scrollY/totalHeight * 100);
    persent.innerHTML = pres + "%";
    scrl.style.width = pres + "%";
});


btn.addEventListener('click', ()=>{
    document.documentElement.scrollTop = 0;
})


let loader = document.querySelector('.loader');
function func(){
    setTimeout(() => {
        loader.style.display = "none";
    }, 1600);
};