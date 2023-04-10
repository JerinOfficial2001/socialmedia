import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import React from "react";
import FlashOnOutlinedIcon from "@mui/icons-material/FlashOnOutlined";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import Image from "next/image";

function Peoples({handleSearch}) {
  return (
    <Box
      flex={1}
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
       
      }}
    >
      
      <Box
        sx={{
          height: "98%",
          width: "23%",
          position:'fixed',
          borderRadius: "15px 0% 0% 15px",
          backgroundColor: "#f2f7fb",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 2,
          
        }}
      >
        <Stack sx={{ width: "90%", alignItems: "center" ,gap:2}}>
          <Stack
            sx={{
              width: "90%",
              height: "50px",
              justifyContent: "space-around",
              alignItems: "center",
              flexDirection: "row",
              marginTop: 2,
            }}
          >
            <FlashOnOutlinedIcon sx={{ color: "#14b" }} />
            <input
              placeholder="Search"
              style={{
                backgroundColor: "#e0ebf4",
                border: "none",
                outline: "none",
                height: "65%",
                width: "80%",
                borderRadius: 8,
                padding: 10,
                color: "black",
              }}
              onChange={(e)=>{handleSearch(e.target.value)}}
            />
          </Stack>
        
       
{/* Groups */}
          <Stack
            sx={{
              width: "90%",
              height: "50px",
              flexDirection: "column",
              justifyContent: "center",
              gap: 2,
            }}
          >
            <Box
              sx={{
                width: 190,
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              <Typography
                sx={{ color: "grey", fontWeight: "bold", fontSize: 10 }}
              >
                YOUR GROUP
              </Typography>
            </Box>
            <Box
              sx={{
                width: "100%",
                height: "50px",
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-evenly",
                alignItems: "center",
              }}
            >
              <Image
                src={require("../../../assets/group.jpg")}
                alt="group"
                style={{
                  height: "25px",
                  width: "25px",
                  borderRadius: "50%",
                 
                }}
              />
              <Box
                sx={{
                  width: 190,
                  display: "flex",
                  justifyContent: "space-between",
                }}
              >
                <Typography
                  sx={{ color: "black", fontSize: 10, fontWeight: "bold" }}
                >
                  Group 1
                </Typography>
              </Box>
            </Box>
          </Stack>
{/* Friends */}
          <Stack
            sx={{
              width: "90%",
              height: "50px",
              flexDirection: "column",
              justifyContent: "center",
              gap: 2,
            }}
          >
            <Box
              sx={{
                width: 190,
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              <Typography
                sx={{ color: "grey", fontWeight: "bold", fontSize: 10 }}
              >
                FERIENDS
              </Typography>
            </Box>
            <Box
              sx={{
                width: "100%",
                height: "50px",
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-evenly",
                alignItems: "center",
              }}
            >
              <Image
                src={require("../../../assets/avatar.jpg")}
                alt="group"
                style={{
                  height: "25px",
                  width: "25px",
                  borderRadius: "50%",
                 
                }}
              />
              <Box
                sx={{
                  width: 190,
                  display: "flex",
                  justifyContent: "space-between",
                }}
              >
                <Typography
                  sx={{ color: "black", fontSize: 10, fontWeight: "bold" }}
                >
                  Friends
                </Typography>
                <Typography
                  sx={{ color: "grey", fontSize: 6, fontWeight: "bold" }}
                >
                  Time
                </Typography>
              </Box>
            </Box>
          </Stack>

        </Stack>
      </Box>
    </Box>
  );
}

export default Peoples;
