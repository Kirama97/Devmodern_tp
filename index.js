import prompt from "prompt-sync";
// import { add, sub, getRandom1, getRandom2 } from "./TP1/tp1.js";
//
// //l'appel de fonction getRandom. Math.floor donne les nombres entiers
// let r = Math.floor(getRandom1());
// console.log("Aleatoire : ", r);
// //demande de tapper le premier nombre
// let nombre1 = prompt()("taper le premier: ");
// //demande de tapper le second nombre
// let nombre2 = prompt()("taper le second: ");
// //l'appel de fonction add
// let somme = add(nombre1, nombre2);
// //l'appel de fonction add
// let difference = sub(nombre1, nombre2);

// //imprimer les resultats dans le terminal
// console.log("la somme : ", somme);
// console.log("la differance: ", difference);
// // ajouter une logique qui demande de tapper le min et le max.
// // ensuite supprimer les // des lignes 23 et 24 

// // let r2 = Math.floor(getRandom2(min, max));
// // console.log("Aleatoire : 

// //------------------------ Boucle--------------------------------------------- 


// while


// let guess = 8
// let chiffre

// while (chiffre !==guess) {
//     chiffre=prompt()("votre chiffre : ") *1
//     if (chiffre < guess) {
//         console.log('plus')
//     } else if (chiffre >guess){
//         console.log('moin')
//     }  
   
// }

// console.log('Bravo vous avez deviner !')

// -------------------------------------------switch----------------------------

// let jour = prompt()("entre une valeur : ");

// switch (jour) {
//     case 1: 
//       console.log("lundi")
        
//         break;
//     case 2: 
//       console.log("mardi")
        
//         break;
//     case 3: 
//       console.log("mercredi")
        
//         break;
//     case 4: 
//       console.log("jeudi")
        
//         break;
//     case 5: 
//       console.log("vendredi")
        
//         break;
//     case 6: 
//       console.log("samedi")
        
//         break;
//     case 7: 
//       console.log("dimanche")
        
//         break;

//     default:
//         console.log("inconnu")
//         break;
// }


// // model = prompt()("entre model : ")
// // // fabriquant = prompt()("entre fabriquant : ")

//  let maVoiture = {

//      fabriquant :"nissan",
//      model :"gtr",
//      annee : 2005,
//      moteur :{
          
//          carburant : "essence",
//          cylindre : 4,
//      }
//  }

// console.log(maVoiture.moteur.carburant);

// --------------------------------------------------------------------

// let volvo =  new Object();

// volvo.fabriquant= "bmw";
// volvo.annee=2010;
// volvo.model= "m4";

// console.log(volvo) ;

// ---------------------------------------------------------------------
 

// ------------------etudiant-----------------------
// console.log("Entrer les information de l'etudiant : ");

// function etudiant (nom,prenom,niveau){
//      this.nom = nom
//      this.prenom = prenom  
//      this.niveau =  niveau

// }

// let etudiant1 = new etudiant (
//     prompt()("nom : "),
//     prompt()("prenom : "),
//     prompt()("nivau : "),
// );




// -----------------------------enseignant------------------------

// console.log("Entrer les information de l'enseignant : ");

// function enseignant (nom,prenom,domaine){
//     this.nom = nom ,
//     this.prenom = prenom  ,
//     this.domaine =  domaine

// }

// let enseignant1 = new enseignant (
//    prompt()("nom : "),
//    prompt()("prenom : "),
//    prompt()("Domaine : "),
// );


// console.log(etudiant1, enseignant1)


// ----------------------------------------------Exercice rectangle------------------------------------

// Géométrie
// Notre code JavaScript va être utilisé dans un outil de dessin et on a besoin de class pour représenter nos formes géométriques. On se concentrera sur la création de rectangle et de carré.

// Le rectangle sera construit à l'aide de 2 informations (la largeur et la hauteur). Le carré lui sera construit qu'avec une seule dimension et sera l'extension du rectangle.

// Voici le code qu'il vous faudra faire fonctionner :


// class Rectangle {

//     constructor (width, height) {
//         this.width = width
//         this.height = height
//     }

//     get perimeter () {
//         return (this.width + this.height) * 2
//     }

//     get isValid () {
//         return this.width > 0 && this.height > 0
//     }

//     isBiggerThan (shape) {
//         return this.perimeter > shape.perimeter
//     }

// }

// class Square extends Rectangle {
//     constructor(width) {
//         super(width, width)
//     }
// }


// const r = new Rectangle(10, 20);
// console.log(r.perimeter) // 60
// console.log(r.isValid) // true
// const r2 = new Rectangle(-10, 20);
// console.log(r2.isValid) // false
// const c = new Square(10); 
// console.log(c.perimeter) // 40
// console.log(r.isBiggerThan(c)) // true




// -----------------------utilisation des bloucle pour deviner un nombre avec while ---------------
         
// let guess = 8
// let chiffre

// while (chiffre !==guess) {
//     chiffre=prompt("votre chiffre")*1
//     if (chiffre < guess) {
//         console.log('plus')
//     } else if (chiffre >guess){
//         console.log('moin')
//     }
    
// }
// console.log('Bravo vous avez deviner !')

// --------------------------Les objet ---------------------------------

//  OBJET


// ----------------entité etudaint------------------------

// let etudiant = {
//     nom : "",
//     prenom : "",
//     age : "",
// }

// etudiant.nom = prompt()("donner le nom de l'etudiant : ")
// etudiant.prenom = prompt()("donner le prenom de l'etudiant : ")
// etudiant.age = prompt()("donner l'age de l'etudiant : ")

// // -----------------entité professeur-----------------

// let Proffeseur = {
//     domaine : "",
//     nom : "",
//     prenom :"",


// }

// etudiant.nom = prompt()("donner le nom du professeur : ")
// etudiant.prenom = prompt()("donner le prenom du professeur : ")
// etudiant.age = prompt()("donner le cours enseigner  : ")

// --------------------entite cour --------------------------

let cour = {
    matiere : "",

}

cour.matiere = prompt()("donner le nom du cours a suivre : ");

// console.log(etudiant);
// console.log(Proffeseur);
console.log(cour);

//verifie la reception du propieté matiere 
let test = "modou";
console.log(test +" "+ "etudie" +" "+ cour.matiere);