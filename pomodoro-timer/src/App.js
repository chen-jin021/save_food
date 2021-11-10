import './App.css';
import Timer from "./timer.js"
import Settings from "./Settings";
import {useState} from "react";

function App() {
    const [showSettings, setShowSettings] = useState(true);
    return (
        <main>
            {showSettings ? <Settings /> : <Timer />}
        </main>
    );
}


export default App;
