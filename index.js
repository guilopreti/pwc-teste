// 1 teste
const spans = document.querySelectorAll("#firstExamples span");
const firstTestInput = document.getElementById("firstTestInput");

spans.forEach((span) => {
  span.addEventListener("click", () => {
    firstTestInput.value = span.innerHTML;
  });
});

const firstTestButton = document.getElementById("firstTestButton");

firstTestButton.addEventListener("click", () => {
  const address = firstTestInput.value.split(" ");

  const firstTestP = document.getElementById("firstTestP");
  firstTestP.innerHTML = `{rua: ${address[0]}, numero: ${address[1]}}`;
});

// 2 teste
const secondSpans = document.querySelectorAll("#secondExamples span");
const secondTestInput = document.getElementById("secondTestInput");

secondSpans.forEach((span) => {
  span.addEventListener("click", () => {
    secondTestInput.value = span.innerHTML;
  });
});

const secondTestButton = document.getElementById("secondTestButton");

secondTestButton.addEventListener("click", () => {
  const arrayAddress = secondTestInput.value.split(" ");

  let street = "";

  for (let i = 0; i < arrayAddress.length; i++) {
    if (!Number(arrayAddress[i])) {
      street += `${arrayAddress[i]} `;
    } else {
      break;
    }
  }

  const secondTestP = document.getElementById("secondTestP");
  secondTestP.innerHTML = `{rua: ${street.trim()}, numero: ${arrayAddress
    .slice(street.split(" ").length - 1)
    .join(" ")}}`;
});

// 3 teste
const thirdSpans = document.querySelectorAll("#thirdExamples span");
const thirdTestInput = document.getElementById("thirdTestInput");

thirdSpans.forEach((span) => {
  span.addEventListener("click", () => {
    thirdTestInput.value = span.innerHTML;
  });
});

const separateAddress = (address) => {
  let arrayAddress = address.split(", ");

  if (arrayAddress.length > 1 && Number(arrayAddress[0])) {
    return { street: arrayAddress[1], number: arrayAddress[0] };
  } else if (arrayAddress.length > 1) {
    return { street: arrayAddress[0], number: arrayAddress[1] };
  }

  arrayAddress = address.split(" No");

  if (arrayAddress.length > 1) {
    return { street: arrayAddress[0], number: `No${arrayAddress[1]}` };
  }

  arrayAddress = address.split(" ");

  if (Number(arrayAddress[0])) {
    return { street: arrayAddress.slice(1).join(" "), number: arrayAddress[0] };
  } else {
    let street = "";

    for (let i = 0; i < arrayAddress.length; i++) {
      if (!Number(arrayAddress[i])) {
        street += `${arrayAddress[i]} `;
      } else {
        break;
      }
    }

    return {
      street: street.trim(),
      number: arrayAddress.slice(street.split(" ").length - 1).join(" "),
    };
  }
};

const thirdTestButton = document.getElementById("thirdTestButton");

thirdTestButton.addEventListener("click", () => {
  const address = separateAddress(thirdTestInput.value);

  const thirdTestP = document.getElementById("thirdTestP");
  thirdTestP.innerHTML = `{rua: ${address.street}, numero: ${address.number}}`;
});
