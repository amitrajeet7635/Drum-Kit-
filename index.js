var lengthofDrum = document.querySelectorAll(".drum").length;
for (i = 0; i < lengthofDrum; i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click", function () {
        var innerHTMLCode = this.innerHTML;
        makeSound(innerHTMLCode);


    })

    document.addEventListener("keypress", function (event) {
        makeSound(event.key)
    })

    function makeSound(key) {
        switch (key) {
            case 'w':
                var tom1 = new Audio('sounds/tom-1.mp3');
                tom1.play();
                break;

            case 'a':
                var tom2 = new Audio('sounds/tom-2.mp3');
                tom2.play();
                break;

            case 's':
                var tom3 = new Audio('sounds/tom-3.mp3');
                tom3.play();
                break;

            case 'd':
                var tom4 = new Audio('sounds/tom-4.mp3');
                tom4.play();
                break;

            case 'j':
                var kick_bass = new Audio('sounds/kick-bass.mp3');
                kick_bass.play();
                break;

            case 'k':
                var crash = new Audio('sounds/crash.mp3');
                crash.play();
                break;

            case 'l':
                var snare = new Audio('sounds/snare.mp3');
                snare.play();
                break;

            default:
                alert("Wrong Key Pressed")


        }
    }

}


// var mus = new Audio('sounds/tom-1.mp3');
//         mus.play();