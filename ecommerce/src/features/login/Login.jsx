import * as Yup from 'yup';
import {Navbar,Container,DynamicForm} from '../shared/components'
import "@fontsource/iceberg"; 

function Login() {
const formElements = [
  { type: 'email', name: 'Email', label: 'E-Mail', placeholder: 'Ingresa tu email' },
  { type: 'tel', name: 'Telefono', label: 'Telefono', placeholder: 'Ingresa tu número de teléfono' },
  { type: 'password', name: 'password', label: 'Contraseña', placeholder: 'Ingresa tu contraseña' },
  { type: 'password', name: 'confirmPassword', label: 'Repetir Contraseña', placeholder: 'Reingresa tu contraseña' },
  { type: 'button', name: 'Ingresar', label: 'Crear Cuenta', submit: true },
];


const initialValues = {
  Email: '',
  Telefono: '',
  password: '',
  confirmPassword: '',
};


const validationSchema = Yup.object({
  Email: Yup.string()
    .email('El email no es válido')
    .required('El email es obligatorio'),
  Telefono: Yup.string()
    .matches(/^\d{10,15}$/, 'Número de teléfono inválido (debe tener entre 10 y 15 dígitos)')
    .required('El teléfono es obligatorio'),
  password: Yup.string()
    .min(8, 'La contraseña debe tener al menos 8 caracteres')
    .matches(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]+$/, 'La contraseña debe contener letras y números')
    .required('La contraseña es obligatoria'),
confirmPassword: Yup.string()
  .min(8, 'La contraseña debe tener al menos 8 caracteres')
  .matches(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]+$/, 'La contraseña debe contener letras y números')
  .oneOf([Yup.ref('password'), null], 'Las contraseñas no coinciden')
  .required('Debes repetir la contraseña'),
});


  const handleSubmit = (values) => {
    console.log("Datos del formulario:", values);
  };

  return (
    <> 
      <Navbar />
      <Container>
          <div className='forms-title'>
            <h1>Registrarse | </h1>
            <h2>¿Ya tienes cuenta?</h2>
            <a href="#">Ingresá aquí</a>
          </div>
          <DynamicForm
            elements={formElements}
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
          />
      </Container>
    </>
  );
}

export default Login;
