import React from "react";
import TextField from "@material-ui/core/TextField";
import { useController } from "react-hook-form";

const Input = React.forwardRef(
  ({ className, control, name: nameProp, ...rest }, refProp) => {
    const {
      field: { onChange, onBlur, name, value, ref = refProp },
      fieldState: { invalid, isTouched, isDirty },
      formState: { touchedFields, dirtyFields },
    } = useController({
      name: nameProp,
      control,
      rules: { required: true },
      defaultValue: "",
    });
    return (
      <TextField
        {...rest}
        onChange={onChange}
        onBlur={onBlur}
        value={value}
        name={name}
        inputRef={ref}
        className={className}
      />
    );
  }
);

export { Input };
