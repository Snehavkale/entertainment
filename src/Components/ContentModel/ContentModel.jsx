import * as React from 'react';
import { Box, Button, Typography, Modal, Fade } from '@mui/material';
import { useState } from 'react';
import axios from 'axios';
import { useEffect } from 'react';
import { img_500 } from '../../config/config';
import YouTubeIcon from '@mui/icons-material/YouTube';
import './model.css'

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 700,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

const ContentModel = ({ media_type, id, children }) => {
    // const classes = useStyles();
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);


    const [content, setContent] = useState()
    const [vedio, setVedio] = useState()
    console.log(content)


    async function fetchMovie() {
        await axios.get(`https://api.themoviedb.org/3/${media_type}/${id}?api_key=b85cf7e63f70f1e2d712df5393ca05bd&language=en-US`)
            .then((x) => {
                setContent(x.data)
            })
    }

    async function fetchVedio() {
        await axios.get(`https://api.themoviedb.org/3/${media_type}/${id}/videos?api_key=b85cf7e63f70f1e2d712df5393ca05bd&language=en-US`)
            .then((x) => {
                setVedio(x.data.results[0]?.key)
            })
    }

    useEffect(() => {
        fetchMovie()
        fetchVedio()
    }, [])

    return (
        <>
        

       
            <div className='media' style={{ cursor: "pointer" }} onClick={handleOpen}>{children}</div>

            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >


                <Box  className='model' sx={style}  >

                    <div style={{ display: "flex" }} className='moviename' >
                        <h2 >Movie Name:</h2>
                        <h3 style={{ marginTop: "3px", marginLeft: "5px" }}>{content ? content.title : ''}</h3>
                    </div>


                    <div style={{ display: "flex", marginTop: "5px", fontFamily: "sans-serif" }} className='overview'>
                        <h3>Overview:</h3>
                        <p className='overviewcontent' style={{ marginTop: "3px", marginLeft: "5px" }}>{content ? content.overview : ''}</p>
                    </div>


                    <div style={{display:"flex", justifyContent:"space-evenly"}} className='allbtn'>

                        <div style={{ textAlign: "center" }}>
                            <Button sx={{ mt: 3 }} variant="contained"startIcon={<YouTubeIcon />} color="secondary"target="__blank"
                                href={`https://www.youtube.com/watch?v=${vedio}`}
                            >  Watch the Trailer
                            </Button>
                        </div>


                        <div style={{marginTop:"25px"}}>

                            {
                                content && content.imdb_id && <a href={"https://www.imdb.com/title/" + content.imdb_id} target="_blank" style={{ textDecoration: "none" }}><p><Button  variant='contained' color='secondary'>IMDb Link</Button></p></a>
                            }

                        </div>

                        <div style={{marginTop:"25px"}}>
                        <Button variant='contained' color='secondary' onClick={handleClose}>Close</Button>
                        </div>
                        

                    </div>
                </Box>
            </Modal>
            
        </>
    );
}


export default ContentModel