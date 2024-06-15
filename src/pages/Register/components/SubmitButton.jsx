import { Button } from "@mui/material";
import PropTypes from "prop-types";
export const SubmitButton = ({ submitting }) => (
  <Button
    type="submit"
    variant="outlined"
    fullWidth
    disabled={submitting}
    style={{ marginTop: "1rem" }}
  >
    Cadastrar
  </Button>
);

SubmitButton.propTypes = {
  submitting: PropTypes.bool.isRequired,
};
