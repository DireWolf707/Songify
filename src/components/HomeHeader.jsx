import React from "react"
import { genres } from "../utils/constants"
import { Stack, Typography, Select, MenuItem } from "@mui/material"
import { useSelector, useDispatch } from "react-redux"
import { changeGenre } from "../store"

const HomeHeader = () => {
  const dipatch = useDispatch()
  const { selectedGenre } = useSelector((store) => store.data)

  return (
    <Stack flexDirection="row" justifyContent="space-between" alignItems="center" p="24px">
      <Typography variant="h4" fontWeight="bold">
        Discover
      </Typography>

      <Select
        color="secondary"
        onChange={(e) => dipatch(changeGenre(e.target.value))}
        value={selectedGenre}
        sx={{
          color: "#00FFFF",
          bgcolor: "#1d1160",
        }}
        MenuProps={{
          MenuListProps: {
            sx: {
              color: "#00FFFF",
              bgcolor: "#1d1160",
            },
          },
        }}
      >
        {genres.map((genre, idx) => (
          <MenuItem key={idx} value={genre.value}>
            {genre.title}
          </MenuItem>
        ))}
      </Select>
    </Stack>
  )
}

export default HomeHeader
