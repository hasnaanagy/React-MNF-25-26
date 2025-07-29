import Header from "../components/HomeComponents/Header";
import React from 'react'
import Portfolio from "../components/HomeComponents/Portfolio";
export default function Home(){
return(
    <div style={{flex:1}}>
    <Header/>
    <Portfolio/>
    </div>
)
}