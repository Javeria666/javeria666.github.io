document.addEventListener("DOMContentLoaded", function() {
  const myImage = document.querySelector("img");
  const myButton = document.querySelector("button");
  const myHeading = document.querySelector("h1");

  if (myImage) {
    myImage.addEventListener("click", () => {
      const mySrc = myImage.getAttribute("src");
      if (mySrc === "miku-image.png") {
        myImage.setAttribute("src", "miku-image-2.png");
      } else if (mySrc === "miku-image-2.png") {
        myImage.setAttribute("src", "frog-image.png");
      } else {
        myImage.setAttribute("src", "miku-image.png");
      }
    });
  }

  function setUserName() {
    const myName = prompt("Please enter your name.");
    if (!myName) {
      setUserName(); // prompt again if empty
    } else {
      localStorage.setItem("name", myName);
      myHeading.textContent = `meow ${myName}`;
    }
  }

  if (!localStorage.getItem("name")) {
    setUserName();
  } else {
    const storedName = localStorage.getItem("name");
    myHeading.textContent = `meow ${storedName}`;
  }

  if (myButton) {
    myButton.addEventListener("click", setUserName);
  }
});
