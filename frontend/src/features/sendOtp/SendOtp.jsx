import { Container, DynamicForm } from "../../shared/components";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";

const formElements = [
  {
    type: "text",
    name: "email",
    label: "Correo electrónico",
    placeholder: "Ingresa tu correo",
  },
  {
    type: "button",
    label: "Solicitar OTP",
    submit: true,
  },
];

const initialValues = {
  email: "",
};

const validationSchema = Yup.object({
  email: Yup.string()
    .email("Formato de correo inválido")
    .required("El correo es obligatorio"),
});

function SendOtp() {
  const navigate = useNavigate();

  const handleSubmit = async (values) => {
    // Aquí iría la lógica para solicitar el OTP al backend
    // Simulación de éxito
    navigate("/verify-otp");
  };

  return (
    <Container>
      <div className="forms-title">
        <h1>Restablecer contraseña</h1>
        <h2>Solicita tu código OTP</h2>
      </div>
      <DynamicForm
        elements={formElements}
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      />
    </Container>
  );
}

export default SendOtp;
