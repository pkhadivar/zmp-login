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
  type,
  startIcon,
  endIcon,
  ...rest
}) => {
  return (
    <Stack spacing={spacing} direction={direction}>
      <Button
        {...rest}
        type={type}
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
