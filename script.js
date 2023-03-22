// console.log("Hello world")
// let vezettek_nev = "0"
// let kereszt_nev = "David"
// let szamlalo = 0
// console.log(vezettek_nev + kereszt_nev, szamlalo)

// if (!vezettek_nev == szamlalo) {
//   console.log("a vezeteknev egyenlo a szamlalo+val")
// } else {
//   console.log("nme egyenlo a szamlalo-val")
// }

// switch (szamlalo) {
//   case 0:
//     console.log("Egyenlo 0-val")
//     break
//   default:
//     console.log("nem egyenlo 0 val")
// }

function login() {
  console.log("CSKATTTTTTTTT")
  let passworldField = document.querySelector("#pass")
  //console.log(passworldField.value)
  if ((passworldField.value = "bagytittok")) {
    document.location = "titkosoldal.html"
  } else {
    passworldField = ""
  }
}
