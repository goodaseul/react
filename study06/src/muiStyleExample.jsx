import React from "react";
import { CustomButton } from "./CustomButton.style";
import { Button } from "@mui/material";
import styles from "./App.module.css";

const muiStyleExample = () => {
    return (
        <div>
            {/* <CustomButton variant="contained" border="blue" sx={{}} className={styles["button"]}>
                Contained
            </CustomButton> */}
            {/* <button variant="contained" border="blue" sx={{}} className={styles["button"]}>
                Contained
            </button> */}
            <button>Contained</button>
            <Button>Contained</Button>
        </div>
    );
};

export default muiStyleExample;
