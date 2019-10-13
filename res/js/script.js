$(function () {
    var user = new User("John", "Doe", "12.12.1997", "Science and Technology", 4.02);
    var courses = [
        new Course("Software Project", 5, 81),
        new Course("Web Application Development", 5, 85),
        new Course("Software Testing", 3, 93),
        new Course("OOP", 2, 96)
    ];
    init();

    function addCourseToTable(course) { 
        const tableBody = $("#courses tbody");

        // get the number of courses in table and calculate number for new course 
        const newCourseNumber = tableBody.children().length + 1;

        // create table row element
        const tabelRow = $("<tr></tr>");

        // create table cell elements
        const number = $("<td></td>").append(newCourseNumber);
        const title = $("<td></td>").append(course.title);
        const semester = $("<td></td>").append(course.semester);
        const grade = $("<td></td>").append(course.grade);

        // add table cells to row element
        tabelRow.append(number, title, semester, grade);

        // append table row element to table body
        tableBody.append(tabelRow);
    } 

    function init() {
        for (const course of courses) {
            addCourseToTable(course);
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

    function setGPA(gpa) { 
        $("gpa").text(gpa);
    }

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

        let coursePoints = 0;
        
        for (const course of courses) { 
            coursePoints += calculateCourseGPAPoint(course.grade);
        }
        
        // calculate gpa
        let gpa = coursePoints / courses.length;

        //round to two decimal points
        return parseFloat(gpa.toFixed(2));
    }
    
    //TODO
    //Task 6
    
    $("#cancel-course").on('click', function () {
        
    })

});
