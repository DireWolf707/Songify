import React from "react"
import { useParams } from "react-router-dom"
import { Stack } from "@mui/material"
import { useFetchTrackQuery } from "../store"
import SongDetailCard from "../components/SongDetailCard"
import SongDetailCardSkeleton from "../components/skeletons/SongDetailCardSkeleton"

const SongDetail = () => {
  const { songId } = useParams()
  const { data, isFetching, isError } = useFetchTrackQuery(songId)

  return (
    <Stack flexGrow={1} sx={{ overflow: "auto" }}>
      {isFetching || isError ? <SongDetailCardSkeleton data={data} /> : <SongDetailCard data={data} />}
    </Stack>
  )
}

export default SongDetail
