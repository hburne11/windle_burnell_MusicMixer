(() => {

console.log ("js is linked")

//variables
	const jukebox = document.querySelectorAll(".jukebox")
			discs = document.querySelectorAll(".discs")


function dragStart(event) {
	console.log("dragged!")
	event.dataTransfer.setData("savedID", this.id);
}


function draggedOver(event) {
	//event.preventdefault();
	console.log("I've been dragged over D:")
}

function dropped(event) {
	event.preventDefault();
	console.log("droppppp")
	let targetID = event.dataTransfer.getData("savedID");
	console.log("dropped")
}

//event handling
discs.forEach(piece => piece.addEventListener("dragstart", dragStart));

jukebox.forEach(zone => {
	zone.addEventListener("dragover", draggedOver);
	zone.addEventListener("drop", dropped);
})



})();
