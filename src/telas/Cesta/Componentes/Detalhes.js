import { Image, StyleSheet, Dimensions, Text, View } from 'react-native';

import Texto from '../../../componentes/Texto';
import logoFazenda from '../../../../assets/logoFazenda.png';

export default function Detalhes() {
    return<>
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
    </>
}


const estilos = StyleSheet.create({
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