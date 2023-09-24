let prenom=["Mike", "Ryan", "John", "Kelvin", "Stan"]

let caractere=["Le sportif", "Le rebelle", "Le perreux", "Le kaid", "Le nerd"]



const personnesChoisies = []; // tableau vide dans lequel je met un prenom et un caractere

function choix(tableau) {
  const indiceAleatoire = Math.floor(Math.random() * tableau.length); // choisi un element 
  const elementChoisi = tableau.splice(indiceAleatoire, 1)[0]; //supprime l'element choisi du tableau
  return elementChoisi;
}

for (let i = 0; i < 5; i++) { // 
  const prenomAleatoire = choix(prenom);
  const caractereAleatoire = choix(caractere);

  const personneChoisie = {
    prenom: prenomAleatoire,
    caractere: caractereAleatoire,
  };


  personnesChoisies.push(personneChoisie); //place les element dans le tableau vide
}

class Gentil{
    constructor(prenom, enVie){
        this.prenom= prenom;
        this.enVie= enVie;
    }

}

let perso1= new Gentil(personnesChoisies[0], 1);
let perso2= new Gentil(personnesChoisies[1], 1);
let perso3= new Gentil(personnesChoisies[2], 1);
let perso4= new Gentil(personnesChoisies[3], 1);
let perso5= new Gentil(personnesChoisies[4], 1);

let Jason=100

    function attaque(){  
       while(Jason>0 || perso5.enVie==1){ //si jason a plus de 100 PV ou que le perso 5 est toujour en vie la boucle continue !!ATTENTION BOUCLE INFINI!!
        let evenement=Math.random()  
    if(Jason<=0){// si les pv de Jason sont inferieur ou egal a 0  il affiche jason est mort
        console.log("Jason est mort");
    }else if(perso1.enVie==1){ // si le perso 1 est en vie ...
        if (evenement < 0.5) {
            console.log("Jason tue"+ personnesChoisies[0]); // il y a 50% de chance que Jason tue le personnage
            perso1.enVie--
        }else if(evenement < 0.8){ 
            console.log(personnesChoisies[0]+ " esquive et lui inflige 10 point de vie"); // il y a 30 % de chance que le personnage inflige 10 point de degats
            Jason=Jason-10
        } else{
            console.log(personnesChoisies[0]+ " se sacrifie et inflige 15 point de vie a jason"); // il y a 20 % de chance que le personnage meurt tout en infligeant 15 point de degats
            perso1.enVie--
            Jason=Jason-15
        }}
    else if(perso2.enVie==1){
        if (evenement < 0.5) {
            console.log("Jason tue"+ personnesChoisies[1]);
            perso2.enVie--
        }else if(evenement < 0.8){
            console.log(personnesChoisies[1]+ " esquive et lui inflige 10 point de vie");
            Jason=Jason-10
        } else{
            console.log(personnesChoisies[1]+ " se sacrifie et inflige 15 point de vie a jason");
            perso2.enVie--
            Jason=Jason-15
        }}
    else if(perso3.enVie==1){
        if (evenement < 0.5) {
            console.log("Jason tue"+ personnesChoisies[2]);
            perso3.enVie--
        }else if(evenement < 0.8){
            console.log(personnesChoisies[2]+ " esquive et lui inflige 10 point de vie");
            Jason=Jason-10
        } else{
            console.log(personnesChoisies[2]+ " se sacrifie et inflige 15 point de vie a jason");
            perso3.enVie--
            Jason=Jason-15
        }}
    else if(perso4.enVie==1){
        if (evenement < 0.5) {
            console.log("Jason tue"+ personnesChoisies[3]);
            perso4.enVie--
        }else if(evenement < 0.8){
            console.log(personnesChoisies[3]+ " esquive et lui inflige 10 point de vie");
            Jason=Jason-10
        } else{
             console.log(personnesChoisies[3]+ " se sacrifie et inflige 15 point de vie a jason");
             perso4.enVie--
             Jason=Jason-15
            }}
    else if(perso5.enVie==1){
        if (evenement < 0.5) {
            console.log("Jason tue"+ personnesChoisies[4]);
            perso5.enVie--
        }else if(evenement < 0.8){
            console.log(personnesChoisies[4]+ " esquive et lui inflige 10 point de vie");
            Jason=Jason-10
        } else{
            console.log(personnesChoisies[4]+ " se sacrifie et inflige 15 point de vie a jason");
            perso5.enVie--
            Jason=Jason-15
        }}else{
            console.log("Tout le monde est mort, il restait "+ Jason+ " point de vie a Jason");
        }}}
       
        // Bon je n'est pas reussi a sortir de cette boucle infini infernal desolé j'ai fait de mon mieux