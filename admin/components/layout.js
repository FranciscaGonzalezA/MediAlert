import Cabecera from "./cabecera";
import PiePagina from "./pie";

export default function Layout(props) {
    return (
        <>
            <Cabecera />
            {props.children}
            <PiePagina />
        </>
    )
}