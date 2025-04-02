import React from 'react'
import { Box, Typography, Stack } from '@mui/material'
import './Header.css'

function Header() {
  return (
    <>
      <Box sx={{ width: "100%", padding: "15px 20px", bgcolor: "blue", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        <Typography variant='h5' sx={{ fontWeight: "500", color: "#ffff" }}>Zioty</Typography>
        <Stack>
          <li>
            <a href="">Accueil</a>
            <a href="">A Propos</a>
            <a href="">Services</a>
            <a href="">Contact</a>
          </li>
        </Stack>
      </Box>
    </>
  )
}

export default Header