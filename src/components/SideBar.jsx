import React, { useEffect } from "react"
import { useMediaQuery, Box, Drawer, List, ListItemButton, ListItemIcon, ListItemText, ListItem, Divider } from "@mui/material"
import { links } from "../utils/constants"
import { Link, useLocation } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import { toggleSidebar } from "../store"

const SideBar = () => {
  const location = useLocation()
  const dispatch = useDispatch()
  const { sidebar: open } = useSelector((store) => store.data)
  const isSmall = useMediaQuery((theme) => theme.breakpoints.only("xs"))

  useEffect(() => {
    if (!isSmall && open) dispatch(toggleSidebar(false))
  }, [isSmall])

  return (
    <Drawer
      anchor="left"
      variant={isSmall ? "temporary" : "permanent"}
      open={open}
      onClose={() => dispatch(toggleSidebar(false))}
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
          <Link key={idx} to={link.to} onClick={() => open && dispatch(toggleSidebar(false))}>
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
