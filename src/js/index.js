/* eslint-disable */

import "file-loader?name=[name].[ext]!../index.html";
import "../assets/img/rigo-baby.jpg";
import "../assets/img/4geeks.ico";
//import 'breathecode-dom'; //DOM override to make JS easier to use
import "../style/index.scss";

//console.log("Hello Rigo from the console!");
window.onload = function() {
  let pronoun = ["the", "our", "this", "his", "them "];
  let adjective = ["great", "best", "big", "elegant", "bald"];
  let noun = ["goat", "man", "mother", "head", "musician"];
  /*
  let Myarray;

  Myarray.forEach(pronoun => {
    console.log(pronoun);
    console.log(index);
  }); 
  */

  let Myarray = [];
  for (let i in pronoun)
    for (let j in adjective)
      for (let k in noun)
        Myarray.push(pronoun[i] + adjective[j] + noun[k] + ".com <br>");
  console.log(Myarray);
  document.querySelector(".Domain-Name").innerHTML = Myarray;
};
