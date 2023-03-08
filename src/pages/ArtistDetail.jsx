import React from "react"
import { useParams } from "react-router-dom"
import { Stack, Typography, Box } from "@mui/material"
import { useFetchArtistQuery } from "../store"
import ArtistTopChartsFeed from "../components/feeds/ArtistTopChartsFeed"
import ArtistDetailCard from "../components/ArtistDetailCard"
import ArtistDetailCardSkeleton from "../components/skeletons/ArtistDetailCardSkeleton"

const ArtistDetail = () => {
  const { artistId } = useParams()
  const { data, isFetching, isError } = useFetchArtistQuery(artistId)

  return (
    <Stack flexGrow={1} sx={{ overflow: "auto" }}>
      {isFetching || isError ? <ArtistDetailCardSkeleton data={data} /> : <ArtistDetailCard data={data} />}

      <Typography variant="h4" fontWeight="bold" p="16px">
        Top Songs
      </Typography>

      <ArtistTopChartsFeed
        songs={data?.data?.artist?.discography?.topTracks?.items}
        isFetching={isFetching || isError}
        feedOverflow={false}
      />
    </Stack>
  )
}

export default ArtistDetail
