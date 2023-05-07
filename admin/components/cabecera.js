export default function Cabecera(props) {
    return (
        <header>
            <nav id="navbar-principal">

                <input type="checkbox" id="ckbox" />
                <label for="ckbox" class="hamborguesa">
                    <i class="fa fa-bars" aria-hidden="true"></i>
                </label>

                <img src="#" alt="" id="navbar-logo" class="fa fa-plus-square fa-3x" />

                <ul class="navegacion">
                    <li><a href="./"> Inicio</a></li>
                    <li><a href="/contacto.html"> Contáctanos</a></li>
                    <li><a href="./informaciones.html"> Informaciones</a></li>
                    <li><a href="./inicio-sesion.html"> LogIn</a></li>
                    <li><a href="/registro.html"> Registrarse</a></li>
                </ul>
            </nav>
        </header>
    )
}