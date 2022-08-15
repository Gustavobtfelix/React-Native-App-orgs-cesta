import { Image, StyleSheet, View } from 'react-native';

import Texto from '../../../componentes/Texto';

export default function Detalhes({ nomeTexto, logo, nomeFazendaTexto, descricaoTexto, precoTexto}) {
    return<>
        <Texto style={estilos.nome}>{nomeTexto}</Texto>
        <View style={estilos.quebraLinha}>
            <Image source={logo} style={estilos.imagemLogoFazenda}/>
            <Texto style={estilos.nomeFazenda}>{nomeFazendaTexto}</Texto>
        </View>
        <Texto style={estilos.descricao}>
            {descricaoTexto}
        </Texto>
        <Texto style={estilos.preco}>{precoTexto}</Texto>
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