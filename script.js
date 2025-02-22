function calculateMarks() {
    const subject1 = parseFloat(document.getElementById('subject1').value);
    const subject2 = parseFloat(document.getElementById('subject2').value);
    const subject3 = parseFloat(document.getElementById('subject3').value);

    if (isNaN(subject1) || isNaN(subject2) || isNaN(subject3)) {
        alert('Please enter valid numbers for all subjects.');
        return;
    }

    const total = subject1 + subject2 + subject3;
    const average = total / 3;

    document.getElementById('result').innerHTML = `
        <p>Total Marks: ${total}</p>
        <p>Average Marks: ${average.toFixed(2)}</p>
    `;
}