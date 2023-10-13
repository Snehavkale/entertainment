import axios from 'axios';
import "./tranding.css"
import React, { useEffect, useState } from 'react'
import Card from '../../Components/Card/card';
import BasicPagination from '../../Components/Pagination/Pagination';
import { CircularProgress,Box } from '@mui/material';

const Tranding = () => {

    const [data, setData] = useState([]);
    const[page, setPage]= useState(1)
    const [loder, setLoader] = useState(true)
    console.log(data)

    async function fetchTrending() {
        await axios.get(`https://api.themoviedb.org/3/trending/all/day?api_key=b85cf7e63f70f1e2d712df5393ca05bd&language=en-US&page=${page}`
        ).then((x) => setData(x.data.results))
    };

    useEffect(() => {
        fetchTrending()
        setTimeout(()=>{
            setLoader(false)
          },3000)
    }, [page])




    return (
        <>
             <span className="pageTitle">Trending Today</span>

             {
                loder ?
                <Box sx={{ display: 'flex', }}>
                  <CircularProgress size='7rem' color='inherit' sx={{margin:"auto", marginTop:"50px"}}/>
                </Box>
                :
                <div className='tranding'>  
                {
                  data.map((item,i)=>{
                      return(
                          <Card key={i}
                          id={item.id}
                          poster={item.poster_path}
                          title={item.title || item.name}
                          date={item.release_date || item.first_air_date }
                          media_type={item.media_type}
                          vote_average={item.vote_average}
                          />
                      )
                  })
                }
                </div>
             }
           
          <div style={{marginBottom:"20px"}}>
          <BasicPagination setPage={setPage} />
          </div>
        
        </>
    )
}

export default Tranding
