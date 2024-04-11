import { Stack, Typography, Box, Button, TextField } from "@mui/material";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import FormGroup from "@mui/material/FormGroup";
import { useRouter } from "next/router";
import { useState } from "react";

const SignUp = () => {
  const BE_URL = "http://localhost:4000/api/register";
  const router = useRouter();
  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const data = new FormData(event.currentTarget);
    const userdata = {
      name: data.get("name"),
      email: data.get("email"),
      password: data.get("password"),
    };
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userdata),
    };
    const FETCHED_DATA = await fetch(BE_URL, options);
    const FETCHED_JSON = await FETCHED_DATA.json();
    console.log("fetch", FETCHED_JSON);

    const userId = FETCHED_JSON.result.rows[0].id;

    localStorage.setItem("userId", userId);

    console.log("user ID", localStorage.getItem("userId"));

    if (FETCHED_JSON.result.rowCount == 1) {
      router.push("/");
    } else {
      alert("Email or password is incorrect");
    }
  };
  const [visible, setVisible] = useState<boolean>(false);
  return (
    <Stack
      width={"448px"}
      height={"549px"}
      marginTop={"168px"}
      marginBottom={"78px"}
      alignItems={"center"}
      justifyContent={"center"}
    >
      <Stack>
        <Typography
          fontSize={"28px"}
          fontWeight={"700"}
          display={"flex"}
          alignItems={"center"}
          justifyContent={"center"}
          marginBottom={"48px"}
        >
          Бүртгүүлэх
        </Typography>
        <Box width={"384px"}>
          <Typography>Нэр</Typography>
          <TextField
            fullWidth
            id="filled-Нэрээ оруулна уу-input"
            label="Нэрээ оруулна уу"
            type="Нэрээ оруулна уу"
            autoComplete="current-Нэрээ оруулна уу"
            variant="filled"
          />
        </Box>
        <Box width={"384px"}>
          <Typography>Имэйл</Typography>
          <TextField
            fullWidth
            id="filled-email-input"
            label="email"
            type="email"
            autoComplete="current-email"
            variant="filled"
          />
        </Box>
        <Box width={"384px"}>
          <Typography>Хаяг</Typography>
          <TextField
            fullWidth
            id="filled-Та хаягаа оруулна уу-input"
            label="Та хаягаа оруулна уу"
            type="Та хаягаа оруулна уу"
            autoComplete="current-Та хаягаа оруулна уу"
            variant="filled"
          />
        </Box>
        <Box width={"384px"}>
          <Typography marginBottom={"4px"}>Нууц үг </Typography>
          <TextField
            fullWidth
            id="filled-Нууц үгээ оруулна уу-input"
            label="Нууц үгээ оруулна уу"
            type="Нууц үгээ оруулна уу"
            autoComplete="current-Нууц үгээ оруулна уу"
            variant="filled"
          />
        </Box>
        <Box width={"384px"} marginBottom={"40px"}>
          <Typography marginBottom={"4px"}>Нууц үг давтах </Typography>
          <TextField
            fullWidth
            id="filled-Нууц үгээ оруулна уу-input"
            label="Нууц үгээ оруулна уу"
            type="Нууц үгээ оруулна уу"
            autoComplete="current-Нууц үгээ оруулна уу"
            variant="filled"
          />
        </Box>
        <Box marginBottom={"40px"}>
          <FormGroup>
            <FormControlLabel
              control={<Checkbox defaultChecked />}
              label="Үйлчилгээний нөхцөо зөвшөөрөх"
            />
          </FormGroup>
        </Box>

        <Box width={"384px"} bgcolor={"#EEEFF2"} marginBottom={"100px"}>
          <Button fullWidth variant="outlined" onClick={handleSubmit}>
            Бүртгүүлэх
          </Button>
        </Box>
      </Stack>
    </Stack>
  );
};

export default SignUp;
