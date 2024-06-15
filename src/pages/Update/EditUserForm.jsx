import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Container, Button, Box, Typography, Paper } from "@mui/material";
import { Form } from "react-final-form";
import { getUser, updateUser } from "./api";
import { validate } from "../../utils/validation";
import { FormField } from "../components/FormField";
import { useTheme } from "@mui/material/styles";
import { format } from "date-fns";
import LockOpenIcon from "@mui/icons-material/LockOpen";

export const EditUserForm = () => {
  const [initialValues, setInitialValues] = useState(null);
  const { id } = useParams();
  const navigate = useNavigate();
  const theme = useTheme();

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const user = await getUser(id);
        const formattedDate = format(new Date(user.birth_date), "yyyy-MM-dd");
        user.birth_date = formattedDate;
        setInitialValues(user);
      } catch (error) {
        console.error("Erro ao buscar usuário", error);
      }
    };

    fetchUser();
  }, [id]);

  const onSubmit = async (values) => {
    try {
      await updateUser(id, values);
      navigate("/");
    } catch (error) {
      console.error("Erro ao atualizar usuário", error);
    }
  };

  if (!initialValues) return <div>Carregando...</div>;

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "80vh",
        padding: 2,
        [theme.breakpoints.down("sm")]: {
          padding: 1,
        },
      }}
    >
      <Container
        component={Paper}
        sx={{
          width: "25%",
          maxWidth: "200px",
          boxShadow: 3,
          p: 3,
          borderRadius: 2,
          [theme.breakpoints.down("sm")]: {
            width: "100%",
            maxWidth: "100%",
            padding: 1,
          },
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <LockOpenIcon
            sx={{
              fontSize: "3rem",
              color: theme.palette.primary.main,
              padding: 1,
            }}
          />
          <Typography variant="h5" sx={{ textAlign: "center" }}>
            Update
          </Typography>
        </Box>
        <Form
          onSubmit={onSubmit}
          validate={validate}
          initialValues={initialValues}
          render={({ handleSubmit, submitting }) => (
            <form onSubmit={handleSubmit}>
              <FormField name="name" label="Nome*" />
              <FormField name="password" label="Senha*" type="password" />
              <FormField
                name="birth_date"
                label="Data de Nascimento*"
                type="date"
              />
              <FormField name="mother_name" label="Nome da Mãe*" />
              <Button
                type="submit"
                variant="contained"
                color="primary"
                fullWidth
                disabled={submitting}
                style={{ marginTop: "16px" }}
              >
                Atualizar
              </Button>
            </form>
          )}
        />
      </Container>
    </Box>
  );
};
