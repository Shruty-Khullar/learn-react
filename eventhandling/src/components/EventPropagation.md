EVENT PROPAGATION (JavaScript & React)

When an event (like a click) happens in the browser, it travels through the DOM in three phases. This process is called event propagation.

--------------------------------------------------

1) CAPTURING PHASE (Trickling Down)

The event travels from the root of the document down to the target element.

Path example:
document → html → body → div → button

This happens BEFORE the event reaches the clicked element.

React does NOT use this phase by default.
To use it, add Capture to the event name.

--------------------------------------------------

2) TARGET PHASE

The event reaches the actual element that triggered it.

Example:
<button>Click</button>

The button is the TARGET.

This is where the event first executes.

--------------------------------------------------

3) BUBBLING PHASE (Default & Most important)

After reaching the target, the event bubbles upward back to the root.

Path:
button → div → body → html → document

Parent elements can respond to the event.

This is the default behavior in JavaScript and React.

--------------------------------------------------

VISUAL FLOW

If you click a button inside a div:

<div>
  <button>Click</button>
</div>

Capturing Phase:
document ↓
html ↓
body ↓
div ↓
button

Target Phase:
button

Bubbling Phase:
button ↑
div ↑
body ↑
html ↑
document

--------------------------------------------------

BUBBLING EXAMPLE (React)

<div onClick={() => console.log("DIV clicked")}>
  <button onClick={() => console.log("BUTTON clicked")}>
    Click
  </button>
</div>

Output when button is clicked:

BUTTON clicked
DIV clicked

Event bubbles from button to div.

--------------------------------------------------

STOPPING BUBBLING

<button
  onClick={(e) => {
    e.stopPropagation();
    console.log("BUTTON clicked");
  }}
>
  Click
</button>

Output:

BUTTON clicked

Event stops at the button.

--------------------------------------------------

CAPTURING PHASE IN REACT

<div onClickCapture={() => console.log("DIV capture")}>
  <button onClick={() => console.log("BUTTON clicked")}>
    Click
  </button>
</div>

Output:

DIV capture
BUTTON clicked

Capture runs BEFORE the target phase.

--------------------------------------------------

SUMMARY TABLE

Phase        Direction        When It Runs
--------------------------------------------
Capturing    Top → Down       Before target
Target       On element       When clicked
Bubbling     Bottom → Up      After target

--------------------------------------------------

MEMORY TRICK

Capturing → rain falling down
Target → rain hits ground
Bubbling → water splashes upward

--------------------------------------------------

IMPORTANT INTERVIEW LINE

Event propagation has three phases:
capturing → target → bubbling.
React uses bubbling by default.
Use stopPropagation() to stop bubbling.
Use onClickCapture to handle capture phase.
