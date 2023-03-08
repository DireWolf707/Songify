import React from "react"
import { Stack } from "@mui/material"
import SideBar from "./components/SideBar"
import { Routes, Route } from "react-router-dom"
import {
  TopArtists,
  Search,
  Home,
  SongDetail,
  ArtistDetail,
  // TopCharts,
  // AroundYou,
} from "./pages"
import SearchBar from "./components/SearchBar"

const App = () => {
  return (
    <Stack
      flexDirection="row"
      sx={{
        height: "100vh",
        width: "100vw",
        background: "linear-gradient(135deg, rgba(2,0,57,1) 0%, rgba(55,73,246,1) 71%, rgba(152,162,255,1) 100%)",
      }}
    >
      <SideBar />
      <Stack flexGrow={1}>
        <SearchBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/search/:searchTerm" element={<Search />} />
          <Route path="/top-artists" element={<TopArtists />} />
          <Route path="/song/:songId" element={<SongDetail />} />
          <Route path="/artist/:artistId" element={<ArtistDetail />} />
          {/* <Route path="/top-charts" element={<TopCharts />} /> */}
          {/* <Route path="/around-you" element={<AroundYou />} /> */}
        </Routes>
      </Stack>
    </Stack>
  )
}

export default App
