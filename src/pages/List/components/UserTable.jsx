import PropTypes from "prop-types";
import {
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
} from "@mui/material";
import { UserTableRow } from "./UserTableRow";

export const UserTable = ({ users, onEdit, onDelete }) => (
  <Table size="small">
    <TableHead>
      <TableRow>
        <TableCell sx={{ fontWeight: "bold" }}>Nome</TableCell>
        <TableCell sx={{ fontWeight: "bold" }}>Data de Nascimento</TableCell>
        <TableCell sx={{ fontWeight: "bold" }}>Nome da mãe</TableCell>
        <TableCell sx={{ fontWeight: "bold" }}>Ações</TableCell>
      </TableRow>
    </TableHead>
    <TableBody>
      {users.length === 0 ? (
        <TableRow>
          <TableCell colSpan={4} align="center">
            Nenhum usuário cadastrado
          </TableCell>
        </TableRow>
      ) : (
        users.map((user) => (
          <UserTableRow
            key={user.id}
            user={user}
            onEdit={onEdit}
            onDelete={onDelete}
          />
        ))
      )}
    </TableBody>
  </Table>
);

UserTable.propTypes = {
  users: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      birth_date: PropTypes.string.isRequired,
      mother_name: PropTypes.string.isRequired,
    })
  ).isRequired,
  onEdit: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
};
