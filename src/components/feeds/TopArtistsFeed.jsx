import React from "react"
import { Typography, Stack } from "@mui/material"
import { numFormat } from "../../utils/numFormat"
import TopArtistsFeedSkeleton from "../skeletons/TopArtistsFeedSkeleton"

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
        <TopArtistsFeedSkeleton units={limit != -1 ? limit : 200} />
      ) : (
        artists.slice(0, limit).map(
          (artist) =>
            artist.followers && (
              <Stack
                key={artist.rank}
                alignItems="center"
                sx={{
                  width: { xs: "100%", sm: "100%", md: "400px" },
                  bgcolor: "rgba(0,0,0,0.3)",
                  py: "6px",
                  px: "16px",
                  cursor: "default",
                }}
              >
                <Typography variant="h6" fontWeight="bold" color="#00FFFF">
                  {artist.artist}
                </Typography>
                <Typography variant="subtitle2" color="#00FFFF">
                  Rank : {artist.rank}
                </Typography>
                <Typography variant="body1">
                  Followers :&nbsp;
                  {numFormat(artist.followers)}
                </Typography>
              </Stack>
            )
        )
      )}
    </Stack>
  )
}

export default TopArtistsFeed
