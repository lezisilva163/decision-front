import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { fetchUsers, removeUser } from "./api";
import { Box, Typography, Button, Paper, TableContainer } from "@mui/material";
import { UserTable } from "./components/UserTable";

export const UserList = () => {
  const [users, setUsers] = useState([]);
  const navigate = useNavigate();

  const listUsers = async () => {
    try {
      const data = await fetchUsers();
      setUsers(data);
    } catch (error) {
      console.log(error);
    }
  };

  const deleteUser = async (id) => {
    try {
      await removeUser(id);
      setUsers((prevUsers) => prevUsers.filter((user) => user.id !== id));
    } catch (error) {
      console.error("Erro ao deletar usuário", error);
    }
  };

  const editUser = (id) => {
    navigate(`/usuario/editar/${id}`);
  };

  useEffect(() => {
    listUsers();
  }, []);

  return (
    <>
      {users && (
        <Box sx={{ width: "100%", padding: 4 }}>
          <TableContainer component={Paper}>
            <Box sx={{ display: "flex", justifyContent: "space-between" }}>
              <Typography variant="h5" sx={{ padding: 2, fontWeight: "bold" }}>
                Lista de Usuários
              </Typography>
              <Button
                size="small"
                variant="outlined"
                color="primary"
                href="/usuario/criar"
                sx={{ margin: 2 }}
              >
                Cadastrar
              </Button>
            </Box>
            <UserTable users={users} onEdit={editUser} onDelete={deleteUser} />
          </TableContainer>
        </Box>
      )}
    </>
  );
};
