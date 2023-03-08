import React from "react"
import { Stack, Typography, Box } from "@mui/material"
import { Link } from "react-router-dom"

const SongDetailCard = ({data}) => {
  return (
    <Stack alignItems="center" gap={2} sx={{ bgcolor: "rgba(0,0,0,0.2)", m: "auto", p: "26px" }}>
      <Box component="img" src={data?.tracks[0]?.album?.images[0].url} sx={{ height: "180px", width: "180px", borderRadius: "100%" }} />

      <Stack alignItems="center" gap={1}>
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
  )
}

export default SongDetailCard
