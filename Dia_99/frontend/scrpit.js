function consumirAPI() {
    fetch('http://localhost:3000/produtos')
        .then(response => response.json())
        .then(produtos => {
            // Seleciona o espaço no HTML para adicionar os produtos
            const produtosContainer = document.getElementById('produtosContainer');
            if (!produtosContainer) {
                console.error('Elemento produtosContainer não encontrado no DOM');
                return;
            }

            // Limpa o conteúdo anterior
            produtosContainer.innerHTML = "";

            // Itera pelos produtos e cria os elementos
            produtos.forEach(produto => {
                const produtoCard = document.createElement("div");
                produtoCard.classList.add("produto-card");
                produtoCard.innerHTML = `
                    <h2>${produto.nome}</h2>
                    <p>Preço: R$ ${produto.precoUnitario}</p>
                    <p>Quantidade: ${produto.quantidade}</p>
                    <p>Categoria: ${produto.categoria}</p>
                    <p>Fabricante: ${produto.fabricante}</p>
                    <button class="delete-button" data-id="${produto.id}">Deletar</button>
                    <button class="edit-button" data-id="${produto.id}">Editar</button>
                `;
                produtosContainer.appendChild(produtoCard);
            });
            //Ouvintes de eventos para os botões de edição e exclusão
            document.querySelectorAll('.delete-button').forEach((botaoDeletar) => {
                botaoDeletar.addEventListener('click', deletarProduto);
            });

            document.querySelectorAll('.edit-button').forEach((botaoEditar) => {
                botaoEditar.addEventListener('click', editarProduto);
            });


        })
        .catch(error => console.error('Erro ao consumir a API', error));
}

function adicionarProduto(event) {
    event.preventDefault();

    const novoProduto = {
        nome: document.getElementById('nome').value,
        precoUnitario: document.getElementById('precoUnitario').value,
        quantidade: document.getElementById('quantidade').value,
        categoria: document.getElementById('categoria').value,
        fabricante: document.getElementById('fabricante').value,
    };

    fetch('http://localhost:3000/produtos', {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(novoProduto),
    })
        .then(response => response.json())
        .then(data => {
            alert('Produto adicionado com sucesso!');
            consumirAPI();
        })
        .catch(error => console.error('Erro ao adicionar produto:', error));
}

function editarProduto(event) {
    const produtoId = event.target.getAttribute('data-id');
    fetch(`http://localhost:3000/produtos/${produtoId}`, {

    })
        .then(response => response.json())
        .then(produto => {
            document.getElementById('nome').value = produto.nome;
            document.getElementById('precoUnitario').value = produto.precoUnitario;
            document.getElementById('quantidade').value = produto.quantidade;
            document.getElementById('categoria').value = produto.categoria;
            document.getElementById('fabricante').value = produto.fabricante;

            const form = document.getElementById('produtoForm');
            form.removeEventListener('submit', adicionarProduto);
            form.addEventListener('submit', function (event) {
                event.preventDefault();
                atualizarProduto(produtoId);
            })
        })
        .catch (error => console.error('Erro ao editar produto', error));

}

function deletarProduto(event) {
    const produtoId = event.target.getAttribute('data-id');
    fetch(`http://localhost:3000/produtos/${produtoId}`, {
        method: "DELETE",
    })
        .then(response => response.json())
        .then(data => {
            alert('Produto deletado com sucesso!');
            consumirAPI();
        })
        .catch(error => console.error('Erro ao deletar produto:', error));
}

document.getElementById('produtoForm').addEventListener('submit', adicionarProduto);

window.onload = consumirAPI;
