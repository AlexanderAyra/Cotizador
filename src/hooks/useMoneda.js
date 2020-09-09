import React, { Fragment, useState } from 'react'

const useMoneda = (label, stateInicial, modenedas) => {
    
    const [state, updateState] = useState(stateInicial)

    const Seleccionar = () => (
        <Fragment>
                <label>{label}</label>
                <select>
                    <option value="MXN">-- Seleccione --</option>
                    {modenedas.map(item => (
                        <option key={item.codigo} value={item.codigo}>{item.nombre}</option>
                    ))}
                </select>
            </Fragment>
        )

        return [state, Seleccionar, updateState]
}

export default useMoneda