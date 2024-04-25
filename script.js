const estado1 = document.getElementById("es1")
const estado2 = document.getElementById("es2")
const estado3 = document.getElementById("es3")
const estado4 = document.getElementById("es4")
const estado5 = document.getElementById("es5")
const estado6 = document.getElementById("es6")
const estado7 = document.getElementById("es7")
const estado8 = document.getElementById("es8")
const estado9 = document.getElementById("es9")
const estado10 = document.getElementById("es10")
const estado11 = document.getElementById("es11")
const estado12 = document.getElementById("es12")
const estado13 = document.getElementById("es13")
const estado14 = document.getElementById("es14")
const estado15 = document.getElementById("es15")
const estado16 = document.getElementById("es16")
const estado17 = document.getElementById("es17")
const estado18 = document.getElementById("es18")
const estado19 = document.getElementById("es19")
const estado20 = document.getElementById("es20")
const estado21 = document.getElementById("es21")
const estado22 = document.getElementById("es22")
const estado23 = document.getElementById("es23")
const estado24 = document.getElementById("es24")
const estado25 = document.getElementById("es25")
const estado26 = document.getElementById("es26")


fetch(`https://servicodados.ibge.gov.br/api/v1/localidades/estados`)
    .then((response) => response.json())
    .then((data) => {
        const pEs1 = document.createElement('p')
        pEs1.textContent = data[0].nome
        estado1.appendChild(pEs1)

        const pEs2 = document.createElement('p')
        pEs2.textContent = data[1].nome
        estado2.appendChild(pEs2)

        const pEs3 = document.createElement('p')
        pEs3.textContent = data[2].nome
        estado3.appendChild(pEs3)

        const pEs4 = document.createElement('p')
        pEs4.textContent = data[3].nome
        estado4.appendChild(pEs4)

        const pEs5 = document.createElement('p')
        pEs5.textContent = data[4].nome
        estado5.appendChild(pEs5)

        const pEs6 = document.createElement('p')
        pEs6.textContent = data[5].nome
        estado6.appendChild(pEs6)

        const pEs7 = document.createElement('p')
        pEs7.textContent = data[6].nome
        estado7.appendChild(pEs7)

        const pEs8 = document.createElement('p')
        pEs8.textContent = data[7].nome
        estado8.appendChild(pEs8)

        const pEs9 = document.createElement('p')
        pEs9.textContent = data[8].nome
        estado9.appendChild(pEs9)

        const pEs10 = document.createElement('p')
        pEs10.textContent = data[9].nome
        estado10.appendChild(pEs10)

        const pEs11 = document.createElement('p')
        pEs11.textContent = data[10].nome
        estado11.appendChild(pEs11)

        const pEs12 = document.createElement('p')
        pEs12.textContent = data[11].nome
        estado12.appendChild(pEs12)

        const pEs13 = document.createElement('p')
        pEs13.textContent = data[12].nome
        estado13.appendChild(pEs13)

        const pEs14 = document.createElement('p')
        pEs14.textContent = data[13].nome
        estado14.appendChild(pEs14)

        const pEs15 = document.createElement('p')
        pEs15.textContent = data[14].nome
        estado15.appendChild(pEs15)

        const pEs16 = document.createElement('p')
        pEs16.textContent = data[15].nome
        estado16.appendChild(pEs16)

        const pEs17 = document.createElement('p')
        pEs17.textContent = data[16].nome
        estado17.appendChild(pEs17)

        const pEs18 = document.createElement('p')
        pEs18.textContent = data[17].nome
        estado18.appendChild(pEs18)

        const pEs19 = document.createElement('p')
        pEs19.textContent = data[18].nome
        estado19.appendChild(pEs19)

        const pEs20 = document.createElement('p')
        pEs20.textContent = data[19].nome
        estado20.appendChild(pEs20)

        const pEs21 = document.createElement('p')
        pEs21.textContent = data[20].nome
        estado21.appendChild(pEs21)
        
        const pEs22 = document.createElement('p')
        pEs22.textContent = data[21].nome
        estado22.appendChild(pEs22)

        const pEs23 = document.createElement('p')
        pEs23.textContent = data[22].nome
        estado23.appendChild(pEs23)

        const pEs24 = document.createElement('p')
        pEs24.textContent = data[23].nome
        estado24.appendChild(pEs24)

        const pEs25 = document.createElement('p')
        pEs25.textContent = data[24].nome
        estado25.appendChild(pEs25)

        const pEs26 = document.createElement('p')
        pEs26.textContent = data[25].nome
        estado26.appendChild(pEs26)
    })