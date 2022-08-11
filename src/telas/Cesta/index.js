import { Image, StyleSheet, Dimensions, Text, View } from 'react-native';

import topo from '../../../assets/topo.png';
import logoFazenda from '../../../assets/logoFazenda.png';

import Texto from '../../componentes/Texto';

const width = Dimensions.get('screen').width;

export default function Cesta() { // export é para poder utilizar componente em outros arquivos, default limita a quantidade de funções que podem ser exportadas para 1. <> = fragmento (agrupamento de componentes) texto = campo estilizado localizado na pasta componentes
    return<>
        <Image source={topo} style={estilos.imagemTopo}/>
        <Texto style ={estilos.titulo}>Detalhe da cesta</Texto>

        <View  style={estilos.cesta}>
            <Texto style={estilos.nome}>Cesta de Verduras</Texto>
            <View style={estilos.quebraLinha}>
                <Image source={logoFazenda} style={estilos.imagemLogoFazenda}/>
                <Texto style={estilos.nomeFazenda}>Jenny Jack Farm</Texto>
            </View>
            <Texto style={estilos.descricao}>
                Uma cesta com produtos selecionados cuidadosamente
                cuidadosamente da fazenda direto para
                sua cozinha
            </Texto>
            <Texto style={estilos.preco}>R$ 40,00</Texto>
        </View>
    </>
}
//stylesheet pode ser enviado para outra pagina, apenas importando e deixando o codigo mais limpo
const estilos = StyleSheet.create({ //578 = altura da imagem, 768 = largura da imagem
    imagemTopo: {
        width: "100%",
        height: 578 / 768 * width,
    },
    titulo: {
        padding: 16,     
        color: "white",
        width: "100%",
        position: "absolute", //posiciona em cima do componente anterior
        textAlign: "center",
        fontSize: 16,
        lineHeight: 26,
        fontWeight: "bold",
    },
    cesta: {
        paddingVertical: 8,
        paddingVertical: 16,
    },
    nome: {
        color: "#464646",
        fontSize: 26,
        lineHeight: 42,
        fontWeight: "bold",
    },
    quebraLinha: {
        flexDirection: "row", //altera posicionamento de itens na tela
        paddingVertical: 12,
    },
    imagemLogoFazenda: {
        width: 32,
        height: 32,
        marginRight: 12,
    },
    nomeFazenda: {
        fontSize: 16,
        lineHeight: 26,
    },
    descricao: {
        color: "#A3A3A3",
        fontSize: 16,
        lineHeight: 26,
    },
    preco: {
        color: "#2A9F85",
        marginTop: 8,
        fontSize: 26,
        lineHeight: 42,
        fontWeight: "bold",
    }
})