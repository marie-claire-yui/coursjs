// console.log("ok");
// const prenom = "Marie-Claire";
// const nom = "Kasai";
// const age = 34;
// // const phrase = `Bonjour je m'appelle ${prenom} ${nom} et j'ai ${age} ans.`;
// const phrase = " Bonjour je m'appelle " + prenom + " " + nom + " et j'ai " + age + " ans."
// console.log(phrase);
// console.log(prenom.length);

// const date = Date.now();
// console.log(date);
// var date1 = new Date(); // pour utiliser l'objet date on l'instancie, new est l'instance de l'objet
// console.log(date1);
// console.log(typeof date1);

// // array est un tableau qui est un objet
// const monTableau = ["toto","tati","tutu"];
// console.log(typeof monTableau);
// const monTableau2 = new Array; // l'array est un objet car on peut l'instancier
// console.log(typeof monTableau2);
// console.log(monTableau);
// console.log(monTableau[0]); // on affiche l'index 0 du tableau rq on ne peut mettre qu'un seul indexe à la fois
// monTableau.pop(); // retire la dernière valeur
// console.table(monTableau); // affiche le tableau

// // il y a deux type de tableaux. les tableaux de types itératifs et les tableaux de types associatifs
// var myTab = new Array(); // on instancie un objet array = on en fait une instance d'un objet array
// // autre façon de faire
// // var myTab = []; on peut créer un tableau vide
// myTab['enfant'] = 'toto';
// myTab['maman'] = 'tati';
// myTab['papa'] = 'tutuu'; 

// console.log (myTab);

// var a = 42;
// var b = 4.2;
// var c = -42;
// var d = "42";
// alert("ma variable a est de type : " + typeof(a) +
// "\nma variable b est de type : " + typeof(b) +
// "\nma variable c est de type : " + typeof(c) +
// "\nma variable d est de type : " + typeof(d)
// )

// var machaine = "exemple";
// var maChaine = new String("exemple");

// alert("ma variable machaine est de type: " + typeof(machaine) + 
// "\nma variable maChaine est de type : " + typeof(maChaine));

// var n = null;
// var u = undefined;
// var nn = NaN;

// alert("ma variable n est de type: " + typeof(n) + 
// "\nma variable u est de type : " + typeof(u) +
// "\nma variable nn est de type : " + typeof(nn));

// // les opérateurs mathématiques
// var x = 32;
// var y = 5;
// var z = 2;

// // multiplication
// alert(y*z);

// //division
// alert(y/z);

// //addition
// alert(y + z);

// // soustraction 
// alert(y - z);

// // modulo est le restant d'une division
// alert(x % y);

// // priorité mathématiques
// // la multiplication est prioritaire
// alert (y+z*x)
// // l'addition est prioritaire
// alert((y+z)*x)

// // y = y + z équivaut à y += z additionne et affecte
// y += z // équivaut à y = y + z renvoi 7 car y = 5 + 2
// y *= z // équivaut à y = y * z renvoi 14
// y -= z // équivaut à y = y - z renvoi 12
// y /= z // équivaut à y = y / z renvoi 6
// y %= z // équivaut à y = y % z renvoi 0
// // renvoie la valeur de 0 car à chaque fois écrase la valeur précédente
// alert(y);


// var heureDouverture = 9;

// var heureDeFermeture = 17;

// var heureActuelle = 8;

// // si heure d'actuelle avant h douverture --> pas encore ouvert
// // si après l'heuree d'ouverture --> revenez Demain
// // si pendant l'horaire d'ouverture --> bienvenue

