import React, { Fragment, useState } from 'react'
import styled from 'styled-components'

const Label = styled.label`
    font-family: 'Bebas Neue', cursive;
    color: #FFF;
    text-transform: uppercase;
    font-weight: bold;
    font-size: 2.4rem;
    margin-top: 2rem;
    display: block;
`

const Select = styled.select`
    width: 100%;
    display: block;
    padding: 1rem;
    -webkit-appearance: none;
    border-radius: 10px;
    border: none;
    font-size: 1.2rem;
`

const useCriptomonedas = (label, stateInicial, listacripto) => {
    
    const [state, updateState] = useState(stateInicial)

    const SelectCripto = () => (
        <Fragment>
                <Label>{label}</Label>
                <Select
                    onChange={e => updateState(e.target.value)}
                    value={state}
                >
                    <option value="">-- Seleccione --</option>
                    {/* {modenedas.map(item => (
                        <option key={item.codigo} value={item.codigo}>{item.nombre}</option>
                    ))} */}
                </Select>
            </Fragment>
        )

        return [state, SelectCripto, updateState]
}

export default useCriptomonedas