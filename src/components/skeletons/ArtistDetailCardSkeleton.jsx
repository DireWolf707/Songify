import React from "react"
import { Stack, Typography, Box, Skeleton } from "@mui/material"

const ArtistDetailCardSkeleton = () => {
  return (
    <Stack flexDirection="row" alignItems="center" gap={4} sx={{ bgcolor: "rgba(0,0,0,0.2)", m: "auto", p: "26px" }}>
      <Skeleton variant="circular" width="180px" height="180px" />

      <Stack gap={1}>
        <Typography variant="h4" fontWeight="bold">
          <Skeleton width="120px" />
        </Typography>
        <Typography variant="subtitle1" fontWeight="bold" color="#00FFFF">
          <Skeleton width="120px" />
        </Typography>
        <Typography variant="subtitle1" fontWeight="bold" color="#00FFFF">
          <Skeleton width="120px" />
        </Typography>
        <Typography variant="subtitle1" fontWeight="bold" color="#00FFFF">
          <Skeleton width="120px" />
        </Typography>
      </Stack>
    </Stack>
  )
}

export default ArtistDetailCardSkeleton
