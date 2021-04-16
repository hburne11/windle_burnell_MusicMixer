(() => {

console.log ("js is linked")

//variables
	const jukebox = document.querySelector("#jukebox"),
			discs = document.querySelectorAll(".discs"),
			stop = document.querySelector(".stop");


function dragStart(event) {
	console.log("dragged!")
	event.dataTransfer.setData("savedID", event.target.id);
}


function draggedOver(event) {
	event.preventDefault();
	console.log("I've been dragged over D:")
}

function dropped(event) {
	event.preventDefault();
	let targetID = event.dataTransfer.getData("savedID");
	console.log("dropped", targetID)

	//play the right audio piece there
	let audioSrc = `audio/${targetID}.mp3`;
	audio.src = audioSrc;
	audio.load();
	audio.play();
}

function stopAudio(event) {
	console.log("paused!")
	audio.pause();
	audio.currentTime = 0;
}

//event handling
discs.forEach(piece => piece.addEventListener("dragstart", dragStart));


	jukebox.addEventListener("dragover", draggedOver);
	jukebox.addEventListener("drop", dropped);

stop.addEventListener("click", stopAudio);

})();