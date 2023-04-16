import React from "react";
import {Button, StyleSheet} from 'react-native'

const letraJ=()=>{
    alert("J, JÓTA, j, jóta")
}
const letraK=()=>{
    alert("K, CÁ, c, cá")
}
const letraL=()=>{
    alert("L, ÉLE, l, éle")
}
const letraM=()=>{
    alert("M, ÊME, m, ême")
}
const letraN=()=>{
    alert("N, ÊNE, n, êne")
}
const letraO=()=>{
    alert("O, Ó, o, ó")
}
const letraP=()=>{
    alert("P, PÊ, p, pê")
}
const letraQ=()=>{
    alert("Q, QUÊ, q, quê")
}
const letraR=()=>{
    alert("R, ÉRRE, r, érre")
}

export default comp=>{
    function executar(){
        console.warn('executando')
    }
    return (
    <>
        <div className={styles.div1}>
                <Button
                    title="j"
                    onPress={letraJ}
                />
                <Button
                    title="k"
                    onPress={letraK}
                />
                <Button
                    title="l"
                    onPress={letraL}
                />
                <Button
                    title="m"
                    onPress={letraM}
                />
                <Button
                    title="n"
                    onPress={letraN}
                />
                 <Button
                    title="o"
                    onPress={letraO}
                />
                <Button
                    title="p"
                    onPress={letraP}
                />
                <Button
                    title="q"
                    onPress={letraQ}
                />
                <Button
                    title="r"
                    onPress={letraR}
                />
        </div>
    </>
    )
}

const styles = StyleSheet.create({


    div1:{
        flex:1,
        alignItems:'center',
        justifyContent:'center',
        flexDirection:'column',
        
    }
});