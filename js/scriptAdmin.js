"use strict";
function getAllObjects(key) {
  return JSON.parse(localStorage.getItem(key) || "[]");
}

function displayLoggedUser() {
  var loggedUser = getAllObjects("loggedUser");
  var LoggedUserInfo = document.getElementById("LoggedUserInfo");

  LoggedUserInfo.innerHTML = ` <a> ${loggedUser.firstName}  ${loggedUser.lastName}</a>`;
}

function hello() {
  console.log("hello");
}

function viewDoctors() {
  var proUsers = getAllObjects("proUsers");
  var categories = getAllObjects("categories");
  var gouvernorates = getAllObjects("gouvernorates");
  var datatablesSimple = document.getElementById("datatablesSimple");
  var proUserList = ` <thead>
    <tr>
        <th>Nom Prenom</th>
        <th>Categorie</th>
        <th>Nom commercial</th>
        <th>Telephone</th>
        <th>Email</th>
        <th>Mot de Passe</th>
        <th>Gouvernorat</th>
        <th>Etat du compte</th>
        <th>Activation compte</th>
        <!-- <th>Start date</th> -->
        <!--<th>Salary</th> -->
    </tr>
</thead>
<tfoot>
    <tr>
        <th>Nom Prenom</th>
        <th>Categorie</th>
        <th>Nom commercial</th>
        <th>Telephone</th>
        <th>Email</th>
        <th>Mot de Passe</th>
        <th>Gouvernorat</th>
        <th>Etat du compte</th>
        <th>Activation compte</th>
        <!-- <th>Start date</th> -->
        <!-- <th>Salary</th> -->
    </tr>
</tfoot>
<tbody>`;

  for (let i = 0; i < proUsers.length; i++) {
    proUserList =
      proUserList +
      `
        <tr>
            <td>${proUsers[i].lastName} ${proUsers[i].firstName}</td>
            <td>${categories[proUsers[i].categorie]}</td>
            <td>${proUsers[i].commercialName}</td>
            <td>${proUsers[i].tel}</td>
            <td>${proUsers[i].email}</td>
            
            <td class="passWord">${proUsers[i].pwd}</td>
            <td>${gouvernorates[proUsers[i].gouvernorat]}</td>
            <td>${proUsers[i].etat}</td>
            <td>
            <button id="proUserActionInfo" onclick="checkEtatSubscribtionForProUsers('${proUsers[i].etat}',${i});" type="button" class="btn btn-dark">Verifier Etat du compte</button>
            <button id="proUserActionButton${i}" onclick="validateSubscriptionForProUsers('${proUsers[i].etat}',${i});" type="button" class="btn btn-success d-none">Confirmer</button>
          </td>
            <!--<td>2011/04/25</td> -->
            <!--<td>$320,800</td> -->
        </tr>`;
  }

  datatablesSimple.innerHTML = proUserList;
}

function viewUsers() {
  var users = getAllObjects("users");
  var datatablesUsers = document.getElementById("datatablesUsers");

  var userList = ` <thead>
    <tr>
        <th>Nom Prenom</th>
        <th>Email</th>
        <th>Mot de Passe</th>
        <th>Telephone</th>
        <th>Etat du compte</th>

        <th>Activation compte</th>
    </tr>
</thead>
<tfoot>
    <tr>
        <th>Nom Prenom</th>
        <th>Email</th>
        <th>Mot de Passe</th>
        <th>Telephone</th>
        <th>Activation compte</th>
    </tr>
</tfoot>
<tbody>`;

  for (let i = 0; i < users.length; i++) {
    userList =
      userList +
      `
        <tr>
            <td>${users[i].lastName} ${users[i].firstName}</td>
            <td>${users[i].email}</td>
            <td class="passWord">${users[i].pwd}</td>
            <td>${users[i].tel}</td>
            <td>${users[i].etat}</td>
            <td>
            <button id="userActionInfo" onclick="checkEtatSubscribtion('${users[i].etat}',${i});" type="button" class="btn btn-dark">Verifier Etat du compte</button>

            <button id="userActionButton${i}" onclick="validateSubscription('${users[i].etat}',${i});" type="button" class="btn btn-success d-none">Confirmer</button>
          </td>
        </tr>`;
  }

  datatablesUsers.innerHTML = userList;
}

function getUserInfoByID(id, userType) {
  var user = getAllObjects(userType);

  for (let i = 0; i < user.length; i++) {
    if (user[i].id == id) {
      var userData = {
        lastName: user[i].lastName,
        firstName: user[i].firstName,
      };
    }
  }
  return userData;
}

var testUserData = getUserInfoByID("21", "users");

console.log(testUserData);

