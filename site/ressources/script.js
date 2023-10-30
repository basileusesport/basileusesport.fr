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
        Host : "smtp.elasticemail.com",
        Username : "kill.maldeme@gmail.com",
        Password : "445BBCBD956CB9889327222ACE98F67C3835",
        To : 'basileusesport@gmail.com',
        From : "kill.maldeme@gmail.com",
        Subject : `Nouveau recrutement de ${infoRecruté.discord} !`,
        Body : `Il semblerait qu'une personne s'est inscrite sur notre site ! <br> ${infoRecruté.displayInfos()}`
    }).then(
      message => alert(message)
    );
});