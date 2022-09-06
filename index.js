const productsCart = [
  {
    id: 1,
    name: "Uvas",
    price: 5.0,
  },
  {
    id: 2,
    name: "Maçã",
    price: 3.99,
  },
  {
    id: 3,
    name: "Goiaba",
    price: 7.0,
  },
  {
    id: 4,
    name: "Manga",
    price: 10.0,
  },
  {
    id: 5,
    name: "Morango",
    price: 5.75,
  },
  {
    id: 6,
    name: "Melancia",
    price: 13.0,
  }
];




const titulo = document.createElement('h1')
const artigo = document.createElement('article')

const bodytag = document.body
const mainTag = document.createElement("main");
const carrinhDiv = document.createElement("div");
const produtoUl = document.createElement("ul");
const botao = document.createElement('button');

bodytag.appendChild(artigo)
artigo.appendChild(titulo)
bodytag.appendChild(mainTag)
carrinhDiv.classList.add('container')
mainTag.appendChild(carrinhDiv);
carrinhDiv.appendChild(produtoUl);
carrinhDiv.appendChild(botao)
bodytag.classList.add('body')

titulo.innerText= 'Virtual Market'


function adicionarCarrinho() {
  for (let i = 0; i < productsCart.length; i++) {
    let Nome = productsCart[i].name;
    let Preço = productsCart[i].price;
    const produtoLi = document.createElement("li");

    produtoLi.innerHTML = `
        <p>${Nome}</p>
        <p>R$: ${Preço}</p>
        `;
    produtoUl.appendChild(produtoLi);
  }
  return;
}
adicionarCarrinho()

function somaProdutos(){
const somaUl = document.createElement('ul')
const somaLi = document.createElement('li')

let total = 0

    for(let i=0; i<productsCart.length; i++){
        total += productsCart[i].price
    }
    somaLi.innerHTML =`
        <p>Soma Dos Produtos</p>
        <p>R$: ${total}</p>
    `
    somaUl.appendChild(somaLi)
    somaUl.classList.add('soma')
    carrinhDiv.appendChild(somaUl)
    return
}
somaProdutos()
carrinhDiv.appendChild(botao)
botao.innerText = 'Finalizar Compra'
/*  <ul>
        <li>
            <p></p>
            <p>/p>
        </li>
    </ul>
*/
