import React from "react";
import { Box, Button } from "@mui/material";

interface Props {
  number: number;
  active: boolean;
  onClick: (num: number) => void;
}

const LotteryNumer = ({ number, active, onClick }: Props) => {
  const handleClick = () => {
    onClick(number);
  };
  return (
    <Box display="flex" alignItems="center" justifyContent="center">
      <Button
        onClick={handleClick}
        fullWidth
        variant={active ? "contained" : "text"}
      >
        {number}
      </Button>
    </Box>
  );
};

export default LotteryNumer;
