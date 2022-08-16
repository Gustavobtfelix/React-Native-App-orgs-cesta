import {FlatList, View, StyleSheet } from 'react-native';

import Topo from './Componentes/Topo';
import Detalhes from './Componentes/Detalhes';
import Texto from '../../componentes/Texto';
import Item from './Componentes/Item';


                              //topo e descricao estao sendo pegos do mock no App.js
export default function Cesta({ topo, detalhes, itens }) { // export é para poder utilizar componente em outros arquivos, default limita a quantidade de funções que podem ser exportadas para 1. <> = fragmento (agrupamento de componentes) texto = campo estilizado localizado na pasta componentes
    return<>
        <FlatList
            data={itens.listaTexto}
            renderItem={Item}
            keyExtractor={({ nome }) => nome }
            ListHeaderComponent={() => {
                return <>
                    <Topo {...topo} />   
                    <View  style={estilos.cesta}>
                        <Detalhes {...detalhes} />
                        <Texto style={estilos.titulo} >{ itens.tituloTexto }</Texto>
                    </View>
                </>
            }}
        />
    </>//visao em lista dentro do ListHeaderComponent
} //topo == parte 1 e detalhes == parte 2
//stylesheet pode ser enviado para outra pagina, apenas importando e deixando o codigo mais limpo
const estilos = StyleSheet.create({ //578 = altura da imagem, 768 = largura da imagem
    titulo: { 
        color: "#464646",
        fontWeight: "bold",
        marginTop: 32,
        marginBottom: 8,
        fontSize: 20,
        lineHeight: 32,
    },
    
    cesta: {
        paddingVertical: 8,
        paddingVertical: 16,
    },
})