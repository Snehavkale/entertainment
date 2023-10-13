
import React, { useEffect, useState } from 'react'
import Card from '../../Components/Card/card'
import './series.css'
import axios from 'axios'
import { CircularProgress, Box } from '@mui/material';
import BasicPagination from '../../Components/Pagination/Pagination';


const Series = () => {

  const [data, setData] = useState([])
  console.log(data)
  const [loder, setLoader] = useState(true)
  const [page, setPage] = useState(1)
  const [numofpages, setNumofPages] = useState()
  console.log(data)

  async function featchMovie() {
    await axios.get(` https://api.themoviedb.org/3/discover/tv?api_key=b85cf7e63f70f1e2d712df5393ca05bd&language=en-US&page=${page}`)
      .then((x) => {
        setData(x.data.results)
        setNumofPages(x.data.total_pages)
      })
  }

  useEffect(() => {
    featchMovie()
    setTimeout(() => {
      setLoader(false)
    }, 3000)
  }, [page])



  return (
    <>
      <span className='pageTitle'>Series</span>

      {
        loder ?
          <Box sx={{ display: 'flex', }}>
            <CircularProgress size='7rem' color='inherit' sx={{ margin: "auto", marginTop: "50px" }} />
          </Box>
          :
          <div className='movie'>
            {
              data.map((item, i) => {
                return (
                  <Card key={i}
                    id={item.id}
                    poster={item.poster_path}
                    title={item.original_name}
                    date={item.first_air_date}
                    media_type="tv"
                    vote_average={item.vote_average} />
                )


              })
            }
          </div>
      }

      <div style={{ marginBottom: "20px" }}>
        <BasicPagination setPage={setPage} numofpages={numofpages} />
      </div>
    </>
  )
}

export default Series
