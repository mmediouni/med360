'use strict';
function addAdministrator() {

  //  Liste des categories
  var categories = [
    "Dentiste",
    "Dermatologue",
    "Cardiologue",
    "Radiologue",
    "kinésithérapeute",
    "Infirmier",
    "Laboratoire d'analyses médicale",
    "Médecin de famille",
    "Orthophoniste",
    "Pharmacien",
    "Vétérinaire",
    "Opticien",
    "Taxiste"
  ];
  //  sauvegarde des Categories
  localStorage.setItem("categories", JSON.stringify(categories));
  
  //  Liste des Gouvernorats
  var gouvernorates = [
    "Ariana",
    "Beja",
    "Ben Arous",
    "Bizerte",
    "Gabes",
    "Gafsa",
    "Jendouba",
    "Kairouan",
    "Kasserine",
    "Kebili",
    "Le Kef",
    "Mahdia",
    "Manouba",
    "Medenine",
    "Monastir",
    "Nabeul",
    "Sfax",
    "Sidi Bouzid",
    "Siliana",
    "Sousse",
    "Tataouine",
    "Tozeur",
    "Tunis",
    "Zaghouan",
  ];

  //  sauvegarde des Gouvernorats
  localStorage.setItem("gouvernorates", JSON.stringify(gouvernorates));


  var users = getAllObjects("users");
  console.log(users);

  if (users.length === 0) {
    console.log("users is empty");
    

    var adminInfo = {
      "id": '1',
      "firstName": "Mediouni",
      "lastName": "Mohamed",
      "email": "admin@admin.tn",
      "pwd": "admin123",
      "confirmPwd": "admin123",
      "tel": "55442295",
      "etat": "enabled",
      "role": "admin"
    }

    users.push(adminInfo);
    console.log(users);
    localStorage.setItem("users", JSON.stringify(users));
  } else {
    console.log('hello');
  }
}

addAdministrator();
function ShowUserForm() {
  var form = document.getElementById('form');
  var userForm = `<div id="userForm" class="mb-3 ">
  <label for="exampleInputEmail1" class="form-label">Nom</label>
  <input type="text" class="form-control" id="firstName" aria-describedby="emailHelp">
  <div id="firstNameError" class="form-text"></div>
</div>
<div class="mb-3 ">
  <label for="exampleInputEmail1" class="form-label">Prenom</label>
  <input type="text" class="form-control" id="lastName" aria-describedby="emailHelp">
  <div id="lastNameError" class="form-text"></div>
</div>
<div class="mb-3 ">
  <label for="exampleInputEmail1" class="form-label">Numero de Telephone</label>
  <input type="text" class="form-control" id="tel" aria-describedby="emailHelp">
  <div id="telError" class="form-text"></div>
</div>
<div class="mb-3 ">
<label for="exampleInputEmail1" class="form-label">Adresse Email</label>
<input type="email" class="form-control" id="email" aria-describedby="emailHelp">
<div id="emailError" class="form-text">We'll never share your email with anyone else.</div>
</div>
<div class="mb-3">
<label for="exampleInputPassword1" class="form-label">Mot de passe</label>
<input type="password" class="form-control" id="pwd">
<div id="pwdEroor" class="form-text">We'll never share your password with anyone else.</div>
</div>
<div class="mb-3">
  <label for="exampleInputPassword1" class="form-label">Confirmer le mot de passe</label>
  <input type="password" class="form-control" id="confirmPwd">
  <div id="confPwdEroor" class="form-text">We'll never share your email with anyone else.</div>
</div>

<button type="submit" onclick="signup();" class="btn btn-primary">Submit</button>
</div>`;
  form.innerHTML = userForm;
}

function ShowProForm() {
  var form = document.getElementById('form');
  var proForm = `<div id="proForm" style="padding: 2%">

  <div class="row">

      <div class="col-sm-4">
          <label class="control-label col-form-label"><strong style="color: black">Nom</strong></label>
          <input id="lastName" type="text" class="form-control rounded" placeholder="Nom" name="Nom">
          <div id="lastNameError" class="form-text"></div>
      </div>

      <div class="col-sm-4">
          <label class="control-label col-form-label"><strong style="color: black">Prénom</strong></label>
          <input id="firstName" type="text" class="form-control rounded" placeholder="Prénom" name="Prenom">
          <div id="firstNameError" class="form-text"></div>
      </div>
      <div class="col-sm-4">
          <label class="control-label col-form-label"><strong style="color: black">Nom commercial</strong></label>
          <input id="commercialName" type="text" class="form-control rounded" placeholder="Nom commercial" name="NomPrenom">
          <div id="commercialNameError" class="form-text"></div>
      </div>
      <div class="col-sm-4">
          <label class="control-label col-form-label"><strong style="color: black">Adresse E-mail</strong></label>
          <input id="email" type="email" class="form-control rounded" placeholder="E-mail" name="Email">
          <div id="emailError" class="form-text"></div>
      </div>
      <div class="col-sm-4">
          <label class="control-label col-form-label"><strong style="color: black">Mot de passe</strong></label>
          <input id="pwd" type="password" class="form-control rounded" placeholder="Mot de passe" name="Email">
          <div id="pwdError" class="form-text"></div>
      </div>
      <div class="col-sm-4">
          <label class="control-label col-form-label"><strong style="color: black">Confirmer le mot de passe</strong></label>
          <input id="confirmPwd" type="password" class="form-control rounded" placeholder="Confirmer le mot de passe" name="Email">
          <div id="confirmPwdError" class="form-text"></div>
      </div>

      <div class="col-sm-4">
          <label class="control-label col-form-label"><strong style="color: black">Téléphone</strong></label>
          <input id="tel" type="text" class="form-control rounded" placeholder="Téléphone" name="Telephone1">
          <div id="telError" class="form-text"></div>
      </div>
      
      <div class="col-sm-4">
          <label class="control-label col-form-label"><strong
                  style="color: black">Spécialité</strong></label>
          <select id="categorie" class="form-control rounded valid" name="Categorie" aria-required="true" aria-invalid="false">
              
          </select>
          
          <div id="categorieError" class="form-text"></div>
      </div>
      <div class="col-sm-4">
          <label class="control-label col-form-label"><strong style="color: black">Adresse postale</strong></label>
          <input id="postalAddress" type="text" class="form-control rounded" placeholder="Adresse postale" name="AdressePostale">
          <div id="postalAddressError" class="form-text"></div>
      </div>
      <div class="col-sm-4">
          <label class="control-label col-form-label"><strong
              style="color: black">Gouvernorat</strong></label>
      <select id="gouvernorat" class="form-control rounded valid" name="Categorie" aria-required="true" aria-invalid="false">
          <option value="">choisir</option>
          <option value="Tunis">Tunis</option>
          <option value="Manouba">Manouba</option>
          <option value="Ariana">Ariana</option>
          <option value="Sousse">Sousse</option>
          <option value="Ben Arous">Ben Arous</option>
      </select>
      <div id="gouvernoratError" class="form-text"></div>                
      </div>
      <div class="col-sm-4">
          <label class="control-label col-form-label"><strong style="color: black">Coordonnées GPS</strong></label>
          <input id="gps" type="text" class="form-control rounded" placeholder="Coordonnées GPS" name="gps">
          <div id="gpsError" class="form-text"></div>
      </div>


      <div class="form-group terms-group">
      <input type="checkbox" class="user-input" name="condition" id="condition" required="">
      <label for="html">J'accepte les <span class="privacy" data-toggle="modal">CGU</span> ainsi que la <span class="privacy" data-toggle="modal" data-target="#charte_charte">charte</span> de Médecin360.tn</label>
      <span style="color: rgb(255, 255, 0); " id="cgu_error"></span>
                                          </div>




      <input type="hidden" name="Etat" value="En attente">
  </div>
   <br>
  <button type="submit" onclick="signup();" class="btn btn-primary">S'inscrire</button>
  
  
</div>`;
  form.innerHTML = proForm;
  displayCategories();
  displayGovernorates();
}

