const form = document.getElementById("complaintForm");
const reportsList = document.getElementById("reportsList");

form.addEventListener("submit", function(event) {
    event.preventDefault();

    const name = form.querySelector('input[type="text"]').value;
    const mobile = form.querySelector('input[type="tel"]').value;
    const problem = form.querySelector("select").value;
    const details = form.querySelector("textarea").value;

    const report = document.createElement("div");
    report.className = "water-card";

    report.innerHTML = `
        <h3>New Complaint</h3>
        <p>Name: ${name}</p>
        <p>Mobile: ${mobile}</p>
        <p>Problem: ${problem}</p>
        <p>Details: ${details}</p>
    `;

    reportsList.prepend(report);

    alert("Complaint submitted successfully!");
    form.reset();
});