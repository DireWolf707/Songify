import React from "react"
import { numFormat } from "../utils/numFormat"
import { Stack, Typography, Box } from "@mui/material"

const ArtistDetailCard = ({ data }) => {
  return (
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
  )
}

export default ArtistDetailCard
