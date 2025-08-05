const hrEle = document.querySelector(".hr")
const minEle = document.querySelector(".min")
const secEle = document.querySelector(".sec")
setInterval(() => {
    let date = new Date()
    hr = date.getHours() % 12;
    min = date.getMinutes();
    sec = date.getSeconds();

    hrEle.style.transform = `rotateZ(${hr*30 + min*0.5}deg)`
    minEle.style.transform = `rotateZ(${min*6}deg)`
    secEle.style.transform = `rotateZ(${sec*6}deg)`

})