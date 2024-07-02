// const scroll = new LocomotiveScroll({
//     el: document.querySelector('#main'),
//     smooth: true
// });
const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true,
    smoothMobile: true, // if you want smooth scrolling on mobile devices
    multiplier: 0.5, // reduce the scrolling speed
    lerp: 0.1 // easing amount, a lower value means slower interpolation
});
var a= document.querySelectorAll("#elem1")
console.log(a)
var elemc= document.querySelector("#elem-container")
var fixed= document.querySelector("#fixed-image")
elemc.addEventListener("mouseenter",function(){
   fixed.style.display="block"
})
elemc.addEventListener("mouseleave",function(){
    fixed.style.display="none"
 })
//  var elem1= document.querySelector("#elem1")
//  elem1.addEventListener("mouseenter",function(){
//    var image= elem1.getAttribute("data-image")
//    console.log(image)
//    fixed.style.backgroundImage=`url(${image})`
//  })
//  var elem2= document.querySelector("#elem2")
//  elem2.addEventListener("mouseenter",function(){
//    var image= elem2.getAttribute("data-image")
//    console.log(image)
//    fixed.style.backgroundImage=`url(${image})`
//  })
//  var elem3= document.querySelector("#elem3")
//  elem3.addEventListener("mouseenter",function(){
//    var image= elem3.getAttribute("data-image")
//    console.log(image)
//    fixed.style.backgroundImage=`url(${image})`
//  })
//  var elem4= document.querySelector("#elem4")
//  elem4.addEventListener("mouseenter",function(){
//    var image= elem4.getAttribute("data-image")
//    console.log(image)
//    fixed.style.backgroundImage=`url(${image})`
//  })
//  var elem5= document.querySelector("#elem5")
//  elem5.addEventListener("mouseenter",function(){
//    var image= elem5.getAttribute("data-image")
//    console.log(image)
//    fixed.style.backgroundImage=`url(${image})`
//  })
let vid = document.getElementById("vid");
vid.playbackRate = 3;
var elems= document.querySelectorAll(".elem")
elems.forEach(function(e){
e.addEventListener("mouseenter",function(){
    var image= e.getAttribute("data-image")
    fixed.style.backgroundImage = `url(${image})`
})})
function swiperAnimation(){
var swiper = new Swiper(".mySwiper", {
    slidesPerView: "auto",
    centeredSlides: true,
    spaceBetween: 30,
   
  });
}
swiperAnimation()
document.querySelector('.c1:nth-child(2)').addEventListener('click', function() {
    const imageContainer = document.getElementById('right-div');
    const currentImage = document.getElementById('imu');
    
    const newImage = document.createElement('img');
    newImage.src = 'images/air1.jpg'; 
    newImage.alt = 'Image';
    newImage.classList.add('fade-in');
    imageContainer.appendChild(newImage);
    
    // Ensure the new image is initially hidden
    // newImage.style.opacity = 0;
    newImage.style.transform = 'scale(0.95)';
    
    // Trigger a reflow to apply the initial styles
    newImage.offsetHeight;
    
    // Add the show class after the reflow to start the transition
    newImage.classList.add('show');
    
    // Add the fade-out class to the current image
    currentImage.classList.add('fade-out');
    
    // Remove the current image after the transition
    currentImage.addEventListener('transitionend', function() {
        imageContainer.removeChild(currentImage);
        newImage.id = 'imu'; // Update the ID of the new image to match the current one
    }, { once: true });
});
document.querySelector('.c1:nth-child(3)').addEventListener('click', function() {
    const imageContainer = document.getElementById('right-div');
    const currentImage = document.getElementById('imu');
    
    const newImage = document.createElement('img');
    newImage.src = 'images/train.jpg'; 
    newImage.alt = 'Image';
    newImage.classList.add('fade-in');
    imageContainer.appendChild(newImage);
    
    // Ensure the new image is initially hidden
    // newImage.style.opacity = 0;
    newImage.style.transform = 'scale(0.95)';
    
    // Trigger a reflow to apply the initial styles
    newImage.offsetHeight;
    
    // Add the show class after the reflow to start the transition
    newImage.classList.add('show');
    
    // Add the fade-out class to the current image
    currentImage.classList.add('fade-out');
    
    // Remove the current image after the transition
    currentImage.addEventListener('transitionend', function() {
        imageContainer.removeChild(currentImage);
        newImage.id = 'imu'; // Update the ID of the new image to match the current one
    }, { once: true });
});
document.querySelector('.c1:nth-child(4)').addEventListener('click', function() {
    const imageContainer = document.getElementById('right-div');
    const currentImage = document.getElementById('imu');
    
    const newImage = document.createElement('img');
    newImage.src = 'images/buses.jpg'; 
    newImage.alt = 'Image';
    newImage.classList.add('fade-in');
    imageContainer.appendChild(newImage);
    
    // Ensure the new image is initially hidden
    // newImage.style.opacity = 0;
    newImage.style.transform = 'scale(0.95)';
    
    // Trigger a reflow to apply the initial styles
    newImage.offsetHeight;
    
    // Add the show class after the reflow to start the transition
    newImage.classList.add('show');
    
    // Add the fade-out class to the current image
    currentImage.classList.add('fade-out');
    
    // Remove the current image after the transition
    currentImage.addEventListener('transitionend', function() {
        imageContainer.removeChild(currentImage);
        newImage.id = 'imu'; // Update the ID of the new image to match the current one
    }, { once: true });
});
document.querySelector('.c1:nth-child(1)').addEventListener('click', function() {
    const imageContainer = document.getElementById('right-div');
    const currentImage = document.getElementById('imu');
    
    const newImage = document.createElement('img');
    newImage.src = 'images/hotel.jpg'; 
    newImage.alt = 'Image';
    newImage.classList.add('fade-in');
    imageContainer.appendChild(newImage);
    
    // Ensure the new image is initially hidden
    // newImage.style.opacity = 0;
    newImage.style.transform = 'scale(0.95)';
    
    // Trigger a reflow to apply the initial styles
    newImage.offsetHeight;
    
    // Add the show class after the reflow to start the transition
    newImage.classList.add('show');
    
    // Add the fade-out class to the current image
    currentImage.classList.add('fade-out');
    
    // Remove the current image after the transition
    currentImage.addEventListener('transitionend', function() {
        imageContainer.removeChild(currentImage);
        newImage.id = 'imu'; // Update the ID of the new image to match the current one
    }, { once: true });
});
// Function to reset all boxes to their original colors
function resetBoxes() {
    document.querySelectorAll('.c1').forEach(box => {
        box.querySelector('.content1').style.color = 'grey';
        box.querySelectorAll('.line1').forEach(inner => {
            inner.style.backgroundColor = 'grey';
        });
    });
}

