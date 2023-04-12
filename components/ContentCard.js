import Stack from "@mui/material/Stack";
import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Image from "next/image";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import MoreHorizOutlinedIcon from "@mui/icons-material/MoreHorizOutlined";
import ShareOutlinedIcon from "@mui/icons-material/ShareOutlined";
import ThumbUpOutlinedIcon from "@mui/icons-material/ThumbUpOutlined";
import { FaRegComment } from "react-icons/fa";
import galleryimg from "../assets/gallery.png";
import Input from "@mui/material/Input";
import FormControl from "@mui/material/FormControl";
import Send from "@mui/icons-material/Send";
import FormGroup from "@mui/material/FormGroup";
import Avatar from "@mui/material/Avatar";
import { supabase } from "@/SupabaseClient";
import { useUser } from "@supabase/auth-helpers-react";
import Favorite from "@mui/icons-material/Favorite";
import CommentModal from "./CommentModal";

function ContentCard({ product ,userData}) {
  const user = useUser();
  const user_id = user?.id;
  
  const [openComments, setopenComments] = useState(false);
  const [comment, setComment] = useState("");
  const [commentData, setCommentData] = useState([]);

  const { title, image, price, rating, category, description } = product;
  const { rate, count } = rating;
  const getComment = async () => {
    if (comment !== "") {
      const { error, data } = await supabase
        .from("comments")
        .insert({ comment, user_id });
      if (data) {
        setCommentData(data);
      } else {
        console.log(error);
      }

      setComment("");
      console.log(commentData);
    }
  };
  //getcomments
  const fetchComments = async () => {
    const { error, data } = await supabase.from("comments").select(`comment`);
    if (data) {
      setCommentData(data);
    } else {
      console.log("COMMENTFETCH", error);
    }
   
  };
  useEffect(() => {
    fetchComments();
  }, [commentData]);

  return (
    <>
      <Box
        sx={{
          background: "#fff",
          borderRadius: 5,
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Stack
          sx={{
            width: "100%",
            marginBottom: 2,
            flexDirection: "row",
          }}
        >
          <Box
            sx={{
              height: 200,
              width: "45%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            {!image ? (
              <Image
                style={{ height: "94%", width: "95%", borderRadius: 15 }}
                alt="loading..."
                src={galleryimg}
              />
            ) : (
              <img
                width={20}
                height={20}
                style={{ height: "94%", width: "95%", borderRadius: 15 }}
                alt="loading..."
                src={image}
              />
            )}
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
              {/* header               */}
              <Box
                sx={{
                  width: "100%",

                  height: 90,
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
                    Price
                  </Typography>
                  <Typography
                    sx={{ color: "darkblue", fontWeight: "bold", fontSize: 10 }}
                  >
                    ₹{price}
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
                    {title}
                  </Typography>
                  <Typography
                    sx={{ color: "grey", fontWeight: "bold", fontSize: 7 }}
                  >
                    {category}
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
                  Description <br />
                  {description.length > 240
                    ? description.slice(0, 240) + "..."
                    : description}
                </Typography>
              </Box>
              {/* userDetail              */}
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
            </Stack>
          </Box>
        </Stack>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Stack
            sx={{
              width: "100%",
              alignItems: "center",
              flexDirection: "row",
              justifyContent: "flex-end",
            }}
          >
            <Box>
              <Typography sx={{ color: "grey" }}>
                {commentData.length}
              </Typography>
            </Box>
            <Box>
              <IconButton
                onClick={() => {
                  setopenComments((p) => !p);
                }}
              >
                <FaRegComment />
              </IconButton>
            </Box>
            <Box>
              <Typography sx={{ color: "grey" }}>{count}</Typography>
            </Box>
            <Box>
              <IconButton sx={{ float: "right" }}>
                <ThumbUpOutlinedIcon />
              </IconButton>
            </Box>
          </Stack>

          <>
            {openComments && (
              <CommentModal open={openComments} close={setopenComments}>
                <Stack sx={{width:'90%',height:370,overflowY:'scroll'}}>
                {commentData.map((exportCmds, index) => {
                  return (
                    <Box
                      key={index}
                      sx={{
                        width: "95%",
                        display: "flex",
                        gap: 1,
                      }}
                    >
                      <Avatar sx={{ height: 30, width: 30 }} />
                      <Stack sx={{ width: "90%" }}>
                        <Typography sx={{ fontSize: 10 }}>{exportCmds.name}</Typography>
                        <Typography
                          sx={{
                            color: "grey",
                            fontWeight: "bold",
                            fontSize: 15,
                          }}
                        >
                          {exportCmds.comment}
                        </Typography>
                      </Stack>
                      <IconButton
                        sx={{ height: 25, marginTop: 0.5, width: 25 }}
                      >
                        <Favorite sx={{ fontSize: "small" }} />
                      </IconButton>
                    </Box>
                  );
                })}
                </Stack>
                <Box
                  sx={{
                    width: "90%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",

                    height: 40,
                  }}
                >
                  <FormGroup
                    row
                    sx={{
                      width: "95%",
                      background: "#f0f2f5",
                      borderRadius: 10,
                      height: 40,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <Input
                      placeholder="Write a comment..."
                      sx={{ fontSize: "small", width: "80%", height: "70%" }}
                      value={comment}
                      onChange={(e) => {
                        setComment(e.target.value);
                      }}
                    />
                    <IconButton
                      onClick={() => {
                        getComment();
                      }}
                      size="small"
                      disabled={(comment =="")}
                    >
                      <Send  />
                    </IconButton>
                  </FormGroup>
                </Box>
              </CommentModal>
            )}
          </>
        </Box>
      </Box>
    </>
  );
}

export default ContentCard;
