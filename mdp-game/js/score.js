const score = {

    scoreNumber: document.querySelector(".score-number"),

    index: 0,

    init: function() {

        score.index = 0;
        score.scoreNumber.textContent = score.index;
        

    },

    increment: function() {
        score.index++;
        score.scoreNumber.textContent = score.index;

    }

}

