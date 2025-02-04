const scrollers = document.querySelectorAll(".scroller");

if(!window.matchMedia("(prefers-reduced-motion: reduce)").matches){
    addAnimation();

}

function addAnimation() {
    scrollers.forEach((scroller) => {
        scroller.setAttribute("data-animated", true);

        const scrollerInner = scroller.querySelector('.scroller-inner')
        const scrollerContent = Array.from(scrollerInner.children);
        console.log(scrollerContent)

        scrollerContent.forEach((item)=>{
            const duplicatedItem = item.cloneNode(true);
            console.log(duplicatedItem);
            duplicatedItem.setAttribute("aria-hidden", true);
            console.log(duplicatedItem);
            scrollerInner.appendChild(duplicatedItem);
        })
    })
}


const reviewNav1 = document.getElementById("review-nav-1");
const reviewNav2 = document.getElementById("review-nav-2");
const reviewNav3 = document.getElementById("review-nav-3");
const reviewSliderDiv = document.getElementById("review-slider")

reviewNav1.addEventListener('click', ()=>{reviewSlider(1)});
reviewNav2.addEventListener('click', ()=>{reviewSlider(2)});
reviewNav3.addEventListener('click', ()=>{reviewSlider(3)});

function reviewSlider(n){
    // document.getElementById("review-nav-1-img").style.filter=`grayscale(100%)`
    // document.getElementById("review-nav-2-img").style.filter=`grayscale(100%)`
    // document.getElementById("review-nav-3-img").style.filter=`grayscale(100%)`
    if ( document.querySelector(".review-nav-active" ) != null ){
        document.querySelector(".review-nav-active").classList.remove("review-nav-active")
    }

    if (n===1){
        reviewSliderDiv.style.marginLeft=`0%`;
        document.getElementById("review-nav-1-img").classList.add("review-nav-active")
    }
    if(n===2){
        reviewSliderDiv.style.marginLeft=`-100%`;
        document.getElementById("review-nav-2-img").classList.add("review-nav-active")
    }
    if(n===3){
        reviewSliderDiv.style.marginLeft=`-200%`;
        document.getElementById("review-nav-3-img").classList.add("review-nav-active")

    }
    
}