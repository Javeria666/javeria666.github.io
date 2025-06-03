// // Store a reference to the <h1> in a variable
// const myHeading = document.querySelector("h1");
// // Update the text content of the <h1>
// myHeading.textContent = "Hello world!";

const myImage = document.querySelector("img");

    myImage.addEventListener("click", () => {
    const mySrc = myImage.getAttribute("src");
    if (mySrc === "miku-image.png") {
        myImage.setAttribute("src", "miku-image-2.png");
    } else if(mySrc === "miku-image-2.png"){
        myImage.setAttribute("src", "frog-image.png");
    }
    else{
        myImage.setAttribute("src", "images/miku-image.png");
    }

    });

let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");

function setUserName() {
  const myName = prompt("Please enter your name.");
  if (!myName) {
    setUserName();
    } else{
  localStorage.setItem("name", myName);
  myHeading.textContent = `meow ${myName}`;}
}

if (!localStorage.getItem("name")) {
  setUserName();
} else {
  const storedName = localStorage.getItem("name");
  myHeading.textContent = `meow ${storedName}`;
}
myButton.addEventListener("click", () => {
  setUserName();
});

 
