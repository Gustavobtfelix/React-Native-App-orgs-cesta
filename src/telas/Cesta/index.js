import {StyleSheet, View } from 'react-native';

import Topo from './Componentes/Topo';
import Detalhes from './Componentes/Detalhes';


                              //topo e descricao estao sendo pegos do mock no App.js
export default function Cesta({ topo, detalhes }) { // export é para poder utilizar componente em outros arquivos, default limita a quantidade de funções que podem ser exportadas para 1. <> = fragmento (agrupamento de componentes) texto = campo estilizado localizado na pasta componentes
    return<>
        <Topo {...topo} />        

        <View  style={estilos.cesta}>
            <Detalhes {...detalhes} />
        </View>
    </>
} //topo == parte 1 e detalhes == parte 2
//stylesheet pode ser enviado para outra pagina, apenas importando e deixando o codigo mais limpo
const estilos = StyleSheet.create({ //578 = altura da imagem, 768 = largura da imagem
    
    cesta: {
        paddingVertical: 8,
        paddingVertical: 16,
    },
})