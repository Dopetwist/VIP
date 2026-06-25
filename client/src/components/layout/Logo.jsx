
function Logo() {
    
    return (

        <main 
        className="logo-section"
        onClick={() => window.location.href = "/"}
        >
            <figure>
                <img src="/path/to/logo.png" alt="VIP Logo" />
            </figure>

            <p>Beauty Studio</p>
        </main>
        
    )
}

export default Logo;