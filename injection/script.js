console.log("✨ CUSTOM IG DMS INJECTED | Made by Luca Feller");

// create the button
const fullChatViewBtn = document.createElement("button");

// give it an id
fullChatViewBtn.id = "fullChatViewBtn";

/**--------------------------------------------
 *               SVGs
 *---------------------------------------------**/
const svgNotFullScreen = `
    <svg class="controlIcon__25700" aria-hidden="true" role="img" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
        <path fill="currentColor" d="M4 6c0-1.1.9-2 2-2h3a1 1 0 0 0 0-2H6a4 4 0 0 0-4 4v3a1 1 0 0 0 2 0V6ZM4 18c0 1.1.9 2 2 2h3a1 1 0 1 1 0 2H6a4 4 0 0 1-4-4v-3a1 1 0 1 1 2 0v3ZM18 4a2 2 0 0 1 2 2v3a1 1 0 1 0 2 0V6a4 4 0 0 0-4-4h-3a1 1 0 1 0 0 2h3ZM20 18a2 2 0 0 1-2 2h-3a1 1 0 1 0 0 2h3a4 4 0 0 0 4-4v-3a1 1 0 1 0-2 0v3Z" class=""></path>
    </svg>
  `;

const svgFullScreen = `
    <svg class="controlIcon__25700" aria-hidden="true" role="img" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
        <path fill="currentColor" d="M8 6a2 2 0 0 1-2 2H3a1 1 0 0 0 0 2h3a4 4 0 0 0 4-4V3a1 1 0 0 0-2 0v3ZM8 18a2 2 0 0 0-2-2H3a1 1 0 1 1 0-2h3a4 4 0 0 1 4 4v3a1 1 0 1 1-2 0v-3ZM18 8a2 2 0 0 1-2-2V3a1 1 0 1 0-2 0v3a4 4 0 0 0 4 4h3a1 1 0 1 0 0-2h-3ZM16 18c0-1.1.9-2 2-2h3a1 1 0 1 0 0-2h-3a4 4 0 0 0-4 4v3a1 1 0 1 0 2 0v-3Z" class=""></path>
    </svg>
  `;

// set the page to not fullscreen (just a variable that will be needed to toggle the fullscreen icon when clicking the button)
let isFullScreen = false;

// set the button svg to not full screen
fullChatViewBtn.innerHTML = svgNotFullScreen;

// const isInjected = false;

// create the listener
window.addEventListener('resize', function() {
  console.log('Resize detected! New size: ', window.innerWidth);

  if (window.innerWidth < 560) {
    const chat = document.getElementsByClassName(
      "x9f619 x1n2onr6 x1ja2u2z x78zum5 xdt5ytf x193iq5w xeuugli x1r8uery x1iyjqo2 xs83m0k"
    )[0];
  
    const toolBar = document.querySelector('[aria-label="Audio Call"]');
  
    const parent = toolBar.parentNode;
    const grandParent = parent.parentNode;
    const grandGrandParent = grandParent.parentNode;
    grandGrandParent.insertAdjacentElement("beforeend", fullChatViewBtn);

    fullChatViewBtn.onclick = () => {
      isFullScreen = !isFullScreen;
      fullChatViewBtn.innerHTML = isFullScreen ? svgFullScreen : svgNotFullScreen;
      chat.classList.toggle("fullScreen");
    };

    chat.classList.add("fullScreen");
  }
})

