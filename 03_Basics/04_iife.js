// Immediately Invoked Function Expression (IIFE)
// remove global scope pollution
// This prevents accessing variables within the IIFE idiom as well as polluting the global scope.

// https://developer.mozilla.org/en-US/docs/Glossary/IIFE
(function one() {
    // named IIFE
  console.log("DB CONNECTED");
})();
// be careful about the semicolon 

((name) => {
  console.log(`DB CONNECTED Two ${name}`);
})("Vraj");
