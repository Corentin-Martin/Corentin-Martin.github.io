
const timer = {
    temps: 30,

    timerElement: document.querySelector(".timer"),

    init: function() {

        timer.temps = 30,

        setInterval(timer.compteArebours, 1000);

    },

    compteArebours: function() {
        let secondes = parseInt(timer.temps % 60, 10);

        secondes = secondes < 10 ? "0" + secondes : secondes;
      
        timer.timerElement.innerText = `:${secondes}`;
        timer.temps = timer.temps <= 0 ? 0 : timer.temps - 1;

        timer.timerToZero();
    },

    overTimer: function() {
        timer.temps = 0;
    },

    timerToZero: function() {

        if (timer.temps === 0) {

            timer.temps = 0;
            game.over();

        }

    },

    
}


