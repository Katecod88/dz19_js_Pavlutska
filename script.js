// Создать объект студент "студент" и проанализировать его табель.Технические требования:Создать пустой объект student, с полями name и last name.
// Спросить у пользователя имя и фамилию студента, полученные значения записать в соответствующие поля объекта.
// В цикле спрашивать у пользователя название предмета и оценку по нему. Если пользователь нажмет Cancel при n-вопросе о 
// названии предмета, закончить цикл. Записать оценки по всем предметам в свойство студента tabel.
// Посчитать количество плохих (меньше 4) оценок по предметам. Если таких нет, вывести сообщение Студент переведен на следующий курс.
// Посчитать средний балл по предметам. Если он больше 7 - вывести сообщение Студенту назначена стипендия.


class Student {
    constructor(options) {
        this.name = options.name;
        this.lastName = options.lastName;
        this.tabel = [];
        this.subjects = [];
    }

    countBadGrades() {
        let badGrades = this.tabel.filter(grade => grade < 4 && grade > 0);
        return badGrades;
    }

    averageGrade() {
        let sum = 0;
        for (let i = 0; i < this.tabel.length; i++) {
            sum += this.tabel[i]
        }
        let avg = sum / this.tabel.length;
        return avg;
    }
}

let student = new Student({});
console.log(student);

let userName = prompt('Введите имя');
if (userName) {
    student.name = userName;
}

let userLastName = prompt('Введите фамилию');
if (userLastName) {
    student.lastName = userLastName;
}

while (true) {
    let subject = prompt('Введите название предмета');
    if (subject == undefined) {
        break;
    } else {
        student.subjects.push(subject);
    }

    let grade = prompt('Введите оценку');

    if (+grade > 0) {
        student.tabel.push(+grade);
        console.log(student.tabel);
    }
}

let bad = student.countBadGrades();
if (bad.length == 0 && student.tabel.length > 0) {
    alert(`${student.name} ${student.lastName} переведен на следующий курс`);
}

let avgGrade = student.averageGrade();

if (avgGrade > 7 && bad.length == 0 && student.tabel.length > 0) {
    alert(`${student.name} ${student.lastName} назначена стипендия`);
}