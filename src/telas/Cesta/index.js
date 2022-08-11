import { Image, StyleSheet, Dimensions, Text, View } from 'react-native';

import Topo from './Componentes/Topo';
import Detalhes from './Componentes/Detalhes';



export default function Cesta() { // export é para poder utilizar componente em outros arquivos, default limita a quantidade de funções que podem ser exportadas para 1. <> = fragmento (agrupamento de componentes) texto = campo estilizado localizado na pasta componentes
    return<>
        <Topo />        

        <View  style={estilos.cesta}>
            <Detalhes />
        </View>
    </>
}
//stylesheet pode ser enviado para outra pagina, apenas importando e deixando o codigo mais limpo
const estilos = StyleSheet.create({ //578 = altura da imagem, 768 = largura da imagem
    
    cesta: {
        paddingVertical: 8,
        paddingVertical: 16,
    },
})