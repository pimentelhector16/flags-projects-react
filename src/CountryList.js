import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import Country from './Country'
import { useSelector, useDispatch } from 'react-redux'

const CountryListStyled = styled.div`
   display: grid;
   grid-row-gap: 2.3em;
   background: var(--veryLightGray);
   padding: 4em 2em;
   justify-content: center;
   border:1px solid red;
`

function CountryList() {
    const dispatch = useDispatch()
    const countryList = useSelector((state) => state.countryList)
    console.log('El estado total de mi app es ', countryList)
    //const [countryList, setCountryList] = useState([])

    useEffect(() => {
        fetch('https://restcountries.eu/rest/v2/')
            .then((response) => {
                return response.json()
            })
            .then((data) => {
                dispatch({
                    type: 'SET_COUNTRY_LIST',
                    payload: data
                })
                //setCountryList(data)
                console.log(data.length)
            })
            .catch(() => {
                console.log("Hubo un error")
            })
    }, [])
    return (
        <CountryListStyled>
            {
                countryList.map(({ name, flag, population, region, capital }) => {
                    return (
                        <Country
                            flag={flag}
                            name={name}
                            key={name}
                            population={population}
                            region={region}
                            capital={capital}
                        />
                    )
                })
            }


        </CountryListStyled>
    );
}

export default CountryList;