namespace L10_Strand {
    export class Ship extends Moveable {
        position: Vector;
        velocity: Vector;
        size: Vector;

        particlePositions: Vector[] = [];

        constructor(_size?: Vector, _position?: Vector) {
            super(_position);

           
            if (_position)
                this.position = _position;
            else
                this.position = new Vector(-50, 20);

            this.velocity = new Vector(30, 0);

            if (_size)
                this.size = _size;
            else
                this.size = new Vector(270, 75); 

            for (let drawn: number = 0; drawn < 50; drawn++) {
                let x: number = (Math.random() - 0.5) * this.size.x;
                let y: number = - (Math.random() * this.size.y);
                let position: Vector = new Vector(x, y);
                this.particlePositions.push(position);
            }
        }

        draw(): void {
    
            crc2.beginPath();
            crc2.fillStyle = "#322e2e";
            crc2.fillRect(this.position.x + 735, this.position.y + 325, 5, 50);
            crc2.fill();

            crc2.moveTo(this.position.x + 740, this.position.y + 325);
            crc2.lineTo(this.position.x + 740, this.position.y + 350);
            crc2.lineTo(this.position.x + 765, this.position.y + 337.5);
            crc2.fillStyle = "#878080";
            crc2.fill();

            crc2.beginPath();
            crc2.strokeStyle = "#878080";
            crc2.moveTo(this.position.x + 750, this.position.y + 400);
            crc2.lineTo(this.position.x + 695, this.position.y + 400);
            crc2.lineTo(this.position.x + 670, this.position.y + 375);
            crc2.lineTo(this.position.x + 775, this.position.y + 375);
            crc2.fillStyle = "#878080";
            crc2.fill();
            crc2.closePath();
            crc2.stroke();
        }
    }
}