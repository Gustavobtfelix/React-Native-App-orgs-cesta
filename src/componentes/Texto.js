import React from 'react';
import {Text, StyleSheet} from 'react-native';

export default function Texto({ children, style }){ 
    let estilo = estilos.texto;

    if(style?.fontWeight == 'bold'){
        estilo = estilos.textoNegrito;
    }

    return <Text style={[style, estilo]}>{ children }</Text> //children e style vem de onde é utilizado e [] é de array
}

const estilos = StyleSheet.create({
    texto: {
        fontFamily: "MontserratRegular",
        fontWeight: "normal",
    },
    textoNegrito: {
        fontFamily: "MontserratBold",
        fontWeight: "normal",
    }
})