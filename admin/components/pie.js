export default function PiePagina(props) {
    return (
        <footer class="pie">
            <div class="grupo1">
                <section class="box">
                    <figure>
                        <img src="#" alt="" id="footer-logo" class="fa fa-plus-square fa-3x" />
                    </figure>
                </section>
                <section class="box">
                    <h3>Quienes Somos</h3>
                    <ol id="contenido-footer1">
                        <li><a href="#">¿Qué es MediAlert?</a></li>
                        <li><a href="#">Contáctanos</a></li>
                    </ol>
                </section>
                <section class="box">
                    <h3>Título</h3>
                    <p id="contenido-footer2">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil ab, natus
                        dolorem illum facilis unde aut
                        itaque saepe ut officia neque praesentium magnam adipisci nostrum modi. Fugiat cumque consequuntur
                        dolorem?
                    </p>
                </section>
            </div>
            <div class="grupo2">
                <small>&copy;2023 <b>Fran</b> - Todos los derechos reservados</small>
            </div>
        </footer>
    )
}