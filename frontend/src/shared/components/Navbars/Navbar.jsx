const Navbar=({children})=>{
    return(
        <div className="navbar">
            <a href="#" className="site-title">Ecommerce</a>
            {children}
        </div>
    )
}
export default Navbar