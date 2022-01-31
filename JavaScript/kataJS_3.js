let citations = [
    "“Le courage n'est pas l'absence de peur, mais la capacité de la vaincre”",
    "“La beauté est dans le regard de celui qui regarde.”",
    "“L'ignorance mène à la peur, la peur mène à la haine et la haine conduit à la violence. Voilà l'équation”",
    "“Le fou semble sage quand il se tait”",
]

function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min) ) + min;
  }

const random = getRndInteger(0, citations.length)

console.log(random)
document.getElementById('citation').textContent = citations[random]