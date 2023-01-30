// This runs the calculations and prints the result
$("#calcSubmit").click(() => {
    const aGrade = $("#assignments").val() * 50;
    const pGrade = $("#project").val() * 10;
    const cGrade = $("#quizzes").val() * 10;
    const mGrade = $("#midterm").val() * 10;
    const fGrade = $("#final").val() * 10;
    const iGrade = $("#intex").val() * 10;
    const totalPoints = aGrade + pGrade + cGrade+ mGrade + fGrade + iGrade;
    $("#grade").text(totalPoints / 100);
});