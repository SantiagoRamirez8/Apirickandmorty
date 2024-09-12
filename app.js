const txtCharacter = document.getElementById("text-character")
const  containerCards = document.getElementById("cards-container")
const urlFilter = "https://rickandmortyapi.com/api/character/?name="
const urlCharacter ="https://rickandmortyapi.com/api/character"


const getCharacter =async (URL) =>{
    const response = await fetch(URL)
    const data = await response.json()
    data.results.forEach(element => { 
        makeCharacter(element)

})
}
getCharacter(urlCharacter)

const makeCharacter = (Character) => {

    const card = document.createElement("div")
    card.classList.add("card")

    const imgCard = document.createElement("img")
    imgCard.src = Character.image

    const cardContent = document.createElement("div")
    cardContent.classList.add("card-content")

    const nameCard = document.createElement("h3")
    nameCard.textContent = Character.name

    const genderCard = document.createElement("p")
    genderCard.textContent ="gender : "+Character.gender



    card.appendChild(imgCard)
    card.appendChild(cardContent)

    cardContent.appendChild(nameCard)
    cardContent.appendChild(genderCard)
    containerCards.appendChild(card)
}

const getCharacterByName = async (event) => {
    containerCards.innerHTML = ""
    await getCharacter(urlFilter+event.target.value)
}

txtCharacter.addEventListener("keyup", getCharacterByName)