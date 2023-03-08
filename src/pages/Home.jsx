import React from "react"
import HomeHeader from "../components/HomeHeader"
import { useSelector } from "react-redux"
import { useSearchSongsQuery } from "../store"
import Feed from "../components/feeds/Feed"
import TopPlays from "../components/TopPlays"
import { Stack, useMediaQuery } from "@mui/material"

const Home = () => {
  const { selectedGenre } = useSelector((store) => store.data)
  const { data, isFetching, isError } = useSearchSongsQuery(selectedGenre)
  const feedOverflow = useMediaQuery((theme) => theme.breakpoints.up("lg"))

  return (
    <Stack flexGrow={1} sx={{ flexDirection: { md: "column", lg: "row" }, overflow: "auto" }}>
      <Stack flexGrow={1} sx={{ overflow: feedOverflow && "auto" }}>
        <HomeHeader />
        <Feed songs={data} isFetching={isFetching || isError} feedOverflow={feedOverflow} />
      </Stack>
      <TopPlays feedOverflow={feedOverflow} />
    </Stack>
  )
}

export default Home
