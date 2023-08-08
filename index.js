const form = document.querySelector(".form");
form.addEventListener("submit", handleSubmit);

function handleSubmit(event) {
    event.preventDefault();
    const {
      elements: { summa, tel, email, image }
    } = event.currentTarget;

    if (summa.value === "" || tel.value === "" || email.value === "" || image.value === null) {
      return console.log("Please fill in all the fields!");
    }

    console.log(`Summa: ${summa.value}, Phone: ${tel.value}, Email:${email.value},  Image:${image.value}`);
    event.currentTarget.reset();
  }
