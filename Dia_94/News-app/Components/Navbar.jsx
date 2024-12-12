//<a className="navbar-brand" href="#">Navbar</a>

const Navbar = ({setCategorias}) => {
  return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid">
                <span className="badge bg-light text-dark fs-4">Codi News</span>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <div className="nav-link" onClick={() => setCategorias("technology")}>Tecnologia</div>
                        </li>
                      <li className="nav-item">
                          <div className="nav-link" onClick={() => setCategorias("business")}>Negócios</div>
                      </li>
                      <li className="nav-item">
                          <div className="nav-link" onClick={() => setCategorias("health")}>Saúde</div>
                      </li>
                      <li className="nav-item">
                          <div className="nav-link" onClick={() => setCategorias("sports")}>Esportes</div>
                      </li>  
                      <li className="nav-item">
                          <div className="nav-link" onClick={() => setCategorias("entertainment")}>Entretenimento</div>
                      </li>  
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar