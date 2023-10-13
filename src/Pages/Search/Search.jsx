import { Button, Tab, Tabs, TextField } from '@mui/material'
import React, { useEffect, useState } from 'react'
import './search.css'
import SearchIcon from '@mui/icons-material/Search';
import axios from 'axios';
import Card from '../../Components/Card/card';
import BasicPagination from '../../Components/Pagination/Pagination';

const Search = () => {
  const [type, setType] = useState(0);
  const [page, setPage] = useState(1)
  const [content, setContent] = useState([])
  const [searchText, setSearchText] = useState("");
  const [numofpages, setNumofPages] = useState()



  async function fetchSearch() {
    await axios.get(`https://api.themoviedb.org/3/search/${type ? "tv" : "movie"}?api_key=b85cf7e63f70f1e2d712df5393ca05bd&language=en-US&query=${searchText}&page=${page}&include_adult=false`)
      .then((x) => {
        setContent(x.data.results)
        setNumofPages(x.data.total_pages)
      })

  }

  useEffect(() => {
    window.scroll(0, 0);
    fetchSearch();
  }, [type, page]);





  return (
    <>
      <span className="pageTitle">Search</span>

      <div className='search'>
        <TextField   className='searchBox' label='search' variant='filled' fontSize='50px'
          onChange={(e) => setSearchText(e.target.value)} />
        <Button
          onClick={fetchSearch}
          variant="contained"
          color='inherit'
          style={{ marginLeft: '-10px' }}
        ><SearchIcon fontSize="large" /></Button>
      </div>

      <Tabs
        value={type}
        indicatorColor="primary"
        textColor="primary"
        onChange={(event, newValue) => {
          setType(newValue);
          setPage(1);
        }}
        style={{ paddingBottom: 5 }}
        aria-label="disabled tabs example"
      >
        <Tab style={{ width: "50%" ,color:"white"}} label="Search Movies" />
        <Tab style={{ width: "50%",color:"white" }} label="Search TV Series" />
      </Tabs>


      <div className="search2">
        {content &&
          content.map((c) => (
            <Card
              key={c.id}
              id={c.id}
              poster={c.poster_path}
              title={c.title || c.name}
              date={c.first_air_date || c.release_date}
              media_type={type ? "tv" : "movie"}
              vote_average={c.vote_average}
            />
          ))}
        {searchText &&
          !content &&
          (type ? <h2>No Series Found</h2> : <h2>No Movies Found</h2>)}
      </div>
      {
        numofpages > 1 && <div style={{ marginBottom: "20px" }}>
          <BasicPagination setPage={setPage} numofpages={numofpages} />
        </div>
      }

    </>
  )
}

export default Search
