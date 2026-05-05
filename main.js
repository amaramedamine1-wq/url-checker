const input = document.getElementById("input");
const result = document.getElementById("result");

let lastTime = 0;


// check URL 
function checkUrl(value) {

  // throttle
  const now = Date.now();
  if (now - lastTime < 500) return;
  lastTime = now;


  // check format
  try {
    new URL(value);
  } catch {
    result.textContent = "Invalid URL";
    return;
  }

  result.textContent = "Checking...";


  // fake async server
  setTimeout(() => {

    const exists = Math.random() > 0.5;

    if (!exists) {
      result.textContent = "Does not exist";
    } else {
      const type = value.includes(".") ? "file" : "folder";
      result.textContent = "Exists (" + type + ")";
    }

  }, 500);
}


// event
input.addEventListener("input", (e) => {
  checkUrl(e.target.value);
});