import React, { useState } from "react"
import { Stack, TextField, useMediaQuery, IconButton } from "@mui/material"
import SearchIcon from "@mui/icons-material/Search"
import MenuIcon from "@mui/icons-material/Menu"
import { useNavigate } from "react-router-dom"

const SearchBar = ({ setOpen }) => {
  const navigate = useNavigate()
  const [searchTerm, setSearchTerm] = useState("")
  const isSmall = useMediaQuery((theme) => theme.breakpoints.only("xs"))

  const submitHandler = (e) => {
    e.preventDefault()
    if (!searchTerm) return
    navigate(`/search/${searchTerm}`)
    setSearchTerm("")
  }

  return (
    <Stack
      onSubmit={submitHandler}
      component="form"
      flexDirection="row"
      alignItems="center"
      gap={1.2}
      sx={{ height: "40px", mx: "16px", my: "8px" }}
    >
      <SearchIcon sx={{ fill: "#00FFFF" }} />

      <TextField
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        autoComplete="off"
        fullWidth
        margin="normal"
        placeholder="Search"
        type="search"
        variant="standard"
        sx={{ input: { color: "#00FFFF" } }}
      />

      {isSmall && (
        <IconButton onClick={() => setOpen(true)}>
          <MenuIcon fontSize="large" />
        </IconButton>
      )}
    </Stack>
  )
}

export default SearchBar
