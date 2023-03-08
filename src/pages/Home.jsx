import React from "react"
import HomeHeader from "../components/HomeHeader"
import { useSelector } from "react-redux"
import { useSearchSongsQuery } from "../store"
import Feed from "../components/feeds/Feed"
import TopPlays from "../components/TopPlays"
import { Stack } from "@mui/material"

const Home = () => {
  const { selectedGenre } = useSelector((store) => store.data)
  const { data, isFetching } = useSearchSongsQuery(selectedGenre)

  return (
    <Stack flexGrow={1} sx={{ flexDirection: { md: "column", lg: "row" }, overflow: "auto" }}>
      <Stack flexGrow={1} sx={{ overflow: "auto", flexShrink: { xs: 0, lg: 1 } }}>
        <HomeHeader />
        <Feed songs={data} isFetching={isFetching} />
      </Stack>
      <TopPlays />
    </Stack>
  )
}

export default Home
