const search = new URLSearchParams(document.location.search)

const titulo = document.getElementById("title")

const uf = search.get('uf')

const memoria = []


titulo.innerHTML = `Municípios de ${uf}`

fetch(`https://servicodados.ibge.gov.br/api/v1/localidades/estados/${uf}/municipios`)
.then((response) => response.json())
.then((data) => {
    for(let i = 0; i < data.length; i++) {
        const listItem = document.createElement('li');
        listItem.textContent = data[i].nome
        document.querySelector('ul').appendChild(listItem)
        const button = document.createElement('button')
        listItem.appendChild(button)
           
        button.addEventListener('click', () => {
            memoria.push(data[i])
            localStorage.setItem(favoritos, JSON.stringify(memoria))
        })
    }
    })

