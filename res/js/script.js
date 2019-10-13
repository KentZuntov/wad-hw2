$(function () {
    var user = new User("John", "Doe", "12.12.1997", "Science and Technology", 4.02);
    var courses = [
        new Course("Software Project", 5, 81),
        new Course("Web Application Development", 5, 85),
        new Course("Software Testing", 3, 93),
        new Course("OOP", 2, 96)
    ];
    init();

    function init() {
        let tabelBody = $("#courses tbody");

        for (let i = 0; i < courses.length; i++) {
            let currentCourse = courses[i];
            let tabelRow = $("<tr></tr>");
            let number = $("<td></td>").append(i + 5);
            let title = $("<td></td>").append(currentCourse.title);
            let semester = $("<td></td>").append(currentCourse.semester);
            let grade = $("<td></td>").append(currentCourse.grade);

            tabelRow.append(number, title, semester, grade);
            tabelBody.append(tabelRow);
        }
    }

    $("#profile-button").on('click', function (event) {
        $(event.target).addClass('active');
        $("#profile-container").addClass('active');
        $("#courses-button, #courses-container").removeClass('active');
    });

    $("#courses-button").on('click', function (event) {
        $(event.target).addClass('active');
        $("#courses-container").addClass('active');
        $("#profile-button, #profile-container").removeClass('active');
    });

    $("#add-course-button").on('click', function () {
        $("#add-course").show();
    });

    //TODO
    //Task 5

    function calculateGPA() {
        function calculateCourseGPAPoint(courseGrade) {
            if (courseGrade > 90) {
                return 4; 
            } else if (courseGrade > 80) {
                return 3;
            } else if (courseGrade > 70) {
                return 2;
            } else if (courseGrade > 60) {  
                return 1; 
            } else if (courseGrade > 50) {
                return 0.5;
            } else {
                return 0; 
            }
        } 
        // TODO
    }
    
    //TODO
    //Task 6
    
    $("#cancel-course").on('click', function () {
        
    })

});
