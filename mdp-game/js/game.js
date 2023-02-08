const game = {

    playButton: document.querySelector(".play-button"),

    overStatus: null,

    init: function() {

        game.playButton.addEventListener("click", game.handleApp)

    },

    handleApp: function() {

        game.overStatus = false;

        words.init();
        lifes.init();
        timer.init();
        next.init();
        score.init();
        ok.init();
        passe.init();

    },

    over: function() {

        game.overStatus = true;

        lifes.killLifes();
        lifes.zeroLifes();
        timer.overTimer();

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