import React from "react"
import { Typography, Stack } from "@mui/material"

const TopArtistsFeed = ({ artists, isFetching, limit = -1 }) => {
  return (
    <Stack
      flexGrow={1}
      justifyContent="center"
      alignItems="center"
      flexDirection="row"
      flexWrap="wrap"
      gap={2}
      sx={{ m: "10px", overflow: "auto" }}
    >
      {isFetching ? (
        <></>
      ) : (
        artists.slice(0, limit).map(
          (artist) =>
            artist.followers && (
              <Stack key={artist.rank} alignItems="center" sx={{ width: "400px", bgcolor: "rgba(0,0,0,0.3)", py: "6px" }}>
                <Typography variant="h6" fontWeight="bold" color="#00FFFF">
                  {artist.artist}
                </Typography>
                <Typography variant="subtitle2" color="#00FFFF">
                  Rank : {artist.rank}
                </Typography>
                <Typography variant="body1">
                  Followers :&nbsp;
                  {Intl.NumberFormat("en-US", {
                    notation: "compact",
                    maximumFractionDigits: 2,
                  }).format(artist.followers)}
                </Typography>
              </Stack>
            )
        )
      )}
    </Stack>
  )
}

export default TopArtistsFeed
