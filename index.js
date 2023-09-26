import express from "express";
import bodyParser from "body-parser";
import { dirname } from "path";
import { fileURLToPath } from 'url';
import fs from "fs";
import http from "http";
import path from "path";
import ejs from 'ejs'; // Popraw import EJS








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
app.set('views', __dirname + '/index.ejs');

function passwordCheck(req, res, next) {
  const password = req.body["password"]; //dodajemy password taj jak  w HTML
  if (password === "Olivia16") {
    isUserAuthorized = true;
  }
  next(); //nigdy nie zapominaj
}
app.use(passwordCheck);

// Routing i renderowanie widoku EJS
app.get('/', (req, res) => {
  res.render('public', { pageTitle: 'Dobry fachowiec' });
});
// app.get('/', function(req, res, next){
//   // Serve the index.html file in the root directory of the website.
//   res.sendFile(path.join('/indexy/index.html'));
// }); 


// app.post("/submit", (req, res) => {
//   const formData = `Password: ${req.body.password}`;

//   fs.writeFile("submit.txt", formData, (error) => {
//     if (error) {
//       console.error("An error occurred:", error);
//       res.status(500).send("An error occurred while saving the data.");
//     } else {
//       console.log("The file has been saved");
//       res.status(200).send("Form data has been saved.");
//     }
//   });
// });

app.post("/submit", (req, res) => {
  if (isUserAuthorized) {
    res.sendFile(__dirname + "/public/footer.ejs"); //login prawdziwy
  } else {
    res.sendFile(__dirname + "/public/index.html");// login falszywy
    //Alternatively res.redirect("/");  mozesz to uzyc zanmiennnie
  }
});



app.listen(port, () => {
  console.log(`Server running on port ${port}.`);
});


app.post("/submit", (req, res) =>{
  res.render("index.ejs"),
  {name: req.body["name"] }

});







// const questions = [
//   {
//     type: 'list',
//     name: 'Fachowiec',
//     message: 'Wybierz swojego fachowca:',
//     choices: [
//       'Hydraulik',
//       'Mechanik',
//       'Kominiarz',
//       'Blacharz',
//     ],
//   },
// ];

// inquirer.prompt(questions).then(answers => {
//   console.log(`Twoim fachowcem jest ${answers.Fachowiec}.`);
// });






// let numberOfButtons = document.querySelectorAll(".button").length;

// for (let i = 0; i < numberOfButtons; i++) {
//     document.querySelectorAll(".button")[i].addEventListener("click", function() {
//         let buttonInnerHTML = this.innerHTML;
//         switch(buttonInnerHTML){
//             case "Szukaj fachowca":
//             let muzyka = new Audio("sound/song_1.mp3");
//             muzyka.play();
//             break;
//         }
//     });
// }
