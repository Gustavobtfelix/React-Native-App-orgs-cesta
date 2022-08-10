import { Image, StyleSheet, Dimensions, Text } from 'react-native';

import topo from '../../assets/topo.png';

const width = Dimensions.get('screen').width;

export default function Cesta() { // export é para poder utilizar componente em outros arquivos, default limita a quantidade de funções que podem ser exportadas para 1. <> = fragmento (agrupamento de componentes)
    return<>
        <Image source={topo} style={estilos.topo}/>
        <Text style ={estilos.titulo}>Detalhe da cesta</Text>
    </>
}
//stylesheet pode ser enviado para outra pagina, apenas importando e deixando o codigo mais limpo
const estilos = StyleSheet.create({ //578 = altura da imagem, 768 = largura da imagem
    topo: {
        width: "100%",
        height: 578 / 768 * width,
    },
    titulo: {
        width: "100%",
        position: "absolute", //posiciona em cima do componente anterior
        textAlign: "center",
        fontSize: 16,
        lineHeight: 26,
        color: "white",
        fontWeight: "bold",
        padding: 16,
        
    }
})