namespace L10_Strand {
    export class Bird extends Moveable {
        position: Vector;
        velocity: Vector;
        size: number;

        constructor(_size: number, _position?: Vector) {
            super(_position);
            
            if (_position) 
                this.position = _position;
            else
                this.position = new Vector(200, 400);
                
            this.velocity = new Vector(-100, -50);
            this.velocity.random(120, 100);
            this.position.random(-200, 400);
        }
        draw(): void {

            crc2.beginPath();
            crc2.moveTo(this.position.x + 369, this.position.y + 264);
            crc2.bezierCurveTo(this.position.x + 377, this.position.y + 233, this.position.x + 417, this.position.y + 235, this.position.x + 422, this.position.y + 263);
            crc2.bezierCurveTo(this.position.x + 420, this.position.y + 233, this.position.x + 472, this.position.y + 235, this.position.x + 472, this.position.y + 263);
            crc2.lineWidth = 5;
            crc2.strokeStyle = "#000000";
            crc2.stroke();
        }
    }
}