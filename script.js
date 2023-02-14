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
var d = "42";alert("ma variable a est de type : " + typeof(a) +
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