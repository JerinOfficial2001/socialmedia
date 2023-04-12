import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import React from "react";
import IconButton from "@mui/material/IconButton";
import Cancel from "@mui/icons-material/Cancel";

function CommentModal({ open, children, close }) {
  return (
    <Modal open={open}>
      <Container
        sx={{
          height: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
           
            flexDirection: "column",
            background: "white",
            height:'80%',
            width:'50%',
            borderRadius:10
          }}
        >
          <Box sx={{ width: "90%" }}>
            <IconButton
              onClick={() => {
                close(false);
              }}
              sx={{ float: "right" }}
            >
              <Cancel />
            </IconButton>
          </Box>
          {children}
        </Box>
      </Container>
    </Modal>
  );
}

export default CommentModal;
