
document.querySelector("#btn-1").addEventListener("click", handleClick);
document.querySelector("#btn-2").addEventListener("click", handleClick);
document.querySelector("#btn-3").addEventListener("click", handleClick);
document.querySelector("#btn-4").addEventListener("click", handleClick);

function handleClick() {
    let buttonKey = this.innerHTML;
    
  switch (buttonKey) {
    case "1":
      let One = new Audio("");
      One.play();
      break;
    case "2":
      let Two = new Audio("");
      Two.play();
      break;
    case "3":
      let Three = new Audio("");
      Three.play();
      break;
    case "4":
      let Four = new Audio("");
      Four.play();
      break;
    default:
      console.log("Wrong Key Press");
  }
}


document.addEventListener("keypress", function (e) {
    makeSound(e.key)
})

function makeSound(key) {
    switch (key) {
        case "w":
          let One = new Audio("");
          One.play();
          break;
        case "a":
          let Two = new Audio("");
          Two.play();
          break;
        case "s":
          let Three = new Audio("");
          Three.play();
          break;
        case "d":
          let Four = new Audio("");
          Four.play();
          break;
        default:
          console.log("Wrong Key Press");
      }
}
