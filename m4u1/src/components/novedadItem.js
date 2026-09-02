export function NovedadItem(props) {

    const{title, subtitle, author} = props

    return(
        <div>
            <h2>{title}</h2>
            <h3>{subtitle}</h3>
            <h5>{author}</h5>
        </div>
    )
}