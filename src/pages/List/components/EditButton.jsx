import PropTypes from "prop-types";
import { styled } from "@mui/material/styles";
import { Button } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";

const StyledEditButton = styled(Button)(({ theme }) => ({
  color: theme.palette.getContrastText(theme.palette.primary.main),
  backgroundColor: theme.palette.primary.main,
  "&:hover": {
    backgroundColor: theme.palette.primary.dark,
  },
  marginRight: theme.spacing(1),
}));

export const EditButton = ({ onClick }) => (
  <StyledEditButton size="small" onClick={onClick}>
    <EditIcon fontSize="small" />
  </StyledEditButton>
);

EditButton.propTypes = {
  onClick: PropTypes.func.isRequired,
};
