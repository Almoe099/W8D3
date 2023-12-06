class Clock {
    constructor() {
        let date = new Date()
        this.hours = date.getHours()
        this.minutes = date.getMinutes()
        this.seconds = date.getSeconds()

        this.printTime()
        setTimeout(this._tick.bind(this), 1000)
        
    }
  
    printTime() {
        console.log(`${this.hours}; ${this.minutes}; ${this.seconds};`);
    }
  
    _tick() {
        this.seconds++
        if (this.seconds < 60){
            return;
        }
        this.seconds = 0
        this.minutes++
        if (this.minutes < 60){
            return;
        }
        this.minutes = 0
        this.hours++
    }
  }
  
  const clock = new Clock();