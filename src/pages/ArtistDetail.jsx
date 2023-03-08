import React from "react"
import { useParams } from "react-router-dom"
import { Stack, Typography, Box } from "@mui/material"
import { useFetchArtistQuery } from "../store"
import ArtistTopChartsFeed from "../components/feeds/ArtistTopChartsFeed"
import { numFormat } from "../utils/numFormat"

const ArtistDetail = () => {
  const { artistId } = useParams()
  const { data, isFetching } = useFetchArtistQuery(artistId)

  return (
    <Stack flexGrow={1} sx={{ overflow: "auto" }}>
      <Stack flexDirection="row" alignItems="center" gap={4} sx={{ bgcolor: "rgba(0,0,0,0.2)", m: "auto", p: "26px" }}>
        <Box
          component="img"
          src={data?.data?.artist?.visuals?.avatarImage?.sources[0]?.url}
          sx={{ height: "180px", width: "180px", borderRadius: "100%" }}
        />

        <Stack gap={1}>
          <Typography variant="h4" fontWeight="bold">
            {data?.data?.artist?.profile?.name}
          </Typography>
          <Typography variant="subtitle1" fontWeight="bold" color="#00FFFF">
            Followers : {numFormat(data?.data?.artist?.stats?.followers)}
          </Typography>
          <Typography variant="subtitle1" fontWeight="bold" color="#00FFFF">
            Monthly Listeners : {numFormat(data?.data?.artist?.stats?.monthlyListeners)}
          </Typography>
          <Typography variant="subtitle1" fontWeight="bold" color="#00FFFF">
            Followers : {numFormat(data?.data?.artist?.stats?.followers)}
          </Typography>
        </Stack>
      </Stack>

      <Typography variant="h4" fontWeight="bold" p="16px">
        Top Songs
      </Typography>

      <ArtistTopChartsFeed songs={data?.data?.artist?.discography?.topTracks?.items} isFetching={isFetching} feedOverflow={false} />
    </Stack>
  )
}

export default ArtistDetail
