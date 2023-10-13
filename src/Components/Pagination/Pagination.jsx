import * as React from 'react';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';

export default function BasicPagination({ setPage,numofpages=10 }) {
    const handlePage = (page) => {
        setPage(page);
        window.scroll(0, 0);
    }
    return (
        <div
            style={{
                width: "100%",
                display: "flex",
                justifyContent: "center",
                marginTop: "10px",
                marginBottom: "10px",
               
            }}
        >
            <Stack spacing={3} >
                <Pagination  count={numofpages} color="secondary" onChange={(e) => handlePage(e.target.textContent)} hideNextButton
                    hidePrevButton />
            </Stack>
        </div>
    );
}
