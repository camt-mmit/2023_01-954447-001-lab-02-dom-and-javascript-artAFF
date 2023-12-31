function createComponent(componentElement) {
  const tempInput = componentElement.querySelector("template.app-temp-input");
  const inputList = tempInput.parentElement;

  const updateResult = () => {
    const children = [...inputList.children].filter(
      (elem) => elem !== tempInput
    );

    const result = children.reduce(
      (carry, element) =>
        carry +
        element.querySelector('input[type="number"].app-cmp-input')
          .valueAsNumber,
      0
    );

    [...componentElement.querySelectorAll("output.app-cmp-result")].forEach(
      (elem) => {
        elem.value = result.toLocaleString();
      }
    );
  };

  const updateList = () => {
    updateResult();

    const children = [...inputList.children].filter(
      (elem) => elem !== tempInput
    );

    children.forEach((element, i) => {
      [...element.querySelectorAll(".app-cmp-input-no")].forEach((elem) => {
        elem.textContent = `${i + 1}`;
      });
    });

    [...inputList.querySelectorAll(".app-cmd-remove-input")].forEach(
      (elem) => (elem.disabled = children.length === 1)
    );
  };

  const createElement = () => {
    const container = tempInput.content.cloneNode(true).firstElementChild;

    container.addEventListener("click", (ev) => {
      if (ev.target.matches(".app-cmd-remove-input")) {
        container.remove();
        updateList();
      }
    });

    container
      .querySelector('input[type="number"].app-cmp-input')
      .addEventListener("change", updateResult);

    return container;
  };

  componentElement.addEventListener("click", (ev) => {
    if (ev.target.matches(".app-cmd-add-input")) {
      inputList.append(createElement());
      updateList();
    }
  });

  inputList.addEventListener("change", (ev) => {
    if (ev.target.matches('input[type="number"].app-cmp-input')) {
      updateResult();
    }
  });

  inputList.append(createElement());
  updateList();
}

document.addEventListener("DOMContentLoaded", () => {
  createComponent(document.body);
});

// npx http-server -c0 ()

