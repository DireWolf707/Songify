import React, { useEffect } from "react"
import { useLazyFetchTopSongsQuery } from "../store"
import { Typography } from "@mui/material"
import TopChartsFeed from "../components/feeds/TopChartsFeed"

const AroundYou = () => {
  const [trigger, { isUninitialized, isFetching, isError, data }] = useLazyFetchTopSongsQuery()

  useEffect(() => {
    fetch("https://ipapi.co/json/")
      .then((resp) => resp.json())
      .then((resp) => trigger(resp.country))
      .catch((err) => console.log(err))
  }, [])

  return (
    <>
      <Typography variant="h4" fontWeight="bold" p="24px">
        Around You
      </Typography>
      <TopChartsFeed songs={data} isFetching={isUninitialized || isFetching || isError} />
    </>
  )
}

export default AroundYou
