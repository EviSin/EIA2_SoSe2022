namespace RandomPoem {

    /* Arrays: Prädikate, Objekte und Subjekte */

    let arraysubjects: string [] = ["Zelda", "Link", "Midna", "Ganondorf", "Tael", "Impa"];

    let arraypredicates: string [] = ["tötet", "liebt", "rettet", "kämpft gegen", "zerstört", "verzaubert"];

    let arrayobjects: string [] = ["Echsalfos", "Bokblin", "Blauer Leune", "Moblin", "Koga", "Zanto"];

    for (let index: number = 5; index >= 0; index--) {
        //console.log(index);

        let poem: string = getVerse (arrayobjects, arraypredicates, arraysubjects);
        console.log(poem);
    }

    function getVerse (_predicates: string[] , _subjects: string[], _objects: string []): string {

        let subjects: number = Math.floor(Math.random() * _subjects.length);
        let predicates: number = Math.floor(Math.random() * _predicates.length);
        let objects: number = Math.floor(Math.random() * _objects.length);

        let sentences: string = _objects[objects] + " " + _subjects[subjects] + " " + _predicates[predicates] + " ";
        //console.log(sentences);

        _predicates.splice(predicates, 1);
        _subjects.splice(subjects, 1);
        _objects.splice(objects, 1);

        return sentences;
    }
}