function signup() {
  var proForm = document.getElementById('proForm');
  var userForm = document.getElementById('userForm');

  console.log("proForm : ", proForm);
  console.log("userForm : ", userForm);

  if (proForm == null) {
    //user form operations

    var firstName = document.getElementById("firstName").value;
    var verifFirstName = verifLength(firstName, 4);
    if (verifFirstName) {
      document.getElementById("firstNameError").innerHTML = "";
    } else {
      document.getElementById("firstNameError").innerHTML =
        "First name have at least 4 charactére";
      document.getElementById("firstNameError").style.color = "red";
    }
    var lastName = document.getElementById("lastName").value;
    var verifLastName = verifLength(lastName, 5);
    if (verifLastName) {
      document.getElementById("lastNameError").innerHTML = "";
    } else {
      document.getElementById("lastNameError").innerHTML =
        "Last name have at least 5 charactére";
      document.getElementById("lastNameError").style.color = "red";
    }
    var email = document.getElementById("email").value;
    var verifEmail = validateEmail(email);
    if (verifEmail) {
      document.getElementById("emailError").innerHTML = "";
    } else {
      document.getElementById("emailError").innerHTML = "invalide email";
      document.getElementById("emailError").style.color = "red";
    }
    var pwd = document.getElementById("pwd").value;
    var verifPwd = verifLength(pwd, 8);
    if (verifPwd) {
      document.getElementById("pwdEroor").innerHTML = "";
    } else {
      document.getElementById("pwdEroor").innerHTML =
        "password have at least 8 charactéres";
      document.getElementById("pwdEroor").style.color = "red";
    }
    var confirmPwd = document.getElementById("confirmPwd").value;
    if (pwd == confirmPwd) {
      document.getElementById("confPwdEroor").innerHTML = "";
    } else {
      document.getElementById("confPwdEroor").innerHTML = "password invalide";
      document.getElementById("confPwdEroor").style.color = "red";
    }
    var tel = document.getElementById("tel").value;
    if (tel.length == 8) {
      document.getElementById("telError").innerHTML = "";
    } else {
      document.getElementById("telError").innerHTML =
        "tel have at least 8 charactére";
      document.getElementById("telError").style.color = "red";

      console.log("my name", firstName);
      console.log("my last name", lastName);
      console.log("my email", email);
      console.log("my password", pwd);
      console.log("my confirm", confirmPwd);
      console.log("my number", tel);
    }

    if (
      verifFirstName &&
      verifLastName &&
      verifEmail &&
      verifPwd &&
      pwd == confirmPwd &&
      tel.length == 8
    ) {
      //   Récupération de l'id

      var idUser = JSON.parse(localStorage.getItem("idUser") || "10");

      //  regroupement des valeurs dans un objet JSON

      var user = {
        id: idUser,
        firstName: firstName,
        lastName: lastName,
        email: email,
        pwd: pwd,
        confirmPwd: confirmPwd,
        tel: tel,
        etat: 'disabled',
        role: "user",
      };

      // recupertaion des anciens utilisateurs

      var users = JSON.parse(localStorage.getItem("users") || "[]");

      // ajout de l'objet user dans le tableau users

      users.push(user);

      //  sauvegarde des utilisateurs

      localStorage.setItem("users", JSON.stringify(users));

      // incrémantation de l'id et sauvegarde

      localStorage.setItem("idUser", idUser + 1);
      document.getElementById("messageValidation").innerHTML = `
      <div class="alert alert-primary" role="alert">
  Merci pour votre inscription <a href="login.html" class="alert-link">Pour se connecter cliquez ici</a>.</div>
      `;
    }


  } else {
    //pro form operations

    var firstName = document.getElementById("firstName").value;
    var verifFirstName = verifLength(firstName, 4);
    if (verifFirstName) {
      document.getElementById("firstNameError").innerHTML = "";
    } else {
      document.getElementById("firstNameError").innerHTML =
        "First name must have at least 4 characteres";
      document.getElementById("firstNameError").style.color = "red";
    }

    var lastName = document.getElementById("lastName").value;
    var verifLastName = verifLength(lastName, 5);
    if (verifLastName) {
      document.getElementById("lastNameError").innerHTML = "";
    } else {
      document.getElementById("lastNameError").innerHTML =
        "Last name must have at least 5 characteres";
      document.getElementById("lastNameError").style.color = "red";
    }

    var commercialName = document.getElementById("commercialName").value;
    var verifcommercialName = verifLength(commercialName, 5);
    if (verifcommercialName) {
      document.getElementById("commercialNameError").innerHTML = "";
    } else {
      document.getElementById("commercialNameError").innerHTML =
        "First name must have at least 5 characteres";
      document.getElementById("commercialNameError").style.color = "red";
    }

    var gps = document.getElementById("gps").value;
    var verifGPSCordinates = verifLength(gps, 5);
    if (verifGPSCordinates) {
      document.getElementById("gpsError").innerHTML = "";
    } else {
      document.getElementById("gpsError").innerHTML =
        "First name must have at least 5 characteres";
      document.getElementById("gpsError").style.color = "red";
    }

    var postalAddress = document.getElementById("postalAddress").value;
    var verifpostalAddress = verifLength(postalAddress, 10);
    if (verifpostalAddress) {
      document.getElementById("postalAddressError").innerHTML = "";
    } else {
      document.getElementById("postalAddressError").innerHTML =
        "Postal Address must have at least 10 characteres";
      document.getElementById("postalAddressError").style.color = "red";
    }

    var gouvernorat = document.getElementById("gouvernorat").value;
    if (gouvernorat == "") {
      document.getElementById("gouvernoratError").innerHTML = "Merci de choisir une categorie";
      document.getElementById("gouvernorat").style.borderColor = "red";
      document.getElementById("gouvernoratError").style.color = "red";
    } else {
      document.getElementById("gouvernoratError").innerHTML = "";
      document.getElementById("gouvernorat").style.borderColor = "green";
    }



    var email = document.getElementById("email").value;
    var verifEmail = validateEmail(email);
    if (verifEmail) {
      document.getElementById("emailError").innerHTML = "";
    } else {
      document.getElementById("emailError").innerHTML = "invalide email";
      document.getElementById("emailError").style.color = "red";
    }





    var pwd = document.getElementById("pwd").value;
    var verifPwd = verifLength(pwd, 8);
    if (verifPwd) {
      document.getElementById("pwdError").innerHTML = "";
    } else {
      document.getElementById("pwdError").innerHTML =
        "password have at least 8 charactéres";
      document.getElementById("pwdError").style.color = "red";
    }
    var confirmPwd = document.getElementById("confirmPwd").value;
    if (pwd == confirmPwd) {
      document.getElementById("confirmPwdError").innerHTML = "";
    } else {
      document.getElementById("confirmPwdError").innerHTML = "password invalide";
      document.getElementById("confirmPwdError").style.color = "red";
    }


    var categorie = document.getElementById("categorie").value;

    if (categorie == "") {
      document.getElementById("categorieError").innerHTML = "Merci de choisir une categorie";
      document.getElementById("categorie").style.borderColor = "red";
      document.getElementById("categorieError").style.color = "red";
    } else {
      document.getElementById("categorieError").innerHTML = "";
      document.getElementById("categorie").style.borderColor = "green";
    }


    var tel = document.getElementById("tel").value;
    if (tel.length == 8) {
      document.getElementById("telError").innerHTML = "";
    } else {
      document.getElementById("telError").innerHTML =
        "tel have at least 8 charactére";
      document.getElementById("telError").style.color = "red";
    }


    var CGU = document.getElementById("condition").checked;

    if (CGU) {
      document.getElementById("cgu_error").innerHTML = "";
    } else {
      document.getElementById("cgu_error").innerHTML = "Vous devez accepter les CGU";
      document.getElementById("cgu_error").style.color = "red";
    }


    if (
      verifFirstName &&
      verifLastName &&
      verifEmail &&
      verifPwd &&
      verifcommercialName &&
      verifGPSCordinates &&
      verifpostalAddress &&
      pwd == confirmPwd &&
      tel.length == 8 &&
      (gouvernorat !== '') &&
      (categorie !== '') &&
      CGU
    ) {
      //   Récupération de l'id

      var idProUser = JSON.parse(localStorage.getItem("idProUser") || "10");

      //  regroupement des valeurs dans un objet JSON

      var proUser = {
        id: idProUser,
        firstName: firstName,
        lastName: lastName,
        commercialName: commercialName,
        categorie: categorie,
        postalAddress: postalAddress,
        gouvernorat: gouvernorat,
        gps: gps,
        tel: tel,
        email: email,
        pwd: pwd,
        confirmPwd: confirmPwd,
        twitter: '#',
        facebook: '#',
        linkedin: '#',
        instagram: '#',
        acceptRdv: 'yes',
        tarif: '',
        etat: 'enabled',
        role: "pro",
      };

      // recupertaion des anciens utilisateurs

      var proUsers = JSON.parse(localStorage.getItem("proUsers") || "[]");

      // ajout de l'objet user dans le tableau users

      proUsers.push(proUser);

      //  sauvegarde des utilisateurs

      localStorage.setItem("proUsers", JSON.stringify(proUsers));

      // incrémantation de l'id et sauvegarde

      localStorage.setItem("idProUser", idProUser + 1);
      document.getElementById("messageValidation").innerHTML = `
      <div class="alert alert-primary" role="alert">
  Merci pour votre inscription <a href="login.html" class="alert-link">Pour se connecter cliquez ici</a>.</div>
      `;
    }
  }

}

