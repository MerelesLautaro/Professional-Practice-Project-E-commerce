const PrimarylButton=({type="submit" ,children})=>{
    return(
        <div className="form-button">
            <button type={type}>{children}</button>
        </div>
    )
}
export default PrimarylButton