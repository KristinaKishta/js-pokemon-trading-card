// - Make sure you check and understand the data that is given to you!
// - Create a card using JS that represents a single pokemon, use the example image as a reference. You will also find an HTML example commented out in the index.html

function createcard(pockemon){
    let card = document.createElement('li')
    card.className = 'card'

    let title = document.createElement('h2')
    title.className = 'card--title'
    title.textContent = pockemon.name.toUpperCase()

    let img = document.createElement('img')
    img.className = 'card--img'
    img.src = pockemon.sprites.other['official-artwork'].front_default
    img.alt = pockemon.name

    let list = document.createElement('ul')
    list.className = 'card--text'

    let li1 = document.createElement('li')
    li1.textContent = `${pockemon.stats[0].stat.name.toUpperCase()}: ${pockemon.stats[0].base_stat}`

    let li2 = document.createElement('li')
    li2.textContent = `${pockemon.stats[1].stat.name.toUpperCase()}: ${pockemon.stats[1].base_stat}`

    let li3 = document.createElement('li')
    li3.textContent = `${pockemon.stats[2].stat.name.toUpperCase()}: ${pockemon.stats[2].base_stat}` 

    let li4 = document.createElement('li')
    li4.textContent = `${pockemon.stats[3].stat.name.toUpperCase()}: ${pockemon.stats[3].base_stat}`

    let li5 = document.createElement('li')
    li5.textContent = `${pockemon.stats[4].stat.name.toUpperCase()}: ${pockemon.stats[4].base_stat}`

    let li6 = document.createElement('li')
    li6.textContent = `${pockemon.stats[5].stat.name.toUpperCase()}: ${pockemon.stats[5].base_stat}` 


    card.append(title,img,list)

    list.append(li1,li2,li3,li4,li5,li6)

   let cardsUl = document.querySelector('.cards')
   cardsUl.append(card)

    console.log(card) 
}

for (let pockemon of data) {
    createcard(pockemon)
}

// - Use the exact CSS classes you see in the example HTML to obtain the same style for each card
// - The cards should be nested inside <ul class="cards"></ul>
// - Use the official-artwork object key as the images for the card. The images are all inside of the sprites key, in each pokemon object
// pokemon.sprites.other['official-artwork'].front_default

// - Render all the cards on the page that represents all the pokemons, recreating the same layout, using JS

//console.log(data)
//console.log(data[0])