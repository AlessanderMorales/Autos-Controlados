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
        if (comando === 'A' && this.orientation === 'N') {
            this.y += 1;
        }
        if (comando === 'I' && this.orientation === 'N') {
            this.orientation = 'W';
        }
    }
}

export default Auto;