// Add event listeners to each box
document.querySelectorAll('.c1').forEach(box => {
    box.addEventListener('click', function() {
        // Reset all boxes before applying new styles
        resetBoxes();

        // Change the clicked box and its first inner element colors
        this.querySelector('.content1').style.color = 'white';
        this.querySelector('.line2').style.backgroundColor = 'red';
    });
});
document.querySelector('.c1:nth-child(2)').addEventListener('click', function() {
    const textContainer = document.querySelector('.b2');
    const currentText = document.getElementById('bubu');
    
    // Replace text content
    const newText = 'Book flights effortlessly with our user-friendly platform, ensuring convenient travel arrangements tailored to your schedule.'; // Replace with your new text content
    
    // Update the text content of the current text element
    currentText.textContent = newText;
});
document.querySelector('.c1:nth-child(3)').addEventListener('click', function() {
    const textContainer = document.querySelector('.b2');
    const currentText = document.getElementById('bubu');
    
    // Replace text content
    const newText = 'Simplify your journey with seamless train bookings, providing reliable and efficient transportation options for your travel plans.'; // Replace with your new text content
    
    // Update the text content of the current text element
    currentText.textContent = newText;
});
document.querySelector('.c1:nth-child(4)').addEventListener('click', function() {
    const textContainer = document.querySelector('.b2');
    const currentText = document.getElementById('bubu');
    
    // Replace text content
    const newText = ' Explore convenient bus bookings that offer flexible travel options across various routes, ensuring hassle-free journeys for passengers.'; // Replace with your new text content
    
    // Update the text content of the current text element
    currentText.textContent = newText;
});
document.querySelector('.c1:nth-child(1)').addEventListener('click', function() {
    const textContainer = document.querySelector('.b2');
    const currentText = document.getElementById('bubu');
    
    // Replace text content
    const newText = 'Discover comfortable stays with our wide range of hotels offering quality accommodations for every traveler s needs.';
    
    // Update the text content of the current text element
    currentText.textContent = newText;
});
var menu= document.querySelector("nav h3")
var full= document.querySelector("#full-scr")
var navimg= document.querySelector("nav img")
var flag=0
var new1 = document.querySelector("#full-div1")
menu.addEventListener("click",function(){
    if(flag==0){
        full.style.top=0
        navimg.style.opacity=0
       
        flag=1
    }else{
        full.style.top="-100%"
        navimg.style.opacity=1
        
        flag=0
    }
   
})
// setTimeout(function(){
    
// },3000)


