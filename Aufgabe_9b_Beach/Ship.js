"use strict";
/* In Zusammenarbeit mit Anna-Lena Jörger und Linda Bentz */
var Strand;
(function (Strand) {
    class Ship {
        x;
        y;
        speed;
        drawShip1() {
            Strand.crc2.beginPath();
            Strand.crc2.fillStyle = "#322e2e";
            Strand.crc2.fillRect(this.x + 735, this.y + 325, 5, 50);
            Strand.crc2.fill();
            Strand.crc2.moveTo(this.x + 740, this.y + 325);
            Strand.crc2.lineTo(this.x + 740, this.y + 350);
            Strand.crc2.lineTo(this.x + 765, this.y + 337.5);
            Strand.crc2.fillStyle = "#878080";
            Strand.crc2.fill();
            Strand.crc2.beginPath();
            Strand.crc2.strokeStyle = "#878080";
            Strand.crc2.moveTo(this.x + 750, this.y + 400);
            Strand.crc2.lineTo(this.x + 695, this.y + 400);
            Strand.crc2.lineTo(this.x + 670, this.y + 375);
            Strand.crc2.lineTo(this.x + 775, this.y + 375);
            Strand.crc2.fillStyle = "#878080";
            Strand.crc2.fill();
            Strand.crc2.closePath();
            Strand.crc2.stroke();
        }
        moveForward1() {
            this.x += this.speed * (+2.5);
        }
    }
    Strand.Ship = Ship;
})(Strand || (Strand = {}));
//# sourceMappingURL=Ship.js.map