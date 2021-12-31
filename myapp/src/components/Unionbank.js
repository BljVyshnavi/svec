import React from 'react'
import Andhrabank from './Andhrabank'
import Corporation from './Corporation'

export default function Unionbank() {
    return (
        <div>
            <h1>Unionbank</h1>
            <Andhrabank location="tirupati"/>
            <Corporation location="vizag" />
        </div>
    )
}
