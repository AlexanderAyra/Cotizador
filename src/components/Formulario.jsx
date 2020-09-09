import React, {useState, useEffect } from 'react'
import styled from 'styled-components'
import useMoneda from '../hooks/useMoneda'
import useCriptomonedas from '../hooks/useCriptomonedas'
import Axios from 'axios'

const Boton = styled.input`
    margin-top: 20px;
    font-weight: bold;
    font-size: 20px;
    padding: 10px;
    background-color: #66a2fe;
    border: none;
    width: 100%;
    border-radius: 10px;
    color: #FFF;
    transition: background-color .3s ease;

    &:hover {
        background-color: #326AC0;
        cursor: pointer;
    }

`

const Formulario = () => {

    const [listacripto, setCriptomonedas] = useState([])

    const MONEDAS = [
        {codigo: 'USD', nombre: 'Dolar de Estados Unidos'},
        {codigo: 'MXN', nombre: 'Peso Mexicano'},
        {codigo: 'EUR', nombre: 'Euro'},
        {codigo: 'GBP', nombre: 'Libra Esterlina'}
    ]

    const [state, SelectMonedas] = useMoneda('Elige tu moneda', '', MONEDAS)
    const [criptomoneda, SelectCripto] = useCriptomonedas('Elige tu Criptomoneda', '', listacripto)

    useEffect(() => {

        const consultarAPI = async() => {
            const url = 'https://min-api.cryptocompare.com/data/top/mktcapfull?limit=10&tsym=USD'

            const resultado = await Axios.get(url)

            setCriptomonedas(resultado.data.Data);
        }
        consultarAPI()
    },[])

    return (
        <form>

            <SelectMonedas />

            <SelectCripto />

            <Boton
                type='submit'
                value='Calcular'
            />
        </form>
    )
}
export default Formulario