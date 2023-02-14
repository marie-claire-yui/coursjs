console.log("ok");
const prenom = "Marie-Claire";
const nom = "Kasai";
const age = 34;
// const phrase = `Bonjour je m'appelle ${prenom} ${nom} et j'ai ${age} ans.`;
const phrase = " Bonjour je m'appelle " + prenom + " " + nom + " et j'ai " + age + " ans."
console.log(phrase);
console.log(prenom.length);

const date = Date.now();
console.log(date);
var date1 = new Date(); // pour utiliser l'objet date on l'instancie, new est l'instance de l'objet
console.log(date1);
console.log(typeof date1);

// array est un tableau qui est un objet
const monTableau = ["toto","tati","tutu"];
console.log(typeof monTableau);
const monTableau2 = new Array; // l'array est un objet car on peut l'instancier
console.log(typeof monTableau2);
console.log(monTableau);
console.log(monTableau[0]); // on affiche l'index 0 du tableau rq on ne peut mettre qu'un seul indexe à la fois
monTableau.pop(); // retire la dernière valeur
console.table(monTableau); // affiche le tableau

// il y a deux type de tableaux. les tableaux de types itératifs et les tableaux de types associatifs
var myTab = new Array(); // on instancie un objet array = on en fait une instance d'un objet array
// autre façon de faire
// var myTab = []; on peut créer un tableau vide
myTab['enfant'] = 'toto';
myTab['maman'] = 'tati';
myTab['papa'] = 'tutuu'; 

console.log (myTab);

var a = 42;
var b = 4.2;
var c = -42;
var d = "42";
alert("ma variable a est de type : " + typeof(a) +
"\nma variable b est de type : " + typeof(b) +
"\nma variable c est de type : " + typeof(c) +
"\nma variable d est de type : " + typeof(d)
)

var machaine = "exemple";
var maChaine = new String("exemple");

alert("ma variable machaine est de type: " + typeof(machaine) + 
"\nma variable maChaine est de type : " + typeof(maChaine));

var n = null;
var u = undefined;
var nn = NaN;

alert("ma variable n est de type: " + typeof(n) + 
"\nma variable u est de type : " + typeof(u) +
"\nma variable nn est de type : " + typeof(nn));

// les opérateurs mathématiques
var x = 32;
var y = 5;
var z = 2;

// multiplication
alert(y*z);

//division
alert(y/z);

//addition
alert(y + z);

// soustraction 
alert(y - z);

// modulo est le restant d'une division
alert(x % y);

// priorité mathématiques
// la multiplication est prioritaire
alert (y+z*x)
// l'addition est prioritaire
alert((y+z)*x)

// y = y + z équivaut à y += z additionne et affecte
y += z // équivaut à y = y + z renvoi 7 car y = 5 + 2
y *= z // équivaut à y = y * z renvoi 14
y -= z // équivaut à y = y - z renvoi 12
y /= z // équivaut à y = y / z renvoi 6
y %= z // équivaut à y = y % z renvoi 0
// renvoie la valeur de 0 car à chaque fois écrase la valeur précédente
alert(y);


var heureDouverture = 9;

var heureDeFermeture = 17;

var heureActuelle = 9;

// si heure d'actuelle avant h douverture --> pas encore ouvert
// si après l'heuree d'ouverture --> revenez Demain
// si pendant l'horaire d'ouverture --> bienvenue

if (heureActuelle>=heureDouverture && heureActuelle<heureDeFermeture){
    // console.log("Bienvenue")
    if (heureActuelle>=9 && heureActuelle<12){
        console.log("Bienvenue. C'est le matin")
    }
    else{
        console.log("Bienvenue. C'est l'après-midi")
    }
  } else if ( heureActuelle < heureDouverture) {
    console.log("pas encore ouvert")
  }
  else {
    console.log("revenez demain")
  }
  