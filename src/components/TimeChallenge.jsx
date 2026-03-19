import { useState, useRef } from "react";
import ResultModel from "./ResultModel";

export default function TimeChallenge({ title, targetTime }) {
	const [timerStarted, setTimerStarted] = useState(false);
	const [timerExpired, setTimerExpired] = useState(false);
	const timer = useRef(null);
	const dialog = useRef(null);

	function handleStart() {
		timer.current = setTimeout(() => {
			setTimerExpired(true);
			dialog.current.showModal();
		}, targetTime * 1000);
		setTimerStarted(true);
	}

	function handleStop() {
		clearTimeout(timer.current);
	}

	return (
		<>
			<ResultModel ref={dialog} targetTime={targetTime} result="lost" />
			<section className="challenge">
				<h2>{title}</h2>
				{timerExpired && <p>You Lost!</p>}
				<p className="challenge-time">
					{targetTime} second{targetTime > 1 ? "s" : ""}
				</p>
				<p>
					<button onClick={timerStarted ? handleStop : handleStart}>
						{timerStarted ? "Stop" : "Start"} Challenge
					</button>
				</p>
				<p className={timerStarted ? "active" : undefined}>
					{timerStarted ? "Time is running ...." : "Timer inactive"}
				</p>
			</section>
		</>
	);
}
