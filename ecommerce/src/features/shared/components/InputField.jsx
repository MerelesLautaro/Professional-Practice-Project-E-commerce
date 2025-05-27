const InputField=({label, type="text"})=>{
    return(
        <>
        <div className="input-field">
            <label>{label}</label>
            <input required type={type} placeholder={`Ingresa tu ${label}`}/>
        </div>
        </>
    )
}

export default InputField;