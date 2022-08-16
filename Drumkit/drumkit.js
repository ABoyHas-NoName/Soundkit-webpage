
// detecting button press
var numberOfDrumButt = document.querySelectorAll('.drum').length;

for (var i = 0; i < numberOfDrumButt; i++) {
    document.querySelectorAll('.drum')[i].addEventListener('click', handleClick);
    function handleClick() {
        var buttonInnerHTML = this.innerHTML;

        makeSound(buttonInnerHTML);
        activeButton(buttonInnerHTML);
    }
};


// detecting keypress
document.addEventListener('keypress', function (event) {

    makeSound(event.key);
    activeButton(event.key);

});


// passing the function to play
function makeSound(key) {

    switch (key) {
        case 'w':
            var audio = new Audio('sounds/ww.mp3');
            audio.play();
            break;

        case 'w':
            var audio = new Audio('sounds/ww.mp3');
            audio.play();
            break;

        case 'a':
            var aa = new Audio('sounds/aa.mp3');
            aa.play();
            // the words after var must be the same before the method - play()
            break;

        case 's':
            var audio = new Audio('sounds/ss.mp3');
            audio.play();
            // but this is the original syntax.
            break;

        case 'd':
            var audio = new Audio('sounds/dd.mp3');
            audio.play();
            break;

        case 'j':
            var audio = new Audio('sounds/jj.mp3');
            audio.play();
            break;

        case 'k':
            var audio = new Audio('sounds/kk.mp3');
            audio.play();
            break;

        case 'l':
            var audio = new Audio('sounds/ll.mp3');
            audio.play();
            break;

        default: // good practice to incude
            alert('no defined key / button was pressed');
            break;
    }

}

// passing the function to animate 
function activeButton(keypressed) {

    var activeButton = document.querySelector('.' + keypressed);
    activeButton.classList.add('pressed');

    setTimeout( function() {
        activeButton.classList.remove('pressed');
    }, 100);
}





















































































