import { useEffect, useState } from "react"

const Countdown = () => {

    const [input, setInput] = useState<number | null>(null);
    const [time, setTime] = useState(0);

    const handleStartStop = () => {
        if (input !== null) {
            setTime(input);
        }
    }

    useEffect(() => {
        const interval = setInterval(() => {
            if (time > 0) {
                setTime(prevTime => prevTime - 1);
            } else {
                clearInterval(interval);
            }
        })
    }, []);

    return (
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", height: "100vh" }}>
            <h2>Countdown</h2>
            {time}
            <input type="number" onChange={(event) => setInput(Number(event?.target.value))} />
            <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 5 }}>
                <button
                    onClick={handleStartStop}
                >
                    START
                </button>
                <button>
                    PAUSE
                </button>
                <button>
                    STOP
                </button>
                <button>
                    RESTART
                </button>


            </div>
        </div>
    )
}

export default Countdown