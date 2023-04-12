import React, { useState } from "react";
import Typography from "@mui/material/Typography";
import { supabase } from "@/SupabaseClient";
import Stack from "@mui/material/Stack";
import Container from "@mui/material/Container";
import { useUser } from "@supabase/auth-helpers-react";
import Modal from "@mui/material/Modal";
import IconButton from "@mui/material/IconButton";
import Cancel from "@mui/icons-material/Cancel";

export default function RegisterForm({ open, close }) {
  const [userData, setuserData] = useState([]);
  const [validator, setvalidator] = useState(false);

  const user = useUser();
  const user_id = user?.id;

  const [inputDatas, setinputDatas] = useState({
    email: "",
    password: "",

    avatar_url: "",
  });
  const { name, dob } = inputDatas;

  const handleSubmit = async () => {
    if (name !== "" && dob !== "") {
      setvalidator(false);
      close(false);

      const { error, data } = await supabase
        .from("userdatas")
        .insert({ name, dob, user_id });
      if (data) {
        setuserData(data);
      } else {
        console.log("AuthUserdata", error);
      }
    }
  };

  return (
    <>
      <Modal
        open={open}
        sx={{
          height: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <form className="login">
          <IconButton
            sx={{ float: "right" }}
            onClick={() => {
              close(false);
            }}
          >
            <Cancel sx={{ color: "black" }} />
          </IconButton>

          <input
            type="name"
            placeholder="Name"
            value={name}
            onChange={(e) => {
              setinputDatas({ ...inputDatas, name: e.target.value });
            }}
          />

          <input
            type="date"
            value={dob}
            onChange={(e) => {
              setinputDatas({ ...inputDatas, dob: e.target.value });
            }}
          />

          {validator && (
            <Typography color="red">All fields are mandatory*</Typography>
          )}

          <button
            style={{ background: "black" }}
            onClick={(e) => {
              handleSubmit(e);
              e.preventDefault();
            }}
          >
            Update
          </button>
        </form>
      </Modal>
    </>
  );
}