function verifLength(chaine, nb) {
  return chaine.length >= nb;
}

function validateEmail(email) {
  const regExp =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return regExp.test(String(email).toLowerCase());
}

function displayCategories() {
  var categories = [
    "Dentiste",
    "Dermatologue",
    "Cardiologue",
    "Radiologue",
    "kinésithérapeute",
    "Infirmier",
    "Laboratoire d'analyses médicale",
    "Médecin de famille",
    "Orthophoniste",
    "Pharmacien",
    "Vétérinaire",
    "Opticien",
    "Taxiste"
  ];
  //  sauvegarde des Categories

  localStorage.setItem("categories", JSON.stringify(categories));

  var categoryList = `<option value="">choisir</option>`;
  for (let i = 0; i < categories.length; i++) {
    categoryList = categoryList + `<option value="${i}">${categories[i]}</option>`;
  }
  document.getElementById("categorie").innerHTML = categoryList;

}

function displayTopBar() {
  var loggedUser = getAllObjects("loggedUser");
  var topbar = document.getElementById("topbar");
  var footer = document.getElementById("footer");
  var footerContent = ``;
  var webSiteInfo = {
    name: 'Médecin360',
    twitter: 'https://twitter.com/m_mediouni',
    facebook: 'https://facebook.com/m.elmediouni',
    instagram: 'https://instagram.com/m_mediouni',
    linkedin: 'https://www.linkedin.com/in/m-mediouni/',
    tel: '+216 55442295',
    email: 'elmediouni2003@gmail.com',
    developerName: 'Mediouni Mohamed',
    developerWebSite: 'https://www.github.com/mmediouni/'

  }
  footerContent = `<div class="container d-md-flex py-4">
  <div class="me-md-auto text-center text-md-start">
    <div class="copyright">
      &copy; Copyright <strong><span>${webSiteInfo.name}</span></strong>. All Rights Reserved
    </div>
    <div class="credits">
      Developed by <a target="_blank" href="${webSiteInfo.developerWebSite}">${webSiteInfo.developerName}</a>
    </div>
  </div>
  <div class="social-links text-center text-md-right pt-3 pt-md-0">
    <a target="_blank" href="${webSiteInfo.twitter}" class="twitter"><i class="bx bxl-twitter"></i></a>
    <a target="_blank" href="${webSiteInfo.facebook}" class="facebook"><i class="bx bxl-facebook"></i></a>
    <a target="_blank" href="${webSiteInfo.instagram}" class="instagram"><i class="bx bxl-instagram"></i></a>
    <a target="_blank" href="${webSiteInfo.linkedin}" class="linkedin"><i class="bx bxl-linkedin"></i></a>
  </div>
</div>`
  var UserTopBarContent = `<div class="container d-flex justify-content-between">
  <div class="contact-info d-flex align-items-center">
    <i class="bi bi-envelope"></i> <a href="mailto:${webSiteInfo.email}">${webSiteInfo.email}</a>
    <i class="bi bi-phone"></i> ${webSiteInfo.tel}
  </div>
  <span id='horloge' style="background-color:transparent;color:green;font-size:18px;"></span>
  <div class=" d-flex">
        <i class="bi bi-record-fill"></i> Bonjour ${loggedUser.firstName}  ${loggedUser.lastName}
      </div>
  <div class="d-none d-lg-flex social-links align-items-center">
    <a href="${webSiteInfo.twitter}" target="_blank" class="twitter"><i class="bi bi-twitter"></i></a>
    <a href="${webSiteInfo.facebook}" target="_blank" class="facebook"><i class="bi bi-facebook"></i></a>
    <a href="${webSiteInfo.instagram}" target="_blank" class="instagram"><i class="bi bi-instagram"></i></a>
    <a href="${webSiteInfo.linkedin}" target="_blank" class="linkedin"><i class="bi bi-linkedin"></i></i></a>
  </div>
</div>`;
  var ProUserTopBarContent = `<div class="container d-flex justify-content-between">
<div class="contact-info d-flex align-items-center">
  <i class="bi bi-envelope"></i> <a href="mailto:${webSiteInfo.email}">${webSiteInfo.email}</a>
  <i class="bi bi-phone"></i> ${webSiteInfo.tel}
</div>
<span id='horloge' style="background-color:transparent;color:#18d26e;font-size:25px;"></span>
<div class=" d-flex">
      <i class="bi bi-record-fill"></i> Bonjour Dr. ${loggedUser.firstName}  ${loggedUser.lastName}
    </div>
<div class="d-none d-lg-flex social-links align-items-center">
  <a href="${webSiteInfo.twitter}" target="_blank" class="twitter"><i class="bi bi-twitter"></i></a>
  <a href="${webSiteInfo.facebook}" target="_blank" class="facebook"><i class="bi bi-facebook"></i></a>
  <a href="${webSiteInfo.instagram}" target="_blank" class="instagram"><i class="bi bi-instagram"></i></a>
  <a href="${webSiteInfo.linkedin}" target="_blank" class="linkedin"><i class="bi bi-linkedin"></i></i></a>
</div>
</div>`;
  var defaultTopBarContent = `<div class="container d-flex justify-content-between">
  <div class="contact-info d-flex align-items-center">
    <i class="bi bi-envelope"></i> <a href="mailto:${webSiteInfo.email}">${webSiteInfo.email}</a>
    <i class="bi bi-phone"></i> ${webSiteInfo.tel}
  </div>
  <span id='horloge' style="background-color:transparent;color:red;font-size:18px;"></span>
  <div class=" d-flex">
        <i style="color: red;" class="bi bi-record-fill"></i> No logged User
      </div>
  <div class="d-none d-lg-flex social-links align-items-center">
    <a href="${webSiteInfo.twitter}" target="_blank" class="twitter"><i class="bi bi-twitter"></i></a>
    <a href="${webSiteInfo.facebook}" target="_blank" class="facebook"><i class="bi bi-facebook"></i></a>
    <a href="${webSiteInfo.instagram}" target="_blank" class="instagram"><i class="bi bi-instagram"></i></a>
    <a href="${webSiteInfo.linkedin}" target="_blank" class="linkedin"><i class="bi bi-linkedin"></i></i></a>
  </div>
</div>`;


  switch (loggedUser.role) {
    case 'user':
      topbar.innerHTML = UserTopBarContent;
      footer.innerHTML = footerContent;
      break;
    case 'pro':
      topbar.innerHTML = ProUserTopBarContent;
      footer.innerHTML = footerContent;
      break;
    default:
      topbar.innerHTML = defaultTopBarContent;
      footer.innerHTML = footerContent;
      break;
  }

}

