const game = {

    playButton: document.querySelector(".play-button"),

    overStatus: null,

    onGame: null,

    win: null,

    welcomeText: document.querySelector(".welcome-text"),

    resultBox: document.querySelector(".results"),

    lifeTimerBox: document.querySelector(".life-timer"),

    init: function() {

        level.init();

        game.playButton.addEventListener("click", game.handleApp)

    },

    handleApp: function() {

        if (game.onGame) {
            location.reload();
        }

        if (!game.overStatus) {

            game.overStatus = false;
            game.onGame = true;

            game.removePreGameLayout();

            words.init();
            lifes.init();
            timer.init();
            next.init();
            score.init();
            ok.init();
            passe.init();
            game.buttonWhenOn();

        } else {

            location.reload();

        }

    },

    over: function() {

        game.overStatus = true;

        lifes.killLifes();
        lifes.zeroLifes();
        timer.overTimer();
        game.buttonWhenOver();

        words.divWordsToRest.remove();

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

    },

    removePreGameLayout: function() {

        game.welcomeText.remove();
        game.resultBox.classList.remove("results--beforeLevelChoice");
        game.lifeTimerBox.classList.remove("life-timer--beforeLevelChoice");
        words.divWordsToRest.classList.remove("wordsToRest--beforeLevelChoice");

        next.nextButton.classList.remove("button--beforeLevelChoice");

        ok.okButton.classList.remove("button--beforeLevelChoice");

        level.killButtons();

    },

    youWin: function() {

        lifes.killLifes();
        game.buttonWhenOver();
        words.divWordsToRest.remove();

        const life = document.createElement("li");
        life.classList.add("heart");
        life.classList.add("heart--win");
        game.lifeTimerBox.classList.add("life-timer--win");
        life.textContent = "YOU WIN";
        lifes.lifeBox.prepend(life);

        game.win = true;

    },

}


document.addEventListener('DOMContentLoaded', game.init);