/* In Zusammenarbeit mit Anna-Lena Jörger und Linda Bentz */
namespace Strand {

    window.addEventListener("load", handleLoad);

    export let crc2: CanvasRenderingContext2D;
    let canvas: HTMLCanvasElement;
    let imgData: ImageData;

    let bigClouds: Cloud[] = [];
    let smallClouds: Cloud[] = [];
    let shipBackground: Ship[] = [];
    let flyingBirds: Bird[] = [];

    export let z: number = 10;

    function handleLoad(_event: Event): void {

        canvas = document.getElementsByTagName("canvas")[0];
        crc2 = canvas.getContext("2d")!;
        let bG: Background = new Background;
        console.log(bG);

        for (let i: number = 0; i < 1; i++) {
            let shipInTheBackground: Ship = new Ship();
            shipInTheBackground.x = Math.random() * crc2.canvas.width;
            shipInTheBackground.y = 50 & 25; 
            shipInTheBackground.speed = (Math.random() + 1) * 0.5;
            shipBackground.push(shipInTheBackground); 
        }

        for (let i: number = 0; i < 5; i++) {
            let Birdsflying: Bird = new Bird();
            Birdsflying.x = Math.random() * crc2.canvas.width;
            Birdsflying.y = 50 & 25;
            Birdsflying.speed = (Math.random() + 1) * 0.5;
            flyingBirds.push(Birdsflying); 
        }

        imgData = crc2.getImageData(0, 0, canvas.width, canvas.height);

        for (let i: number = 0; i < 10; i++) {
            let oneBigCloud: Cloud = new Cloud();
            oneBigCloud.x = Math.random() * crc2.canvas.width;
            oneBigCloud.y = Math.random() * crc2.canvas.height - 550;
            oneBigCloud.speed = (Math.random() + 1) * 0.5;
            bigClouds.push(oneBigCloud); 
        }

        for (let i: number = 0; i < 10; i++) {
            let oneSmallCloud: Cloud = new Cloud();
            oneSmallCloud.x = Math.random() * crc2.canvas.width;
            oneSmallCloud.y = Math.random() * crc2.canvas.height - 550;
            oneSmallCloud.speed = (Math.random() + 1) * 0.5;
            smallClouds.push(oneSmallCloud);
        }

        window.setTimeout(animate, 10);

    }

    function animate(): void {

        crc2.putImageData(imgData, 0, 0);

        for (let i: number = 0; i < bigClouds.length && i < smallClouds.length; i++) {

            bigClouds[i].moveForward();
            smallClouds[i].moveForward();

            if (bigClouds[i].x > + 1300) {
                bigClouds[i].x = canvas.width - 3000;
            }
            if (smallClouds[i].x > + 1350) {
                smallClouds[i].x = canvas.width - 3000;
            }
        }

        drawClouds();

        for (let i: number = 0; i < shipBackground.length; i++) {
            shipBackground[i].moveForward1();
            if (shipBackground[i].x > + 1300) {
                shipBackground[i].x = canvas.width - 1800;
            }
        }

        drawShip();

        for (let i: number = 0; i < flyingBirds.length; i++) {
            flyingBirds[i].move();
            if (flyingBirds[i].x > + 1300) {
                flyingBirds[i].x = canvas.width - 1800;
            }
        }

        drawBird();
        
        window.setTimeout(animate, 10);

    }

    function drawClouds(): void {

        for (let i: number = 0; i < bigClouds.length; i++)
            bigClouds[i].drawCloud1();
        for (let i: number = 0; i < smallClouds.length; i++)
            smallClouds[i].drawCloud2();
    }

    function drawShip(): void {

        for (let i: number = 0; i < shipBackground.length; i++)
            shipBackground[i].drawShip1();
    }

    function drawBird(): void {
        for (let i: number = 0; i < flyingBirds.length; i++)
            flyingBirds[i].drawBirds1();
    }

}