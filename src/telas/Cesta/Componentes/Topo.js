import React from 'react';
import { Image, StyleSheet, Dimensions } from 'react-native';

import Texto from '../../../componentes/Texto';
import topo from '../../../../assets/topo.png';

const width = Dimensions.get('screen').width;

export default function Topo() {
    return<>
        <Image source={topo} style={estilos.imagemTopo}/>
        <Texto style ={estilos.titulo}>Detalhe da cesta</Texto>  
    </>
    }
    
const estilos = StyleSheet.create({
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
})