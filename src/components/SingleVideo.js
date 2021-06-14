import React from 'react';
import "../../node_modules/video-react/dist/video-react.css";
import { Player } from 'video-react';

const SingleVideo = (props) => {
    return (
        <div className="single-video">
            <div>
                <Player
                    playsInline
                    poster={props.img}
                    src={props.video}
                />
                <h3>{props.title}</h3>
                <p>{props.desc}</p>
            </div>
            
        </div>
    );
}

export default SingleVideo;