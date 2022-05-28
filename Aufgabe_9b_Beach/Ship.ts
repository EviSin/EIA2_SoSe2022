/* In Zusammenarbeit mit Anna-Lena Jörger und Linda Bentz */
namespace Strand {

    export class Ship {

        x: number;
        y: number;
        speed: number;

        drawShip1(): void {

            crc2.beginPath();
            crc2.fillStyle = "#322e2e";
            crc2.fillRect(this.x + 735, this.y + 325, 5, 50);
            crc2.fill();

            crc2.moveTo(this.x + 740, this.y + 325);
            crc2.lineTo(this.x + 740, this.y + 350);
            crc2.lineTo(this.x + 765, this.y + 337.5);
            crc2.fillStyle = "#878080";
            crc2.fill();

            crc2.beginPath();
            crc2.strokeStyle = "#878080";
            crc2.moveTo(this.x + 750, this.y + 400);
            crc2.lineTo(this.x + 695, this.y + 400);
            crc2.lineTo(this.x + 670, this.y + 375);
            crc2.lineTo(this.x + 775, this.y + 375);
            crc2.fillStyle = "#878080";
            crc2.fill();
            crc2.closePath();
            crc2.stroke();
        }

        moveForward1(): void {
            this.x += this.speed * (+2.5) ;      
        }

    } 
} 