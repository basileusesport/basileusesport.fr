let buttonHistoire = document.querySelector(".buttonhistoire");

buttonHistoire.addEventListener("click", () => {
    location.replace("#");
});

let buttonRecrutement = document.querySelector(".envoyer-accueil-form");

class InfoRecrutement {
    constructor(username, discord, rank) {
        this.username = username;
        this.discord = discord;
        this.rank = rank;
    };

    displayInfos() {
        return `Son nom d'utilisateur : ${infoRecrutement.username} <br> Son Discord : ${infoRecrutement.discord} <br> Son rang : ${infoRecrutement.rank}`
    };
};

const infoRecruté = new InfoRecrutement(document.querySelector("#username-accueil-form").value, document.querySelector("#discord-accueil-form").value, document.querySelector("#rank-accueil-form").value);

buttonRecrutement.addEventListener("click", () => {
    Email.send({
        SecureToken : "18597780-a1db-4d9b-9a1a-31fd0046dc80",
        To : 'recrutement-basileusesport@outlook.fr',
        From : "basileusesport@gmail.com",
        Subject : `Nouveau recrutement de ${infoRecruté.discord} !`,
        Body : `Il semblerait qu'une personne s'est inscrite sur notre site ! <br> ${infoRecruté.displayInfos()}`
    }).then(
      message => alert("Candidature prématurée envoyée !")
    );
});