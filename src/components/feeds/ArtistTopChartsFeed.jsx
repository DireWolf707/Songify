import React from "react"
import { Stack, Card, CardMedia, CardContent, Typography } from "@mui/material"
import { Link } from "react-router-dom"

const ArtistTopChartsFeed = ({ songs, isFetching, feedOverflow = false }) => {
  return (
    <Stack
      flexGrow={1}
      flexDirection="row"
      flexWrap="wrap"
      justifyContent="center"
      alignItems="center"
      gap={2}
      sx={{ m: "10px", overflow: feedOverflow && "auto" }}
    >
      {isFetching ? (
        <></>
      ) : (
        songs.map(({ track: song }) => (
          <Card
            key={song.id}
            sx={{
              height: "240px",
              width: "240px",
              bgcolor: "rgba(0,0,0,0.2)",
            }}
          >
            <CardMedia component="img" height="160px" image={song?.album?.coverArt?.sources[0]?.url} sx={{ p: "7px 7px 0 7px" }} />

            <CardContent>
              <Link to={`/song/${song.id}`}>
                <Typography variant="body1" fontWeight="bold">
                  {song?.name.slice(0, 50)}
                </Typography>
              </Link>
            </CardContent>
          </Card>
        ))
      )}
    </Stack>
  )
}

export default ArtistTopChartsFeed
