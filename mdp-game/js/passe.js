const passe = {

    passeButton: document.querySelector(".button-pass"),

    passeBox: document.querySelector(".words__ul--pass"),

    init: function() {

        passe.passeButton.classList.remove("button--beforeLevelChoice");
        passe.passeButton.addEventListener("click", passe.handlePasse);

    },

    handlePasse: function() {

        if (!game.overStatus) {

            let liPasse = document.createElement("li");
            liPasse.textContent = words.playingList[words.playingIndex-1];
            passe.passeBox.append(liPasse);

            if (lifes.targetScore >= 5) {

                next.nextWord();

            } else {

                game.over();

            }

        } else {

            game.relaunch();
            
        }

    },

}

