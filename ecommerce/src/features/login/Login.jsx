import * as Yup from 'yup';
import {Navbar,Container,DynamicForm} from '../shared/components'
import "@fontsource/iceberg"; 

function Login() {
  const formElements = [
    { type: 'text', name: 'Nombre', label: 'Nombre', placeholder: 'Ingresa tu nombre' },
    { type: 'text', name: 'Apellido', label: 'Apellido', placeholder: 'Ingresa tu apellido' },
    { type: 'tel', name: 'Telefono', label: 'Telefono', placeholder: 'Ingresa tu número de teléfono' },
    { type: 'email', name: 'Email', label: 'E-Mail', placeholder: 'Ingresa tu email' },
    { type: 'password', name: 'password', label: 'Contraseña', placeholder: 'Ingresa tu contraseña' },
    { type: 'button', name: 'Ingresar', label: 'Crear Cuenta', submit: true },
  ];

  const initialValues = {
    Nombre: '',
    Apellido: '',
    Telefono: '',
    Email: '',
    password: '',
  };

const validationSchema = Yup.object({
  Nombre: Yup.string()
    .min(2, 'El nombre debe tener al menos 2 caracteres')
    .required('El nombre es obligatorio'),
  Apellido: Yup.string()
    .min(2, 'El apellido debe tener al menos 2 caracteres')
    .required('El apellido es obligatorio'),
  Telefono: Yup.string()
    .matches(/^\d{10,15}$/, 'Número de teléfono inválido (debe tener entre 10 y 15 dígitos)')
    .required('El teléfono es obligatorio'),
  Email: Yup.string()
    .email('El email no es válido')
    .required('El email es obligatorio'),
  password: Yup.string()
    .min(8, 'La contraseña debe tener al menos 8 caracteres')
    .matches(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]+$/, 'La contraseña debe contener letras y números')
    .required('La contraseña es obligatoria'),
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
