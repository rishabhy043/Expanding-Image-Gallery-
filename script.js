const imgcontainer = document.querySelector(".image-container");
const images = document.querySelectorAll(".img")
console.log(images);

function removeactiveclass(){
    images.forEach(image =>{
        image.classList.remove('active')
    })
}

images.forEach(image =>{
    image.addEventListener("click" ,()=>{
        removeactiveclass();
        image.classList.add("active")
        console.log("clicked");
    })
})