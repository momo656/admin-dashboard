import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { styled, useTheme } from "@mui/material/styles";
import MuiDrawer from "@mui/material/Drawer";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import GroupOutlinedIcon from "@mui/icons-material/GroupOutlined";
import ContactsOutlinedIcon from "@mui/icons-material/ContactsOutlined";
import ListAltOutlinedIcon from "@mui/icons-material/ListAltOutlined";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import CalendarTodayOutlinedIcon from "@mui/icons-material/CalendarTodayOutlined";
import HelpOutlineOutlinedIcon from "@mui/icons-material/HelpOutlineOutlined";
import BarChartOutlinedIcon from "@mui/icons-material/BarChartOutlined";
import PieChartOutlinedIcon from "@mui/icons-material/PieChartOutlined";
import TimelineOutlinedIcon from "@mui/icons-material/TimelineOutlined";
import MapOutlinedIcon from "@mui/icons-material/MapOutlined";
import Avatar from "@mui/material/Avatar";
import { Typography } from "@mui/material";
import { useNavigate , useLocation } from "react-router-dom";
import { grey } from '@mui/material/colors';


const drawerWidth = 240;
const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: "hidden",
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up("sm")]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",
  ...(open && {
    ...openedMixin(theme),
    "& .MuiDrawer-paper": openedMixin(theme),
  }),
  ...(!open && {
    ...closedMixin(theme),
    "& .MuiDrawer-paper": closedMixin(theme),
  }),
}));
const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

const Array1 = [
  { text: "Dashboard", icon: <HomeOutlinedIcon />, path: "/" },
  { text: "Manage Team", icon: <GroupOutlinedIcon />, path: "/team" },
  { text: "Contacts Information", icon: <ContactsOutlinedIcon />, path: "/contacts" },
  { text: "Invoices Balances", icon: <ListAltOutlinedIcon />, path: "/invoices" },
];
const Array2 = [
  { text: "Profile Form", icon: <PersonOutlineOutlinedIcon />, path: "/form" },
  { text: "Calendar", icon: <CalendarTodayOutlinedIcon />, path: "/Calendar" },
  { text: "FAQ Page", icon: <HelpOutlineOutlinedIcon />, path: "/faq" },
];

const Array3 = [
  { text: "Bar Chart", icon: <BarChartOutlinedIcon />, path: "/bar" },
  { text: "Pie Chart", icon: <PieChartOutlinedIcon />, path: "/pie" },
  { text: "Line Chart", icon: <TimelineOutlinedIcon />, path: "/line" },
  { text: "Geogrphy Chart", icon: <MapOutlinedIcon />, path: "/Geogrphy" },
];

// eslint-disable-next-line react/prop-types
export default function SideBar({ open, handleDrawerClose }) {
  const theme = useTheme();
  const navigate = useNavigate();
  let location = useLocation();

  return (
    <Drawer variant="permanent" open={open}>
      <DrawerHeader>
        <IconButton onClick={handleDrawerClose}>
          {theme.direction === "rtl" ? (
            <ChevronRightIcon />
          ) : (
            <ChevronLeftIcon />
          )}
        </IconButton>
      </DrawerHeader>
      <Avatar
        sx={{
          mx: "auto",
          width: open ? 70 : 45,
          height: open ? 70 : 45,
          transition: "0.25s",
        }}
        alt="Mohamed"
        src="./me.png"
      />
      <Typography
        align="center"
        sx={{ fontSize: open ? 17 : 0, transition: "0.25s" }}
      >
        Mohamed
      </Typography>
      <Typography
        align="center"
        sx={{ fontSize: open ? 15 : 0, transition: "0.25s" }}
      >
        Admin
      </Typography>

      <Divider />
      <List>
        {Array1.map((item) => (
          <ListItem key={item.text} disablePadding sx={{ display: "block" }}>
            <ListItemButton
            onClick={() => { navigate(item.path) }}
              sx={{
                minHeight: 48,
                justifyContent: open ? "initial" : "center",
                px: 2.5,
                bgcolor: location.pathname === item.path ? theme.palette.mode === "dark" ? grey[800] : grey[300] : null
              }}
            >
              <ListItemIcon
                sx={{
                  minWidth: 0,
                  mr: open ? 3 : "auto",
                  justifyContent: "center",
                }}
              >
                {item.icon}
              </ListItemIcon>
              <ListItemText
                primary={item.text}
                sx={{ opacity: open ? 1 : 0 }}
              />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        {Array2.map((item) => (
          <ListItem key={item.text} disablePadding sx={{ display: "block" }}>
            <ListItemButton
            onClick={() => { navigate(item.path) }}
              sx={{
                minHeight: 48,
                justifyContent: open ? "initial" : "center",
                px: 2.5,
                bgcolor: location.pathname === item.path ? theme.palette.mode === "dark" ? grey[800] : grey[300] : null
              }}
            >
              <ListItemIcon
                sx={{
                  minWidth: 0,
                  mr: open ? 3 : "auto",
                  justifyContent: "center",
                }}
              >
                {item.icon}
              </ListItemIcon>
              <ListItemText
                primary={item.text}
                sx={{ opacity: open ? 1 : 0 }}
              />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        {Array3.map((item) => (
          <ListItem key={item.text} disablePadding sx={{ display: "block" }}>
            <ListItemButton
            onClick={() => { navigate(item.path) }}
              sx={{
                minHeight: 48,
                justifyContent: open ? "initial" : "center",
                px: 2.5,
                bgcolor: location.pathname === item.path ? theme.palette.mode === "dark" ? grey[800] : grey[300] : null
              }}
            >
              <ListItemIcon
                sx={{
                  minWidth: 0,
                  mr: open ? 3 : "auto",
                  justifyContent: "center",
                }}
              >
                {item.icon}
              </ListItemIcon>
              <ListItemText
                primary={item.text}
                sx={{ opacity: open ? 1 : 0 }}
              />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Drawer>
  );
}
