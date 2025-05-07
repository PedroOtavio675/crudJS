
const produtos = [
  { id: 0, nome: "Arroz", preco: 5.49, estoque: 37 },
  { id: 1, nome: "Feijao", preco: 6.29, estoque: 82 },
  { id: 2, nome: "Acucar", preco: 3.99, estoque: 14 },
  { id: 3, nome: "Cafe", preco: 12.5, estoque: 63 },
  { id: 4, nome: "Macarrao", preco: 4.2, estoque: 29 },
  { id: 5, nome: "Oleo", preco: 7.89, estoque: 91 },
  { id: 6, nome: "Leite", preco: 4.99, estoque: 55 },
  { id: 7, nome: "Farinha", preco: 3.5, estoque: 8 },
  { id: 8, nome: "Sabao em po", preco: 9.99, estoque: 46 },
  { id: 9, nome: "Detergente", preco: 2.29, estoque: 70 }
];
const digite = require("prompt-sync")();
let usuarios =[
  {id:1 ,nome:"pedro", email:"pedro@gmail.com"}
];
let registroDeCompras=[];
let emailDoUsuarioDaCompra
let opcao
let qualMes
let quantidadeDaCompra
let registroPorMes
let somaPorMes = 0
let i = -1
let j = -1
let opcaoRegistrodevendas
let nomeCompra
let valorVendido = 0
let gereProdutos
let opcaoUsuario
let data1 = new Date()
let dia = data1.getDay()
let mes = data1.getMonth()
let ano = data1.getFullYear()
let id = 0
let geraId = () => {
     
     id = produtos.length +1
     return id
}
let geraIdusu = () => {
     
  id = usuarios.length +1
  return id
}
let geraIdcom = () => {
     
  id = registroDeCompras.length +1
  return id
}

let p = [
  { id: 3, nome: "queijo", preco: 10, estoque: 3 }
]


do {
  console.log("  ")
  console.log(

    `===== SISTEMA DE COMPRAS =====
  1. Gerenciar produtos
  2. Gerenciar usuários
  3. Realizar compra
  4. Registro de vendas
  5. Sair
  `

  )
  console.log("  ")
  opcao = Number(digite("Escolha uma opção:"))
  switch (opcao) {
    case 1:
      console.log(
        `===== GERENCIAR PRODUTOS =====
          1. Adicionar produto
          2. Remover produto
          3. Listar produtos
          4. Sair 
          `
      )
      console.log("  ")
      gereProdutos = Number(digite("Escolha uma opção:"))

      console.log("  ")
        switch (gereProdutos) {
          case 1:
            let nomeProduto = {id: geraId() ,nome:digite("Qual o nome do produto?:"), preco: Number(digite("Qual o valor?:")), estoque:Number(digite("Qual o estoque?:"))}
            produtos.push(nomeProduto)
            break;
          case 2:
            let produtoRemove = digite("Remova pelo ID:")
            console.log("  ")
            console.log(usuarios)
           produtos = produtos.filter(obj => obj.id != produtoRemove)

            break;
          case 3:
            console.log("Aqui esta a lista:")
            console.log("  ")
            console.log(produtos)
            break;
          case 4:
            break
        }

      break;
    case 2:
      console.log("  ")
    console.log(`
      ===== GERENCIAR USUÁRIOS =====
          1. Adicionar usuário
          2. Remover usuário
          3. Listar usuários
          4. Sair
      `)
     opcaoUsuario = Number(digite("Qual opção?:"))

    do{
      switch(opcaoUsuario){
        case 1:
        let usuario = {id:geraIdusu(),nome:digite("Qual o nome do usuário?:"),email:digite("qual o seu email?:") }
      usuarios.push(usuario)
      break;
      case 2:
        let usuarioRemove = digite("Remova pelo ID:")
        console.log(usuarios)
        let usuRemo = usuarios.findIndex(usu=>usu.nome === `${usuarioRemove}`)
        console.log(`Usuário ${usuarios[usuRemo]} foi removido`)
        usuarios = usuarios.filter(usu => usu.id != usuarioRemove)
        break;
        case 3:
          console.log(usuarios)
        case 4:
          break;
      }
      break;

    }while(opcaoUsuario != 4)
      
      break;
    case 3:
      console.log("Realizar compra")
      let r = 2
      
      while(i == -1){
        if(r == 1){
          break;
        }
        emailDoUsuarioDaCompra = digite("Qual seu email?:")
        i = usuarios.findIndex(h => h.email === `${emailDoUsuarioDaCompra}`)

        if(i == -1){
          console.log("  ")
          console.log("Usuario não encontrado!, tente se cadastrar!.")
          console.log("Digite 1 para sair.")
        }
        
        r = Number(emailDoUsuarioDaCompra)
      
        
      }
      if(r == 1){
        break;
      }
      
      console.log(produtos)

      do{
        nomeCompra = digite("Compre pelo nome(Digite o nome corretamente):")
        j = produtos.findIndex(d=>d.nome === `${nomeCompra}`)
        if(j == -1){
          console.log("Produto não encontrado")
        }
        
      }while(j == -1)
      
      do{
        quantidadeDaCompra = Number(digite("Quantos itens?:"))
        if(quantidadeDaCompra <= 0){
          console.log("Quantidade inválida")
        }
      }while(quantidadeDaCompra <= 0);
      

      let compra = produtos.find(obj => obj.nome === `${nomeCompra}`)
      console.log(" ")
     
      if(compra.estoque <= 0){
        console.log("Nosso estoque acabou!")
      }else if(compra.estoque < quantidadeDaCompra){
        console.log("Não temos essa quantidade em estoque!")
      }else{
        compra.estoque = compra.estoque - quantidadeDaCompra
        let index = produtos.findIndex(ind => ind.nome === `${nomeCompra}`)
        produtos[index] = compra
        console.log(`O estoque é ${produtos[index].estoque}`)
        valorVendido += produtos[index].preco * quantidadeDaCompra
        let compraR = {id:geraIdcom(), idUsuario: produtos[index].id,quantidade: quantidadeDaCompra,valor: Number(valorVendido.toFixed(2)) , data: `${dia}/${mes+1}/${ano}`,mes:mes+1 }
        registroDeCompras.push(compraR)
      }
      break;
    case 4:
      do{
        console.log(`
          ===== REGISTRO DE VENDAS =====
            1. Histórico de vendas
            2. Listar lucro mensal
            3. Sair
          `)
          opcaoRegistrodevendas = Number(digite(`Qual opção?:`))
          switch(opcaoRegistrodevendas){
            case 1:
             console.log(registroDeCompras)
            break;
            case 2:
               
           
               qualMes = digite("Qual mês você deseja saber(digite o numero do mês)?:")
               registroPorMes = registroDeCompras.filter(e=>e.mes != qualMes)

              registroPorMes.forEach(e=>{
                somaPorMes += e.valor
              })
             console.log(`O valor do mes ${qualMes} é ${somaPorMes}`)

             somaPorMes = 0;

            break
            case 3:
            break;
          }
          
      }while(opcaoRegistrodevendas != 3);
      break;
      case 5:
        break;
  }

} while (opcao != 5);
