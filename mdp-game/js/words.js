const words = {

    randomIndex: 0,

    divGame: document.querySelector(".game"),
    currentWord: document.createElement("p"),

    divWordsToRest: document.querySelector(".wordsToRest"),
    numberOnRest: document.createElement("p"),

    onPlayingList: [9, 8, 7, 6, 5],

    available: 0,

    playingList: [],

    playingIndex : 0,

    init: function() {

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

        words.playingIndex++;

        console.log(words.available);

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
        numberOnRest.classList.add("wordsToRest__number");
        numberOnRest.textContent = words.encore;
        divWordsToRest.append(numberOnRest);

        // words.available -= 1;
    }

}
