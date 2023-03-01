import './PlayField.css'

const PlayField = (props) => {

    const classes = 'container ' + props.className


    return(
        <div className={classes}>
            {props.children}
        </div>
    )

}

export default PlayField