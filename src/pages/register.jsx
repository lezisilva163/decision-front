import { useState } from 'react';
import { TextField, Button, Container, Alert, Snackbar } from '@mui/material';
import { Form, Field } from 'react-final-form';
import * as yup from 'yup';
import { api } from '../utils/api';

const schema = yup.object().shape({
  name: yup.string().required('Nome é obrigatório').min(10, 'Nome deve ter pelo menos 10 caracteres').max(100, 'Nome deve ter no maximo 100 caracteres'),
  password: yup.string().min(10, 'A senha deve ter pelo menos 10 caracteres').max(30, 'A senha deve ter no maximo 30 caracteres').required('Senha é obrigatória'),
  birth_date: yup.date().required('Data de nascimento é obrigatória'),
  mother_name: yup.string().required('Nome da mãe é obrigatório').min(10, 'Nome da mãe deve ter pelo menos 10 caracteres').max(100, 'Nome da mãe deve ter no maximo 100 caracteres')
});

const validate = values => {
  try {
    schema.validateSync(values, { abortEarly: false });
    return {};
  } catch (err) {
    return err.inner.reduce((errors, error) => {
      return {
        ...errors,
        [error.path]: error.message,
      };
    }, {});
  }
};

const onSubmit = async (values, setOpenAlert) => {
    await api.post('/users', values);
    setOpenAlert(true);
};

export const RegistrationForm = () => {
  const [openAlert, setOpenAlert] = useState(false);

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpenAlert(false);
  };

  return (
    <Container maxWidth="sm" sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', minHeight: '100vh' }}>
      <Form
        onSubmit={(values) => onSubmit(values, setOpenAlert)}
        validate={validate}
        render={({ handleSubmit, submitting }) => (
          <form onSubmit={handleSubmit}>
            <Field name="name">
              {({ input, meta }) => (
                <TextField
                  {...input}
                  label="Nome"
                  fullWidth
                  margin="normal"
                  error={meta.touched && meta.error}
                  helperText={meta.touched && meta.error}
                />
              )}
            </Field>
            <Field name="password">
              {({ input, meta }) => (
                <TextField
                  {...input}
                  type="password"
                  label="Senha"
                  fullWidth
                  margin="normal"
                  error={meta.touched && meta.error}
                  helperText={meta.touched && meta.error}
                />
              )}
            </Field>
            <Field name="birth_date">
              {({ input, meta }) => (
                <TextField
                  {...input}
                  type="date"
                  label="Data de Nascimento"
                  fullWidth
                  margin="normal"
                  InputLabelProps={{
                    shrink: true,
                  }}
                  error={meta.touched && meta.error}
                  helperText={meta.touched && meta.error}
                />
              )}
            </Field>
            <Field name="mother_name">
              {({ input, meta }) => (
                <TextField
                  {...input}
                  label="Nome da Mãe"
                  fullWidth
                  margin="normal"
                  error={meta.touched && meta.error}
                  helperText={meta.touched && meta.error}
                />
              )}
            </Field>
            <Button
              type="submit"
              variant="contained"
              color="primary"
              fullWidth
              disabled={submitting}
              style={{ marginTop: '16px' }}
            >
              Cadastrar
            </Button>
          </form>
        )}
      />
      <Snackbar open={openAlert} autoHideDuration={6000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
          Cadastro realizado com sucesso!
        </Alert>
      </Snackbar>
    </Container>
  );
};
