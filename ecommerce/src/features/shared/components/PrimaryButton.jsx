const PrimarylButton=({type="submit" ,children})=>{
    return(
        <div className="primary-button">
            <button type={type}>{children}</button>
        </div>
    )
}
export default PrimarylButton