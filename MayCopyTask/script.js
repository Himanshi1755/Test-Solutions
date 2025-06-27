let Student_details = [
    {
        Id: "01",
        name: "Manisha",
        RollNo: "1011",
        branch: "It",
        passing_year: "2021",

    },
    { Id: "02", name: "Anol", branch: "IT", RollNo: "1012", passing_year: "2020" },
    { Id: "03", name: "Anil", branch: "CS", RollNo: "1013", passing_year: "2023" },
    { Id: "04", name: "Dhrav", branch: "AI/DS", RollNo: "1014", passing_year: "2024" },
    { Id: "05", name: "Eshit", branch: "IT", RollNo: "1015", passing_year: "2025" },
    { Id: "06", name: "Anil", branch: "CSIT", RollNo: "1016", passing_year: "2023" },
    { Id: "07", name: "Dhrav", branch: "CS", RollNo: "1017", passing_year: "2024" },
    { Id: "08", name: "Eshit", branch: "HR", RollNo: "1018", passing_year: "2025" },
];

if (!localStorage.getItem("students")) {
    localStorage.setItem("students", JSON.stringify(Student_details));
}

localStorage.removeItem("students");
localStorage.setItem("students", JSON.stringify(Student_details));

///-------------------------
// const headerDiv = document.createElement("div");
// headerDiv.setAttribute("class", "header_div")
// headerDiv.style.width="100px";
// headerDiv.style.height = "100px";
// headerDiv.style.border="1px solid black"

let container = document.getElementById("dropdown-container");
let dropdown = document.createElement("div");

let deptlabel = document.createElement("label");
deptlabel.textContent = "Select Department : ";
deptlabel.style.fontWeight = "bold";
deptlabel.style.padding = "100px 10px 10px 100px";
deptlabel.style.marginTop = "200px";

let deptselect = document.createElement("select");
deptselect.style.padding = "3px"
deptselect.style.paddingRight = "60px";

const dept = [" ","IT", "CS", "AI/DS", "HR", "CSIT"];
for (let i = 0; i < dept.length; i++) {
    const option = document.createElement("option");
    // option.value = dept[i];
    option.textContent = dept[i];
    deptselect.append(option);
}

const yearlabel = document.createElement("label");
yearlabel.textContent = "Select Passing Year  :  ";
yearlabel.style.fontWeight = "bold";
yearlabel.style.paddingLeft = "100px";

let yearSelect = document.createElement("select");
yearSelect.id = "yearSelect";
yearSelect.style.marginBottom = "70px"
yearSelect.style.marginTop = "70px"

// function filterStudent() {
//     const selectDept = deptselect.value;
//     const selectYear = yearSelect.value;
//     const student = JSON.parse(localStorage.getItem("students"));

//     const filter = student.filter((stu) => {
//         const deptMatch = !selectDept || stu.branch === selectDept;
//         const yearMatch = !selectYear || stu.passing_year == selectYear;
//             return deptMatch && yearMatch;
//     });

//     buildCard(filter);
// };
function filterStudent() {
    let selectedDept = deptselect.value;
    let selectedYear = yearSelect.value;
    let students = JSON.parse(localStorage.getItem("students"));

    let filteredStudents = students.filter((student) => {
        let matchDept = selectedDept === "" || student.branch === selectedDept;
        let matchYear = selectedYear === "" || student.passing_year == selectedYear;
        return matchDept && matchYear;
    });

    buildCard(filteredStudents);
}


deptselect.onchange = filterStudent;
yearSelect.onchange = filterStudent;

const defult = document.createElement("option");
defult.textContent = "  ";
yearSelect.appendChild(defult);

for (let y = 2000; y <= 2030; y++) {
    const option = document.createElement("option");
    option.value = y;
    option.textContent = y;
    yearSelect.appendChild(option);
}

container.appendChild(deptlabel);
container.appendChild(deptselect);
container.appendChild(yearlabel);
container.appendChild(yearSelect);