function viewAllRdvADMIN() {
  var rdvs = getAllObjects("rdvs");
  var listeDesRdv = document.getElementById("listeDesRdv");

  var rdvList = ` <div  class="card-header">
    <i id="titreTab3Admin" class="fas fa-table me-1"></i>
    Liste de tout les Rendez-vous
</div>
<div class="card-body">
    <table id="datatablesRdv"> <thead>
    <tr>
        <th>Date</th>
        <th>Patient</th>
        <th>Docteur</th>
        <th>Message</th>
        <th>Etat du RDV</th>
        <th>Annuler / Accepter RDV</th>
    </tr>
</thead>
<tfoot>
    <tr>
        <th>Date</th>
        <th>Patient</th>
        <th>Docteur</th>
        <th>Message</th>
        <th>Etat du RDV</th>
        <th>Annuler / Accepter RDV</th>
    </tr>
</tfoot>
<tbody>`;

  for (let i = 0; i < rdvs.length; i++) {
    var userData = getUserInfoByID(rdvs[i].idUser, "users");
    var doctorData = getUserInfoByID(rdvs[i].idDoctor, "proUsers");
    rdvList =
      rdvList +
      `
        <tr>
            <td>${rdvs[i].date}</td>
            <td>${userData.firstName} ${userData.lastName}</td>
            <td>Dr ${doctorData.firstName} ${doctorData.lastName}</td>
            <td>${rdvs[i].appointementMessage}</td>
            <td>${rdvs[i].etat}</td>
            <td>
            <button id="rdvActionInfo" onclick="checkEtatRdv('${rdvs[i].etat}',${i});" type="button" class="btn btn-dark">Verifier Etat RDV</button>

            <button id="rdvActionButton${i}" onclick="actionRdv('${rdvs[i].etat}',${i});" type="button" class="btn btn-success d-none">Confirmer</button>
          </td>
            
        </tr>`;
  }
  rdvList =
    rdvList +
    ` </table>
                               
    </div>`;
  listeDesRdv.innerHTML = rdvList;
}

function actionRdv(etatRdv, indice) {
  var rdvs = getAllObjects("rdvs");

  if (etatRdv == "disabled") {
    var rdv = rdvs[indice];
    rdv.etat = "enabled";
    rdvs.splice(indice, 1, rdv);
    localStorage.setItem("rdvs", JSON.stringify(rdvs));
    window.location.reload();
  } else {
    var rdv = rdvs[indice];
    rdv.etat = "disabled";
    rdvs.splice(indice, 1, rdv);
    localStorage.setItem("rdvs", JSON.stringify(rdvs));
    window.location.reload();
  }
}

function validateSubscription(etatCompte, indice) {
  var users = getAllObjects("users");

  if (etatCompte == "disabled") {
    var user = users[indice];
    user.etat = "enabled";
    users.splice(indice, 1, user);
    localStorage.setItem("users", JSON.stringify(users));
    window.location.reload();
  } else {
    var user = users[indice];
    user.etat = "disabled";
    users.splice(indice, 1, user);
    localStorage.setItem("users", JSON.stringify(users));
    window.location.reload();
  }
}

function checkEtatSubscribtion(etatRdv, indice) {
  var userActionButton = document.getElementById(`userActionButton${indice}`);
  if (etatRdv == "disabled") {
    userActionButton.innerHTML = "Valider le compte";
    userActionButton.classList = "btn btn-success";
  } else {
    userActionButton.innerHTML = "Restreindre le compte";
    userActionButton.classList = "btn btn-danger";
  }
}
function validateSubscriptionForProUsers(etatCompte, indice) {
  var proUsers = getAllObjects("proUsers");

  if (etatCompte == "disabled") {
    var proUser = proUsers[indice];
    proUser.etat = "enabled";
    proUsers.splice(indice, 1, proUser);
    localStorage.setItem("proUsers", JSON.stringify(proUsers));
    window.location.reload();
  } else {
    var proUser = proUsers[indice];
    proUser.etat = "disabled";
    proUsers.splice(indice, 1, proUser);
    localStorage.setItem("proUsers", JSON.stringify(proUsers));
    window.location.reload();
  }
}
function checkEtatSubscribtionForProUsers(etatRdv, indice) {
  var proUserActionButton = document.getElementById(`proUserActionButton${indice}`);
  if (etatRdv == "disabled") {
    proUserActionButton.innerHTML = "Valider le compte";
    proUserActionButton.classList = "btn btn-success";
  } else {
    proUserActionButton.innerHTML = "Restreindre le compte";
    proUserActionButton.classList = "btn btn-danger";
  }
}
function checkEtatRdv(etatRdv, indice) {
  var rdvActionButton = document.getElementById(`rdvActionButton${indice}`);
  if (etatRdv == "disabled") {
    rdvActionButton.innerHTML = "Accepter le RDV";
    rdvActionButton.classList = "btn btn-success";
  } else {
    rdvActionButton.innerHTML = "Annuler le RDV";
    rdvActionButton.classList = "btn btn-danger";
  }
}

