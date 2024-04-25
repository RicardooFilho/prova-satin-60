
for (let i = 0; i < localStorage.getItem("favoritos"); i++) {
    const listItem = document.createElement('li')

    const favoritados = localStorage.getItem(favoritos);

    const favoritadosObj = JSON.parse(favoritados);

    listItem.textContent = favoritadosObj[i].nome;

    document.querySelector('ul').append(listItem)
}