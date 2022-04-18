namespace L03_Memory {
        // Ich habe den Browser "Microsoft Edge" und den Bildschrim eines durchschnittlichen Laptops benutzt (falls die Memorys versetzt aussehen)
    let feld: HTMLDivElement = <HTMLDivElement>document.querySelector("div#form");  
    feld.addEventListener("change", handlechange);                                  
    document.getElementById("start")?.addEventListener("click", go);               
         
    let paar: HTMLInputElement = <HTMLInputElement>document.querySelector("input#kartenpaare");            
    let size: HTMLInputElement = <HTMLInputElement>document.querySelector("input#kartengröße");            
    let backColor: HTMLInputElement = <HTMLInputElement>document.querySelector("input#hintergrundfarbe");   
    let fontColor: HTMLInputElement = <HTMLInputElement>document.querySelector("input#schriftfarbe");       
    let fontText: HTMLHeadingElement = <HTMLHeadingElement>document.getElementById("title");                      
         
    let tempSize: String = "";                                  
    let tempColor: String = "";                                 
    let cardNr: number = 0;                                    
    let activeCards: HTMLElement [] = [];                       
    let activeCardsName: string [] = [];
    let doneCards: HTMLElement [] = [];                            
        
    function handlechange(_event: Event): void {
        let target: HTMLInputElement = <HTMLInputElement>_event.target;
               
        if (target.type == "radio") {
            console.log(target.value);
            fontText.style.fontFamily = target.value;
            } 

        if (Number(size.value) == 0) {
            tempSize = "small";
            } else if (Number(size.value) == 4) {
                tempSize = "big";
            } else {
            tempSize = "medium";
            }
        
        if (target.type == "select-one") {
            if (target.value == "black") {
                tempColor = "FrontBlack";
            } else if (target.value == "white") {
                 tempColor = "FrontWhite";
            } else if (target.value == "blue") {
                tempColor = "FrontBlue";
            } else if (target.value == "red") {
                tempColor = "FrontRed";
            }
         }
    }
       
    function go(_event: Event): void {
        cardNr = Number(paar.value);
        document.body.style.backgroundColor = backColor.value;
        fontText.style.color = fontColor.value;
        feld.innerHTML = "";
        handleLoad();
     }    
            
    function handleLoad(): void {
        let memoryArray1: string[] = ["pics/boyflying.jpg", "pics/girlcloudy.png", "pics/boynature.jpg", "pics/girlcloud.jpg", "pics/girlflying.jpg", "pics/mansky.jpg", "pics/girlspace.jpg", "pics/girlumbrella.jpg", "pics/girlwindow.jpg", "pics/handmoon.jpg", "pics/heart.jpg", "pics/mandessert.jpg", "pics/manfish.jpg", "pics/manlight.jpg", "pics/moonboy.jpg"];
        let memoryArray2: string[] = ["pics/boyflying.jpg", "pics/girlcloudy.png", "pics/boynature.jpg", "pics/girlcloud.jpg", "pics/girlflying.jpg", "pics/mansky.jpg", "pics/girlspace.jpg", "pics/girlumbrella.jpg", "pics/girlwindow.jpg", "pics/handmoon.jpg", "pics/heart.jpg", "pics/mandessert.jpg", "pics/manfish.jpg", "pics/manlight.jpg", "pics/moonboy.jpg"];
        let customArray1: string[] = memoryArray1.slice(0, cardNr);
        let customArray2: string[] = memoryArray2.slice(0, cardNr);
            
        for (let i: number = cardNr; i >= 1; i--) {
            let min: number = 0;
            let max: number = i - 1;
            let coincidenceblock1: number = Math.floor(Math.random() * (max - min + 1)) + min;
            let coincidenceblock2: number = Math.floor(Math.random() * (max - min + 1)) + min;
        
            let tempDiv: HTMLElement = document.createElement("div");
            let tempImg: HTMLElement = document.createElement("img");
            tempDiv.classList.add("divboxFront", tempSize.toString(), tempColor.toString());
            tempDiv.appendChild(tempImg);
            tempImg.setAttribute("src", customArray1[coincidenceblock1]);
            tempImg.classList.add("back", tempSize.toString());
            tempImg.setAttribute("name", customArray1[coincidenceblock1]);
            tempImg.setAttribute("id", customArray1[coincidenceblock1]);     
            document.getElementById("box")?.appendChild(tempDiv);
            customArray1.splice(coincidenceblock1, 1);
        
            let tempDiv2: HTMLElement = document.createElement("div");
            let tempImg2: HTMLElement = document.createElement("img");
            tempDiv2.classList.add("divboxFront", tempSize.toString(), tempColor.toString());
            tempDiv2.appendChild(tempImg2);
            tempImg2.setAttribute("src", customArray2[coincidenceblock2]);
            tempImg2.classList.add("back", tempSize.toString());
            tempImg2.setAttribute("name", customArray2[coincidenceblock2]);
            tempImg2.setAttribute("id", customArray2[coincidenceblock2]);    
            document.getElementById("box")?.appendChild(tempDiv2);
            customArray2.splice(coincidenceblock2, 1);
        }
        
        let pics: NodeListOf<HTMLElement> = document.querySelectorAll("img");

        for (let i: number = 0; i < cardNr * 2; i++) {
            pics[i].addEventListener("click", Frontclass);
            }
    }
        
    let time: number = 0;
    setInterval(timer, 1000);
            
    function timer(): void {
        time++;
    }
            
    function Frontclass(_event: Event): void {
        let elem: HTMLElement = <HTMLElement>_event.target; 
        if (activeCards.length < 2) {
        elem.classList.remove("back");
        elem.classList.add("front");
        elem.removeEventListener("click", Frontclass);
        let nameOf: string = String(elem.getAttribute("name"));
        activeCardsName.push(nameOf);
        activeCards.push(elem);         
        }                               
        if (activeCards.length == 2) {
            setTimeout(removeElement1, 800);
            setTimeout(Backclass, 1500);
            }
    }
              
    function Backclass(): void {
        for (let i: number = 0; activeCards.length > i; i++) {
            activeCards[i].classList.remove("front");
            activeCards[i].classList.add("back");
            activeCards[i].addEventListener("click", Frontclass);
        }
        activeCards = [];
        activeCardsName = [];
    }    
        
    function removeElement1(): void {                           
        if (activeCardsName[0] == activeCardsName[1]) {          
                                                                        
            let rem1: NodeListOf<HTMLElement> = document.getElementsByName(activeCardsName[0]);
            rem1[0].classList.remove("front");
            rem1[0].classList.add("gone");
            rem1[0].parentElement?.classList.remove("divboxFront", tempColor.toString());
            rem1[0].parentElement?.classList.add("divboxBack");
            doneCards.push(rem1[0]);
        
            rem1[1].classList.remove("front");
            rem1[1].classList.add("gone");
            rem1[1].parentElement?.classList.remove("divboxFront", tempColor.toString());
            rem1[1].parentElement?.classList.add("divboxBack");
            doneCards.push(rem1[1]);
        
            activeCards = [];
            activeCardsName = [];
            }
        
        if (doneCards.length == cardNr * 2) {
            alert("You won! Your time was: " + time + " sec");
        }
    }        
}