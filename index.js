// 1 teste
const firstTestButton = document.getElementById("firstTestButton");

firstTestButton.addEventListener("click", () => {
  const firstTestInput = document.getElementById("firstTestInput");
  const endereco = firstTestInput.value.split(" ");

  const firstTestP = document.getElementById("firstTestP");
  firstTestP.innerHTML = `{rua: ${endereco[0]}, numero: ${endereco[1]}}`;
});

// 2 teste
const secondTestButton = document.getElementById("secondTestButton");

secondTestButton.addEventListener("click", () => {
  const secondTestInput = document.getElementById("secondTestInput");
  const arrayEndereco = secondTestInput.value.split(" ");

  let rua = "";

  for (let i = 0; i < arrayEndereco.length; i++) {
    if (!Number(arrayEndereco[i])) {
      rua += `${arrayEndereco[i]} `;
    } else {
      break;
    }
  }

  const secondTestP = document.getElementById("secondTestP");
  secondTestP.innerHTML = `{rua: ${rua.trim()}, numero: ${arrayEndereco
    .slice(rua.split(" ").length - 1)
    .join(" ")}}`;
});
