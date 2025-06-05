import React from "react";

const Game = (props) => {
    return(
        <div className="Game">
            <img src={props.image} alt={props.gameTitle}/>
            <h3>{props.gameTitle}</h3>
            <h5>{props.developer}</h5>
            <h5>{props.releaseDate}</h5>
            <a href={props.ign}><h5>IGN Rating/Review</h5></a>
        </div>
    )
}

export default Game;