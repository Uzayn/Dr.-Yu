document.addEventListener("keypress", function(event){
    switch (event.key) {
        case "w":
            let crash = new Audio("sounds/crash.mp3");
            crash.play()
            break;
        
        case "a":
            let kick_bass = new Audio("sounds/kick-bass.mp3");
            kick_bass.play()
            break;

        case "s":
            let snare = new Audio("sounds/snare.mp3");
            snare.play()
            break;

        case "d":
            let tom_1 = new Audio("sounds/tom-1.mp3");
            tom_1.play()
            break;

        case "j":
            let tom_2 = new Audio("sounds/tom-2.mp3");
            tom_2.play()
            break;

        case "k":
            let tom_3 = new Audio("sounds/tom-3.mp3");
            tom_3.play()
            break;

        case "l":
            let tom_4 = new Audio("sounds/tom-4.mp3");
            tom_4.play()
            break;
    
        default: console.log(buttonInnerHTML);
            break;
    }

})



let numberOfDrumButtons = document.querySelectorAll(".drum").length

let i = 0

while (i < numberOfDrumButtons) {

    document.querySelectorAll("button")[i].addEventListener("click", function () {
        this
        let buttonInnerHTML = this.innerHTML

        switch (buttonInnerHTML) {
            case "w":
                let crash = new Audio("sounds/crash.mp3");
                crash.play()
                break;
            case "a":
                let kick_bass = new Audio("sounds/kick-bass.mp3");
                kick_bass.play()
                break;
            case "s":
                let snare = new Audio("sounds/snare.mp3");
                snare.play()
                break;
            case "d":
                let tom_1 = new Audio("sounds/tom-1.mp3");
                tom_1.play()
                break;
            case "j":
                let tom_2 = new Audio("sounds/tom-2.mp3");
                tom_2.play()
                break;
            case "k":
                let tom_3 = new Audio("sounds/tom-3.mp3");
                tom_3.play()
                break;
            case "l":
                let tom_4 = new Audio("sounds/tom-4.mp3");
                tom_4.play()
                break;
            default: console.log(buttonInnerHTML);
                break;
        }



        if (this.innerHTML === "w"){
            let audio = new Audio("sounds/crash.mp3");
        audio.play()
        }
        else if (this.innerHTML === "a"){
            let audio = new Audio("sounds/kick-bass.mp3");
        audio.play()
        }
        else if (this.innerHTML === "s"){
            let audio = new Audio("sounds/snare.mp3");
        audio.play()
        }
        else if (this.innerHTML === "d"){
            let audio = new Audio("sounds/tom-1.mp3");
        audio.play()
        }
        else if (this.innerHTML === "j"){
            let audio = new Audio("sounds/tom-2.mp3");
        audio.play()
        }
        else if (this.innerHTML === "k"){
            let audio = new Audio("sounds/tom-3.mp3");
        audio.play()
        }
        else if (this.innerHTML === "l"){
            let audio = new Audio("sounds/tom-4.mp3");
        audio.play()
        }
        
    })

    

    i++
}


