import React, { useState } from "react"
import { Stack } from "@mui/material"
import SearchBar from "./components/SearchBar"
import SideBar from "./components/SideBar"
import TopPlays from "./components/TopPlays"
import { Routes, Route } from "react-router-dom"
import { TopArtists, TopCharts, Search, Home, AroundYou } from "./pages"

const App = () => {
  const [open, setOpen] = useState(false)

  return (
    <Stack
      flexDirection="row"
      sx={{
        height: "100vh",
        width: "100vw",
      }}
    >
      <SideBar open={open} setOpen={setOpen} />

      <Stack
        flexGrow={1}
        sx={{
          background: "linear-gradient(135deg, rgba(2,0,57,1) 0%, rgba(55,73,246,1) 71%, rgba(152,162,255,1) 100%)",
          flexDirection: { md: "column", lg: "row" },
        }}
      >
        <Stack flexGrow={1}>
          <SearchBar setOpen={setOpen} />

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/search/:searchTerm" element={<Search />} />
            <Route path="/around-you" element={<AroundYou />} />
            <Route path="/top-artists" element={<TopArtists />} />
            <Route path="/top-charts" element={<TopCharts />} />
          </Routes>
        </Stack>

        <TopPlays />
      </Stack>
    </Stack>
  )
}

export default App
