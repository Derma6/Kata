let monkey = document.getElementById('monkey')


monkey.addEventListener('click', function(e) {
    e.preventDefault();
    if (monkey.textContent == "🙈") {
            monkey.innerHTML = "🙉"
    } else if (monkey.textContent == "🙉") {
        monkey.innerHTML = "🙈"
    }
})