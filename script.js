const tbody = document.getElementById('tbody'); // élément tbody du tableau
const students = []; // liste des étudiants

// fonction de création de ligne
const createLine = (tbody, student) => {
    const newRow   = tbody.insertRow();
    let counter = 0
    for (const key in student) {
        const newCell  = newRow.insertCell(counter);
        const newText  = document.createTextNode(student[key]);
        newCell.appendChild(newText);
        counter++
    }
}
