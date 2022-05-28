/* In Zusammenarbeit mit Anna-Lena Jörger und Linda Bentz */
namespace Strand {
        
        export class Cloud {
    
            x: number;
            y: number;
            speed: number;
    
            drawCloud1(): void {
    
                crc2.beginPath();
                crc2.fillStyle = "#FFFFFF";
    
                crc2.arc(this.x + 10, this.y + 110, 25, 0, 2 * Math.PI);
                crc2.arc(this.x + 50, this.y + 105, 40, 0, 2 * Math.PI);
                crc2.arc(this.x + 90, this.y + 100, 35, 0, 2 * Math.PI);
                crc2.arc(this.x + 130, this.y + 100, 25, 0, 2 * Math.PI);
    
                crc2.closePath();
                crc2.fill();
            }
    
            drawCloud2(): void {
                crc2.beginPath();
                crc2.arc(this.x, this.y, 25, 0, 2 * Math.PI); 
                crc2.arc(this.x + 45, this.y, 12, 0, 2 * Math.PI); 
                crc2.arc(this.x - 27, this.y, 15, 0, 2 * Math.PI); 
                crc2.arc(this.x + 30, this.y - 10, 15, 0, 2 * Math.PI);
                crc2.arc(this.x + 27, this.y + 10, 15, 0, 2 * Math.PI);
                crc2.closePath();
                crc2.fillStyle = "#FFFFFF";
                crc2.fill();
    
            }
    
            moveForward(): void {
                this.x += this.speed * (+0.5) ;          
            }
    
        } 
    }