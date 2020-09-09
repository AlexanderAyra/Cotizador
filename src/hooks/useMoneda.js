import React, { Fragment, useState } from 'react'

const useMoneda = () => {
    
    const [state, updateState] = useState('')

    const Seleccionar = () => (
        <Fragment>
                <label htmlFor="">Moneda</label>
                <select>
                    <option value="MXN">Peso Mexicano</option>
                </select>
            </Fragment>
        )

        return [state, Seleccionar, updateState]
}

export default useMoneda