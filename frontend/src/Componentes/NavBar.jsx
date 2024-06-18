import React, { useState } from 'react';
import './NavBar.css';
import { Link, Outlet, useLocation } from 'react-router-dom';
import { FaClipboard, FaClipboardList, FaRegUser, FaUserPlus, FaBars, FaHome, FaTractor, FaCogs } from 'react-icons/fa';
import { Container } from 'react-bootstrap';
import Footer from '../Componentes/Footer.jsx';

function NavBar() {
    const [show, setShow] = useState(true);
    const [isHome, setIsHome] = useState(false);

    const location = useLocation();

    const handleShow = () => {
        setShow(!show);
    };

    React.useEffect(() => {
        setIsHome(location.pathname === '/Componentes');
    }, [location.pathname]);

    return (
        <>
            <div className={`side-navbar ${show ? 'active-nav' : ''}`} id="sidebar">
                <ul className="nav flex-column text-white w-100 p-8">
                    <span className="nav-link h3 text-black mt-4 mb-0 fw-bold fs-1  pb-0 text-center italic-text text-shadow ecogest">ECOGEST</span>
                    <span className="nav-link h1 text-black mb-4 pt-0 fs-6 text-center">Inovando o Presente, Preservando o Futuro</span>
                    <li className="nav-link px-2 py-3">
                        <Link to="/Componentes">
                            <FaHome />
                            <span className="mx-2">Home</span>
                        </Link>
                    </li>                    
                    <li className="nav-link px-2 py-3">
                        <Link to="/AtivSustentaveis">
                            <FaClipboardList />
                            <span className="mx-2">Cadastrar Ativ. Sustentável</span>
                        </Link>
                    </li>
                    <li className="nav-link px-2 py-3">
                        <Link to="/TiposDeServico">
                            <FaCogs />
                            <span className="mx-2">Cadastrar Tipos de Serviços</span>
                        </Link>
                    </li>
                    <li className="nav-link px-2 py-3">
                        <Link to="/Beneficiarios">
                            <FaRegUser />
                            <span className="mx-2">Cadastro de Beneficiarios</span>
                        </Link>
                    </li>
                    <li className="nav-link px-2 py-3">
                        <Link to="/Colaborador">
                            <FaUserPlus />
                            <span className="mx-2">Cadastro de Colaboradores</span>
                        </Link>
                    </li>
                    <li className="nav-link px-2 py-3">
                        <Link to="/TiposDeMaquinario">
                            <FaTractor />
                            <span className="mx-2">Cadastrar Tipos de Maquin.</span>
                        </Link>
                    </li>
                    <li className="nav-link px-2 py-3">
                        <Link to="/Maquinario">
                            <FaTractor />
                            <span className="mx-2">Cadastro de Maquinário</span>
                        </Link>
                    </li>

                </ul>
            </div>

            <div className={`p-1 my-container ${show ? 'active-cont' : ''}`}>
                <nav onClick={handleShow} className="navbar top-navbar navbar-light bg-#025c14; px-1">
                    <FaBars className="fs-2 text-white" />
                    <p className="text-white">Olá Colaborador</p>
                </nav>
                <Container className={`main-container ${isHome ? '' : 'bg-white'} p-2 rounded-5 mb-5`}>
                    <Outlet />
                    
                </Container>
                <Footer className="main-footer p-2"></Footer>
            </div>
        </>
    );
}

export default NavBar;
