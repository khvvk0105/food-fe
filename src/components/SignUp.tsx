import { Stack, Typography, Box, Button, TextField } from "@mui/material";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import FormGroup from "@mui/material/FormGroup";
import { useRouter } from "next/router";

const SignUp = () => {
  const signup_url = "http://localhost:4000/api/register";

  const router = useRouter();

  return (
    <Stack
      width={"448px"}
      height={"549px"}
      marginTop={"168px"}
      marginBottom={"78px"}
      alignItems={"center"}
      justifyContent={"center"}
    >
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
        <Button fullWidth variant="outlined">
          Бүртгүүлэх
        </Button>
      </Box>
    </Stack>
  );
};

export default SignUp;
