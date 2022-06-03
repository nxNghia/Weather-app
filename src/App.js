import { useState } from "react";

const App = () => {
    const [time, setTime] = useState('night');

    return (
        <div className={`App ${time}`}>
            
        </div>
    );
}

export default App;
