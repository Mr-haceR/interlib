const variable = document.getElementById("variable");
const typeList = document.getElementById("dropdown");
const variableContainer = document.getElementById("variable_container");
const varValue = document.getElementById("varvalue");

varValue.addEventListener('input', (e) => {
    const periodRestrict = /[.]/g;

    if (varValue.getAttribute("type", "number") ) {
        if (periodRestrict.test(e.target.value)) {
            e.target.value = (e.target.value).replace(periodRestrict, "");
        }
    }
});


function createVariable(clone) {
    const newVariable = document.createElement('div');
    newVariable.classList.add("created_variables");
    newVariable.classList.add("blocks");
    newVariable.setAttribute("id", ("id-" + Date.now() + "-" + Math.random().toString(36).substr(2, 9)))


    const nameElement = document.createElement('p');
    nameElement.innerHTML = ((clone.querySelector('input[type="text"]')).value) + " |&nbsp;";
    newVariable.appendChild(nameElement);

    const valueElement = document.createElement('p');
    valueElement.innerText = clone.lastElementChild.value;
    newVariable.appendChild(valueElement);

    newVariable.setAttribute("draggable", "true");

    newVariable.addEventListener('dragstart', (e) =>{
        e.dataTransfer.setData('text/plain', e.target.id);
    });

    variableContainer.appendChild(newVariable);
}
