import express from "express";
import bodyParser from "body-parser";
import { dirname } from "path";
import { fileURLToPath } from 'url';
import path from "path";




const __dirname = dirname(fileURLToPath(import.meta.url));
const app = express();
const port = 8000;
app.set('view engine', 'ejs');
app.set('public', path.join(__dirname, 'public'));




const listaJson = {"specjalisci":[{"id":1,"imie":"Anna","nazwisko":"Kowalska","specjalizacja":"Dermatologia"},{"id":2,"imie":"Jan","nazwisko":"Nowak","specjalizacja":"Kardiologia"},{"id":3,"imie":"Piotr","nazwisko":"Wisniewski","specjalizacja":"Ortopedia"},{"id":4,"imie":"Maria","nazwisko":"Zawisza","specjalizacja":"Neurologia"},{"id":5,"imie":"Lucas","nazwisko":"Brown","specjalizacja":"Gastroenterologia"},{"id":6,"imie":"Emily","nazwisko":"Johnson","specjalizacja":"Pediatria"},{"id":7,"imie":"Oliver","nazwisko":"Smith","specjalizacja":"Oncologia"},{"id":8,"imie":"Sophia","nazwisko":"Lee","specjalizacja":"Endokrynologia"},{"id":9,"imie":"Michael","nazwisko":"Williams","specjalizacja":"Psychiatria"},{"id":10,"imie":"Emma","nazwisko":"Davis","specjalizacja":"Reumatologia"},{"id":11,"imie":"Ethan","nazwisko":"Garcia","specjalizacja":"Urologia"},{"id":12,"imie":"Ava","nazwisko":"Martinez","specjalizacja":"Okulistyka"},{"id":13,"imie":"Mason","nazwisko":"Hernandez","specjalizacja":"Laryngologia"},{"id":14,"imie":"Isabella","nazwisko":"Lopez","specjalizacja":"Alergologia"}]}


// var isUserAuthorized = false;  //by defoult jest nie autoryzowny
 

app.use(express.static(path.join(__dirname, "public"))); //w ten sposob wysylamy statyczne dane(html)
app.use(bodyParser.urlencoded({ extended: true })); //body-parser odczytuje wpisy usera




 

// function passwordCheck(req, res, next) {
//   const password = req.body["password"]; //dodajemy password tak jak  w HTML
//   if (password === "Olivia16") {
//     isUserAuthorized = true;
//   }
//   next(); //nigdy nie zapominaj
// }
// app.use(passwordCheck);

// Routing i renderowanie widoku EJS
//home page
let data;
app.get('/', (req, res) => {
 res.render("index.ejs",{lista: data});
});
// app.get("/header", (req, res) => {
//   res.render("header.ejs")
// });




app.post("/lista", (req, res) => {
  // if (isUserAuthorized) {
    
   switch(req.body.type){
    
    case "fachowiec":
      data=JSON.parse(listaJSON)
      break;
      default:
        break;
   }
   res.redirect("/")
  });


app.listen(port, () => {
  console.log(`Server running on port ${port}.`);
});














