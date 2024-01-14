import * as yup from "yup"

export const formSchema = yup.object().shape({
  id: yup.number(),
  title: yup.string().required("Campo obrigatório!"),
  author: yup.string().required("Campo obrigatório!"),
  description: yup
    .string()
    .max(600, "Máximo de caracteres atingido")
    .required("Campo obrigatório!"),
  genre: yup.string().required("Campo obrigatório!"),
  publishYear: yup
    .number()
    .positive("O ano de publicação deve ser um número positivo!")
    .integer("O ano de publicação deve ser um número inteiro!")
    .max(
      new Date().getFullYear(),
      "O ano de publicação não pode ser maior que o ano atual!"
    )
    .required("Campo obrigatório!"),
  registerDate: yup.date()
})
