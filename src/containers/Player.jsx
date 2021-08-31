import React from "react";
import "../assets/styles/components/Player.scss";

const Player = props => {

    const { id } = props.match.params;

  return (
    <div className="Player">
      <video controls autoPlay>
        <source src="" type="video/mp4" />
      </video>
      <div className="Player-back" onClick={() => props.history.goBack()}>
        <button type="button">Regresar</button>
      </div>
    </div>
  );
};

export default Player;
