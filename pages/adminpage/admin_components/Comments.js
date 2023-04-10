import Box from "@mui/material/Box";
import React from "react";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Image from "next/image";
import ExpandMoreOutlinedIcon from "@mui/icons-material/ExpandMoreOutlined";
import IconButton from "@mui/material/IconButton";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import { useUser } from "@supabase/auth-helpers-react/dist";
import { Avatar } from "@mui/material";

function Comments() {
  const user =useUser()
  const username =user.user_metadata.first_name
//  const username=user.user_metadata.first_name
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
          width: "100%",
          height: "98%",
          borderRadius: "0% 15px 15px 0%",
          backgroundColor: "#f2f7fb",
          width: "23%",
          position: "fixed",
        }}
      >
        <Box sx={{ width: "50%", float: "right" }}>
          <Stack
            sx={{
              width: "90%",
              height: "40px",
              flexDirection: "row",
              alignItems: "center",
              gap: 2,
            }}
          >
            <IconButton size="small">
              <NotificationsNoneOutlinedIcon
                sx={{ fontSize: 16, color: "#0ef" }}
              />
            </IconButton>
            <Box
              sx={{
                width: "100%",
                height: "50px",
                display: "flex",
                flexDirection: "row",
                float: "right",
                alignItems: "center",
                gap: 1,
              }}
            >
             <Avatar alt={username} sx={{height:20,width:20}}/>

              <Typography
                sx={{ color: "black", fontSize: 10, fontWeight: "bold" }}
              >
                {username}
              </Typography>
              <IconButton size="small">
                <ExpandMoreOutlinedIcon sx={{ fontSize: 16 }} />
              </IconButton>
            </Box>
          </Stack>
        </Box>
        <Stack
          sx={{
            width: "100%",
            height: "90%",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Box
            sx={{
              width: "100%",
              height: "50%",
              display:'flex',
              flexDirection: "column",
              alignItems: "center",
              
            }}
          >
{/* live comments section  starts */}
             <Box sx={{
              width: "100%",
              height: "15%",             
              position:'absolute',
            marginTop:25,
            // background:'yellow'
            }}>
              <Stack  sx={{
              width: "100%",
              height: 45,             
              flexDirection: "column",
              alignItems: "center",              
            }}>
              <Box sx={{
              width: "90%",
              height: "50%", 
              display:'flex'        ,    
              flexDirection: "row",
              alignItems: "center",   
              
              // backgroundColor:'red'  ,
              color:'black'         
            }}>

            </Box>
            </Stack>
            </Box>
{/* live comments section  ends */}
            <Image
              alt="loading..."
              src={require("../../../assets/gallery.png")}
              style={{ width: "100%", height: "100%",posotion:'relative' }}
            />
 
          </Box>
          <Box
            sx={{
              width: "100%",
              height: "50%",
              flexDirection: "column",
              alignItems: "center",
            }}
          ></Box>
        </Stack>
      </Box>
    </Box>
  );
}

export default Comments;
