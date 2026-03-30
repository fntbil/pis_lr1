var groupmates = [
    {
        name: "Кирилл",
        group: "2252",
        age: 28,
        marks: [4, 3, 5, 5, 4]
    },
    {
        name: "Иван",
        group: "2252",
        age: 22,
        marks: [3, 5, 3, 4, 3]
    },
    {
        name: "Билалдин",
        group: "2252",
        age: 26,
        marks: [3, 5, 4, 3, 5]
    },
    {
        name: "Роман",
        group: "2252",
        age: 25,
        marks: [5, 5, 5, 4, 5]
    }
];

var rpad = function(str, length) {
    str = str.toString();
    while (str.length < length) {
        str = str + ' ';
    }
    return str;
};

var printStudents = function(students) {
    console.log(
        rpad("Имя студента", 15),
        rpad("Группа", 8),
        rpad("Возраст", 8),
        rpad("Оценки", 20)
    );

    for (var i = 0; i <= students.length - 1; i++) {
        console.log(
            rpad(students[i]['name'], 15),
            rpad(students[i]['group'], 8),
            rpad(students[i]['age'], 8),
            rpad(students[i]['marks'], 20)
        );
    }

    console.log('\n');
};

var filterByGroup = function(students, group) {
    var result = [];
    for (var i = 0; i <= students.length - 1; i++) {
        if (students[i]['group'] === group) {
            result.push(students[i]);
        }
    }
    return result;
};

printStudents(groupmates);
console.log(filterByGroup(groupmates, "912-2"));