"use strict";
var RandomPoem;
(function (RandomPoem) {
    /* Arrays: Prädikate, Objekte und Subjekte */
    let arraysubjects = ["Zelda", "Link", "Midna", "Ganondorf", "Tael", "Impa"];
    let arraypredicates = ["tötet", "liebt", "rettet", "kämpft gegen", "zerstört", "verzaubert"];
    let arrayobjects = ["Echsalfos", "Bokblin", "Blauer Leune", "Moblin", "Koga", "Zanto"];
    for (let index = 5; index >= 0; index--) {
        //console.log(index);
        let poem = getVerse(arrayobjects, arraypredicates, arraysubjects);
        console.log(poem);
    }
    function getVerse(_predicates, _subjects, _objects) {
        let subjects = Math.floor(Math.random() * _subjects.length);
        let predicates = Math.floor(Math.random() * _predicates.length);
        let objects = Math.floor(Math.random() * _objects.length);
        let sentences = _objects[objects] + " " + _subjects[subjects] + " " + _predicates[predicates] + " ";
        //console.log(sentences);
        _predicates.splice(predicates, 1);
        _subjects.splice(subjects, 1);
        _objects.splice(objects, 1);
        return sentences;
    }
})(RandomPoem || (RandomPoem = {}));
//# sourceMappingURL=script_A01_RandomPoem.js.map