function displayNav() {

  var webSiteInfo = {
    webSiteName: 'Médecin360',
    webSiteDescription: `CrocoCoder FullStack JS Project by <a href="https://www.linkedin.com/in/m-mediouni/" target="_blank">Mohamed Mediouni</a>`

  }

  var header = document.getElementById("header");
  var originalNavBarList = `
  <div class="container d-flex align-items-center">

      <h1 class="logo me-auto"><a href="index.html">${webSiteInfo.webSiteName}</a></h1>
      <!-- Uncomment below if you prefer to use an image logo -->
      <!-- <a href="index.html" class="logo me-auto"><img src="assets/img/logo.png" alt="" class="img-fluid"></a>-->

      <nav id="navbar" class="navbar order-last order-lg-0">
        <ul>
          <li><a class="nav-link scrollto" href="index.html">Home</a></li>
          <li><a class="nav-link scrollto" href="index.html#why-us">À propos de nous</a></li>
          <!-- <li><a class="nav-link scrollto" href="index.html#services">Services</a></li> -->
          <!-- <li><a class="nav-link scrollto" href="index.html#departments">Departments</a></li> -->
          <li><a class="nav-link scrollto" href="index.html#doctors">L'Annuaire des professionnels de Santé</a></li>
          <!-- <li><a class="nav-link scrollto" href="#contact">Contact</a></li>  -->
        </ul>
        <i class="bi bi-list mobile-nav-toggle"></i>
      </nav><!-- .navbar -->
      <a href="signup.html" class="appointment-btn scrollto">Signup</a>
      <a href="login.html" class="appointment-btn scrollto">Login</a>
      <a href="#" onclick="logout()"  class="appointment-btn scrollto">Logout</a>
      <a href="appointment.html" class="appointment-btn scrollto">Prendre un Rendez-vous</a>
      </div>`;
  var defaulNavBarList = `
  <div class="container d-flex align-items-center">

      <h1 class="logo me-auto"><a href="index.html">${webSiteInfo.webSiteName}</a></h1>
      <!-- Uncomment below if you prefer to use an image logo -->
      <!-- <a href="index.html" class="logo me-auto"><img src="assets/img/logo.png" alt="" class="img-fluid"></a>-->

      <nav id="navbar" class="navbar order-last order-lg-0">
        <ul>
          <li><a class="nav-link scrollto" href="index.html">Home</a></li>
          <li><a class="nav-link scrollto" href="index.html#why-us">À propos de nous</a></li>
          <!-- <li><a class="nav-link scrollto" href="index.html#services">Services</a></li> -->
          <!-- <li><a class="nav-link scrollto" href="index.html#departments">Departments</a></li> -->
          <li><a class="nav-link scrollto" href="index.html#doctors">L'Annuaire des professionnels de Santé</a></li>
          <!-- <li><a class="nav-link scrollto" href="#contact">Contact</a></li>  -->
        </ul>
        <i class="bi bi-list mobile-nav-toggle"></i>
      </nav><!-- .navbar -->
      <a href="signup.html" class="appointment-btn scrollto">SignUp</a>
      <a href="login.html" class="appointment-btn scrollto">Login</a>
      <a href="appointment.html" class="appointment-btn scrollto">Prendre un Rendez-vous</a>

    </div>`;
  var userNavBarList = `
  <div class="container d-flex align-items-center">

      <h1 class="logo me-auto"><a href="index.html">${webSiteInfo.webSiteName}</a></h1>
      <!-- Uncomment below if you prefer to use an image logo -->
      <!-- <a href="index.html" class="logo me-auto"><img src="assets/img/logo.png" alt="" class="img-fluid"></a>-->

      <nav id="navbar" class="navbar order-last order-lg-0">
        <ul>
          <li><a class="nav-link scrollto" href="index.html">Home</a></li>
          <li><a class="nav-link scrollto" href="index.html#why-us">À propos de nous</a></li>
          <!-- <li><a class="nav-link scrollto" href="index.html#services">Services</a></li> -->
          <!-- <li><a class="nav-link scrollto" href="index.html#departments">Departments</a></li> -->
          <li><a class="nav-link scrollto" href="index.html#doctors">L'Annuaire des professionnels de Santé</a></li>
          <!-- <li><a class="nav-link scrollto" href="#contact">Contact</a></li>  -->
        </ul>
        <i class="bi bi-list mobile-nav-toggle"></i>
      </nav><!-- .navbar -->
      <a href="appointment.html" class="appointment-btn scrollto">Prendre un Rendez-vous</a>
      <a href="edit-profile.html" onclick="showProfileInfo()" class="appointment-btn scrollto">Paramètres</a>
      <a href="#" onclick="logout()" class="appointment-btn scrollto">Logout</a>

    </div>`;
  var proNavBarList = `
  <div class="container d-flex align-items-center">

      <h1 class="logo me-auto"><a href="index.html">${webSiteInfo.webSiteName}</a></h1>
      <!-- Uncomment below if you prefer to use an image logo -->
      <!-- <a href="index.html" class="logo me-auto"><img src="assets/img/logo.png" alt="" class="img-fluid"></a>-->

      <nav id="navbar" class="navbar order-last order-lg-0">
        <ul>
          <li><a class="nav-link scrollto" href="index.html">Home</a></li>
          <!-- <li><a class="nav-link scrollto" href="index.html#why-us">À propos de nous</a></li> -->
          <!-- <li><a class="nav-link scrollto" href="index.html#services">Services</a></li> -->
          <!-- <li><a class="nav-link scrollto" href="index.html#departments">Departments</a></li> -->
          <li><a class="nav-link scrollto" href="index.html#doctors">L'Annuaire des professionnels de Santé</a></li>
          <!-- <li><a class="nav-link scrollto" href="#contact">Contact</a></li>  -->
        </ul>
        <i class="bi bi-list mobile-nav-toggle"></i>
      </nav><!-- .navbar -->
      <a href="admin/index.html" class="appointment-btn scrollto">Admin Panel</a>
      <a href="#" onclick="logout()" class="appointment-btn scrollto">Logout</a>
      <a href="appointment.html" class="appointment-btn scrollto">Prendre un Rendez-vous</a>

    </div>`;


  var loggedUser = getAllObjects("loggedUser");
  switch (loggedUser.role) {
    case 'user':
      header.innerHTML = userNavBarList;
      break;
    case 'admin':
      header.innerHTML = userNavBarList;
      break;
    case 'pro':
      header.innerHTML = proNavBarList;
      break;
    default:
      header.innerHTML = defaulNavBarList;
      break;
  }

  var hero = document.getElementById("hero");
  var heroList = `
  <div class="container">
    <h1>Bienvenue dans ${webSiteInfo.webSiteName}</h1>
    <h2>${webSiteInfo.webSiteDescription}</h2>
    <br>
    <p>Pour se connecter en tant que admin veuillez utiliser les identifiants suivant:</p>
    <h6><span style="color:red"; >Email:</span> admin@admin.tn </h6>
    <h6><span style="color:red"; >Mot de passe:</span> admin123 </h6>
    <a href="#why-us" class="btn-get-started scrollto">À propos de nous</a>
  </div>`;

  switch (hero) {
    case null:
      break;
    default:
      hero.innerHTML = heroList;
      break;
  }
}

function displayCounts() {
  var categories = getAllObjects("categories");
  var users = getAllObjects("users");
  var proUsers = getAllObjects("proUsers");
  var rdvs = getAllObjects("rdvs");


  var counts = document.getElementById("counts");
  console.log(counts);

  var countsList = ` <div class="container">

  <div class="row">

    <div class="col-lg-3 col-md-6">
      <div class="count-box">
        <i class="fas fa-user-md"></i>
        <span data-purecounter-start="0" data-purecounter-end="${proUsers.length}" data-purecounter-duration="1" class="purecounter"></span>
        <p>Professionnels de santé</p>
      </div>
    </div>

    <div class="col-lg-3 col-md-6 mt-5 mt-md-0">
      <div class="count-box">
        <i class="far fa-hospital"></i>
        <span data-purecounter-start="0" data-purecounter-end="${categories.length}" data-purecounter-duration="1" class="purecounter"></span>
        <p>Categories</p>
      </div>
    </div>

    <div class="col-lg-3 col-md-6 mt-5 mt-lg-0">
      <div class="count-box">
      <i class="fas fa-users"></i>
        <span data-purecounter-start="0" data-purecounter-end="${users.length}" data-purecounter-duration="1" class="purecounter"></span>
        <p>Utilisateurs</p>
      </div>
    </div>

    <div class="col-lg-3 col-md-6 mt-5 mt-lg-0">
      <div class="count-box">
      <i class="fas fa-calendar-alt"></i>
        <span data-purecounter-start="0" data-purecounter-end="${rdvs.length}" data-purecounter-duration="1" class="purecounter"></span>
        <p>Rendez-vous</p>
      </div>
    </div>
  </div>

</div>`;

  switch (counts) {
    case null:
      break;
    default:
      counts.innerHTML = countsList;
      break;
  }

}

