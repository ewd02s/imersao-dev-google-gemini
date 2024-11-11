function pesquisar() {
    let section =document.getElementById("resultados-pesquisa")
console.log(section);

let resultados = ""

//para cada dado dentro da lista de dados

for (let dado of dados) {
    resultados += `
        <div class="item-resultado">
            <h2>
                <a href="#">${dados.titulo}</a>
            </h2>
            <p class="descricao-meta">${dados.descricao}</p>
            <a href=${dados.link} target="_blank">Mais informações</a>
        </div>
    `
}

section.innerHTML = resultados
}
