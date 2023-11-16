const buttons = document.querySelectorAll(".button");
// console.log(buttons);
const body = document.querySelector("body");

buttons.forEach((button) => {
    // console.log(button);
    button.addEventListener("click", (e) => {
        console.log(e);
        console.log(e.target);  
        // if (e.target.id === "grey") {
            // body.style.backgroundColor = e.target.id;
        // } else if (e.target.id === "white") {
            // body.style.backgroundColor = e.target.id;
        // }
        // else if (e.target.id === "blue") {
            // body.style.backgroundColor = e.target.id;
        // }
        // else if(e.target.id === "yellow") {
            // body.style.backgroundColor = e.target.id;
        // }
        // else {
            // body.style.backgroundColor = "pink";
        // }

        switch (e.target.id) {
            case "grey":
                body.style.backgroundColor = e.target.id;
                break;
            case "white":
                body.style.backgroundColor = e.target.id;
                break;
            case "blue":
                body.style.backgroundColor = e.target.id;
                break;
            case "yellow":
                body.style.backgroundColor = e.target.id;
                break;
            default:
                body.style.backgroundColor = "pink";
                break;
        }
    })
});
