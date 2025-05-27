import Navbar from "../shared/components/Navbar";
import FormsContainer from "../shared/components/FormsContainer";
import Form from "../shared/components/Form";
import InputField from "../shared/components/InputField";
import "@fontsource/iceberg"; 

const Login =()=>{
    return(
        <>
        <Navbar/>
        <FormsContainer>
            <Form buttonText='Enviar'>
                
                <div className="forms-title">
                    <h1>Registrarse | </h1>
                    <h2>Ya tienes cuenta?</h2>
                    <a href="#">Ingresá aquí</a>
                </div>

                <InputField label="Usuario" />
                <InputField label="Apellido" />
                <InputField label="Telefono" />
                <InputField label="E-Mail" type="email" />
                <InputField label="Password" type="password" />
            </Form>
        </FormsContainer>
        </>
    )

}

export default Login;