import React from "react"
import { Stack, Card, CardMedia, CardContent, Typography } from "@mui/material"

const TopChartsFeed = ({ songs, isFetching }) => {
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
        songs.map(({ trackMetadata: song, chartEntryData: { currentRank } }) => (
          <Card
            key={currentRank}
            sx={{
              height: "280px",
              width: "240px",
              bgcolor: "rgba(0,0,0,0.2)",
            }}
          >
            <CardMedia component="img" height="160px" image={song?.displayImageUri} sx={{ p: "7px 7px 0 7px" }} />

            <CardContent>
              <Typography variant="body1" fontWeight="bold">
                {song?.trackName.slice(0, 50)}
              </Typography>
              <Typography variant="subtitle1" color="#B2BEB5">
                {song?.artists[0]?.name.slice(0, 50)}
              </Typography>
              <Typography variant="subtitle2" fontWeight="bold" color="#B2BEB5">
                Current Rank : {currentRank}
              </Typography>
            </CardContent>
          </Card>
        ))
      )}
    </Stack>
  )
}

export default TopChartsFeed
