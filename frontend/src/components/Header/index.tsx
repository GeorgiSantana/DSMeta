import "./style.css";
import logo from "../../assets/img/logo.svg";

function Header() {
    return (
        <div>
            <header>
                <div className="dsmeta-logo-container">
                    <img src={logo} alt="DSMeta" />
                    <h1>DSMeta</h1>
                    <p>
                        Desenvolvido por
                        <a href="https://www.instagram.com/devsuperior.ig">@devsuperior.ig</a>
                    </p>
                </div>
            </header>
        </div>
    )
}

export default Header