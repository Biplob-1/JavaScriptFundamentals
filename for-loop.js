
const fruits = ["Banana", "Orange", "Apple", "Mango"];
let fLen = fruits.length;


text = "<ul>";
for (let i = 0; i < fLen; i++) {
  text += "<li>" + fruits[i] + "</li>";
}
text += "</ul>";

document.getElementById("demo").innerHTML = text;



