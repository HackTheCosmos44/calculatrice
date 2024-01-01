//récupération des éléments du DOM
const touches = [...document.querySelectorAll(".bouton")];

const listeKeycode = touches.map(touche => touche.dataset.key);

const ecran = document.querySelector(".ecran");

const errorInfobulle = document.querySelector(".infoBulle")

//écoute des évènements
document.addEventListener("keydown", (e) => {
    const valeur = e.keyCode.toString();
    calculer(valeur);
})

document.addEventListener("click", (e) => {
   const valeur = e.target.dataset.key;
   calculer(valeur);
})

const calculer  = (valeur) => {
    //on élimine l'intéraction avec toutes les touches qui ne sont pas sur le clavier de la calculatrice
    if(listeKeycode.includes(valeur)) {
        switch(valeur) {
            case "8" :
                ecran.textContent = "";
                break;
            case "13" :
                const calcul = eval(ecran.textContent);
                ecran.textContent = calcul;
                break;
            default : 
                const indexKeycode = listeKeycode.indexOf(valeur);
                const touche = touches[indexKeycode];
                ecran.textContent += touche.innerHTML;
        }
    }
 }

 //gestion des erreurs de calcul
 window.addEventListener("error", (e) => {
    errorInfobulle.innerText = "Une erreur est survenue dans votre calcul : " + e.message;
    errorInfobulle.style.display = "flex";
    setTimeout(() => {
        errorInfobulle.style.display = "none";
    }, 7000)
 })
