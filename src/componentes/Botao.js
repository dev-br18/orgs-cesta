import React from "react";

import { TouchableOpacity,StyleSheet } from "react-native";
import Texto from "./Texto";


export default function Botao({texto,style,onPrees}){
    return <TouchableOpacity style={[estilos.botao,style]} onPress={onPrees}>
            <Texto style={estilos.textoBotao}>{texto}</Texto>
        </TouchableOpacity>

}

const estilos = StyleSheet.create({
    botao:{
        
        backgroundColor: '#2A9F85',
        paddingVertical:16,
        borderRadius: 6,
    },
    textoBotao:{
        color:'#FFFFFF',
        fontSize:16,
        lineHeight:26,
        textAlign:"center",
        fontWeight:'bold'
    }
})