//mocks são informações ou funções feitas para substituir suas originais
import logoFazenda from '../../assets/logoFazenda.png';
import tomate from '../../assets/frutas/Tomate.png';
import brocolis from '../../assets/frutas/Brócolis.png';
import batata from '../../assets/frutas/Batata.png';
import pepino from '../../assets/frutas/Pepino.png';
import abobora from '../../assets/frutas/Abóbora.png';

const cesta = {
    topo: {
        tituloTexto: "Detalhe da cesta",
    },
    detalhes: {
        nomeTexto: "Cesta de Verduras",
        logo: logoFazenda,
        nomeFazendaTexto: "Jenny Jack Farm",
        descricaoTexto: "Uma cesta com produtos selecionados cuidadosamente cuidadosamente da fazenda direto para sua cozinha",
        precoTexto: "R$ 40,00",
    },
    itens: {
        titulo: "Itens da cesta",
        lista: [
          {
            nome: "Tomate",
            imagem: tomate,
          },
          {
            nome: "Brócolis",
            imagem: brocolis,
          },
          {
            nome: "Batata",
            imagem: batata,
          },
          {
            nome: "Pepino",
            imagem: pepino,
          },
          {
            nome: "Abóbora",
            imagem: abobora,
          }
        ]
      }
}

export default cesta;