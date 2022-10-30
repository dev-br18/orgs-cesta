import React from "react";

import { StyleSheet , View, Image,} from "react-native";


import Texto from '../../../componentes/Texto'
import Botao from "../../../componentes/Botao";


export default function Detalhes({nome,logoFazenda,nomeFazenda,descricao,preco,botao}){
    return <>

        
        <Texto style={estilos.nome}>{nome}</Texto>

        <View style={estilos.fazenda}>
            <Image source={logoFazenda} style={estilos.imagemFazenda} />
            <Texto style={estilos.nomeFazenda}>{nomeFazenda}</Texto>

        </View>


        <Texto style={estilos.descriçao}>{descricao}</Texto>
        <Texto style={estilos.preco}>{preco}</Texto>

        <Botao texto={botao} style={estilos.botao}/>
    </>
}


const estilos = StyleSheet.create({
    nome: {
        color: '#464646',
        fontSize: 26,
        lineHeight: 42,
        fontWeight: 'bold'

    },
    fazenda: {
        flexDirection: 'row',
        paddingVertical: 13
    },
    imagemFazenda: {
        width: 32,
        height: 32,
    },
    nomeFazenda: {
        fontSize: 16,
        lineHeight: 26,
        marginLeft: 12,
        fontFamily: 'MontSerratRegular'
    },
    descriçao: {
        color: '#A3A3A3',
        fontSize: 16,
        lineHeight: 26,
        fontFamily: 'MontSerratRegular'
    },
    preco: {
        color: '#2A9F85',
        fontWeight: 'bold',
        fontSize: 26,
        lineHeight: 42,
        marginTop: 8
    },
    botao:{
        marginTop: 20,
    }
})