import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';


class SecondNavbar extends Component {
    render() {
        return (
            <div className="nav-pills nav-underline nav-scroller bg-white shadow-sm box-shadow">
                <nav className="nav nav-underline">
                    <Link className="nav-link" to="/">Latest</Link>
                    <Link className="nav-link" to="arubanative.com">ArubaNative</Link>
                    <Link className="nav-link" to="masnoticia.com">MasNoticia</Link>
                    <Link className="nav-link" to="noticiacla.com">NoticiaCla</Link>
                    <Link className="nav-link" to="awe24.com">Awe24</Link>
                    <Link className="nav-link" to="diario.aw">Diario</Link>
                    <Link className="nav-link" to="solodipueblo.com">SoloDiPueblo</Link>
                    <Link className="nav-link" to="24ora.com">24ora</Link>
                    <Link className="nav-link" to="earubianonews.com">EarubianoNews</Link>
                    <Link className="nav-link" to="focus.aw">Focus</Link>
                    <Link className="nav-link" to="visitaruba.com">VisitAruba</Link>
                    <Link className="nav-link" to="bondia.com">BonDia</Link>
                    <Link className="nav-link" to="297Sports.com">297Sports</Link>
                    <Link className="nav-link" to="xclusivomagazine.com">Xclusivo</Link>
                </nav>
            </div>

        );
    }
}

export default SecondNavbar;