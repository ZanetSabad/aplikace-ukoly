import "./ButtonDeleteAll.css"

const ButtonDeleteAll = (props) => {
    return(
        <div className="action">
            <button onClick={props.deleteButton}>Smazat vše</button>        
        </div>
    )
}

export default ButtonDeleteAll

