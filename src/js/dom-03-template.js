function createElement() {
    const templateInput = document.querySelector('template.app-temp-input');
    const container = templateInput.content.cloneNode(true);
  
    const inputElements = [
      ...document.querySelectorAll('input[type="number"].app-cmp-input')
    ];
  
    container.querySelector('.app-cmp-input-no').textContent = `${inputElements.length + 1}`;
    container.querySelector('input[type="number"].app-cmp-input').addEventListener('change', () => {
      const result = [...document.querySelectorAll('input[type="number"].app-cmp-input')]
        .reduce((carry, elem) => carry + elem.valueAsNumber, 0);

      document.querySelector(
        'output.app-cmp-result',
      ).value = `${result.toLocaleString()}`;

    });
  
    return container;
  }
  
  document.addEventListener('DOMContentLoaded', () => {
    const inputsList = document.querySelector('.app-cmp-input-list');
    const addCommand = document.querySelector('.app-cmp-add-input');
  
    addCommand.addEventListener('click', () => {
      inputsList.append(createElement());
    });
  
    inputsList.append(createElement());
  });

// npx http-server -c0 ()