function viewProUserRdv() {
  var users = getAllObjects("users");
  var proUsers = getAllObjects("proUsers");
  var rdvs = getAllObjects("rdvs");
  var loggedUser = getAllObjects("loggedUser");

  var datatablesUsers = document.getElementById("datatablesUsers");
  var titreTab2Admin = document.getElementById("titreTab2Admin");
  var listeDesRdv = document.getElementById("listeDesRdv");
  var tab1Admin = document.getElementById("tab1Admin");
  var graphs = document.getElementById("graphs");
  var sidenavAccordion = document.getElementById("sidenavAccordion");

  var rdvList = ` <thead>
    <tr>
        <th>Nom Prenom</th>
        <th>Etat</th>
        <th>Message</th>
        <th>Date</th>
        <th>Annuler / Accepter RDV</th>
    </tr>
</thead>
<tfoot>
    <tr>
        <th>Nom Prenom</th>
        <th>Etat</th>
        <th>Message</th>
        <th>Date</th>
        <th>Annuler / Accepter RDV</th>
    </tr>
</tfoot>
<tbody>`;

  for (let i = 0; i < rdvs.length; i++) {
    var userData = getUserInfoByID(rdvs[i].idUser, "users");
    if (rdvs[i].idDoctor == loggedUser.id) {
      rdvList =
        rdvList +
        `
        <tr>
            <td>${userData.firstName} ${userData.lastName}</td>
            <td>${rdvs[i].etat}</td>
            <td>${rdvs[i].appointementMessage}</td>
            <td>${rdvs[i].date}</td>
            <td>
            <button id="rdvActionInfo" onclick="checkEtatRdv('${rdvs[i].etat}',${i});" type="button" class="btn btn-info">Verifier Etat RDV</button>

            <button id="rdvActionButton${i}" onclick="actionRdv('${rdvs[i].etat}',${i});" type="button" class="btn btn-success d-none">Confirmer</button>
          </td>
        </tr>`;
    }
    datatablesUsers.innerHTML = rdvList;
    titreTab2Admin.innerHTML = "Rendez-vous a traiter";
    listeDesRdv.style.display = "none";
    tab1Admin.style.display = "none";
    graphs.style.display = "none";
    sidenavAccordion.style.display = "none";
  }
}

function displayProUserInfoForEdit() {
  alert('displayProUserInfoForEdit');
}

function logout() {
  localStorage.removeItem("loggedUser");
  localStorage.removeItem("appointementLink");
  location.reload();
}


