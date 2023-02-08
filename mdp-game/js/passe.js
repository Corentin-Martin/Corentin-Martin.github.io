const passe = {

    passeButton: document.querySelector(".button-pass"),

    passeBox: document.querySelector(".words__ul--pass"),

    init: function() {

        passe.passeButton.addEventListener("click", passe.handlePasse);

    },

    handlePasse: function() {

        if (!game.overStatus) {

            let liPasse = document.createElement("li");
            liPasse.textContent = words.dico[words.randomIndex];
            passe.passeBox.append(liPasse);

            next.nextWord();

        } 
        else {
            game.relaunch();
        }

    },

}

