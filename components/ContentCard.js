import Stack from "@mui/material/Stack";
import React from "react";
import Box from "@mui/material/Box";
import Image from "next/image";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import MoreHorizOutlinedIcon from "@mui/icons-material/MoreHorizOutlined";
import ShareOutlinedIcon from "@mui/icons-material/ShareOutlined";
import ThumbUpOutlinedIcon from "@mui/icons-material/ThumbUpOutlined";
import { FaRegComment } from "react-icons/fa";

function ContentCard() {
  return (
    <>
      <Stack
        sx={{
          background: "#fff",
          width: "100%",
          height: { lg: 200 },
          marginBottom: 2,
          flexDirection: "row",
          borderRadius: 5,
        }}
      >
        <Box
          sx={{
            height: "100%",
            width: "45%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Image
            style={{ height: "94%", width: "95%", borderRadius: 15 }}
            alt="loading..."
            src={require("../assets/gallery.png")}
          />
        </Box>

        <Box
          sx={{
            height: "100%",
            width: "55%",
            display: "flex",
            alignItems: "center",
          }}
        >
          <Stack
            sx={{
              height: "90%",
              width: "95%",

              justifyContent: "center",

              flexDirection: "column",
            }}
          >
            <Box
              sx={{
                width: "100%",

                height: "40%",
                display: "flex",

                gap: 1,
              }}
            >
              <Stack
                sx={{
                  background: "#0ef",
                  height: "90%",
                  width: "15%",
                  justifyContent: "center",
                  alignItems: "center",
                  borderRadius: 2,
                }}
              >
                <Typography
                  sx={{
                    textTransform: "uppercase",
                    fontWeight: "bold",
                    color: "#0be",
                    fontSize: 12,
                  }}
                >
                  May
                </Typography>
                <Typography
                  sx={{ color: "darkblue", fontWeight: "bold", fontSize: 25 }}
                >
                  08
                </Typography>
              </Stack>
              <Stack
                sx={{
                  height: 60,
                  width: "70%",
                  justifyContent: "space-between",
                  borderRadius: 2,
                }}
              >
                <Typography
                  sx={{
                    textTransform: "uppercase",
                    fontWeight: "bold",
                    color: "black",
                    fontSize: 12,
                  }}
                >
                  How to manage your time & Get More Done
                </Typography>
                <Typography
                  sx={{ color: "grey", fontWeight: "bold", fontSize: 7 }}
                >
                  Thu 10:00
                </Typography>
              </Stack>
              <Stack
                sx={{
                  height: "100%",
                  width: "15%",
                  alignItems: "center",
                }}
              >
                <IconButton>
                  <MoreHorizOutlinedIcon />
                </IconButton>
              </Stack>
            </Box>
            <Box
              sx={{
                width: "100%",

                height: "20%",
                display: "flex",
              }}
            >
              <Typography
                sx={{ color: "grey", fontWeight: "bold", fontSize: 7 }}
              >
                Description
              </Typography>
            </Box>
            <Box
              sx={{
                width: "100%",

                height: "20%",
                display: "flex",
                alignItems: "center",
                gap: 1,
              }}
            >
              <Image
                src={require("../assets/avatar.jpg")}
                alt="group"
                style={{
                  height: "25px",
                  width: "25px",
                  borderRadius: "50%",
                }}
              />
              <Stack>
                <Typography
                  sx={{ color: "black", fontWeight: "bold", fontSize: 7 }}
                >
                  Name
                </Typography>
                <Typography
                  sx={{ color: "grey", fontWeight: "bold", fontSize: 6 }}
                >
                  About
                </Typography>
              </Stack>
            </Box>
            <Box
              sx={{
                width: "100%",

                height: "20%",
              }}
            >
              <IconButton sx={{ float: "right" }}>
                <ThumbUpOutlinedIcon />
              </IconButton>
              <IconButton sx={{ float: "right" }}>
                <FaRegComment />
              </IconButton>
            </Box>
          </Stack>
        </Box>
      </Stack>
    </>
  );
}

export default ContentCard;
