import { Link } from "react-router-dom";

function SideBar() {
    return (
        <ul className="navbar-nav bg-gradient-secondary sidebar sidebar-dark accordion" id="accordionSidebar">
            <Link className="sidebar-brand d-flex align-items-center justify-content-center" to="/">
                <div className="sidebar-brand-icon">
                    <img className="w-100" src="http://localhost:3017/images/logo.png" alt="3DWord" />
                </div>
            </Link>
            <hr className="sidebar-divider my-0" />
            <li className="nav-item active">
                <Link className="nav-link" to="/">
                    <i className="fas fa-fw fa-tachometer-alt"></i>
                    <span>Dashboard 3Dword</span>
                </Link>
            </li>
            <hr className="sidebar-divider" />
            <div className="sidebar-heading">Menú</div>
            <li className="nav-item">
                <Link className="nav-link collapsed" to="/users">
                    <i className="fas fa-fw fa-folder"></i>
                    <span>Lista de Usuarios</span>
                </Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link collapsed" to="/lastUser">
                    <i className="fas fa-fw fa-folder"></i>
                    <span>Ultimo usuario Creado</span>
                </Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link" to="/products">
                    <i className="fas fa-fw fa-chart-area"></i>
                    <span>Lista de Productos</span>
                </Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link" to="/lastProduct">
                    <i className="fas fa-fw fa-table"></i>
                    <span>Ultimo Producto creado</span>
                </Link>
            </li>
            <hr className="sidebar-divider d-none d-md-block" />
        </ul>
    );
}

export default SideBar;