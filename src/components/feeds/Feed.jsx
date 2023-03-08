import React from "react"
import { Stack, Card, CardMedia, CardContent, Typography } from "@mui/material"
import { Link } from "react-router-dom"
import FeedSkeleton from "../skeletons/FeedSkeleton"

const Feed = ({ songs, isFetching, feedOverflow = true }) => {
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
        <FeedSkeleton />
      ) : (
        songs.tracks.map(({ data: song }) => (
          <Card
            key={song.id}
            sx={{
              width: { xs: "300px", sm: "240px" },
              bgcolor: "rgba(0,0,0,0.2)",
            }}
          >
            <CardMedia component="img" height="200px" image={song?.albumOfTrack?.coverArt?.sources[0]?.url} sx={{ p: "7px 7px 0 7px" }} />

            <CardContent>
              <Link to={`/song/${song.id}`}>
                <Typography variant="body1" fontWeight="bold">
                  {song?.name.slice(0, 50)}
                </Typography>
              </Link>
              <Link to={`/artist/${song?.artists?.items[0]?.uri?.split(":")[2]}`}>
                <Typography variant="subtitle2" color="#B2BEB5">
                  {song?.artists?.items[0]?.profile?.name.slice(0, 50)}
                </Typography>
              </Link>
            </CardContent>
          </Card>
        ))
      )}
    </Stack>
  )
}

export default Feed
