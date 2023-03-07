import React, { useState } from "react"
import { genres } from "../utils/constants"
import { Stack, Typography, Select, MenuItem } from "@mui/material"

const HomeHeader = () => {
  const [selected, setSelected] = useState(genres[0].value)

  return (
    <Stack flexDirection="row" justifyContent="space-between" alignItems="center" p="24px">
      <Typography variant="h4" fontWeight="bold">
        Discover
      </Typography>

      <Select
        color="secondary"
        onChange={(e) => setSelected(e.target.value)}
        value={selected}
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
