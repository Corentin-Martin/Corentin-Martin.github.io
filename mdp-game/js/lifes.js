const lifes = {

    lifeBox: document.querySelector(".life"),

    init: function() {

        lifes.killLifes();

        lifes.makeLifes();

        lifes.lifeBox.classList.remove("life--beforeLevelChoice");

    },

    makeLifes: function() {

        for (let index = 0; index < 3; index++) {

            const life = document.createElement("li");
            life.classList.add("heart");
            life.textContent = "♥";
            lifes.lifeBox.prepend(life);

        }

    },

    killLifes: function() {

        while (lifes.lifeBox.firstChild) {

            lifes.lifeBox.removeChild(lifes.lifeBox.firstChild);

          }

    },

    removeOneLife: function() {

        lifes.lifeBox.removeChild(lifes.lifeBox.firstChild);

    },

    zeroLifes: function() {

        const life = document.createElement("li");
        life.classList.add("heart");
        life.classList.add("heart--over");
        life.textContent = "GAME OVER";
        lifes.lifeBox.prepend(life);

    },

    checkLife: function() {

        if (lifes.lifeBox.lastChild === null) {
            
            game.over();
        }

    }
}
