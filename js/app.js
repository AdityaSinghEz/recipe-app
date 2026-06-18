let fav = JSON.parse(localStorage.getItem('favourites')) || []

function renderRecipe(recipe) {
    const grid = document.querySelector('.recipe-grid')
    grid.innerHTML = ``
    recipe.forEach(r => {
        const heart = fav.includes(r.id)
        let str
        if (heart) str = '♥'
        else str = '♡'
        grid.innerHTML += `
        <article class="recipe-card" data-tags='${r.tags.join(' ')}' data-id = '${r.id}'>
            <div class = 'card-image'>
                <img src = '${r.image}' alt = 'Item Image'>
                <span class = 'badge'>${r.tags[0]}</span>
            </div>
            <div class = 'card-body'>
                <h3>${r.title}</h3>
                <p>⏱ ${r.time} · 🔥 ${r.calories} · 💪 ${r.protein}</p>
                <button aria-label="Save to favourites">${str}</button >
            </div >
        </article > `
    })
}

renderRecipe(recipes)

function fitlerRecipe(filter) {
    if (filter === 'all') renderRecipe(recipes)
    else {
        const arr = recipes.filter(r => r.tags.includes(filter))
        renderRecipe(arr)
    }
}

function getFilteredRecipes(filter) {
    const val = searchInput.value.toLowerCase()
    const activeFilter = document.querySelector('.filter-pills button.active').dataset.filter
    return recipes.filter(r => {
        const matchSearch = r.title.toLowerCase().includes(val)
        const matchFilter = activeFilter === 'all' || r.tags.includes(activeFilter)
        return matchFilter && matchSearch
    })
}

const pills = document.querySelectorAll('.filter-pills button')
pills.forEach(p => {
    p.addEventListener('click', () => {
        pills.forEach(r => r.classList.remove('active'))
        p.classList.add('active')
        renderRecipe(getFilteredRecipes())
    })
})

const searchInput = document.querySelector('input[type = "search"]')
searchInput.addEventListener('input', () => {
    renderRecipe(getFilteredRecipes())
})

const form = document.querySelector('form')
form.addEventListener('submit', (e) => {
    e.preventDefault()
})


const grid = document.querySelector('.recipe-grid')
grid.addEventListener('click', (e) => {
    const btn = e.target.closest('.recipe-grid .recipe-card button')
    const card = e.target.closest('.recipe-card')
    if (btn) {
        const index = fav.indexOf(card.dataset.id)
        if (index == -1) {
            fav.unshift(card.dataset.id)
            btn.textContent = '♥'
        }
        else {
            fav.splice(index, 1)
            btn.textContent = '♡'
        }
        localStorage.setItem('favourites', JSON.stringify(fav))
    }
})