const advice_id = document.querySelector("#id");
const advice_Element = document.querySelector(".advice");
const dice = document.querySelector(".dice");

const call = async function () {
  const start = await fetch("https://api.adviceslip.com/advice");
  const res = await start;
  const data = await res.json();
  //   console.log(data.slip);
  return data;
};

const init = function () {
  dice.addEventListener("click", async function () {
    const result = await call();
    advice_Element.textContent = `"${result.slip.advice}"`;
    console.log(result.slip);
    advice_id.textContent = `#${result.slip.id}`;
  });
};

init();
console.clear();
