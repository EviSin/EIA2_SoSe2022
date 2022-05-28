"use strict";
/* In Zusammenarbeit mit Anna-Lena Jörger und Linda Bentz */
var Strand;
(function (Strand) {
    /*Leider die Animation nicht gut hinbekommen...*/
    class Bird {
        x;
        y;
        speed;
        constructor() {
            this.drawBirds1();
        }
        update() {
            this.drawBirds1();
            this.move();
        }
        drawBirds1() {
            Strand.crc2.beginPath();
            Strand.crc2.moveTo(this.x + 369, this.y + 264);
            Strand.crc2.bezierCurveTo(this.x + 377, this.y + 233, this.x + 417, this.y + 235, this.x + 422, this.y + 263);
            Strand.crc2.bezierCurveTo(this.x + 420, this.y + 233, this.x + 472, this.y + 235, this.x + 472, this.y + 263);
            Strand.crc2.lineWidth = 5;
            Strand.crc2.strokeStyle = "#000000";
            Strand.crc2.stroke();
        }
        move() {
            this.x += Math.random() * 1 + 1;
            this.y += Math.random() * 5 + 1;
            for (let i = 0; i < Strand.z; i++) {
                if (this.x < 0) {
                    this.x += Strand.crc2.canvas.width;
                }
                if (this.y < 0) {
                    this.y += Strand.crc2.canvas.height;
                }
                if (this.x >= Strand.crc2.canvas.width) {
                    this.x -= Strand.crc2.canvas.width;
                }
                if (this.y > Strand.crc2.canvas.height) {
                    this.y -= Strand.crc2.canvas.height;
                }
            }
        }
    }
    Strand.Bird = Bird;
})(Strand || (Strand = {}));
//# sourceMappingURL=Bird.js.map