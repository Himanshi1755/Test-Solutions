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


function buildCard() {
    const data = JSON.parse(localStorage.getItem("students"))
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
        card.style.display='flex'
        card.style.height='300px'
        // card.style.flexDirection='row'
        card.style.display='grid'
        card.style.gridTemplateColumns='auto auto'
        card.style.border = "2px solid black";
        card.style.boxShadow = "5px 5px 10px grey";
        card.style.padding = "5px";
        // card.style.width = "200px";
        card.style.borderRadius = "8px";
        // card.style.alignItems = "center";
        card.style.paddingLeft = "35px";
        
        

        card.innerHTML = `
            <h4>ID: ${student.Id}</h4>
            <h4>Name: ${student.name}</h4>
            <h4>Class: ${student.class}</h4>
            <h4>Roll No: ${student.RollNo}</h4>
            <h4>Passing Year: ${student.passing_year}</h4>  
        `;

        let editButton = document.createElement("button");
        editButton.textContent = "EDIT";
        editButton.className = "edit_btn";
        editButton.style.padding = "5px 10px";
        editButton.style.margin = "5px";
        editButton.style.borderRadius = "4px";
        editButton.style.backgroundColor = "blue";
        editButton.style.borderStyle='none'
        editButton.style.width='80px'
        editButton.style.height='30px'
        editButton.style.color = "white";
        editButton.style.fontWeight='bolder'
        editButton.style.margin = "5px";
        editButton.style.position='relative'
        editButton.style.top='50%'
        editButton.style.right='70%'

        editButton.onclick = () => {
            let main = document.getElementById('main-container')
            main.innerHTML=''
            
            let frm = document.createElement('form');
           
            frm.style.display='flex'
            frm.style.flexDirection='column'
            frm.style.marginLeft='500px'
            frm.style.marginTop='200px'
            formdiv.appendChild(frm);

            let inpt = document.createElement('input')
            inpt.placeholder=student.name+"  /  Name"
            inpt.style.width='400px'
            inpt.style.height='30px'
            inpt.style.marginTop='10px'
            frm.append(inpt)

            let inpt1 = document.createElement('input')
            inpt1.placeholder=student.branch+"  /  Branch"
            inpt1.style.width='400px'
            inpt1.style.height='30px'
            inpt1.style.marginTop='10px'
            frm.append(inpt1)

            let inpt2 = document.createElement('input')
            inpt2.placeholder=student.passing_year+"  /  passing year"
            inpt2.style.width='400px'
            inpt2.style.height='30px'
            inpt2.style.marginTop='10px'
            frm.append(inpt2)

            let btn = document.createElement('button')
            btn.innerHTML='Submit'
            btn.style.width='406px'
            btn.style.height='40px'
            btn.style.marginTop='10px'
            btn.style.borderStyle='none'
            btn.style.backgroundColor='lightblue'
            frm.append(btn)
            main.append(frm)

            btn.addEventListener('click',()=>{s

            // let getdata = localStorage.getItem('students')
            // const getdata  = JSON.parse(localStorage.getItem("students"))
                let getindex = data.findIndex(s=>s.RollNo===student.RollNo)

                if(getindex1!==-1){
                    data[getindex].name=inpt.value
                    data[getindex].branch=inpt1.value
                    data[getindex].passing_year=inpt2.value
                }
                  localStorage.setItem("students", JSON.stringify(data));
                  buildCard();
            });

        }

        let deleteButton = document.createElement("button");
        deleteButton.textContent = "DELETE";
        deleteButton.className = "delete_btn";
        deleteButton.style.margin = "5px";
        deleteButton.style.height='30px'
        deleteButton.style.position='relative'
        deleteButton.style.width = '80px';
        deleteButton.style.top='50%'
        deleteButton.style.right='50%'
        deleteButton.style.borderStyle='none'
        deleteButton.style.borderRadius = "4px";
        deleteButton.style.backgroundColor = "red";
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
