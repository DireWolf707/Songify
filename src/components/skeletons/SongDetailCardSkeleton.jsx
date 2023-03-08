import React from "react"
import { Stack, Typography, Skeleton, Box } from "@mui/material"

const SongDetailCardSkeleton = () => {
  return (
    <Stack alignItems="center" gap={2} sx={{ bgcolor: "rgba(0,0,0,0.2)", m: "auto", p: "26px" }}>
      <Skeleton variant="circular" width="180px" height="180px" />

      <Stack width="100%" gap={1}>
        <Typography variant="h4" fontWeight="bold">
          <Skeleton />
        </Typography>

        <Typography variant="subtitle1" fontWeight="bold" color="#00FFFF">
          <Skeleton />
        </Typography>

        <Typography variant="subtitle1" fontWeight="bold" color="#00FFFF">
          <Skeleton />
        </Typography>
      </Stack>
      <Box component="audio" controls />
    </Stack>
  )
}

export default SongDetailCardSkeleton
