const drumButtonArray = document.querySelectorAll(".drum");         // create variable for drum class


for (let i = 0; i < drumButtonArray.length; i++) {          // for loop used to iterate through drum class array

    drumButtonArray[i].addEventListener("click", function () {      // event listener added to drum array for "click"

        let buttonText = this.textContent;          // this is used for the objective that is being executed
        playMusic(buttonText)                       // variable created and used by function to know what element clicked
        buttonAnimation(buttonText)
    });
}

document.addEventListener("keydown", function(event) {   // keyboard event listener added to whole document

    let key = event.key                             // key targeted by using variable
    playMusic(key)                                  // .key is the method used by js and "key" is a variable
    buttonAnimation(key)
})



function playMusic(key) {                           // funtion created to trigger event listener and play audio  
    
    switch (key) {                                     //using switch case
        case "w":
            let tom1 = new Audio("sounds/tom-1.mp3");
            tom1.play();
            break;
        case "a":
            let tom2 = new Audio("sounds/tom-2.mp3");
            tom2.play();
            break;
        case "s":
            let tom3 = new Audio("sounds/tom-3.mp3");
            tom3.play();
            break;
        case "d":
            let tom4 = new Audio("sounds/tom-4.mp3");
            tom4.play();
            break;
        case "j":
            let crash = new Audio("sounds/crash.mp3");
            crash.play();
            break;
        case "k":
            let kick = new Audio("sounds/kick-bass.mp3");
            kick.play();
            break;
        case "l":
            let snare = new Audio("sounds/snare.mp3");
            snare.play();
            break;

        default:
            console.log(buttonText)
            break;
    }
}


function buttonAnimation(currentKey) {
    
   let activeButton =  document.querySelector("." + currentKey);
    activeButton.classList.add("pressed");

    setTimeout(function(){activeButton.classList.remove("pressed")},200);
    
}




// let audio = new Audio("sounds/tom-1.mp3");
//         audio.play();