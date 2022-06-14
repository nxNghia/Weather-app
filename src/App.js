import { useEffect, useState } from "react";
import DashBroad from "./components/dash-broad";

const App = () => {
    const [time, setTime] = useState('day');

    useEffect(() => {
        const timer = setInterval(() => {
            const now = new Date();
            if (now.getHours() > 18) {
                setTime('night');
            } else {
                setTime('day');
            }
        }, 1000 * 3600);

        return () => clearInterval(timer);
    }, [])

    return (
        <div className={`App ${time}`}>
            <DashBroad />
        </div>
    );
}

export default App;
