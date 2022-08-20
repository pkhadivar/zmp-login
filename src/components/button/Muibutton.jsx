import React from "react";
import { Stack, Button } from "@mui/material";

const Muibutton = ({
  spacing,
  direction,
  variant,
  children,
  size,
  onClick,
  color,
  startIcon,
  endIcon,
}) => {
  return (
    <Stack spacing={spacing} direction={direction}>
      <Button
        variant={variant}
        size={size}
        onClick={onClick}
        color={color}
        startIcon={startIcon}
        endIcon={endIcon}
      >
        {children}
      </Button>
    </Stack>
  );
};

export default Muibutton;
