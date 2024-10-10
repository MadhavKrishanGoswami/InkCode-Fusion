const preventHorizontalScroll = () => {
    // Prevent horizontal scrolling when loading and resizing the window
    window.addEventListener("resize", () => {
      document.documentElement.style.overflowX = "hidden";
    });
  
    window.addEventListener("load", () => {
      document.documentElement.style.overflowX = "hidden";
    });
  };
  
  export default preventHorizontalScroll;
  