buildCard();
localStorage.setItem("students", JSON.stringify(data));
//------------------------------
function buildCard(filter = null) {
    const data = filter || JSON.parse(localStorage.getItem("students"));
    // const data = JSON.parse(localStorage.getItem("students"));
    const main = document.querySelector("#main-container");
    main.innerHTML = "";

    let cardContainer = document.createElement("div");
    cardContainer.setAttribute("id", "card-container");
    cardContainer.style.display = "flex";
    cardContainer.style.flexWrap = "wrap";
    cardContainer.style.gap = "15px";

    data.forEach((student, index) => {
        const card = document.createElement("div");
        card.className = "card";
        card.style.display = 'flex'
        card.style.height = '350px'
        card.style.flexDirection = 'column'
        card.style.border = "1px solid black";
        card.style.boxShadow = "3px 3px 5px grey";
        card.style.padding = "5px";
        card.style.width = "230px";
        card.style.borderRadius = "7px";
        card.style.paddingLeft = "35px";


        card.innerHTML = `
            <h4>ID: ${student.Id}</h4>
            <h4>Name: ${student.name}</h4>
            <h4>Class: ${student.branch}</h4>
            <h4>Roll No: ${student.RollNo}</h4>
            <h4>Passing Year: ${student.passing_year}</h4>  
        `;

        let editButton = document.createElement("button");
        editButton.textContent = "EDIT";
        editButton.className = "edit_btn";
        editButton.style.padding = "5px 10px";
        editButton.style.margin = "5px";
        editButton.style.borderRadius = "4px";
        editButton.style.backgroundColor = "grey";
        editButton.style.borderStyle = 'none'
        editButton.style.width = '80px'
        editButton.style.height = '30px'
        editButton.style.color = "white";
        editButton.style.fontWeight = 'bolder'
        editButton.style.margin = "5px";



        editButton.onclick = () => {
            let main = document.getElementById('main-container')
            main.innerHTML = '';
            // container.innerHTML = '';
            //   editform();
            // const formdiv = document.createElement("div");
            // formdiv.setAttribute("class", "formdiv");
            // formdiv.style.border = '2px solid black';
            // formdiv.style.height = "100px";
            // formdiv.style.padding = "20px";
            // formdiv.style.width = "350px";
            // formdiv.style.margin = "100px auto";

            let form = document.createElement('form');
            form.style.display = 'flex'
            form.style.flexDirection = 'column'
            form.style.marginLeft = '500px'
            form.style.marginTop = '200px'

            let input = document.createElement('input')
            input.placeholder = student.name
            input.style.width = '300px'
            input.style.height = '30px'
            input.style.marginTop = '10px'
            form.append(input)

            let inpt1 = document.createElement('input')
            inpt1.placeholder = student.branch
            inpt1.style.width = '300px'
            inpt1.style.height = '30px'
            inpt1.style.marginTop = '10px'
            form.append(inpt1)

            let input3 = document.createElement('input');
            input3.value = student.RollNo
            input3.style.width = '300px';
            input3.style.height = '30px';
            input3.style.marginTop = '10px';
            form.append(input3);

            let inpt2 = document.createElement('input')
            inpt2.placeholder = student.passing_year
            inpt2.style.width = '300px'
            inpt2.style.height = '30px'
            inpt2.style.marginTop = '10px'
            form.append(inpt2)

            let btn = document.createElement('button');
            btn.type = 'submit';
            btn.innerHTML = 'Save'
            btn.style.width = '305px'
            btn.style.height = '40px'
            btn.style.marginTop = '10px'
            btn.style.borderStyle = 'none'
            btn.style.backgroundColor = 'black'
            btn.style.color = "White"
            btn.style.fontWeight = "bold";

            form.append(btn);
            form.onsubmit = (x) => {
                x.preventDefault();

                data[index].name = input.value;
                data[index].branch = inpt1.value;
                data[index].RollNo = input3.value;
                data[index].passing_year = inpt2.value;

                localStorage.setItem("students", JSON.stringify(data));
                // buildCard()
                filterStudent();

            };
            main.append(form);
        };


//     form.onsubmit = (x) => {
//     x.preventDefault();

//     let allStudents = JSON.parse(localStorage.getItem("students"));
    
//     // Find student by unique Roll No (you can also use student.Id)
//     let studentIndex = allStudents.findIndex(s => s.RollNo === student.RollNo);

//     if (studentIndex !== -1) {
//         allStudents[studentIndex].name = input.value || student.name;
//         allStudents[studentIndex].branch = inpt1.value || student.branch;
//         allStudents[studentIndex].RollNo = input3.value || student.RollNo;
//         allStudents[studentIndex].passing_year = inpt2.value || student.passing_year;

//         localStorage.setItem("students", JSON.stringify(allStudents));
//         buildCard();
//     }
// };

        // btn.addEventListener('click', () => {
        //     // let getdata = localStorage.getItem('students')
        //     // const getdata  = JSON.parse(localStorage.getItem("students"))
        //     let getindex = getdata.finIndex(s => s.RollNo === student.RollNo)

        //     if (getindex1 !== -1) {
        //         data[getindex].name = inpt.value
        //         data[getindex].name = inpt1.value
        //         data[getindex].name = inpt2.value
        //     }
        //     localStorage.setItem("students", JSON.stringify(data));
        // })
        let deleteButton = document.createElement("button");
        deleteButton.textContent = "DELETE";
        deleteButton.className = "delete_btn";
        deleteButton.style.margin = "5px";
        deleteButton.style.height = '30px'
        deleteButton.style.position = 'relative'
        deleteButton.style.width = '80px';
        deleteButton.style.borderStyle = 'none'
        deleteButton.style.borderRadius = "4px";
        deleteButton.style.backgroundColor = "black";
        deleteButton.style.fontWeight = 'bolder'
        deleteButton.style.color = "White";


        deleteButton.onclick = () => {
            data.splice(index, 1);
            localStorage.setItem("students", JSON.stringify(data));
            buildCard();
        };


        let buttonContainer = document.createElement("div");
        buttonContainer.style.display = "flex";
        buttonContainer.style.gap = "20px";

        buttonContainer.appendChild(editButton);
        buttonContainer.appendChild(deleteButton);

        card.appendChild(buttonContainer);
        cardContainer.appendChild(card);

    });

    main.appendChild(cardContainer);
}
buildCard();

// function editForm(){
// const fields = ["name", "class", "RollNo", "passing_year"];

// let editData = prompt(`Edit ? (name,class,RollNo,passing_year)`);

// if (editData && fields.includes(editData)) {
//     let newValue = prompt(`Enter ${editData}`, student[editData]);

//     if (newValue) {
//         data[index][editData] = newValue;
//         localStorage.setItem("students", JSON.stringify(data));
//         buildCard();
//     }
// }
// else {
//     alert("Invalid field name entered!");
// }
// }