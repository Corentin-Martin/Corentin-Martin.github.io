const game = {

    playButton: document.querySelector(".play-button"),

    overStatus: null,

    onGame: null,

    init: function() {

        game.playButton.addEventListener("click", game.handleApp)

    },

    handleApp: function() {

        if (game.onGame) {
            location.reload();
        }

        if (!game.overStatus) {

            game.overStatus = false;
            game.onGame = true;

            words.init();
            lifes.init();
            timer.init();
            next.init();
            score.init();
            ok.init();
            passe.init();
            game.buttonWhenOn();

        } 
        else {

            location.reload();

        }

    },

    over: function() {

        game.overStatus = true;

        lifes.killLifes();
        lifes.zeroLifes();
        timer.overTimer();
        game.buttonWhenOver();

    },

    buttonWhenOver: function() {
        
        game.playButton.classList.remove("play-button--whenOn");
        game.playButton.classList.add("play-button--whenOver");
        game.playButton.textContent = "Rechargez la page";

    },

    buttonWhenOn: function() {

        game.playButton.classList.add("play-button--whenOn");

        game.playButton.textContent = "Recommencer ?";

    },

    relaunch: function() {

        words.currentWord.remove();
        words.currentWord.classList.add("current-word");
        words.currentWord.classList.add("current-word--over");
        words.currentWord.textContent = "GAME OVER";
        words.divGame.append(words.currentWord);

    }
}


document.addEventListener('DOMContentLoaded', game.init);