import { useField, useForm } from 'vee-validate';
import * as yup from 'yup';

const validationSchema = yup.object({
  firstName: yup.string().required('First name is required'),
  lastName: yup.string().required('Last name is required'),
  email: yup
    .string()
    .required('Email is required')
    .matches(
      /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
      'Invalid email format. Use user@example.com'
    ),
  password: yup
    .string()
    .min(6, 'Password must be at least 6 characters')
    .required('Password is required'),
});

type FormValues = yup.InferType<typeof validationSchema>;

export function useFormValidation() {
  const { meta, validate } = useForm<FormValues>({
    validationSchema,
  });

  const { value: firstName, errorMessage: firstNameError } =
    useField<FormValues['firstName']>('firstName');

  const { value: lastName, errorMessage: lastNameError } =
    useField<FormValues['lastName']>('lastName');

  const { value: email, errorMessage: emailError } = useField<FormValues['email']>('email');

  const { value: password, errorMessage: passwordError } =
    useField<FormValues['password']>('password');

  return {
    firstName,
    lastName,
    email,
    password,
    firstNameError,
    lastNameError,
    emailError,
    passwordError,
    meta,
    validate,
  };
}
