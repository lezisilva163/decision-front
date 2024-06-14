import { useEffect, useState } from "react";
import {
  Typography,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Button,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import { styled } from "@mui/material/styles";
import { format } from "date-fns";
import { api } from "../../utils/api";

const DeleteButton = styled(Button)(({ theme }) => ({
  color: theme.palette.getContrastText(theme.palette.error.main),
  backgroundColor: theme.palette.error.main,
  "&:hover": {
    backgroundColor: theme.palette.error.dark,
  },
  marginRight: theme.spacing(1),
}));

const EditButton = styled(Button)(({ theme }) => ({
  color: theme.palette.getContrastText(theme.palette.primary.main),
  backgroundColor: theme.palette.primary.main,
  "&:hover": {
    backgroundColor: theme.palette.primary.dark,
  },
  marginRight: theme.spacing(1),
}));

const formatDate = (date) => {
  return format(new Date(date), "dd/MM/yyyy");
};

export const UserList = () => {
  const [users, setUsers] = useState([]);

  const listUsers = async () => {
    try {
      const response = await api.get("/users/list");
      setUsers(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const deleteUser = async (id) => {
    try {
      await api.delete(`/users/${id}`);
      setUsers((prevUsers) => prevUsers.filter((user) => user.id !== id));
    } catch (error) {
      console.error("Erro ao deletar usuário", error);
    }
  };

  const editUser = (id) => {
    // Lógica para editar o usuário, por exemplo, abrir um modal com formulário de edição
    console.log(`Edit user with id: ${id}`);
  };

  useEffect(() => {
    listUsers();
  }, []);

  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: "10px",
          padding: "1rem",
        }}
      >
        <Typography component={"h2"} variant="h5" color={"primary"}>
          Usuários
        </Typography>
        <Button variant="contained" color="primary" href="/usuario/criar">
          Cadastrar
        </Button>
      </div>
      <div style={{ padding: "1rem" }}>
        <Table size="small">
          <TableHead>
            <TableRow>
              <TableCell sx={{ fontWeight: "bold" }}>Nome</TableCell>
              <TableCell sx={{ fontWeight: "bold" }}>
                Data de Nascimento
              </TableCell>
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
                <TableRow key={user.id}>
                  <TableCell>{user.name}</TableCell>
                  <TableCell>{formatDate(user.birth_date)}</TableCell>
                  <TableCell>{user.mother_name}</TableCell>
                  <TableCell>
                    <EditButton onClick={() => editUser(user.id)}>
                      <EditIcon />
                    </EditButton>
                    <DeleteButton onClick={() => deleteUser(user.id)}>
                      <DeleteIcon />
                    </DeleteButton>
                  </TableCell>
                </TableRow>
              ))
            )}
          </TableBody>
        </Table>
      </div>
    </>
  );
};
