const main = () => {
  const frontendInput = document.getElementById("frontend-input");
  const frontendButton = document.getElementById("add-frontend");

  const frontendMilestoneList = document.getElementById("frontend-milestone");

  frontendButton.addEventListener("click", (e) => {
    e.preventDefault;
    if (frontendInput.value === "") {
      alert("input can't be empty");
      return;
    }
    const newList = document.createElement("li");
    newList.textContent = frontendInput.value;
    frontendMilestoneList.appendChild(newList);
    frontendInput.value = "";
  });

  const backendInput = document.getElementById("backend-input");
  const backendButton = document.getElementById("add-backend");

  const backendMilestoneList = document.getElementById("backend-milestone");

  backendButton.addEventListener("click", (e) => {
    e.preventDefault;
    if (backendInput.value === "") {
      alert("input can't be empty");
      return;
    }
    const newList = document.createElement("li");
    newList.innerHTML = backendInput.value;
    backendMilestoneList.appendChild(newList);
    backendInput.value = "";
  });
};

document.addEventListener("DOMContentLoaded", () => {
  main();
});
