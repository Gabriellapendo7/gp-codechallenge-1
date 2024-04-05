function gradeCalculator() {
    var marks = parseInt(document.getElementById("marksInput").value);

    if (marks > 100 || marks < 0 || isNaN(marks)) {
        document.getElementById("gradeOutput").innerText = "Invalid input! Marks should be between 0 and 100.";
        return;
    }

    var grade;
//range
    if (marks > 79) {
        grade = 'A';
    } else if (marks >= 60) {
        grade = 'B';
    } else if (marks >= 50) {
        grade = 'C';
    } else if (marks >= 40) {
        grade = 'D';
    } else {
        grade = 'E';
    }

    document.getElementById("gradeOutput").innerText = "Grade: " + grade;
}