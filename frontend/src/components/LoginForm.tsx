import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function LoginForm() {
     /* Set the current page title */
    useEffect(() => {
    document.title = "Login";
  }, []);
  
    const navigate = useNavigate(); /* Initialize the routing function */

    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();
        /* HIER AUTHENTIFIZIERUNG EINBAUEN! */
        navigate("/dashboard");
    }
  return (
    <div className="container mt-5">
        <div className="row justify-content-center">
            <div className="col-12 col-sm-8 col-md-6 col-lg-4"> 
                <h2 className="mb-6 text-center">Klausase</h2>
                <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <label htmlFor="email" className="form-label">E-Mail</label>
                        <input type="email" className="form-control" id="email" placeholder="E-Mail eingeben" />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="password" className="form-label">Passwort</label>
                        <input type="password" className="form-control" id="password" placeholder="Passwort" />
                    </div>
                    <button type="submit" className="btn btn-primary w-100">Anmelden</button>
                </form>
            </div>
        </div>
    </div> 
  )
}

export default LoginForm;
