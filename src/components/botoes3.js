import React from "react";
import {Button, StyleSheet} from 'react-native'

const letraS=()=>{
    alert("S, ÉSSE, s, ésse")
}
const letraT=()=>{
    alert("T, TÊ, t, tê")
}
const letraU=()=>{
    alert("U, U, u, u")
}
const letraV=()=>{
    alert("V, VÊ, v, vê")
}
const letraW=()=>{
    alert("W, DÁBLIO, w, dáblio")
}
const letraX=()=>{
    alert("X, XIS, x, xis")
}
const letraY=()=>{
    alert("Y, ÍPSILON, y, ípsilon")
}
const letraZ=()=>{
    alert("Z, ZÊ, z, ê")
}

export default comp=>{
    function executar(){
        console.warn('executando')
    }
    return (
        <>
            <div className={styles.div1}>
                <Button
                    title="s"
                    onPress={letraS}
                />
                <Button
                    title="t"
                    onPress={letraT}
                />
                <Button
                    title="u"
                    onPress={letraU}
                />
                <Button
                    title="v"
                    onPress={letraV}
                />
                <Button
                    title="w"
                    onPress={letraW}
                />
                 <Button
                    title="x"
                    onPress={letraX}
                />
                <Button
                    title="y"
                    onPress={letraY}
                />
                <Button
                    title="z"
                    onPress={letraZ}
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