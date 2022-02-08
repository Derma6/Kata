const h1 = document.getElementById('date')
const h2 = document.getElementById('heure')

let d = new Date()
let day = d.getDate(), month = d.getMonth()+1, year = d.getFullYear();
let dayWeek = d.getDay();
const dayOfTheWeek = ["Dimanche","Lundi","Mardi","Mercredi","Jeudi","Vendredi","Samedi"];

let hour = d.getHours(), minutes = d.getMinutes(), secondes = d.getSeconds();

h1.textContent = `La date en JS : ${dayOfTheWeek[dayWeek]} ${day}/${month}/${year}`;
h2.textContent = `L'heure en JS : ${hour}:${minutes}:${secondes} (au chargement de la page)`;