function showLastForDoctor() {
  var randomDoctor = document.getElementById("randomDoctor");
  var randomDoctorList = ``;
  var proUsers = getAllObjects("proUsers");
  var loggedUser = getAllObjects("loggedUser");
  var categories = getAllObjects("categories");
  var gouvernorates = getAllObjects("gouvernorates");
  var max = 0;
  var min = 0;
  var index = 0;
  // Boucle pour avoir les 4 derniers indices du tableau 
  for (let i = 0; i < proUsers.length; i++) {
    max = i + 1;
    min = max - 4;
  }
  for (let i = min; i < max; i++) {

    randomDoctorList = randomDoctorList + `
<div class="col-lg-6 mt-4">
          <div class="member d-flex align-items-start">
            <div class="map"><iframe width="300" height="300" src="https://maps.google.com/maps?q=${proUsers[i].gps}&t=&z=13&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe>
            </div>
            <div class="member-info">
              <h4>${proUsers[i].firstName} ${proUsers[i].lastName}</h4>
              <span>${categories[proUsers[i].categorie]} : ${proUsers[i].commercialName} </span>
              <p><span>Adresse: ${proUsers[i].postalAddress}, ${gouvernorates[proUsers[i].gouvernorat]}</span></p>
              <p>Tel: <a href="tel:+216${proUsers[i].tel}">${proUsers[i].tel}</a></p>
              <p>Mail: <a href="mailto:${proUsers[i].email}">${proUsers[i].email}</a></p>
              <div class="social">
                <a href="${proUsers[i].twitter}"><i class="ri-twitter-fill"></i></a>
                <a href="${proUsers[i].facebook}"><i class="ri-facebook-fill"></i></a>
                <a href="${proUsers[i].instagram}"><i class="ri-instagram-fill"></i></a>
                <a href="${proUsers[i].linkedin}"> <i class="ri-linkedin-box-fill"></i></a>
              </div>
              <br>
              <div class="member-info rdv-btn">
                <a onclick="makeAnOppointement(${loggedUser.id},${proUsers[i].id});" >Prendre RDV</a>
              </div>
              </div>
            </div>
          </div>
        </div>`


  }

  randomDoctor.innerHTML = randomDoctorList;

}

function displayGovernorates() {
  var gouvernorates = [
    "Ariana",
    "Beja",
    "Ben Arous",
    "Bizerte",
    "Gabes",
    "Gafsa",
    "Jendouba",
    "Kairouan",
    "Kasserine",
    "Kebili",
    "Le Kef",
    "Mahdia",
    "Manouba",
    "Medenine",
    "Monastir",
    "Nabeul",
    "Sfax",
    "Sidi Bouzid",
    "Siliana",
    "Sousse",
    "Tataouine",
    "Tozeur",
    "Tunis",
    "Zaghouan",
  ];
  //  sauvegarde des Gouvernorats

  localStorage.setItem("gouvernorates", JSON.stringify(gouvernorates));

  var gouvernorateList = `<option value="">choisir</option>`;
  for (let i = 0; i < gouvernorates.length; i++) {
    gouvernorateList = gouvernorateList + `<option value="${i}">${gouvernorates[i]}</option>`;
  }
  document.getElementById("gouvernorat").innerHTML = gouvernorateList;

}

function login() {
  console.log('login ok');
  //Get email input from input
  var email = document.getElementById("email").value;
  console.log(email);
  //valiate email
  var verifEmail = validateEmail(email);
  if (verifEmail) {
    document.getElementById("emailError").innerHTML = "";
  } else {
    document.getElementById("emailError").innerHTML = "Insert a valid email";
    document.getElementById("emailError").style.color = "red";
  }
  //Get password input from input
  var password = document.getElementById("pwd").value;

  //valiate pwd
  var verifPwd = verifLength(password, "1");
  if (verifPwd) {
    document.getElementById("pwdError").innerHTML = "";
  } else {
    document.getElementById("pwdError").innerHTML = "Pwd must a least have 1 char";
    document.getElementById("pwdError").style.color = "red";
  }

  var checkUser = checkIfUserExists(email, password);
  var checkActivation = checkUserActivation(email, password);


  if (checkUser) {
    if (checkActivation) {
      var loggedUser = getAllObjects("loggedUser");
      switch (loggedUser.role) {
        case "user":
          location.replace("index.html");
          break;
        case "admin":
          location.replace("admin/index.html");
          break;
        default:
          location.replace("index.html");
          break;
      }
    } else {
      console.log('checkUser: ', checkUser);
      console.log('checkActivation: ', checkActivation);
      document.getElementById("connexionValidation").innerHTML =
        `<div class="alert alert-info" role="alert">Votre compte est désactivé merci de contacter l'administrateur</div>`;
    }
  } else {
    document.getElementById("connexionValidation").innerHTML =
      `<div class="alert alert-warning" role="alert">Email et/ou mot de passe incorrect!</div>`;
  }
}

function logout() {
  localStorage.removeItem("loggedUser");
  localStorage.removeItem("appointementLink");
  location.reload();
}

function checkIfUserExists(email, password) {
  // declare userExists var for return
  var userExists = false;
  //get all users from local storage  [{},{},{}]
  var users = getAllObjects("users");
  console.log(users);
  var proUsers = getAllObjects("proUsers");
  console.log(proUsers);
  //Loop all users

  for (let i = 0; i < users.length; i++) {
    if (email == users[i].email && password == users[i].pwd) {
      userExists = true;
      var loggedUser = {
        id: users[i].id,
        firstName: users[i].firstName,
        lastName: users[i].lastName,
        email: users[i].email,
        tel: users[i].tel,
        role: users[i].role,
      };

      //localStorage.setItem("loggedUser", JSON.stringify(loggedUser));

      // break pour arreter le traitement suite a la validation de la condition en cours
    } else {
      for (let i = 0; i < proUsers.length; i++) {
        if (email == proUsers[i].email && password == proUsers[i].pwd) {
          userExists = true;
          var loggedUser = {
            id: proUsers[i].id,
            firstName: proUsers[i].firstName,
            lastName: proUsers[i].lastName,
            email: proUsers[i].email,
            tel: proUsers[i].tel,
            role: proUsers[i].role,
          }
          // localStorage.setItem("loggedUser", JSON.stringify(loggedUser));
        }
      }

    }
  }
  return userExists;
}

function checkUserActivation(email, password) {
  // declare userExists var for return
  var userActivated = false;
  //get all users from local storage  [{},{},{}]
  var users = getAllObjects("users");
  var proUsers = getAllObjects("proUsers");
  //Loop all users

  for (let i = 0; i < users.length; i++) {
    if (email == users[i].email && password == users[i].pwd) {
      if (users[i].etat == 'enabled') {
        userActivated = true;
        var loggedUser = {
          id: users[i].id,
          firstName: users[i].firstName,
          lastName: users[i].lastName,
          email: users[i].email,
          tel: users[i].tel,
          role: users[i].role,
        };
        localStorage.setItem("loggedUser", JSON.stringify(loggedUser));
      } else {
        userActivated = false;
        // affichage message pour informer le user que son compte est desactive

      }

      // break pour arreter le traitement suite a la validation de la condition en cours
    } else {
      for (let i = 0; i < proUsers.length; i++) {
        if (email == proUsers[i].email && password == proUsers[i].pwd) {
          if (proUsers[i].etat == 'enabled') {
            userActivated = true;
            var loggedUser = {
              id: proUsers[i].id,
              firstName: proUsers[i].firstName,
              lastName: proUsers[i].lastName,
              email: proUsers[i].email,
              tel: proUsers[i].tel,
              role: proUsers[i].role,
            }
            localStorage.setItem("loggedUser", JSON.stringify(loggedUser));

          } else {
            userActivated = false;
            // affichage message pour informer le user que son compte est desactive
          }
        }
      }
    }
  }
  return userActivated;
}

