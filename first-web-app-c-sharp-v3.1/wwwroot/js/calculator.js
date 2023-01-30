// This runs the calculations and prints the result
$("#calcSubmit").click(() => {
    const aGrade = $("#assignments").val() * 50;
    const pGrade = $("#project").val() * 10;
    const cGrade = $("#quizzes").val() * 10;
    const mGrade = $("#midterm").val() * 10;
    const fGrade = $("#final").val() * 10;
    const iGrade = $("#intex").val() * 10;
    const totalPoints = aGrade + pGrade + cGrade+ mGrade + fGrade + iGrade;
    const grade = Math.round(totalPoints / 100);
    let letterGrade = '';
    if (grade > 93) letterGrade = 'A';
    else if (grade < 94 && grade >= 90) letterGrade = 'A-';
    else if (grade < 90 && grade >= 87) letterGrade = 'B+';
    else if (grade < 87 && grade >= 84) letterGrade = 'B';
    else if (grade < 84 && grade >= 80) letterGrade = 'B-';
    else if (grade < 80 && grade >= 77) letterGrade = 'C+';
    else if (grade < 77 && grade >= 74) letterGrade = 'C';
    else if (grade < 74 && grade >= 70) letterGrade = 'C-';
    else if (grade < 70 && grade >= 67) letterGrade = 'D+';
    else if (grade < 67 && grade >= 64) letterGrade = 'D';
    else if (grade < 64 && grade >= 60) letterGrade = 'D-';
    else letterGrade = 'E';
    const results = letterGrade + ', ' + grade + '%';
    $("#grade").text(results);
});