// get all get all elements in the document
const documentSelector = document;

loadEventListeners();

function loadEventListeners() {
	// document ready//
	document.addEventListener('DOMContentLoaded', startListening);

	// waits for for a click event
	documentSelector.addEventListener('click', getElement);
}

// Event Listeners //

// gets event and target together with all the children nodes
function getElement(event) {
	const allChildren = event.target.querySelectorAll('*');

	// nodelist into an array
	const newChild = Array.prototype.slice.call(allChildren);

	const newLoop = [];
	// loop throught the array
	for (let i = 0; i <= newChild.length; i++) {
		newLoop.push(newChild[i]);
	}

	printElements(newLoop);
	// console.log(newChild.length);
	// console.log(newChild.constructor.name);
	// console.log(allChildren[0]);
}
// alert(getElement());
function printElements(elements) {
	const stringed = [];

	alert(`There are ${elements.length} tags found in the element selected`);

	elements.forEach((element) => {
		alert(`"${element.tagName.toLowerCase()}"`);
	});
	// alert(element.toLowerCase());
}

function startListening() {
	alert('Please Click of any part of the DOM to get tags of elements');
}
