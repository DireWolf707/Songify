import React from "react"
import { Typography } from "@mui/material"
import { useFetchTopSongsQuery } from "../store"
import TopChartsFeed from "../components/feeds/TopChartsFeed"

const TopCharts = () => {
  const { data, isFetching, isError } = useFetchTopSongsQuery()

  return (
    <>
      <Typography variant="h4" fontWeight="bold" p="24px">
        Top Charts
      </Typography>
      <TopChartsFeed songs={data} isFetching={isFetching || isError} />
    </>
  )
}

export default TopCharts
