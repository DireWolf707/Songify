import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined"
import InsertPhotoOutlinedIcon from "@mui/icons-material/InsertPhotoOutlined"
import GroupsOutlinedIcon from "@mui/icons-material/GroupsOutlined"
import TagOutlinedIcon from "@mui/icons-material/TagOutlined"

export const genres = [
  { title: "Pop", value: "POP" },
  { title: "Hip-Hop", value: "HIP_HOP_RAP" },
  { title: "Dance", value: "DANCE" },
  { title: "Electronic", value: "ELECTRONIC" },
  { title: "Soul", value: "SOUL_RNB" },
  { title: "Alternative", value: "ALTERNATIVE" },
  { title: "Rock", value: "ROCK" },
  { title: "Latin", value: "LATIN" },
  { title: "Film", value: "FILM_TV" },
  { title: "Country", value: "COUNTRY" },
  { title: "Worldwide", value: "WORLDWIDE" },
  { title: "Reggae", value: "REGGAE_DANCE_HALL" },
  { title: "House", value: "HOUSE" },
  { title: "K-Pop", value: "K_POP" },
]

export const links = [
  { name: "Discover", to: "/", icon: <HomeOutlinedIcon sx={{ fill: "#00FFFF" }} /> },
  { name: "Around You", to: "/around-you", icon: <InsertPhotoOutlinedIcon sx={{ fill: "#00FFFF" }} /> },
  { name: "Top Artists", to: "/top-artists", icon: <GroupsOutlinedIcon sx={{ fill: "#00FFFF" }} /> },
  { name: "Top Charts", to: "/top-charts", icon: <TagOutlinedIcon sx={{ fill: "#00FFFF" }} /> },
]
