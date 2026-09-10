export function Personaje(props) {

    return(
        <div className="ms-5">
            <h2 className="mt-5">{props.name}</h2>
            <h3>Estado: {props.status}</h3>
            <h4>Especie: {props.species}</h4>
            <hr/>
        </div>
    )
}