
// Dados da entidade

const IBGE_API_URL =
  "https://servicodados.ibge.gov.br/api/v1/localidades/estados";

function populateUFs() {
    const ufSelect = document.querySelector("select[name=uf]")

    fetch(IBGE_API_URL)
        .then(res => res.json())
        .then(states => {
            for (const state of states) {
                ufSelect.innerHTML += `<option value="${state.id}"> ${state.nome} </option>`
            }
        })
}

function getCities(event) {
    const citySelect = document.querySelector("select[name=city]")
    const stateInput = document.querySelector("input[name=state]")

    const ufValue = event.target.value
    const url = `${IBGE_API_URL}/${ufValue}/municipios`
    
    const indexOfSelectedState = event.target.selectedIndex
    stateInput.value = event.target.options[indexOfSelectedState].text
    
    citySelect.innerHTML = '<option> Selecione a cidade...</option>'
    citySelect.disabled = false

    fetch(url)
        .then(res => res.json())
        .then(cities => {
            for (const city of cities) {
                citySelect.innerHTML += `<option value="${city.nome}"> ${city.nome} </option>`

            }
        })
}

populateUFs()
   
document.querySelector('select[name=uf]').addEventListener('change', getCities)


// itens de coleta

const itemsToCollect = document.querySelectorAll(".items-grid li")

for (const item of itemsToCollect) {
    item.addEventListener('click', handleSelectedItem)
}

const collectedItems = document.querySelector('input[name=items]')

let selectedItems = []

function handleSelectedItem (event) {
    const itemLi = event.target
    
    // adiciona ou remove um class
    itemLi.classList.toggle('selected')
    const itemId = itemLi.dataset.id

    // verifica se existem itens selecionados, se sim pega os itens selecionados
    const alreadySelected = selectedItems.findIndex( item => item == itemId )

    // se já estiver selecionado, tirar seleção
    if (alreadySelected >= 0) {
        const filteredItems = selectedItems.filter( item => item != itemId)
        selectedItems = filteredItems

    } else { // se não estiver selecionado, adicionar a seleção
        selectedItems.push(itemId)
    }

     // atualizar o campo escondido com os itens
    collectedItems.value = selectedItems
}
