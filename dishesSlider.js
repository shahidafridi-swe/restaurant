const slideContainer = document.querySelector(".slider-container")
// console.log(slideContainer)
const sliders = document.querySelectorAll(".dishes-slider")

// let child = sliders[0];
// let remove_child = slideContainer.removeChild(child);
// slideContainer.appendChild(remove_child)
// console.log(slideContainer)

let margin1 = -150
let margin2 = 305


const sliderFunc = () => {
    let slider1 = sliders[0];
    let slider2= sliders[1];
    sliders[0].style.transition="0.5s";
    sliders[1].style.transition="0.5s";
    slider1.style.transform = `translateX(${margin1}px)`;
    slider2.style.transform = `translateX(${margin2}px)`;
    margin1 -= 330
    margin2 -= 330
    
}

sliders[0].addEventListener("transitionend", () => {
    if(margin1 < -1800){
        margin1 = -150
        margin2 = 305
        sliders[0].style.transition="all 0s";
        sliders[1].style.transition="all 0s";
        sliders[0].style.transform = `translateX(${margin1}px)`;
        sliders[1].style.transform = `translateX(${margin2}px)`;
        margin1 -= 330
        margin2 -= 330
       
    }
    
})


const sliderInterval = setInterval(()=>{
    sliderFunc();

},2000)







// const dishesSlider = document.getElementById("dishes-slider")
// let sliderImages = document.querySelectorAll(".slider-image")

// let counter = 0
// const slider = () => {
//     sliderImages = document.querySelectorAll(".slider-image");
//     image1= sliderImages[0]
//     image2= sliderImages[1]
//     image3= sliderImages[2]
//     image4= sliderImages[3]
//     image5= sliderImages[4]

//     dishesSlider.style.transform = `translateX(-${counter*20}%)`;
//     child = sliderImages[0];
//     let remove_child = dishesSlider.removeChild(child);
//     dishesSlider.appendChild(remove_child)
    
//     counter++;
// }

// const sliderInterval = setInterval(()=>{
//     slider();

// },3000)


