import { useState } from "react"
import "./PointCounter.css"

const PointCounter = (props) => {
    
    const [pointsPlayer1,setPointsPlayer1] = useState(0)

    const [pointsPlayer2,setPointsPlayer2] = useState(0)

    const updatePoints = (value) => {
        
    }

    return(
        <div>
            <h2 className="score">{pointsPlayer1}:{pointsPlayer2}</h2>
            <button className="btn">Roll Dice!</button>
        </div>
    )
}


export default PointCounter