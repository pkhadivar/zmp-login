import React, { useState } from "react";
import TextField from "@material-ui/core/TextField";
import { useController } from "react-hook-form";
import { InputAdornment } from "@material-ui/core";
import { AccountCircle } from "@material-ui/icons";

const Input = React.forwardRef(
  (
    { label, className, control, name: nameProp, icon: Icon, rules, ...rest },
    refProp
  ) => {
    const [focus, setFocus] = useState(rest.autoFocus ? true : false);

    const {
      field: { onChange, onBlur, name, value, ref = refProp },
      fieldState: { error, isTouched, isDirty },
      // formState: { touchedFields, dirtyFields },
    } = useController({
      name: nameProp,
      control,
      rules,
      defaultValue: "",
    });
    return (
      <TextField
        {...rest}
        error={!!error}
        helperText={error && error.message}
        onChange={onChange}
        onBlur={onBlur}
        value={value}
        name={name}
        onFocus={() => setFocus(true)}
        onBlurCapture={() => setFocus(false)}
        inputRef={ref}
        className={className}
        label={label}
        InputProps={{
          // startAdornment: (
          //   <InputAdornment position="start">
          //     {StartIcon && <StartIcon /> }
          //   </InputAdornment>
          // ),
          endAdornment: (
            <InputAdornment position="end">
              {Icon && (
                <Icon
                  color={!!error ? "error" : focus ? "primary" : "inherit"}
                />
              )}
            </InputAdornment>
          ),
        }}
      />
    );
  }
);

export { Input };
