import { Container } from "@mui/material";
import { Form } from "react-final-form";
import { useNavigate } from "react-router-dom";
import { FormField } from "../components/FormField";
import { SubmitButton } from "./components/SubmitButton";
import { validate } from "../../utils/validation";
import { submitRegistration } from "./api";

export const RegistrationForm = () => {
  const navigate = useNavigate();

  const onSubmit = async (values) => {
    await submitRegistration(values);
    navigate("/");
  };

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
        render={({ handleSubmit, submitting }) => (
          <form onSubmit={handleSubmit}>
            <FormField name="name" label="Nome" />
            <FormField name="password" type="password" label="Senha" />
            <FormField
              name="birth_date"
              type="date"
              label="Data de Nascimento"
            />
            <FormField name="mother_name" label="Nome da Mãe" />
            <SubmitButton submitting={submitting} />
          </form>
        )}
      />
    </Container>
  );
};
