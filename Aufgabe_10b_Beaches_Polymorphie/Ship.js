"use strict";
var L10_Strand;
(function (L10_Strand) {
    class Ship extends L10_Strand.Moveable {
        position;
        velocity;
        size;
        particlePositions = [];
        constructor(_size, _position) {
            super(_position);
            if (_position)
                this.position = _position;
            else
                this.position = new L10_Strand.Vector(-50, 20);
            this.velocity = new L10_Strand.Vector(30, 0);
            if (_size)
                this.size = _size;
            else
                this.size = new L10_Strand.Vector(270, 75);
            for (let drawn = 0; drawn < 50; drawn++) {
                let x = (Math.random() - 0.5) * this.size.x;
                let y = -(Math.random() * this.size.y);
                let position = new L10_Strand.Vector(x, y);
                this.particlePositions.push(position);
            }
        }
        draw() {
            L10_Strand.crc2.beginPath();
            L10_Strand.crc2.fillStyle = "#322e2e";
            L10_Strand.crc2.fillRect(this.position.x + 735, this.position.y + 325, 5, 50);
            L10_Strand.crc2.fill();
            L10_Strand.crc2.moveTo(this.position.x + 740, this.position.y + 325);
            L10_Strand.crc2.lineTo(this.position.x + 740, this.position.y + 350);
            L10_Strand.crc2.lineTo(this.position.x + 765, this.position.y + 337.5);
            L10_Strand.crc2.fillStyle = "#878080";
            L10_Strand.crc2.fill();
            L10_Strand.crc2.beginPath();
            L10_Strand.crc2.strokeStyle = "#878080";
            L10_Strand.crc2.moveTo(this.position.x + 750, this.position.y + 400);
            L10_Strand.crc2.lineTo(this.position.x + 695, this.position.y + 400);
            L10_Strand.crc2.lineTo(this.position.x + 670, this.position.y + 375);
            L10_Strand.crc2.lineTo(this.position.x + 775, this.position.y + 375);
            L10_Strand.crc2.fillStyle = "#878080";
            L10_Strand.crc2.fill();
            L10_Strand.crc2.closePath();
            L10_Strand.crc2.stroke();
        }
    }
    L10_Strand.Ship = Ship;
})(L10_Strand || (L10_Strand = {}));
//# sourceMappingURL=Ship.js.map