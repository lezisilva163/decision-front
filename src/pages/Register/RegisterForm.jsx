import { Container, Box, Typography } from "@mui/material";
import { Form } from "react-final-form";
import { useNavigate } from "react-router-dom";
import { FormField } from "../components/FormField";
import { SubmitButton } from "./components/SubmitButton";
import { validate } from "../../utils/validation";
import { submitRegistration } from "./api";
import { useTheme } from "@mui/material/styles";
import LockIcon from "@mui/icons-material/Lock";

export const RegistrationForm = () => {
  const navigate = useNavigate();
  const theme = useTheme();

  const onSubmit = async (values) => {
    await submitRegistration(values);
    navigate("/");
  };

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
        sx={{
          width: "25%",
          maxWidth: "200px", // Limita a largura do contêiner
          boxShadow: 3, // Adiciona uma sombra
          p: 3, // Adiciona um padding
          borderRadius: 2, // Adiciona um border-radius
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
          <LockIcon
            sx={{
              fontSize: "2rem",
              color: theme.palette.primary.main,
              padding: 1,
            }}
          />
          <Typography variant="h5" sx={{ textAlign: "center" }}>
            Sign Up
          </Typography>
        </Box>
        <Form
          onSubmit={onSubmit}
          validate={validate}
          render={({ handleSubmit, submitting }) => (
            <form onSubmit={handleSubmit}>
              <FormField name="name" label="Nome*" />
              <FormField name="password" type="password" label="Senha*" />
              <FormField
                name="birth_date"
                type="date"
                label="Data de Nascimento*"
              />
              <FormField name="mother_name" label="Nome da Mãe*" />
              <SubmitButton submitting={submitting} />
            </form>
          )}
        />
      </Container>
    </Box>
  );
};
