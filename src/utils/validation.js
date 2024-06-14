import * as yup from "yup";

export const schema = yup.object().shape({
  name: yup
    .string()
    .required("Nome é obrigatório")
    .min(10, "Nome deve ter pelo menos 10 caracteres")
    .max(100, "Nome deve ter no máximo 100 caracteres"),
  password: yup
    .string()
    .min(10, "A senha deve ter pelo menos 10 caracteres")
    .max(30, "A senha deve ter no máximo 30 caracteres")
    .required("Senha é obrigatória"),
  birth_date: yup.date().required("Data de nascimento é obrigatória"),
  mother_name: yup
    .string()
    .required("Nome da mãe é obrigatório")
    .min(10, "Nome da mãe deve ter pelo menos 10 caracteres")
    .max(100, "Nome da mãe deve ter no máximo 100 caracteres"),
});

export const validate = (values) => {
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
