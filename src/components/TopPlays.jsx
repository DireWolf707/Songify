import React from "react"
import { Stack } from "@mui/material"
import { Typography } from "@mui/material"
import { useFetchTopArtistsQuery } from "../store"
import TopArtistsFeed from "./feeds/TopArtistsFeed"

const TopPlays = ({ feedOverflow = true }) => {
  const { data, isFetching, isError } = useFetchTopArtistsQuery()

  return (
    <Stack flexShrink={0} sx={{ width: { md: "100%", lg: "440px" }, overflow: feedOverflow && "auto" }}>
      <Typography variant="h5" fontWeight="bold" p="12px">
        Top 10 Artists
      </Typography>
      <TopArtistsFeed artists={data} isFetching={isFetching || isError} limit={10} />
    </Stack>
  )
}

export default TopPlays
