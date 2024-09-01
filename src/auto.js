// auto.js
class Auto {
    constructor(x, y, orientation) {
        this.x = x;
        this.y = y;
        this.orientation = orientation;
    }

    getPosicion() {
        return `${this.x},${this.y} ${this.orientation}`;
    }

    mover(comando) {
        if (comando === 'A') {
            if (this.orientation === 'N') {
                this.y += 1;
            }
            if(this.orientation === 'E'){
                this.x += 1;
            }
            if(this.orientation === 'O'){
                this.x -= 1;
            }
                
        }else if (comando === 'D') {
            if (this.orientation === 'N') {
                this.orientation = 'E';
            } else if (this.orientation === 'E') {
                this.orientation = 'S';
            }
        }
    }
}

export default Auto;


  