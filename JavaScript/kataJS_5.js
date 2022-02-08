let monkey = document.getElementById('monkey')
let titre = document.getElementById('titre')
let nav = document.querySelector('.sideMenu')
let body = document.body

monkey.addEventListener('click', function(e) {
    e.preventDefault();
    if (monkey.textContent == "🙈") {
            monkey.innerHTML = "🙉"
    }   else if (monkey.textContent == "🙉") {
        monkey.innerHTML = "🙈"
        }
    if (titre.textContent == "Vive le SEO") {
        titre.innerHTML = "Vive le JavaScript"
    }   else if (titre.textContent == "Vive le JavaScript") {
            titre.innerHTML = "Vive le SEO"
        }
    
    body.classList.toggle("menuActive");
})