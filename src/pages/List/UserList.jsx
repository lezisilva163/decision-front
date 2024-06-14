import { useEffect, useState } from "react";
import { Typography, Button, Paper, Box } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { UserTable } from "./components/UserTable";
import { fetchUsers, removeUser } from "./api";

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
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Paper
            elevation={3}
            sx={{
              width: "100%",
              maxWidth: "90%",
              padding: "1rem",
            }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                marginBottom: "10px",
                padding: "1rem",
              }}
            >
              <Typography
                component={"h2"}
                variant="h5"
                color="primary"
                style={{ marginBottom: "1rem" }}
              >
                Lista de Usuários
              </Typography>
              <Button
                size="small"
                variant="contained"
                color="primary"
                href="/usuario/criar"
              >
                Cadastrar
              </Button>
            </div>
            <div style={{ padding: "1rem" }}>
              <UserTable
                users={users}
                onEdit={editUser}
                onDelete={deleteUser}
              />
            </div>
          </Paper>
        </Box>
      )}
    </>
  );
};
