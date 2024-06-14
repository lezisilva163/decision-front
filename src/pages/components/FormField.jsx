import PropTypes from "prop-types";
import { TextField } from "@mui/material";
import { Field } from "react-final-form";

export const FormField = ({ name, label, type }) => {
  const today = new Date().toISOString().split("T")[0]; // Obtem a data atual no formato YYYY-MM-DD

  return (
    <Field name={name}>
      {({ input, meta }) => (
        <TextField
          {...input}
          type={type}
          label={label}
          fullWidth
          margin="normal"
          InputLabelProps={type === "date" ? { shrink: true } : undefined}
          inputProps={
            type === "date"
              ? {
                  max: today,
                }
              : undefined
          } // Define a data máxima para hoje se o type for date
          error={meta.touched && meta.error}
          helperText={meta.touched && meta.error}
        />
      )}
    </Field>
  );
};

FormField.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  type: PropTypes.string,
};

FormField.defaultProps = {
  type: "text",
};
