import {
  FormControl,
  Stack,
  TextField,
  Typography,
  Button,
} from "@mui/material";

const btnStyle = {
  backgroundColor: "#18BA51",
  padding: "5px",
  color: "#fff",
};

export const StepOne = () => {
  return (
    <Stack
      sx={{
        justifyContent: "center",
        alignItems: "center",
        width: "full",
        height: "645px",
      }}
    >
      <Stack
        alignItems={"center"}
        justifyContent={"center"}
        width={"448px"}
        padding={"32px"}
        gap={"40px"}
        height={"330px"}
      >
        <Typography fontSize={"28px"} fontWeight={"550px"}>
          Нууц үг сэргээх
        </Typography>
        <Stack>
          <Typography fontSize={"14px"}>Имэйл </Typography>
          <FormControl>
            <TextField
              sx={{
                backgroundColor: "#F7F7F8",

                width: "384px",
                height: "54px",
              }}
              id="fullWidth"
              placeholder="Имэйл хаягаа оруулна уу"
            />
          </FormControl>
        </Stack>
        <Button sx={btnStyle} variant="contained">
          {"Үргэлжлүүлэх"}
        </Button>
      </Stack>
    </Stack>
  );
};
export default StepOne;
