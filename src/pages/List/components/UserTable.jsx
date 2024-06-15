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
  <Table sx={{ minWidth: 650 }} aria-label="simple table">
    <TableHead>
      <TableRow>
        <TableCell fontWeight="bold">Nome</TableCell>
        <TableCell align="center" fontWeight="bold">
          Data de Nascimento
        </TableCell>
        <TableCell align="center" fontWeight="bold">
          Nome da mãe
        </TableCell>
        <TableCell align="center" fontWeight="bold">
          Ações
        </TableCell>
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
