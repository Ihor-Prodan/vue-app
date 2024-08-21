import { useField, useForm } from 'vee-validate';
import * as yup from 'yup';

type FormValues = {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
};

export function useFormValidation() {
  const validationSchema = yup.object({
    firstName: yup.string().required('First name is required'),
    lastName: yup.string().required('Last name is required'),
    email: yup.string().email('Invalid email').required('Email is required'),
    password: yup
      .string()
      .min(6, 'Password must be at least 6 characters')
      .required('Password is required'),
  });

  const { meta } = useForm<FormValues>({
    validationSchema,
  });

  const { value: firstName, errorMessage: firstNameError } = useField<string>('firstName');
  const { value: lastName, errorMessage: lastNameError } = useField<string>('lastName');
  const { value: email, errorMessage: emailError } = useField<string>('email');
  const { value: password, errorMessage: passwordError } = useField<string>('password');

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
  };
}
