import express from "express";
import bodyParser from "body-parser";
import { dirname } from "path";
import { fileURLToPath } from 'url';
import path from "path";
import http from "http";



const __dirname = dirname(fileURLToPath(import.meta.url));
const app = express();
const port = 8000;

var server = http.createServer(app);
var isUserAuthorized = false;  //by defoult jest nie autoryzowny
 

app.use(express.static(path.join(__dirname, "public"))); //w ten sposob wysylamy statyczne dane(html)
app.use(bodyParser.urlencoded({ extended: true })); //body-parser odczytuje wpisy usera
// Ustawienie EJS jako widoków (szablonów) dla aplikacji Express
app.set('view engine', 'ejs');
// Określenie katalogu, w którym znajdują się pliki szablonów EJS
app.set('public', __dirname + '/index.ejs');

function passwordCheck(req, res, next) {
  const password = req.body["password"]; //dodajemy password tak jak  w HTML
  if (password === "Olivia16") {
    isUserAuthorized = true;
  }
  next(); //nigdy nie zapominaj
}
app.use(passwordCheck);

// Routing i renderowanie widoku EJS
//home page
app.get('/', (req, res) => {
  const data = {
    zawody:[],
  }
  res.render('index.ejs',data);
});
app.get("/header", (req, res) => {
  res.render("header.ejs")
});




app.post("/submit", (req, res) => {
  if (isUserAuthorized) {
    res.sendFile(__dirname + "/public/header.ejs"); //login prawdziwy
  } else {
    res.sendFile(__dirname + "/public/index.html");// login falszywy
    //Alternatively res.redirect("/");  mozesz to uzyc zanmiennnie
  }
});



app.listen(port, () => {
  console.log(`Server running on port ${port}.`);
});














