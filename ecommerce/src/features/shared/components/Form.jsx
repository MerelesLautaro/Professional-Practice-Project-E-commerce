import PrimarylButton from "./PrimaryButton";

const Form=({buttonText="default",children})=>{
    return(
        <form method="post">
            {children}
            <PrimarylButton>{buttonText}</PrimarylButton>
        </form>
    )
}

export default Form;