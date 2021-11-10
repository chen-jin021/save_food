
import {CircularProgressbar, buildStyles} from "react-circular-progressbar";
import 'react-circular-progressbar/dist/styles.css'
import PlayButton from "./PlayButton.js"
import PauseButton from "./PauseButton.js"
import SettingsButton from "./SettingsButton";

function Timer(){
    return(
        <div>
            <CircularProgressbar value={60} text={`60%`} styles={buildStyles({
                textColor: '#fff',
                pathColor: '#f54e4e',
                tailColor : 'rgba(255,255,255,0.2)'
            })}/>
            <div style={{marginTop : '20px'}}>
                <PlayButton />
                <PauseButton />
            </div>
            <div style={{marginTop: '20px'}}>
                <SettingsButton />
            </div>
        </div>
    );
}

export default Timer;