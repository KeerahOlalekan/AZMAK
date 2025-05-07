// Student Profile Simulation
document.addEventListener("DOMContentLoaded", () => {
    const viewStudentsBtn = document.getElementById("viewStudents");
    const studentsSection = document.getElementById("studentsSection");

    viewStudentsBtn.addEventListener("click", () => {
        studentsSection.classList.toggle("hidden");
    });

    // Simulating live data updates
    function updateStats() {
        document.getElementById("totalStudents").innerText = Math.floor(Math.random() * 200);
        document.getElementById("totalCourses").innerText = Math.floor(Math.random() * 20);
        document.getElementById("activeStudents").innerText = Math.floor(Math.random() * 150);
    }

    setInterval(updateStats, 5000); // Updates every 5 seconds
});

