import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function () {

  const pronoun = ['the', 'our'];
  const adj = ['great', 'big'];
  const noun = ['jogger', 'racoon'];
  const domain = ['.es', '.com', '.org', '.net'];

  for (const itemPronoun of pronoun) {
    for (const itemAdj of adj) {
      for (const itemNoun of noun) {
        for (const itemDomain of domain) {
          console.log(`${itemPronoun}${itemAdj}${itemNoun}${itemDomain}`);
        }
      }
    }
  }
}
