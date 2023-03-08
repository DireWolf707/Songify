import React from "react"
import { useParams } from "react-router-dom"
import { Stack, Typography, Box } from "@mui/material"
import { useFetchTrackQuery } from "../store"
import { Link } from "react-router-dom"

const SongDetail = () => {
  const { songId } = useParams()
  const { data, isFetching } = useFetchTrackQuery(songId)

  return (
    <Stack flexGrow={1} sx={{ overflow: "auto" }}>
      <Stack alignItems="center" gap={4} sx={{ bgcolor: "rgba(0,0,0,0.2)", m: "auto", p: "26px" }}>
        <Box component="img" src={data?.tracks[0]?.album?.images[0].url} sx={{ height: "180px", width: "180px", borderRadius: "100%" }} />

        <Stack gap={1}>
          <Typography variant="h4" fontWeight="bold">
            {data?.tracks[0]?.name}
          </Typography>

          <Typography variant="subtitle1" fontWeight="bold" color="#00FFFF">
            Release : {data?.tracks[0]?.album?.release_date}
          </Typography>

          <Link to={`/artist/${data?.tracks[0]?.album?.artists[0]?.id}`}>
            <Typography variant="subtitle1" fontWeight="bold" color="#00FFFF">
              Artist : {data?.tracks[0]?.album?.artists[0]?.name}
            </Typography>
          </Link>
        </Stack>
        <Box component="audio" src={data?.tracks[0]?.preview_url} controls />
      </Stack>
    </Stack>
  )
}

export default SongDetail