function getAllObjects(key) {
  return JSON.parse(localStorage.getItem(key) || "[]");
}

function displayAllProUsers() {
  var loggedUser = getAllObjects("loggedUser");
  var proUsers = getAllObjects("proUsers");
  var categories = getAllObjects("categories");
  var gouvernorates = getAllObjects("gouvernorates");
  var maplocation = document.getElementById("map");
  var doctors = document.getElementById('doctors');
  var doctorList = ``;
  for (let i = 0; i < proUsers.length; i++) {
    doctorList = doctorList + `
    <div  class="row">
<div class="col-lg-6 mt-4">
          <div class="member d-flex align-items-start">
            <div class="map"><iframe width="300" height="300" src="https://maps.google.com/maps?q=${proUsers[i].gps}&t=&z=13&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe>
            </div>
            <div class="member-info">
              <h4>${proUsers[i].firstName} ${proUsers[i].lastName}</h4>
              <span>${categories[proUsers[i].categorie]} : ${proUsers[i].commercialName} </span>
              <p><span>Adresse: ${proUsers[i].postalAddress}, ${gouvernorates[proUsers[i].gouvernorat]}</span></p>
              <p>Tel: <a href="tel:+216${proUsers[i].tel}">${proUsers[i].tel}</a></p>
              <p>Mail: <a href="mailto:${proUsers[i].email}">${proUsers[i].email}</a></p>
              <div class="social">
                <a href="${proUsers[i].twitter}"><i class="ri-twitter-fill"></i></a>
                <a href="${proUsers[i].facebook}"><i class="ri-facebook-fill"></i></a>
                <a href="${proUsers[i].instagram}"><i class="ri-instagram-fill"></i></a>
                <a href="${proUsers[i].linkedin}"> <i class="ri-linkedin-box-fill"></i></a>
              </div>
              <br>
              <div class="member-info rdv-btn">
                <a onclick="makeAnOppointement(${loggedUser.id},${proUsers[i].id});" >Prendre RDV</a>
              </div>
              </div>
            </div>
            </div></div>
        </div>`

  }
  document.getElementById("doctors").innerHTML = doctorList;
}

function test() {
  // alert('funtion test OK');
  var gouvList = `<br>
  <h4>Gouvernorat</h4>
  <p>Etape 1 : Choisissez la gouvernorat</p>
  <div>
      <select class="w-100" name="" id="gouvernorat" >
          
      </select>
  </div>
  <br>
        <button onclick="serachDoctor();" style="border: 0px; border-radius: 20px; background-color: #356BB5; color: white;"><span style="padding: 25px;" >Rechercher</span></button>`;

  document.getElementById("gouv").innerHTML = gouvList;
  displayGovernorates();
}

function getTime() {
  var birthday = document.getElementById('birthday').value;
  var time = document.getElementById('time').value;


  console.log(birthday);
  console.log("time : ", time);


  var ts = Date.now();
  // add 30 minutes to milliseconds

  var trenteMinutes = 1800000;

  getDateTimeFromTimeStamp(ts);
  function getDateTimeFromTimeStamp(ts) {

    // convert  timestamp to milliseconds
    // var ts_ms = ts * 1000;


    //  timestamp en milliseconds


    // initialize new Date object
    var date_ob = new Date(ts);
    // year as 4 digits (YYYY)
    var year = date_ob.getFullYear();

    // month as 2 digits (MM)
    var month = ("0" + (date_ob.getMonth() + 1)).slice(-2);

    // date as 2 digits (DD)
    var date = ("0" + date_ob.getDate()).slice(-2);

    // hours as 2 digits (hh)
    var hours = ("0" + date_ob.getHours()).slice(-2);

    // minutes as 2 digits (mm)
    var minutes = ("0" + date_ob.getMinutes()).slice(-2);

    // seconds as 2 digits (ss)
    var seconds = ("0" + date_ob.getSeconds()).slice(-2);

    // date as YYYY-MM-DD format
    console.log("Date as YYYY-MM-DD Format: " + year + "-" + month + "-" + date);

    console.log("\r\n");

    // date & time as YYYY-MM-DD hh:mm:ss format: 
    console.log("Date as YYYY-MM-DD hh:mm:ss Format: " + year + "-" + month + "-" + date + " " + hours + ":" + minutes + ":" + seconds);
    console.log("xDate as YYYY-MM-DD hh:mm:ss Format: " + month + "/" + date + "/" + year + " " + hours + ":" + minutes + ":" + seconds);

    console.log("\r\n");

    // time as hh:mm format: 
    console.log("Time as hh:mm Format: " + hours + ":" + minutes);

    return month + "/" + date + "/" + year + " " + hours + ":" + minutes + ":" + seconds

  }

  //convert date to timestamp
  function toTimestamp(strDate) {
    var datum = Date.parse(strDate);
    return datum / 1000;
  }
  var x = getDateTimeFromTimeStamp(1800000);
  // var initial = "08/01/2021 15:10:00";
  var initial = getDateTimeFromTimeStamp(ts);
  // var rdv = "08/01/2021 16:10:00";
  var rdv = birthday + ' ' + time;
  var bornTime = toTimestamp(initial);
  var actualTime = toTimestamp(rdv);

  alert(actualTime - bornTime);

  if ((actualTime - bornTime) <= 1800) {
    alert("rdv reserve");
  } else {
    alert("rdv ok");
  }

  console.log('difference : ' + (bornTime));

}

function serachDoctor() {
  var proUsers = getAllObjects("proUsers");
  var categories = getAllObjects("categories");
  var loggedUser = getAllObjects("loggedUser");
  var gouvernorates = getAllObjects("gouvernorates");
  var selectedGouvernorat = document.getElementById("gouvernorat").value;
  var selectedCategorie = document.getElementById("categorie").value;
  // alert('gouvernorat : ' + selectedGouvernorat + ' | categorie : ' +selectedCategorie);
  var emptyMsg = false;
  var doctorList = ``;
  for (let i = 0; i < proUsers.length; i++) {

    if (proUsers[i].categorie == selectedCategorie && proUsers[i].gouvernorat == selectedGouvernorat) {
      doctorList = doctorList + `
      <div  class="row">
        <div  class="col-lg-6 mt-4">
                <div class="member d-flex align-items-start">
                  <div class="map"><iframe width="200" height="250" src="https://maps.google.com/maps?q=${proUsers[i].gps}&t=&z=13&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe>
                  </div>
                  <div class="member-info"  >
                    <h4>${proUsers[i].firstName} ${proUsers[i].lastName}</h4>
                    <span>${categories[proUsers[i].categorie]} : ${proUsers[i].commercialName} </span>
                    <p><span>Adresse: ${proUsers[i].postalAddress}, ${gouvernorates[proUsers[i].gouvernorat]}</span></p>
                    <p>Tel: <a href="tel:+216${proUsers[i].tel}">${proUsers[i].tel}</a></p>
                    <p>Mail: <a href="mailto:${proUsers[i].email}">${proUsers[i].email}</a></p>
                    <div class="social">
                      <a href="${proUsers[i].twitter}"><i class="ri-twitter-fill"></i></a>
                      <a href="${proUsers[i].facebook}"><i class="ri-facebook-fill"></i></a>
                      <a href="${proUsers[i].instagram}"><i class="ri-instagram-fill"></i></a>
                      <a href="${proUsers[i].linkedin}"> <i class="ri-linkedin-box-fill"></i></a>
                    </div>
                    
                    </div>
                    
                  </div>
                  <br>
                    <div id="rdv">
                    <a class="btn-get-started" onclick="makeAnOppointement(${loggedUser.id},${proUsers[i].id});" >Prendre RDV</a>
                  </div>
                  
                 
                </div>
                </div>
               
              </div>`;
      emptyMsg = true;
    }


  }
  if (emptyMsg == false) {
    doctorList = `
        <div  class="col-lg-6 mt-4">
        <h2>Pas d'information</h2>
                </div>`;
  }


  document.getElementById("doctors").innerHTML = doctorList;
}

