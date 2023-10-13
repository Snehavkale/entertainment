import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Card from '../../Components/Card/card'
import './movie.css'
import BasicPagination from '../../Components/Pagination/Pagination'
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import Gonras from '../../Components/gonras/gonras'


const Movie = () => {

  const [data, setData] = useState([])
  const [page, setPage] = useState(1)
  const [numofpages, setNumofPages] = useState()
  const [loder, setLoader] = useState(true)

  
  

  async function featchMovie() {
    await axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=b85cf7e63f70f1e2d712df5393ca05bd&language=en-US&page=${page}`)
      .then((x) => {
        setData(x.data.results)
        setNumofPages(x.data.total_pages)
      })

  }

 


  useEffect(() => {
    featchMovie()
    setTimeout(()=>{
      setLoader(false)
    },3000)
    
  }, [page])



  return (
    <>
      <span className="pageTitle">Movies</span>
      {/* <Gonras type='movie'/> */}
      {
        loder ?
          <Box sx={{ display: 'flex', }}>
            <CircularProgress size='7rem' color='inherit' sx={{margin:"auto", marginTop:"50px"}}/>
          </Box>
          :
          <div className='movie'>
            {
              data.map((item, i) => {
                return (
                  <Card key={i}
                    id={item.id}
                    poster={item.poster_path}
                    title={item.original_title}
                    date={item.release_date}
                    media_type="movie"
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

export default Movie
