import PropTypes from "prop-types";
import { TableRow, TableCell } from "@mui/material";
import { format } from "date-fns";
import { DeleteButton } from "./DeleteButton";
import { EditButton } from "./EditButton";

const formatDate = (date) => {
  return format(new Date(date), "dd/MM/yyyy");
};

export const UserTableRow = ({ user, onEdit, onDelete }) => (
  <TableRow key={user.id}>
    <TableCell>{user.name}</TableCell>
    <TableCell>{formatDate(user.birth_date)}</TableCell>
    <TableCell>{user.mother_name}</TableCell>
    <TableCell>
      <EditButton onClick={() => onEdit(user.id)} />
      <DeleteButton onClick={() => onDelete(user.id)} />
    </TableCell>
  </TableRow>
);

UserTableRow.propTypes = {
  user: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    birth_date: PropTypes.string.isRequired,
    mother_name: PropTypes.string.isRequired,
  }).isRequired,
  onEdit: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
};
