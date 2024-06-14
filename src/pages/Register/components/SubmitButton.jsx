import { Button } from "@mui/material";
import PropTypes from "prop-types";
export const SubmitButton = ({ submitting }) => (
  <Button
    type="submit"
    variant="contained"
    color="primary"
    fullWidth
    disabled={submitting}
    style={{ marginTop: "16px" }}
  >
    Cadastrar
  </Button>
);

SubmitButton.propTypes = {
  submitting: PropTypes.bool.isRequired,
};
