class Pomodoro {
    constructor() {
        this.ui = new UI();
        this.secondInterval;
        this.minuteInterval;
        this.breakCount = 0;
        this.bell = new Audio("./audio/bell.mp3");
        
    }
    Start() {
        this.ui.changeBackground("work");
        this.bell.play();
        this.ui.changeMode("danger", "Work");
        this.Timer(24, 59, "Work");
    }
    Break(){
        this.ui.changeBackground("break");
        this.bell.play();
        this.breakCount = this.breakCount + 1;
        if(this.breakCount === 5)
        {
            // Long Break
            this.ui.changeMode("success", "Long Break");
            this.Timer(14,59,"Break");
        }
        else {
            // Short Break
            this.ui.changeMode("success", "Short Break");
            this.Timer(4,59,"Break");
        }
    }
    Timer(minute, second, type){
        this.ui.changeMinute(minute);
        this.ui.changeSecond(second);
        this.minuteInterval = setInterval(() => {
            minute = minute - 1;
            this.ui.changeMinute(minute);
        }, 60000);
        this.secondInterval = setInterval(() => {
            second = second - 1;
            this.ui.changeSecond(second);
            if(second <= 0)
            {
                if(minute <= 0)
                {
                    clearInterval(this.minuteInterval);
                    clearInterval(this.secondInterval);
                    if(type === "Work"){
                        this.Break();
                    } else {
                        this.Start();
                    }
                }
                second = 60;
            }
        }, 1000);
    }
    Stop(){
        this.bell.play();
        this.ui.changeMinute(24);
        this.ui.changeSecond(59);
        this.ui.changeMode("success","Break");
        this.ui.changeBackground("break");
        clearInterval(this.minuteInterval);
        clearInterval(this.secondInterval);
    }
}