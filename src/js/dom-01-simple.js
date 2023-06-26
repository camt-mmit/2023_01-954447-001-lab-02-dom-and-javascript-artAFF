document.addEventListener('DOMContentLoaded' , () => {
    const inputElements = [
        ...document.querySelectorAll('input[type="number"].app-cmp-input'),
    ];

    inputElements.forEach((element) => {
        element.addEventListener('change' , () =>  {
            const result = inputElements.reduce(
                (carry, elem) => carry + elem.vauleAsNumber, 
                0,
            );
                
                document.querySelector(
                        'output.app-cmp-result' ,
                ).vaule = `${result.toLocaleString()}`;
        });
    });
});



// npx http-server -c0 ()