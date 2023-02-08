const ok = {

    okButton: document.querySelector(".button-ok"),

    okBox: document.querySelector(".words__ul--ok"),

    init: function() {

        ok.okButton.addEventListener("click", ok.handleOk);

    },

    handleOk: function() {

        if (!game.overStatus) {

            let liOk = document.createElement("li");
            liOk.textContent = words.dico[words.randomIndex];
            ok.okBox.append(liOk);

            score.increment();

            next.nextWord();

        } 
        else {
            game.relaunch();
        }

        },

}

