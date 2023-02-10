const words = {

    randomIndex: 0,

    divGame: document.querySelector(".game"),
    currentWord: document.createElement("p"),

    divWordsToRest: document.querySelector(".wordsToRest"),
    numberOnRest: document.createElement("p"),

    onPlayingList: [9, 8, 7, 6, 5],

    available: 0,

    beforeEndList: 0,

    playingList: [],

    playingIndex : 0,

    init: function() {

        words.beforeEndList = words.available;

        words.generateList();

        words.wordAffichage();

    },

    randomGeneration: function() {

        words.randomIndex = Math.floor((Math.random() * dico.list.length-1) +1);

    },

    wordAffichage: function() {

        words.currentWord.remove();
        words.currentWord.classList.add("current-word");
        words.currentWord.textContent = words.playingList[words.playingIndex];
        words.divGame.append(words.currentWord);

        words.countWordsToPlay();

        words.playingIndex++;

        words.beforeEndList--;

    },

    generateList: function() {

        for (let index = 0; index < words.available; index++) {

            words.randomGeneration();
            words.playingList.push(dico.list[words.randomIndex]);
            dico.list.pop(dico.list[words.randomIndex]);
            
        }

    },

    countWordsToPlay: function() {

        words.numberOnRest.remove();
        words.numberOnRest.classList.add("wordsToRest__number");
        words.numberOnRest.textContent = words.beforeEndList;
        words.divWordsToRest.append(words.numberOnRest);

    },

}
