import React from "react";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import AddOutlinedIcon from "@mui/icons-material/AddOutlined";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import Box from "@mui/material/Box";

function NavBar() {
  const NavMenus = [
    {
      title: (
        <HomeOutlinedIcon
          sx={{
            borderRadius: 2,
            fontSize: 30,
            padding: 0.3,
            "&:hover": { backgroundColor: "#14b", color: "#1ac" },
          }}
        />
      ),
      to: "",
    },
    {
      title: (
        <FavoriteBorderOutlinedIcon
          sx={{
            borderRadius: 2,
            fontSize: 30,
            padding: 0.3,
            "&:hover": { backgroundColor: "#14b", color: "#1ac" },
          }}
        />
      ),
      to: "",
    },
    {
      title: (
        <AddOutlinedIcon
          sx={{
            borderRadius: 2,
            fontSize: 30,
            padding: 0.3,
            "&:hover": { backgroundColor: "#14b", color: "#1ac" },
            backgroundColor:'#fff'
          }}
        />
      ),
      to: "",
    },
    {
      title: (
        <SearchOutlinedIcon
          sx={{
            borderRadius: 2,
            fontSize: 30,
            padding: 0.3,
            "&:hover": { backgroundColor: "#14b", color: "#1ac" },
          }}
        />
      ),
      to: "",
    },
    {
      title: (
        <SettingsOutlinedIcon
          sx={{
            borderRadius: 2,
            fontSize: 30,
            padding: 0.3,
            "&:hover": { backgroundColor: "#14b", color: "#1ac" },
          }}
        />
      ),
      to: "",
    },
  ];
  return (
    <>
      <Box
        position="fixed"
        sx={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
          background: "#f2f7fb",
          marginTop: 0.7,
          height: 50,
          color: "grey",
          width: "35%",
          borderRadius: "0% 0% 15px 15px",
        }}
      >
        {NavMenus.map((navmenu, index) => {
          return (
            <div
              style={{
                width: 80,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                height: "100%",
              }}
              key={index}
            >
              {navmenu.title}
            </div>
          );
        })}
      </Box>
    </>
  );
}

export default NavBar;
