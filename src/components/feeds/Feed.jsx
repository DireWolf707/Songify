import React from "react"
import { Stack, Card, CardMedia, CardContent, Typography } from "@mui/material"

const Feed = ({ songs, isFetching }) => {
  return (
    <Stack
      flexGrow={1}
      flexDirection="row"
      flexWrap="wrap"
      justifyContent="center"
      alignItems="center"
      gap={2}
      sx={{ m: "10px", overflow: "auto" }}
    >
      {isFetching ? (
        <></>
      ) : (
        songs.tracks.map(({ data: song }) => (
          <Card
            key={song.id}
            sx={{
              height: "260px",
              width: "240px",
              bgcolor: "rgba(0,0,0,0.2)",
            }}
          >
            <CardMedia component="img" height="160px" image={song?.albumOfTrack?.coverArt?.sources[0]?.url} sx={{ p: "7px 7px 0 7px" }} />

            <CardContent>
              <Typography variant="body1" fontWeight="bold">
                {song?.name.slice(0, 50)}
              </Typography>
              <Typography variant="subtitle2" color="#B2BEB5">
                {song?.artists?.items[0]?.profile?.name.slice(0, 50)}
              </Typography>
            </CardContent>
          </Card>
        ))
      )}
    </Stack>
  )
}

export default Feed
