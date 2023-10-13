import React from 'react'
import './footer.css'
import { Link } from 'react-router-dom'
import { Box, BottomNavigation, BottomNavigationAction } from '@mui/material';
import WhatshotSharpIcon from '@mui/icons-material/WhatshotSharp';
import MovieSharpIcon from '@mui/icons-material/MovieSharp';
import TvSharpIcon from '@mui/icons-material/TvSharp';
import SearchSharpIcon from '@mui/icons-material/SearchSharp';


const Footer = () => {
    const [value, setValue] = React.useState(0);


    return (

        < >
            <BottomNavigation
                style={{width:"100%", backgroundColor: "#39445a", boxShadow: '0px 1px 5px black', color: "wheat", paddingBottom: "50px", paddingTop: "30px", position:"fixed", bottom:"0", zIndex:"100"}}
                value={value}
                onChange={(newValue) => {
                    setValue(newValue);
                }}
                

            >
                <Link to={"/"} className='common'>
                    <BottomNavigationAction label="Tranding" icon={<WhatshotSharpIcon sx={{ color: "white" }} />} />
                    <label>Tranding</label>
                </Link>

                <Link to={"/movie"} className='common'>
                    <BottomNavigationAction label="Movie" icon={<MovieSharpIcon sx={{ color: "white" }} />} />
                    <label>Movies</label>
                </Link>

                <Link to={"/series"} className='common'>
                    <BottomNavigationAction label="TvSerial" icon={<TvSharpIcon sx={{ color: "white" }} />} />
                    <label>Series</label>
                </Link>

                <Link to={"/search"} className='common'>
                    <BottomNavigationAction label="Search" icon={<SearchSharpIcon sx={{ color: "white" }} />} />
                    <label>Search</label>
                </Link>
            </BottomNavigation>

        </>
    )
}

export default Footer
