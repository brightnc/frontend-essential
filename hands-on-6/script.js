const main = async () => {
  try {
    const response = await fetch("https://api.minireg.thanayut.in.th/courses");
    const rawData = await response.json();

    if (!response.ok) {
      throw new Error(`code: ${response.status}, message: ${rawData.message}`);
    }
    const courses = rawData.courses;

    for (let i = 0; i < courses.length; i++) {
      //console.log(courses[i].courseNo);
      const main = document.getElementById("test");

      const newSection = document.createElement("section");

      newSection.innerHTML = `
      <h3>${courses[i].courseNo + " " + courses[i].abbrName}</h3>
      <h4>จำนวนหน่วยกิต</h4>
      <p>${courses[i].credit + "หน่วยกิต"}</p>
      <h4>ภาควิชา/กลุ่มวิชา/สาขาวิทยา</h4>
      <p>${courses[i].department}</p>
      <h4>ประเภท GenEd</h4>
      <p>${courses[i].genEdType}</p>`;

      main.appendChild(newSection);
    }
  } catch (err) {
    console.log(err);
  }

  // const frontendInput = document.getElementById("frontend-input");
  // const frontendButton = document.getElementById("add-frontend");

  // const frontendMilestoneList = document.getElementById("frontend-milestone");

  // frontendButton.addEventListener("click", (e) => {
  //   e.preventDefault;
  //   if (frontendInput.value === "") {
  //     alert("input can't be empty");
  //     return;
  //   }
  //   const newList = document.createElement("li");
  //   newList.textContent = frontendInput.value;
  //   frontendMilestoneList.appendChild(newList);
  //   frontendInput.value = "";
  // });

  // const backendInput = document.getElementById("backend-input");
  // const backendButton = document.getElementById("add-backend");

  // const backendMilestoneList = document.getElementById("backend-milestone");

  // backendButton.addEventListener("click", (e) => {
  //   e.preventDefault;
  //   if (backendInput.value === "") {
  //     alert("input can't be empty");
  //     return;
  //   }
  //   const newList = document.createElement("li");
  //   newList.innerHTML = backendInput.value;
  //   backendMilestoneList.appendChild(newList);
  //   backendInput.value = "";
  // });
};

document.addEventListener("DOMContentLoaded", () => {
  main();
});
