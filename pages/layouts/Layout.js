import React from "react";
import Container from "@mui/material/Container";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import Comments from "../adminpage/admin_components/Comments";
import NavBar from "../adminpage/admin_components/NavBar";
import Peoples from "../adminpage/admin_components/Peoples";
import  Typography  from "@mui/material/Typography";
import Image from "next/image";

function Layout({ children }) {
  return (
    <>
      <Container maxWidth="xl" sx={{ backgroundColor: "  #f2f7fbf1" }}>
        <Stack direction="row" spacing={2} justifyContent="space-between">
          <Peoples />
          <Box
            flex={2}
            sx={{
              color: "black",
              display: "flex",
              alignItems: "center",
              flexDirection: "column",
              gap: 2,
            }}
          >
            <NavBar />
            <Stack
              direction="row"
              spacing={2}
              sx={{ width: "100%", height: 70 ,marginTop:9}}
            >
              <Box
                sx={{
                  width: "10%",
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-evenly",
                  alignItems: "center",
                }}
              >
                <Image
                  src={require("../../assets/avatar.jpg")}
                  alt="group"
                  style={{
                    height: "70%",
                    width: "90%",
                    borderRadius: "50%",
                  }}
                />

                <Typography
                  sx={{ color: "black", fontSize: 10, fontWeight: "bold" }}
                >
                  Name
                </Typography>
              </Box>
              <Box
                sx={{
                  width: "10%",
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-evenly",
                  alignItems: "center",
                }}
              >
                <Image
                  src={require("../../assets/avatar.jpg")}
                  alt="group"
                  style={{
                    height: "70%",
                    width: "90%",
                    borderRadius: "50%",
                  }}
                />

                <Typography
                  sx={{ color: "black", fontSize: 10, fontWeight: "bold" }}
                >
                  Name 2
                </Typography>
              </Box>
            </Stack>
            {children}
          </Box>
          <Comments />
        </Stack>
      </Container>
    </>
  );
}

export default Layout;
