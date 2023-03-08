import React from "react"
import { Skeleton, Stack, Typography } from "@mui/material"

const TopArtistsFeedSkeleton = ({ units = 10 }) => {
  return (
    <>
      {Array(units)
        .fill(0)
        .map((_, idx) => (
          <Stack
            key={idx}
            sx={{ width: { xs: "100%", sm: "100%", md: "400px" }, bgcolor: "rgba(0,0,0,0.3)", py: "6px", px: "16px", cursor: "default" }}
          >
            <Typography variant="h6" fontWeight="bold" color="#00FFFF">
              <Skeleton />
            </Typography>
            <Typography variant="subtitle2" color="#00FFFF">
              <Skeleton />
            </Typography>
            <Typography variant="body1">
              <Skeleton />
            </Typography>
          </Stack>
        ))}
    </>
  )
}

export default TopArtistsFeedSkeleton
