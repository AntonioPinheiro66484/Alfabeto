import React from "react";
import {Button, StyleSheet, View} from 'react-native'

const letraA=()=>{
    alert("A, Á, a, á")
}
const letraB=()=>{
    alert("B, BÊ, b, bê")
}
const letraC=()=>{
    alert("C, CÊ, c, cê")
} 
const letraD=()=>{
    alert("D, DÊ, d, dê")
}
const letraE=()=>{
    alert("E, É, e, é")
}
const letraF=()=>{
    alert("F, ÉFE, f, éfe")
}
const letraG=()=>{
    alert("G, GÊ, g, gê")
}
const letraH=()=>{
    alert("H, AGÁ, h, agá")
}
const letraI=()=>{
    alert("I, I, i, i")
}
export default comp=>{
    function executar(){
        console.warn('executando')
    }
    return (
        <View>
            <div className={styles.div1}>
                <Button
                    title="a"
                    onPress={letraA}
                />
                <Button
                    title="b"
                    onPress={letraB}
                />
                <Button
                    title="c"
                    onPress={letraC}
                />
                <Button
                    title="d"
                    onPress={letraD}
                />
                <Button
                    title="e"
                    onPress={letraE}
                />
                 <Button
                    title="f"
                    onPress={letraF}
                />
                <Button
                    title="g"
                    onPress={letraG}
                />
                <Button
                    title="h"
                    onPress={letraH}
                />
                <Button
                    title="i"
                    onPress={letraI}
                />
            </div>
    </View>
    )
}

const styles = StyleSheet.create({
    div1:{
        alignItems:'center',
        justifyContent:'center',
        flexDirection:'row',
        
    },

  });