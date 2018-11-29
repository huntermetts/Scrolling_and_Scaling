const audrey = document.getElementById("audrey")

// /*
//     Add an event listener to the `document` object to listen
//     for the "scroll" event.
// */
// audrey.addEventListener("scroll", function (event) {
//     /*
//         Adjust the width of audrey to be 1/3 the value of
//         `window.scrollY`. No lower than 50px, though.
//     */
// console.log("SCROLLING")

//     /*
//         Adjust the height of audrey to be 1/4 the value of
//         `window.scrollY`. No lower than 100px, though.
//     */
// })


window.addEventListener('scroll', function() {
    document.getElementById('audrey').style.height = window.scrollY + "60px";
    document.getElementById('audrey') .style.width = window.scrollY + "60px";
    this.console.log("scroll")
  });


