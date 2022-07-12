AFRAME.registerComponent("game-play",{
    schema:{
        elementId: { type: "string", default: "#ball1" },       
    },
    init: function(){
        var duration = 120;
        const timerEl = document.querySelector("#timer");
        console.log(timerEl)
        this.startTimer(duration, timerEl);
    },

    startTimer: function (duration, timerEl) {
        var minutes;
        var seconds;
        console.log("error")
        var timer = setInterval(countDown, 1000);
    
        function countDown() {
          if (duration >= 0) {
            minutes = parseInt(duration / 60);
            seconds = parseInt(duration % 60);
    
            if (minutes < 10) {
              minutes = "0" + minutes;
            }
            if (seconds < 10) {
              seconds = "0" + seconds;
            }
    
            timerEl.setAttribute("text", {
              value: minutes + ":" + seconds,
            });
    
            duration -= 1;
          } 
          else {
            this.gameOver()      }
        }
      },
      gameOver: function(){
        var element = document.querySelector("#game_over_text")
        element.setAttribute("visible",true)
        planeEL.setAttribute("dynamic-body",{mass:1})
      }
})