function makeAnOppointement(idloggedUser, idDoctor) {
  if (idloggedUser == undefined) {
    location.replace("login.html");
  } else {

    var appointementLink = {
      idloggedUser: idloggedUser,
      idDoctor: idDoctor
    }
    localStorage.setItem("appointementLink", JSON.stringify(appointementLink));
    location.replace("appointment.html");
    //alert('idloggedUser : ' + idloggedUser + 'idDoctor : ' + idDoctor);
  }
}

function securityForOppointement() {
  var loggedUser = getAllObjects("loggedUser");
  var appointementLink = getAllObjects("appointementLink");
  console.log('appointementLink.idDoctor : ', appointementLink.idDoctor);
  var proUsers = getAllObjects("proUsers");

  var userDB = '';
  var index = '';


  var appointementLink = getAllObjects("appointementLink");

  switch (loggedUser.id) {
    case undefined:
      location.replace("login.html");
      break;
    default:
      switch (appointementLink.idDoctor) {
        case undefined:
          location.replace("search-by-category.html");
          break;
        default:
          for (let i = 0; i < proUsers.length; i++) {
            if (proUsers[i].id == appointementLink.idDoctor) {
              index = i;
              // alert('Doctor ok ' + i);
              // console.log(index);
            }
          }
          document.getElementById("passionName").value = loggedUser.firstName + ' ' + loggedUser.lastName;
          document.getElementById("passionemail").value = loggedUser.email;
          document.getElementById("passionPhone").value = loggedUser.tel;
          document.getElementById("selectedDoctor").value = appointementLink.idDoctor;
          document.getElementById("selectedDoctor").innerHTML = proUsers[index].commercialName;
      }

      break;
  }

}

function securityForSettings() {
  var loggedUser = getAllObjects("loggedUser");
  var proUsers = getAllObjects("proUsers");
  var index = '';


  switch (loggedUser.id) {
    case undefined:
      location.replace("index.html");
      break;
  }

}

function securityForLoginAndSignup() {
  var loggedUser = getAllObjects("loggedUser");

  switch (loggedUser.id) {
    case undefined:
      break;
    default:
      location.replace("index.html");
      break;
  }

}

function validateOppointment() {
  var appointementLink = getAllObjects("appointementLink");
  var loggedUser = getAllObjects("loggedUser");
  var chosenDate = document.getElementById("chosenDate").value;
  var chosenTime = document.getElementById("chosenTime").value;
  var appointementMessage = document.getElementById("appointementMessage").value;


  if (chosenDate != '') {
    document.getElementById("chosenDateError").innerHTML = "";
  } else {
    document.getElementById("chosenDateError").innerHTML =
      "Merci de selectionner une date";
    document.getElementById("chosenDateError").style.color = "red";
  }

  if (chosenTime != '') {
    document.getElementById("chosenTimeError").innerHTML = "";
  } else {
    document.getElementById("chosenTimeError").innerHTML =
      "Merci de selectionner l'heure";
    document.getElementById("chosenTimeError").style.color = "red";
  }


  if (chosenDate != '' && chosenTime != '') {

    // enregistrement du rdv pris

    //   Récupération de l'id du rdv

    var idRdv = JSON.parse(localStorage.getItem("idRdv") || "10");

    //  regroupement des valeurs dans un objet JSON

    var rdv = {
      id: idRdv,
      idUser: appointementLink.idloggedUser,
      idDoctor: appointementLink.idDoctor,
      chosenDate: chosenDate,
      chosenTime: chosenTime,
      date: chosenDate + " " + chosenTime,
      appointementMessage: appointementMessage,
      etat: 'disabled'
    };

    // recupertaion des anciens rdvs

    var rdvs = JSON.parse(localStorage.getItem("rdvs") || "[]");

    // ajout de l'objet user dans le tableau rdvs

    rdvs.push(rdv);

    //  sauvegarde des rdvs

    localStorage.setItem("rdvs", JSON.stringify(rdvs));

    // incrémantation de l'id et sauvegarde

    localStorage.setItem("idRdv", idRdv + 1);

    window.location.replace("edit-profile.html");
    

  } else {
    alert("no data");
  }




}

function editRdv(position) {
  var rdvs = getAllObjects("rdvs");
  var chosenDateID = "chosenDate" + position;
  var chosenTimeID = "chosenTime" + position;
  var appointementMessageID = "appointementMessage" + position;
  var chosenDate = document.getElementById(chosenDateID).value;
  var chosenTime = document.getElementById(chosenTimeID).value;
  var appointementMessage = document.getElementById(appointementMessageID).value;

  var rdv = rdvs[position];
  rdv.appointementMessage = appointementMessage;
  rdv.chosenDate = chosenDate;
  rdv.chosenTime = chosenTime;
  rdv.etat = "disabled";
  rdvs.splice(position, 1, rdv);
  console.log(rdvs);
  localStorage.setItem("rdvs", JSON.stringify(rdvs));
  window.location.reload();

}

function editUserInfo(position) {
  var users = getAllObjects("users");

  var firstName = document.getElementById("firstName").value;
  var verifFirstName = verifLength(firstName, 4);
  if (verifFirstName) {
    document.getElementById("firstNameError").innerHTML = "";
  } else {
    document.getElementById("firstNameError").innerHTML =
      "First name have at least 4 charactére";
    document.getElementById("firstNameError").style.color = "red";
  }
  var lastName = document.getElementById("lastName").value;
  var verifLastName = verifLength(lastName, 5);
  if (verifLastName) {
    document.getElementById("lastNameError").innerHTML = "";
  } else {
    document.getElementById("lastNameError").innerHTML =
      "Last name have at least 5 charactére";
    document.getElementById("lastNameError").style.color = "red";
  }
  var email = document.getElementById("email").value;
  var verifEmail = validateEmail(email);
  if (verifEmail) {
    document.getElementById("emailError").innerHTML = "";
  } else {
    document.getElementById("emailError").innerHTML = "invalide email";
    document.getElementById("emailError").style.color = "red";
  }
  var pwd = document.getElementById("pwd").value;
  var verifPwd = verifLength(pwd, 8);
  if (verifPwd) {
    document.getElementById("pwdEroor").innerHTML = "";
  } else {
    document.getElementById("pwdEroor").innerHTML =
      "password have at least 8 charactéres";
    document.getElementById("pwdEroor").style.color = "red";
  }
  var confirmPwd = document.getElementById("confirmPwd").value;
  if (pwd == confirmPwd) {
    document.getElementById("confPwdEroor").innerHTML = "";
  } else {
    document.getElementById("confPwdEroor").innerHTML = "password invalide";
    document.getElementById("confPwdEroor").style.color = "red";
  }
  var tel = document.getElementById("tel").value;
  if (tel.length == 8) {
    document.getElementById("telError").innerHTML = "";
  } else {
    document.getElementById("telError").innerHTML =
      "tel have at least 8 charactére";
    document.getElementById("telError").style.color = "red";

    console.log("my name", firstName);
    console.log("my last name", lastName);
    console.log("my email", email);
    console.log("my password", pwd);
    console.log("my confirm", confirmPwd);
    console.log("my number", tel);
  }

  if (
    verifFirstName &&
    verifLastName &&
    verifEmail &&
    verifPwd &&
    pwd == confirmPwd &&
    tel.length == 8
  ) {

    //  regroupement des valeurs dans un objet JSON

    var user = users[position];
    user.firstName = firstName;
    user.lastName = lastName;
    user.email = email;
    user.pwd = pwd;
    user.confirmPwd = confirmPwd;
    user.tel = tel;
    users.splice(position, 1, user);
    console.log(users);
    localStorage.setItem("users", JSON.stringify(users));

    document.getElementById("messageValidation").innerHTML = `
      <div class="alert alert-primary" role="alert">Modifications enregistrées. Votre compte sera deconnecter dans 10 secondes</div>`;

    setTimeout(function () {
      logout();
    }, 10000);
  }



}

// a terminer par ici
function editProUserInfo(position) {
  var users = getAllObjects("users");
}

function getUserInfoByID(id, userType) {
  var user = getAllObjects(userType);

  for (let i = 0; i < user.length; i++) {
    if (user[i].id == id) {
      var userData = {
        lastName: user[i].lastName,
        firstName: user[i].firstName,
        tel: user[i].tel,
        email: user[i].email,
      };
    }
  }
  return userData;
}

