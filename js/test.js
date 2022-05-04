// var gouvernorat = {
//   1: "Ariana",
//   2: "Beja",
//   3: "Ben arous",
//   4: "Bizerte",
//   5: "Gabes",
//   6: "Gafsa",
//   7: "Jendouba",
//   8: "Kairouan",
//   9: "Kasserine",
//   10: "Kebili",
//   11: "Le Kef",
//   12: "Mahdia",
//   "13": "Mannouba",
//   14: "Medenine",
//   15: "Monastir",
//   16: "Nabeul",
//   17: "Sfax",
//   18: "Sidi bouzid",
//   19: "Siliana",
//   20: "Sousse",
//   21: "Tataouine",
//   22: "Tozeur",
//   23: "Tunis",
//   24: "Zaghouan",
// };

// var category = {
//   1: "Dentiste",
//   2: "Dermatologue",
//   3: "Cardiologue",
//   4: "Radiologue",
//   5: "kinésithérapeute",
//   6: "Infirmier",
//   7: "Laboratoire d'analyses de biologie médicale",
//   8: "Médecin de famille",
//   9: "Orthophoniste",
//   10: "Pharmacien",
//   11: "Vétérinaire",
//   12: "Opticien",
// };

// var category = {
//   Dentiste: 1,
//   Dermatologue: 2,
//   Cardiologue: 3,
//   Radiologue: 4,
//   kinésithérapeute: 5,
//   Infirmier: 6,
//   "Laboratoire d'analyses de biologie médicale": 7,
//   "Médecin de famille": 8,
//   Orthophoniste: 9,
//   Pharmacien: 10,
//   Vétérinaire: 11,
//   Opticien: 12,
// };

// var categories = [
//   "Dentiste",
//   "Dermatologue",
//   "Cardiologue",
//   "Radiologue",
//   "kinésithérapeute",
//   "Infirmier",
//   "Laboratoire d'analyses de biologie médicale",
//   "Médecin de famille",
//   "Orthophoniste",
//   "Pharmacien",
//   "Vétérinaire",
//   "Opticien",
// ];

function checkIfUserExists(email, password) {
  // declare userExists var for return
  var userExists = false;
  //get all users from local storage  [{},{},{}]
  var users = getAllObjects("users");
  var proUsers = getAllObjects("proUsers");
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

      localStorage.setItem("loggedUser", JSON.stringify(loggedUser));
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
          };
          localStorage.setItem("loggedUser", JSON.stringify(loggedUser));
        }
      }
      
    }
    return userExists;
  }
}


function getAllObjects(key) {
  return JSON.parse(localStorage.getItem(key) || "[]");
}



var tests = checkIfUserExists("dr.dhia@gmail.com", "1234512345");
console.log(tests);


function displayAllProUsers() {
    var proUsers = getAllObjects("proUsers");
    var doctors = document.getElementById('doctors');
    var doctorList = ``;
    for (let i = 0; i < proUsers.length; i++) {
        doctorList = doctorList + `
<div class="col-lg-6">
            <div class="member d-flex align-items-start">
              <div class="pic"><img src="assets/img/doctors/doctors-1.jpg" class="img-fluid" alt=""></div>
              <div class="member-info">
                <h4>${proUsers[i].firstName} ${proUsers[i].lastName}</h4>
                <span>${proUsers[i].lastName}</span>
                <p><span>${proUsers[i].postalAddress}</span></p>
                <div class="social">
                  <a href=""><i class="ri-twitter-fill"></i></a>
                  <a href=""><i class="ri-facebook-fill"></i></a>
                  <a href=""><i class="ri-instagram-fill"></i></a>
                  <a href=""> <i class="ri-linkedin-box-fill"></i> </a>
                </div>
              </div>
            </div>
          </div>`
        
    }
    document.getElementById("doctors").innerHTML = doctorList;
}



