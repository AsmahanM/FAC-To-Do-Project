/* The vw unit is the relative unit which is 1% of the width of the 
viewport and the viewport will stay the size of the browser window. 
Although this may differ per different browser capabilities. */

/* This function should fix the background issue where it exceeds 100vw. */

const placeVw = () => {
    let vw = document.documentElement.clientWidth / 100;
    document.documentElement.style.setProperty('--vw', `${vw}px`);
  }
  
  placeVw();
  window.addEventListener('resize', placeVw);