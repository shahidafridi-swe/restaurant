const slideContainer = document.querySelector(".slider-container")
// console.log(slideContainer)
const sliders = document.querySelectorAll(".dishes-slider")

// let child = sliders[0];
// let remove_child = slideContainer.removeChild(child);
// slideContainer.appendChild(remove_child)
// console.log(slideContainer)

let width = screen.width;
console.log("w->",width)




let margin1 
let margin2 

if (width > 768){
    margin1 = -12.5
    margin2 = 12.5
}
else if(width > 576){
    margin1 = -25
    margin2 = 125
}
else{
    margin1 = -0
    margin2 = 400
}



const sliderFunc = () => {
    let slider1 = sliders[0];
    let slider2= sliders[1];
    sliders[0].style.transition="0.5s";
    sliders[1].style.transition="0.5s";
    slider1.style.transform = `translateX(${margin1}%)`;
    slider2.style.transform = `translateX(${margin2}%)`;
    
    if (width > 768){
        margin1 -= 25
        margin2 -= 25
    }
    else if(width > 576){
        margin1 -= 50
        margin2 -= 50
    }
    else{
        margin1 -= 100
        margin2 -= 100
    }
}

sliders[0].addEventListener("transitionend", () => {
    console.log("margin", margin1)
    if(margin1 == -162.5 || margin1 == -325 || margin1 == -600){
        if (width > 768){
            margin1 = -12.5
            margin2 = 12.5
        }
        else if(width > 576){
            margin1 = -25
            margin2 = 125
        }
        else{
            margin1 = -0
            margin2 = 400
        }
        
        
        sliders[0].style.transition="all 0s";
        sliders[1].style.transition="all 0s";
        sliders[0].style.transform = `translateX(${margin1}%)`;
        sliders[1].style.transform = `translateX(${margin2}%)`;
        if (width > 768){
            margin1 -= 25
            margin2 -= 25
        }
        else if(width > 576){
            margin1 -= 50
            margin2 -= 50
        }
        else{
            margin1 -= 100
            margin2 -= 100
        }
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


