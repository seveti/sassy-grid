// require('./js/helloworld');
// require('./js/test');
import styles from './main';

// var img = new Image();   // Create new img element
// img.src = '/assets/images/hcp/interior-1-1/desktop/1-1-interior-6-hcp.png';

// img.onload = function() {
//  
//     document.body.appendChild(img);
   
// };

(function() {
    'use strict'
  
    let tabsClass      = 'tabs'
    let tabClass       = 'tab'
    let tabButtonClass = 'tab-button'
    let activeClass    = 'active'
  
    /* Activates the chosen tab and deactivates the rest */
    function activateTab(chosenTabElement) {
      let tabList = chosenTabElement.parentNode.querySelectorAll('.'+tabClass)
      for (let i = 0; i < tabList.length; i++) {
        let tabElement = tabList[i]
        if (tabElement.isEqualNode(chosenTabElement)) {
             tabElement.classList.add(activeClass) 
            /* For accordion */
            /*
            if (tabElement.classList.contains(activeClass)) {
                tabElement.classList.remove(activeClass)
            } else {
                tabElement.classList.add(activeClass)
            }
            */
        } else {
          tabElement.classList.remove(activeClass)
        }
      }
    }
  
    /* Initialize each tabbed container */
    let tabbedContainers = document.body.querySelectorAll('.'+tabsClass)
    for (let i = 0; i < tabbedContainers.length; i++) {
      let tabbedContainer = tabbedContainers[i]
  
      /* List of tabs for this tabbed container */
      let tabList = tabbedContainer.querySelectorAll('.'+tabClass)
  
      /* Make the first tab active when the page loads */
      activateTab(tabList[0])
  
      /* Activate a tab when you click its button */
      for (let i = 0; i < tabList.length; i++) {
        let tabElement = tabList[i]
        let tabButton = tabElement.querySelector('.'+tabButtonClass)
        tabButton.addEventListener('click', function(event) {
          event.preventDefault()
          activateTab(event.target.parentNode)
          /* Anchor to top */
          /* tabButton.scrollIntoView() */
        })
      }
  
    }
  
  })()


 //Media Query using Javascript

// if myFunction (widthChange)
function myFunction(x) {
    if (x.matches) { // If media query matches
        // document.body.style.backgroundColor = "yellow";
    } else {
        // document.body.style.backgroundColor = "pink";
    }
}

var x = window.matchMedia("(max-width: 700px)")
myFunction(x) // Call listener function at run time
x.addListener(myFunction) // Attach listener function on state changes
