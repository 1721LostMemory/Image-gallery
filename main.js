const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');

const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

/* Declaring the array of image filenames */
const pics = ["images/pic1.jpg", "images/pic2.jpg", "images/pic3.jpg", "images/pic4.jpg", "images/pic5.jpg"];
/* Declaring the alternative text for each image file */
const intro = ["eye", "stone", "flower", "totem", "butterfly"];
/* Looping through images */

for(let i = 0; i < 5; i ++ ) {
    const newImage = document.createElement('img');
    newImage.setAttribute('src', pics[i]);
    newImage.setAttribute('alt', intro[i]);
    thumbBar.appendChild(newImage);
}

/* Wiring up the Darken/Lighten button */
btn.addEventListener("click", () => {
    let attr = btn.getAttribute("class");
    if(attr === "dark") {
        btn.setAttribute('class', "light");
        btn.setAttribute('textContent', "Lighten");
        overlay.style.backgroundColor = "rgba(0, 0, 0, 0.5)";
    } else if(attr === "light") {
        btn.setAttribute('class', "dark");
        btn.setAttribute('textContent', "Darken");
        overlay.style.backgroundColor = "rgba(0, 0, 0, 0)";
    }
});