
var papier = document.getElementById("papier");
var pierre = document.getElementById("pierre");
var ciseaux = document.getElementById("ciseaux");



var choixUtilisateur=0;

var IA=0;

var d = 0;
var e = 0;
var f = 0;

function calculOrdi() {
    IA = Math.floor((Math.random() * 3) + 1);
    return IA;
}

    papier.addEventListener("click",function () {

        choixUtilisateur = 1;

        IA = calculOrdi();
        if (IA=== 1 ) {
            document.getElementById("resultat").innerHTML = "égalité";
            f +=1;
            document.getElementById("nbEgal").innerHTML = f;
        }

        if (IA === 2 ) {
            document.getElementById("resultat").innerHTML = "win";
            d +=1;
            document.getElementById("nbWin").innerHTML = d;
        }

        if (IA === 3 ) {
            document.getElementById("resultat").innerHTML = "lose";
            e +=1;
            document.getElementById("nbLose").innerHTML = e;
        }

    });


pierre.addEventListener("click",function () {

    choixUtilisateur = 2;
    IA = calculOrdi();
    if (IA=== 1 ) {
        document.getElementById("resultat").innerHTML = "Lose";
        e +=1;
        document.getElementById("nbLose").innerHTML = e;
    }

    if (IA === 2 ) {
        document.getElementById("resultat").innerHTML = "égalité";
        f +=1;
        document.getElementById("nbEgal").innerHTML = f;
    }

    if (IA === 3 ) {
        document.getElementById("resultat").innerHTML = "win";
        d +=1;
        document.getElementById("nbWin").innerHTML = d;
    }

});

ciseaux.addEventListener("click",function () {

    choixUtilisateur = 3;
    IA = calculOrdi();
    if (IA=== 1 ) {
        document.getElementById("resultat").innerHTML = "win";
        d +=1;
        document.getElementById("nbWin").innerHTML = d;
    }

    if (IA === 2 ) {
        document.getElementById("resultat").innerHTML = "lose";
        e +=1;
        document.getElementById("nbLose").innerHTML = e;
    }

    if (IA === 3 ) {
        document.getElementById("resultat").innerHTML = "égalité";
        f +=1;
        document.getElementById("nbEgal").innerHTML = f;
    }

});