function injectDemoData() {
  var users = getAllObjects("users");
  var proUsers = getAllObjects("proUsers");
  var rdvs = getAllObjects("rdvs");
  var loggedUser = getAllObjects("loggedUser");
  var checkDemoData = getAllObjects("demoData");


  if (checkDemoData.length == 0) {
    var usersData =
      [{
        "id": "100",
        "firstName": "Mediouni",
        "lastName": "Hatem",
        "email": "elmediouni2005@gmail.com",
        "pwd": "elmediouni2005@gmail.com",
        "confirmPwd": "elmediouni2005@gmail.com",
        "tel": "97652585",
        "etat": "disabled",
        "role": "user"
      },
      {
        "id": "101",
        "firstName": "Mediouni",
        "lastName": "Amel",
        "email": "elmediouni2001@gmail.com",
        "pwd": "elmediouni2001@gmail.com",
        "confirmPwd": "elmediouni2001@gmail.com",
        "tel": "93442585",
        "etat": "enabled",
        "role": "user"
      },
      {
        "id": "102",
        "firstName": "Mediouni",
        "lastName": "Hayet",
        "email": "elmediouni2004@gmail.com",
        "pwd": "elmediouni2004@gmail.com  ",
        "confirmPwd": "elmediouni2004@gmail.com",
        "tel": "98686562",
        "etat": "disabled",
        "role": "user"
      },
      {
        "id": "103",
        "firstName": "Mediouni",
        "lastName": "Slah Eddine",
        "email": "elmediouni2007@gmail.com",
        "pwd": "elmediouni2007@gmail.com",
        "confirmPwd": "elmediouni2007@gmail.com ",
        "tel": "98205771",
        "etat": "enabled",
        "role": "user"
      }];


    for (let i = 0; i < usersData.length; i++) {
      users.push(usersData[i]);
      localStorage.setItem("users", JSON.stringify(users));
    }

    var proUsersData =
      [{
        "id": 100,
        "firstName": "Nabil",
        "lastName": "Arafa",
        "commercialName": "Dr A.Nabil",
        "categorie": "1",
        "postalAddress": "Num 12, Rue de la paix",
        "gouvernorat": "11",
        "gps": "36.802, 10.1072",
        "tel": "98200200",
        "email": "na@na.tn",
        "pwd": "na@na.tn",
        "confirmPwd": "na@na.tn",
        "twitter": "#",
        "facebook": "#",
        "linkedin": "#",
        "instagram": "#",
        "acceptRdv": "yes",
        "tarif": "",
        "etat": "enabled",
        "role": "pro"
      },
      {
        "id": 101,
        "firstName": "Abd el Kerim",
        "lastName": "Dhiia",
        "commercialName": "Cabinet dentaire Dr Dhia",
        "categorie": "3",
        "postalAddress": "Num 5, Rue de la joie",
        "gouvernorat": "12",
        "gps": "36.801867, 10.107825",
        "tel": "98100100",
        "email": "dak@dak.tn",
        "pwd": "dak@dak.tn",
        "confirmPwd": "dak@dak.tn",
        "twitter": "#",
        "facebook": "#",
        "linkedin": "#",
        "instagram": "#",
        "acceptRdv": "yes",
        "tarif": "",
        "etat": "enabled",
        "role": "pro"
      },
      {
        "id": 102,
        "firstName": "Marouen",
        "lastName": "Barka",
        "commercialName": "Dr Marr",
        "categorie": "5",
        "postalAddress": "Num 20, Rue de la fraternité",
        "gouvernorat": "8",
        "gps": "35.16689506546201, 8.822753043415387",
        "tel": "98300300",
        "email": "mmb@mmb.tn",
        "pwd": "mmb@mmb.tn",
        "confirmPwd": "mmb@mmb.tn",
        "twitter": "#",
        "facebook": "#",
        "linkedin": "#",
        "instagram": "#",
        "acceptRdv": "yes",
        "tarif": "",
        "etat": "enabled",
        "role": "pro"
      },
      {
        "id": 103,
        "firstName": "Hamza",
        "lastName": "Derbel",
        "commercialName": "Dr Hmezmez",
        "categorie": "2",
        "postalAddress": "Num 11, Rue de la rapidité",
        "gouvernorat": "11",
        "gps": "35.50508430674522, 11.047488330096138",
        "tel": "98400400",
        "email": "hd@hd.tn",
        "pwd": "hd@hd.tn",
        "confirmPwd": "hd@hd.tn",
        "twitter": "#",
        "facebook": "#",
        "linkedin": "#",
        "instagram": "#",
        "acceptRdv": "yes",
        "tarif": "",
        "etat": "enabled",
        "role": "pro"
      },
      {
        "id": 104,
        "firstName": "Mohamed",
        "lastName": "Abdellaoui",
        "commercialName": "Dr Abdoul",
        "categorie": "2",
        "postalAddress": "Num 13, Rue de la rivière",
        "gouvernorat": "20",
        "gps": "32.920930351341376, 10.45071195618184",
        "tel": "99332154",
        "email": "abd@abd.tn",
        "pwd": "abd@abd.tn",
        "confirmPwd": "abd@abd.tn",
        "twitter": "#",
        "facebook": "#",
        "linkedin": "#",
        "instagram": "#",
        "acceptRdv": "yes",
        "tarif": "",
        "etat": "enabled",
        "role": "pro"
      }, {
        "id": 105,
        "firstName": "Wassila",
        "lastName": "Mediouni",
        "commercialName": "Dr Wassila",
        "categorie": "1",
        "postalAddress": "Num 1, al jannah w inchallah rabbi yarhmek",
        "gouvernorat": "12",
        "gps": "36.80604007662553, 10.085250622934293",
        "tel": "99109910",
        "email": "wamed@wamed.tn",
        "pwd": "wamed@wamed.tn",
        "confirmPwd": "wamed@wamed.tn",
        "twitter": "#",
        "facebook": "#",
        "linkedin": "#",
        "instagram": "#",
        "acceptRdv": "yes",
        "tarif": "",
        "etat": "enabled",
        "role": "pro"
      }




      ];

    for (let i = 0; i < proUsersData.length; i++) {
      proUsers.push(proUsersData[i]);
      localStorage.setItem("proUsers", JSON.stringify(proUsers));
    }



    localStorage.setItem("idProUser", JSON.stringify(111));
    localStorage.setItem("demoData", JSON.stringify(true));

    window.location.reload();





  } else {
    alert("donnees deja importees");
  }





}


