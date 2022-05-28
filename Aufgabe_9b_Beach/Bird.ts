/* In Zusammenarbeit mit Anna-Lena Jörger und Linda Bentz */
namespace Strand {

    /*Leider die Animation nicht gut hinbekommen...*/
    
        export class Bird {
    
                x: number;
                y: number;
                speed: number;
    
                constructor() { 
                    this.drawBirds1();
                }
        
                update(): void {
        
                    this.drawBirds1();
                    this.move();
                }
        
               
        
                drawBirds1(): void {
                    crc2.beginPath();
                    crc2.moveTo(this.x + 369, this.y + 264);
                    crc2.bezierCurveTo(this.x + 377, this.y + 233, this.x + 417, this.y + 235, this.x + 422, this.y + 263);
                    crc2.bezierCurveTo(this.x + 420, this.y + 233, this.x + 472, this.y + 235, this.x + 472, this.y + 263);
                    crc2.lineWidth = 5;
                    crc2.strokeStyle = "#000000";
                    crc2.stroke();
                }
        
                move(): void {
    
                    this.x += Math.random() * 1 + 1;
                    this.y += Math.random() * 5 + 1;
    
                    for (let i: number = 0; i < z; i++) {
                    if (this.x < 0) {
                        this.x += crc2.canvas.width;
                    }
                    if (this.y < 0) {
                        this.y += crc2.canvas.height;
                    } 
                    if (this.x >= crc2.canvas.width) {
                        this.x -= crc2.canvas.width;
                    }
                    if (this.y > crc2.canvas.height) {
                        this.y -= crc2.canvas.height;
                    } 
                } 
                     
    } 
    
    }
    }