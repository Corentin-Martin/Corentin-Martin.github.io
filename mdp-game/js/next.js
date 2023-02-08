const next = {

    nextButton: document.querySelector(".button-next"),

    init: function() {

        next.nextButton.addEventListener("click", next.handleNext);

    },

    handleNext: function() {

        if (!game.overStatus) {

            lifes.removeOneLife();

            lifes.checkLife();

            console.log(game.overStatus);

        } 
        else {
            game.relaunch();
        }

    },

    nextWord: function() {

            words.init();
            lifes.init();

    },

    
}

