import { createComponent } from "./input-component.js";

export function createSectionComponent(componentElement) {
  const tempInput = componentElement.querySelector("template.app-temp-section");
  const inputList = tempInput.parentElement;

  const updateList = () => {

    const children = [...inputList.children].filter(
      (elem) => elem !== tempInput
    );

    children.forEach((element, i) => {
      [...element.querySelectorAll(".app-cmp-add-section-no")].forEach((elem) => {
        elem.textContent = `${i + 1}`;
      });
    });

    [...inputList.querySelectorAll(".app-cmd-remove-section")].forEach(
      (elem) => (elem.disabled = children.length === 1)
    );
  };

  const createElement = () => {
    const container = tempInput.content.cloneNode(true).firstElementChild;

    container.addEventListener("click", (ev) => {
      if (ev.target.matches(".app-cmd-remove-section")) {
        ev.currentTarget.remove();
        updateList();
      }
    });

    createComponent(container);

    return container;
  };

  componentElement.addEventListener("click", (ev) => {
    if (ev.target.matches(".app-cmp-add-section")) {
      inputList.append(createElement());
      updateList();
    }
  });

  inputList.append(createElement());
  updateList();
}

// npx http-server -c0 ()
