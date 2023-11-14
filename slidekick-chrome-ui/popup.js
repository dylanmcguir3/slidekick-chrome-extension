function draggable(element, handle) {
    /* Make handle drag element */
    
    let pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
    handle.onmousedown = dragMouseDown;

    function dragMouseDown(e) {
        e.preventDefault();
        // Get the mouse cursor position at startup
        pos3 = e.clientX;
        pos4 = e.clientY;
        document.onmouseup = closeDragElement;
        // Call a function whenever the cursor moves
        document.onmousemove = elementDrag;
    }

    function elementDrag(e) {
        e.preventDefault();
        // Calculate the new cursor position
        pos1 = pos3 - e.clientX;
        pos2 = pos4 - e.clientY;
        pos3 = e.clientX;
        pos4 = e.clientY;
        // Set the element's new position
        element.style.top = (element.offsetTop - pos2) + "px";
        element.style.left = (element.offsetLeft - pos1) + "px";
        handle.style.top = (handle.offsetTop - pos2) + "px";
        handle.style.left = (handle.offsetLeft - pos1) + "px";
    }

    function closeDragElement() {
        // Stop moving when mouse button is released
        document.onmouseup = null;
        document.onmousemove = null;
    }
}


function setFullOpacity() {
    container.style.opacity = "1.0";
}

function setReducedOpacity() {
    container.style.opacity = "0.5";
}


// Add google icon font stylesheet
let link = document.createElement('link');
link.rel = 'stylesheet';
link.href = 'https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0';
document.head.appendChild(link);

let container = document.createElement("div");
container.style.backgroundColor = "lightblue";
container.style.position = "fixed";
container.style.bottom = "40px";
container.style.width = "700px";
container.style.height = "40px";
container.style.left = (window.innerWidth - parseInt(container.style.width, 10)) / 2 + "px";
container.style.borderRadius = "10px";
container.style.zIndex = 1000; // TODO: CHANGE LATER
container.style.display = "flex";
container.style.alignItems = "center"; // Align items vertically
container.style.padding = "0 5px 0 10px"; // Top, Right, Bottom, Left padding
document.body.appendChild(container);

// Create textbox
let textbox = document.createElement("input");
textbox.style.border = "1px solid #ccc";
textbox.style.borderRadius = "10px";
textbox.placeholder = "Tell slidekick what to generate...";
textbox.style.flexGrow = 1; // Allow textbox to fill available space
textbox.style.height = "60%"; // Set height
textbox.style.paddingLeft = "5px"
container.appendChild(textbox);

// Create button
let sendButton = document.createElement("button");
sendButton.classList.add("material-symbols-outlined");
sendButton.textContent = "send"; // Google Material icon text identifier
sendButton.style.fontSize = "25px"; // Set icon size
sendButton.style.height = "80%"; // Adjust height as needed
sendButton.style.marginRight = "7px"; // Add margin if necessary
sendButton.style.backgroundColor = "transparent"; // Make button background transparent
sendButton.style.color = "black"; // Set button text color
sendButton.style.border = "none"; // Remove button border
sendButton.style.cursor = "pointer";
container.appendChild(sendButton);

// Create drag handle
let dragHandle = document.createElement("span");
dragHandle.classList.add("material-symbols-outlined");
dragHandle.textContent = "drag_indicator"; // Use Material Icons drag handle
dragHandle.style.fontSize = "28px"; // Set icon size
dragHandle.style.color = "black"; // Set icon color
dragHandle.style.display = "flex"; // Use flex for centering
dragHandle.style.alignItems = "center";
dragHandle.style.justifyContent = "center";
dragHandle.style.cursor = "move";
container.appendChild(dragHandle);

draggable(container, dragHandle); // Make dragHandle drag container

textbox.addEventListener('focus', setFullOpacity);
textbox.addEventListener('blur', setReducedOpacity);
container.addEventListener('mouseenter', setFullOpacity);
container.addEventListener('mouseleave', 
    function() {
        if (document.activeElement !== textbox) {
            setReducedOpacity();
        }
    }
);

setReducedOpacity();
