import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Container, Button } from "@mui/material";
import { Form } from "react-final-form";
import { getUser, updateUser } from "./api";
import { validate } from "../../utils/validation";
import { FormField } from "../components/FormField";

export const EditUserForm = () => {
  const [initialValues, setInitialValues] = useState(null);
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const user = await getUser(id);
        delete user.password;
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
    <Container
      maxWidth="sm"
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "100vh",
      }}
    >
      <Form
        onSubmit={onSubmit}
        validate={validate}
        initialValues={initialValues}
        render={({ handleSubmit, submitting }) => (
          <form onSubmit={handleSubmit}>
            <FormField name="name" label="Nome" />
            <FormField name="password" label="Senha" type="password" />
            <FormField
              name="birth_date"
              label="Data de Nascimento"
              type="date"
              inputProps={{ max: new Date().toISOString().split("T")[0] }}
            />
            <FormField name="mother_name" label="Nome da Mãe" />
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
  );
};
