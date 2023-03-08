import React from "react"
import { useParams } from "react-router-dom"
import { useSearchSongsQuery } from "../store"
import { Typography, Stack } from "@mui/material"
import Feed from "../components/feeds/Feed"
import SearchBar from "../components/SearchBar"

const Search = () => {
  const { searchTerm } = useParams()
  const { data, isFetching } = useSearchSongsQuery(searchTerm)

  return (
    <Stack flexGrow={1} sx={{ overflow: "auto" }}>
      <SearchBar />
      <Stack flexDirection="row" p="24px" gap={2}>
        <Typography variant="h4" fontWeight="bold">
          Results For :
        </Typography>
        <Typography variant="h4" fontWeight="bold" sx={{ color: "#007FFF" }}>
          {searchTerm}
        </Typography>
      </Stack>
      <Feed songs={data} isFetching={isFetching} />
    </Stack>
  )
}

export default Search
