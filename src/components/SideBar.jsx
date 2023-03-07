import React, { useEffect } from "react"
import { useMediaQuery, Box, Drawer, List, ListItemButton, ListItemIcon, ListItemText, ListItem, Divider } from "@mui/material"
import { links } from "../utils/constants"
import { Link, useLocation } from "react-router-dom"

const SideBar = ({ open, setOpen }) => {
  const location = useLocation()
  const isSmall = useMediaQuery((theme) => theme.breakpoints.only("xs"))

  useEffect(() => {
    if (!isSmall && open) setOpen(false)
  }, [isSmall])

  return (
    <Drawer
      anchor="left"
      variant={isSmall ? "temporary" : "permanent"}
      open={open}
      onClose={() => setOpen(false)}
      PaperProps={{
        sx: {
          width: "240px",
          bgcolor: "#1d1160",
          display: "flex",
          position: "static",
          gap: 2,
          p: "12px",
        },
      }}
    >
      <Box component="img" src="/logo.svg" height="160px" />
      <List
      // sx={{ overflow: "auto" }}
      >
        {links.map((link, idx) => (
          <Link key={idx} to={link.to} onClick={() => open && setOpen(false)}>
            <ListItemButton selected={location.pathname === link.to}>
              <ListItemIcon>{link.icon}</ListItemIcon>
              <ListItemText primary={link.name} />
            </ListItemButton>
          </Link>
        ))}
      </List>
    </Drawer>
  )
}

export default SideBar
