import React from "react"
import { Typography, Stack } from "@mui/material"
import { useFetchTopArtistsQuery } from "../store"
import TopArtistsFeed from "../components/feeds/TopArtistsFeed"

const TopArtists = () => {
  const { data, isFetching, isError } = useFetchTopArtistsQuery()

  return (
    <Stack flexGrow={1} sx={{ overflow: "auto" }}>
      <Typography variant="h4" fontWeight="bold" p="24px">
        Top Artists
      </Typography>
      <TopArtistsFeed artists={data} isFetching={isFetching || isError} />
    </Stack>
  )
}

export default TopArtists
