import { Button } from "@mui/material";
import styled from "@emotion/styled";

export const CustomButton = styled(Button)(({ border }) => ({
    fontSize: "2rem",
    backgroundColor: "red",
    border: `4px solid ${border}`,
    mt: "20px",
    "&:hover": { backgroundColor: "orange" },
    "@media (max-width: 600px)": { backgroundColor: "gray" },
}));
