import Navbar from "../shared/components/Navbar";
import FormsContainer from "../shared/components/FormsContainer";
import Form from "../shared/components/Form";
import InputField from "../shared/components/InputField";

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

                <TextField label="Usuario" />
                <TextField label="Apellido" />
                <TextField label="Telefono" />
                <TextField label="E-Mail" type="email" />
                <TextField label="Password" type="password" />
            </Form>
        </FormsContainer>
        </>
    )

}

export default Login;