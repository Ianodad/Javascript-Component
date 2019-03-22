// get all get all elements in the document
const documentSelector = document;

// Event Listeners //
// waits for for a click event
documentSelector.addEventListener('click', getElement);

// gets event and target together with all the children nodes
function getElement(event) {
	const allChildren = event.target.querySelectorAll('*');


	// nodelist into an array 
	var newChild = Array.prototype.slice.call(allChildren);

	for (let i = 0; i <= newChild.length; i++) {
		console.log(newChild[i]);
	}

	console.log(newChild.length);
	console.log(newChild.constructor.name);
	// console.log(allChildren[0]);
}
