import PropTypes from "prop-types";
import { styled } from "@mui/material/styles";
import { Button } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";

const StyledDeleteButton = styled(Button)(({ theme }) => ({
  color: theme.palette.getContrastText(theme.palette.error.main),
  backgroundColor: theme.palette.error.main,
  "&:hover": {
    backgroundColor: theme.palette.error.dark,
  },
  marginRight: theme.spacing(1),
}));

export const DeleteButton = ({ onClick }) => (
  <StyledDeleteButton onClick={onClick}>
    <DeleteIcon />
  </StyledDeleteButton>
);

DeleteButton.propTypes = {
  onClick: PropTypes.func.isRequired,
};