// if (heureActuelle>=heureDouverture && heureActuelle<heureDeFermeture){
// // on imbrique une condition dans une condition
//     if (heureActuelle>=9 && heureActuelle<12){
//         console.log("Bienvenue. C'est le matin")
//     }
//     else{
//         console.log("Bienvenue. C'est l'après-midi")
//     }
//   } else if ( heureActuelle < heureDouverture) {
//     console.log("pas encore ouvert")
//   }
//   else {
//     console.log("revenez demain")
//   }
  
  // le if else peut être simplifié en condition ternaire

  var note = 15;
  var noteAmericaine ="";

  if (note > 19){
    noteAmericaine="A+";
  } else if(note>=18 && note<=19){
    noteAmericaine ="A"
  } else if (note>=15 && note<18 ){
    noteAmericaine ="B"
  } else if (note>=12 && note<15 ){
    noteAmericaine ="C"
  } else if (note>=9 && note<12 ){
    noteAmericaine ="D"
  } else if (note>=6 && note<9 ){
    noteAmericaine ="E"
  } else if (note<6 ){
    noteAmericaine ="F"
  }else 
  {
    noteAmericaine ="ABS"
  }

  console.log(noteAmericaine);

  // le switch ne prend que des valeurs unique, ne fait pas de comparaison
  // le case est une valeur unique, on ne fait pas de case if, on peut faire un if switch 
  switch (noteAmericaine){
    case "A+":
      console.log("Excellent!");
      break;
    case "A":
      console.log("Très bien");
      break;
    case "B":
      console.log("Bien");
       break;
    case "C":
      console.log("Correct");
       break;
    case "D":
      console.log("Moyen");
        break;
    case "E":
      console.log("Insuffisant");
        break;
    case "F":
      console.log("Nul");
        break;
    default:
      console.log("autres");
        break;
  }

var facture = 1000;
var reduction = 0;

if (facture < 1000){
  reduction = 0;
}
else if (facture <=2500 && facture >=1000){
  reduction = 5;
}
else {
  reduction= 10;
}

var total = facture-((reduction/100)*facture);

switch (reduction){
  case 0:
    console.log("pas de réduction", facture);
    break;
  default:
    console.log("total : ", total);
    break;
}
var maChaine ="cda";
var arrayNbr = [1 ,2 ,3];
var arrayStr = ["a","b","c"];


arrayNbr.push(4); // envoie le 4 à la fin du tableau [1 ,2 ,3, 4]
arrayNbr.pop(); // retire le dernier du tableau car renvoi [1,2]
arrayNbr.shift();//Removes the first element from an array and returns it. If the array is empty, undefined is returned and the array is not modified.
arrayNbr.unshift(0); //Inserts new elements, here 0, at the start of an array, and returns the new length of the array.
console.table(arrayNbr); 
console.log(maChaine[1]);

var arrayCopy = arrayStr.concat("d"); //fusionne les tableaux sans changer les valeurs du tableau initiale
console.log(arrayCopy); // créer une copie de tableau. Permet de fusionner au moins 2 tableaux
console.log(arrayStr);

// rq les chaines de caractères viennent d'un tableau
console.log(arrayStr.join('-'));// join les valeurs du tableau sans changer les valeurs initiales séparés par '-'

console.log(arrayStr.slice(1)); // en partant du début [ "b", "c" ]indiquer le nombre d'éléments qu'on souhaite retirer du tableau sans toucher aux valeurs du tableau d'origine
console.log(arrayStr.slice(-1));// en partant de la fin idem

console.log(arrayNbr.reduce((acc, cou) => acc + cou));
console.log(arrayStr.includes("c")); //Determines whether an array includes a certain element, returning true or false as appropriate.
console.log(arrayStr.indexOf("c"));

console.log(arrayNbr.find(el => el > 2)) // 3 renvoie la valeur du premier élément trouvé dans le tableau qui respencte la condition
// dans mon tableau trouve un élément qui est supérieur à 2
// fonction simplifiée en écriture, n'a qu'un seul paramètre et qu'un seul retour
// il s'agit d'une fonction callback
console.log(arrayNbr.findIndex(el => el > 2));
console.log(arrayNbr.map(el => el *2)); // revoit un tableau de chaque élément
console.log(arrayNbr.some(el => el > 2)); // renvoit true si au moins un élément respecte la condition
console.log(arrayNbr.some(el => el > 5)); // renvoit false

console.log(arrayNbr.filter(el => el > 1)); // renvoie 2 et 3
// resemble à find sauf qu'il va renvoyer tous les éléments qui respenctent la condition 

console.log(arrayNbr.every(el => el > 1)); // est-ce que tout les éléments respectent la condition ici renvoit false c'est un booléen
console.log(arrayNbr.reverse()); // inverse tous les éléments qui sont dans le tableau
