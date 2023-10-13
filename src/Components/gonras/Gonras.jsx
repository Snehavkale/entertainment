import { Button } from '@mui/material'
import axios from 'axios'
import React, { useEffect, useState } from 'react'

const Gonras = ({type}) => {

    const [gonras, setGonras] = useState([])
    console.log(gonras)

    async function fetchGonras() {
        await axios.get(`https://api.themoviedb.org/3/genre/${type}/list?api_key=b85cf7e63f70f1e2d712df5393ca05bd&language=en-US`)
            .then((x) => setGonras(x.data.genres))
    }

    useEffect(() => {
        fetchGonras()
    }, [])
    return (
        <>
        <div style={{display:"flex", flexWrap:'wrap',}}>

            {
                gonras.map((item, i) => {
                    return (
                        <div key={i} style={{padding:"5px 0px"}}>
                            <Button style={{marginRight:"7px"}} variant='contained'>{item.name}</Button>
                        </div>
                    )
                })
            }
        </div>
        </>
    )
}

export default Gonras
