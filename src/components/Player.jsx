import { useState, useRef } from "react";

export default function Player() {
	const [name, setName] = useState("unknown entity");
	const inputRef = useRef(null);

	function handleClick() {
		setName(inputRef.current.value);
		inputRef.current.value = "";
	}

	return (
		<section id="player">
			<h2>Welcome {name ? name : "unknown entity"}</h2>
			<p>
				<input ref={inputRef} type="text" />
				<button onClick={handleClick}>Set Name</button>
			</p>
		</section>
	);
}
