import {Container, DynamicForm } from "../../shared/components";
import "@fontsource/iceberg";
import { initialValues, validationSchema } from "./validations";
import { formElements } from "./config";
import styles from './registerStyle.module.css'

function Register() {
  const handleSubmit = (values) => {
    console.log("Datos del formulario:", values);
  };

  return (
      <Container>

        <DynamicForm
          elements={formElements}
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        />
      </Container>
  );
}

export default Register;
