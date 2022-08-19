import Checkbox from "@material-ui/core/Checkbox";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import React from "react";
import { Controller } from "react-hook-form";

const CheckBoxField = ({
  control,
  name,
  color = "primary",
  defaultValue = false,
  required = false,
  label,
  checkBoxStyle,
  ...rest
}) => {
  return (
    <FormControlLabel
      control={
        <Controller
          control={control}
          name={name}
          rules={{ required: required }}
          render={({ field }) => (
            <Checkbox
              {...field}
              {...rest}
              color={color}
              defaultValue={defaultValue}
              className={checkBoxStyle}
            />
          )}
        />
      }
      label={label}
    />
  );
};

export { CheckBoxField };
