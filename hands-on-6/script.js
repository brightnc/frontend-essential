const main = async () => {
  try {
    const url = "https://api.minireg.thanayut.in.th/courses";
    const response = await fetch(url);
    const rawData = await response.json();

    if (!response.ok) {
      throw new Error(`code: ${response.status}, message: ${rawData.message}`);
    }
    const courses = rawData.courses;

    for (let i = 0; i < courses.length; i++) {
      const main = document.getElementById("main-container");

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
};

document.addEventListener("DOMContentLoaded", () => {
  main();
});
