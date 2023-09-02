import axios from "axios";
import  prompt  from "prompt-sync";
//  const add = (n1, n2) => {
//    return parseInt(n1) + parseInt(n2);
//  };
//  const sub = (n1, n2) => {
//    return parseInt(n1) - parseInt(n2);
//  };
//  const mult = (n1, n2) => {
//    return "metter les instruction pour faire multiplication" + parse;
//  };
//  //genereate nombre alleatotoire entre 1 et 100
//  const getRandom1 = () => {
//    return Math.random() * 100 + 1;
//  };
//  const getRandom2 = (min, max) => {
//    return Math.random() * (max - min) + min;
//  };
// // Dans le fichier tp1.js  concevoir une fonction de conversion de Fahrenheit en Celsius
// // Tester la dans index.js
// //voir le modele fournit dans le groupe du cours.

//  export { getRandom1, getRandom2, add, sub, mult };



//fonction pour convertire en celsius



  function convertire(celsius) {


    
    let fahrenheit =(celsius * 1.8) + 32 ;
    console.log("la temperature en fahrenheit  est eagle à : ",fahrenheit,"f");  
  }
  convertire( (prompt()('Donner la temperature en celsius : ')))
  




 

