const score = {

    scoreNumber: document.querySelector(".score-number"),

    scoreTitle: document.querySelector(".score-title"),

    index: 0,

    init: function() {

        score.index = 0;
        score.scoreNumber.textContent = score.index;
        score.scoreTitle.classList.remove("level_select")
        score.scoreTitle.textContent = "Score";
        

    },

    increment: function() {

        score.index++;
        score.scoreNumber.textContent = score.index;

    },

}

