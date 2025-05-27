import PrimarylButton from "./PrimaryButton";
const FormCard=({buttonText="default",children})=>{
    return(
        <form method="post">
            {children}
            <PrimarylButton>{buttonText}</PrimarylButton>
        </form>
    )
}

export default FormCard;