function showProfileInfo() {
  var users = getAllObjects("users");
  var proUsers = getAllObjects("proUsers");
  var rdvs = getAllObjects("rdvs");
  var loggedUser = getAllObjects("loggedUser");
  var userInfo = getUserInfoByID(loggedUser.id, "users");
  var faqlist1 = document.getElementById("faq-list-1");
  var faqlist2 = document.getElementById("faq-list-2");
  var userEditForm = ``;

  var rdvList = `<table class="table">
  <thead>
    <tr>
      <th scope="col">Date</th>
      <th scope="col">Docteur</th>
      <th scope="col">Etat</th>
      <th scope="col">Action</th>
      
    </tr>
  </thead>
  <tbody>`;

  for (let i = 0; i < rdvs.length; i++) {
    var doctorData = getUserInfoByID(rdvs[i].idDoctor, "proUsers");
    if (rdvs[i].idUser == loggedUser.id) {
      if (rdvs[i].etat == "disabled") {
        var etatRdv = 'En attente de confirmation';
        var couleurEtatRdv = "red";
      } else {
        etatRdv = 'Rendez-Vous confirmé';
        couleurEtatRdv = "green";
      }
      rdvList = rdvList + `<tr>

<td>${rdvs[i].date}</td>
<td>Dr ${doctorData.firstName} ${doctorData.lastName}</td>
<td style="color: ${couleurEtatRdv} ;" >${etatRdv}</td>
<td>

<!-- Button trigger modal -->
<button type="button" class="btn btn-primary" data-bs-toggle="modal"
  data-bs-target="#exampleModal${i}">
  Editer le RDV
</button>

<!-- Modal -->
<div class="modal fade" id="exampleModal${i}" tabindex="-1" aria-labelledby="exampleModalLabel"
  aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      

      <div class="modal-body">



      

      <!-- ======= Appointment Section ======= -->
<section id="appointment" class="appointment section-bg">
    <div class="container">

      

      <div class="php-email-form">
        <div class="row">
          <div class="col-md-4 form-group">
            <input disabled type="text" name="name" value="${userInfo.firstName} ${userInfo.lastName}" class="form-control" id="passionName" placeholder="Your Name" data-rule="minlen:4" data-msg="Please enter at least 4 chars">
            <div class="validate"></div>
          </div>
          <div class="col-md-4 form-group mt-3 mt-md-0">
            <input disabled type="email" class="form-control" value="${userInfo.email}" name="email" id="passionemail" placeholder="Your Email" data-rule="email" data-msg="Please enter a valid email">
            <div class="validate"></div>
          </div>
          <div class="col-md-4 form-group mt-3 mt-md-0">
            <input disabled type="tel" class="form-control" value="${userInfo.tel}" name="phone" id="passionPhone" placeholder="Your Phone" data-rule="minlen:4" data-msg="Please enter at least 4 chars">
            <div class="validate"></div>
          </div>
        </div>
        <div class="row">
          <div class="col-md-4 form-group mt-3">
            <input class=" form-control datepicker" value="${rdvs[i].chosenDate}" type="date" id="chosenDate${i}" name="birthday">
            <div id="chosenDateError"></div>
            <div class="validate"></div>
          </div>
          <div class="col-md-4 form-group mt-3">
         
            <input class=" form-control datepicker" value="${rdvs[i].chosenTime}" type="time" id="chosenTime${i}" name="appt">
            <div id="chosenTimeError" ></div>
            <div class="validate"></div>
          </div>
          <!-- <div class="col-md-4 form-group mt-3">
            
          </div> -->
          <div class="col-md-4 form-group mt-3">
            <select disabled name="doctor"  class="form-select">
              <option id="selectedDoctor" selected value="Dr ${doctorData.firstName} ${doctorData.lastName}">Dr ${doctorData.firstName} ${doctorData.lastName}</option>
            </select>
            <div class="validate"></div>
          </div>
        </div>

        <div class="form-group mt-3">
          <textarea class="form-control" value="" id="appointementMessage${i}" rows="5" placeholder="Message (Optional)">${rdvs[i].appointementMessage}</textarea>
          <div class="validate"></div>
        </div>
        <div class="mb-3">
          <div class="loading">Loading</div>
          <div class="error-message"></div>
          <div class="sent-message">Your appointment request has been sent successfully. Thank you!</div>
        </div>
        <div class="modal-footer">
        <button type="button" onclick="editRdv(${i});" class="btn btn-primary">Modifier le RDV</button>
        <button type="button" class="btn btn-danger" data-bs-dismiss="modal">Close</button>
      </div>
      </div>
    </div>
  </section>

  
  
  <!-- End Appointment Section -->
      </div>
      </div>
  </div>
</div>
</td>
</tr>`
    }
    faqlist1.innerHTML = rdvList;
  }

  for (let i = 0; i < users.length; i++) {
    if (users[i].id == loggedUser.id) {
      userEditForm = userEditForm + `
      
      <div id="userForm" class="mb-3 ">
                <label for="exampleInputEmail1" class="form-label">Nom</label>
                <input type="text" class="form-control" id="firstName" value="${users[i].firstName}" aria-describedby="emailHelp">
                <div id="firstNameError" class="form-text"></div>
              </div>
              <div class="mb-3 ">
                <label for="exampleInputEmail1" class="form-label">Prenom</label>
                <input type="text" class="form-control" value="${users[i].lastName}" id="lastName" aria-describedby="emailHelp">
                <div id="lastNameError" class="form-text"></div>
              </div>
              <div class="mb-3 ">
                <label for="exampleInputEmail1" class="form-label">Numero de Telephone</label>
                <input type="text" class="form-control" value="${users[i].tel}" id="tel" aria-describedby="emailHelp">
                <div id="telError" class="form-text"></div>
              </div>
              <div class="mb-3 ">
                <label for="exampleInputEmail1" class="form-label">Adresse Email</label>
                <input type="email" class="form-control" value="${users[i].email}" id="email" aria-describedby="emailHelp">
                <div id="emailError" class="form-text">We'll never share your email with anyone else.</div>
              </div>
              <div class="mb-3">
                <label for="exampleInputPassword1" class="form-label">Nouveau Mot de passe</label>
                <input type="password" class="form-control" id="pwd">
                <div id="pwdEroor" class="form-text">We'll never share your password with anyone else.</div>
              </div>
              <div class="mb-3">
                <label for="exampleInputPassword1" class="form-label">Confirmer le nouveau mot de passe</label>
                <input type="password" class="form-control"  id="confirmPwd">
                <div id="confPwdEroor" class="form-text">We'll never share your email with anyone else.</div>
              </div>
              <div id="messageValidation"></div>
              <button type="submit" onclick="editUserInfo(${i});" class="btn btn-primary">Modifier mes infos</button>
      
      `;
      faqlist2.innerHTML = userEditForm;



    }
    //  else {
    //   faqlist2.innerHTML = 'no infos';
    // }

  }


}

function displayUsers() {
  var users = JSON.parse(localStorage.getItem("users") || "[]");
  var userList = `
  <table class="table" >
                <thead>
                  <tr>
                    <th scope="col">ID</th>
                    <th scope="col">First Name</th>
                    <th scope="col">Last Name</th>
                    <th scope="col">Tel</th>
                    <th scope="col">Email</th>
                    <th scope="col">Password</th>
                    <th scope="col">Role</th>
                  </tr>
                </thead>
                <tbody>`;

  for (let i = 0; i < users.length; i++) {
    userList =
      userList +
      `<tr>
                    <th scope="row">${users[i].id}</th>
                    <td>${users[i].firstName}</td>
                    <td>${users[i].lastName}</td>
                    <td>${users[i].tel}</td>
                    <td>${users[i].email}</td>
                    <td>${users[i].pwd}</td>
                    <td>${users[i].role}</td>
                  </tr>`;
  }

  userList =
    userList +
    ` </tbody>
                </table>`;
  document.getElementById("users").innerHTML = userList;
}

document.addEventListener('DOMContentLoaded', function () {
  // your code here
  displayNav();
  displayTopBar();

}, false);