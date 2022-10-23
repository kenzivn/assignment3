"use strict";

//

// Xử lý nút nhập email để hiện thông tin
// https://stackoverflow.com/questions/46155/how-can-i-validate-an-email-address-in-javascript
const personalInfo = document.querySelector(".personal-info");
const getEmailForm = document.querySelector(".get-email");
const emailEl = document.getElementById("email");
const getEmailButton = document.querySelector(".btn--submit");

const regex =
  /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
//dùng regex để check email có đúng định dạng
const validateEmail = (email) => {
  return email.match(regex);
};

const submitEmailClick = function () {
  const emailValue = emailEl.value;
  if (validateEmail(emailValue)) {
    //kiểm tra email đúng định dạng, nếu đúng thì cho ẩn form email và hiện thông tin
    // console.log(emailValue);
    personalInfo.classList.toggle("hidden");
    getEmailForm.classList.toggle("hidden");
  } else {
    // nếu email không đúng định dạng thì hiện alert báo lỗi
    console.log(`invalid email`);
    alert(`Email không hợp lệ!`);
  }
};
getEmailButton.addEventListener("click", submitEmailClick);

// Xử lý cho nút view more/less của Kinh nghiệm
const experienceButton = document.getElementById("btn-experience");
const experienceCard = document.getElementById("experience");
const expInfoCard = document.getElementById("expInfo");

//dùng sự kiện Mouse Over để hiện nút View More
const experienceMouseOver = function () {
  experienceButton.classList.remove("hidden");
};

//dùng sự kiện Mouse Over để ẩn nút View More
const experienceMouseOut = function () {
  experienceButton.classList.add("hidden");
};
//Function dùng để hiện/ẩn thông tin chi tiết về kinh nghiệm
const showHideExperience = function () {
  if (expInfoCard.classList.contains("hidden")) {
    // console.log("hidden");
    expInfoCard.classList.remove("hidden");
    experienceButton.textContent = "View less ⬆️";
    experienceButton.classList.remove("btn-success");
    experienceButton.classList.add("btn-warning");
  } else {
    // console.log("showed");
    expInfoCard.classList.add("hidden");
    experienceButton.textContent = "View more ⬇️";
    experienceButton.classList.add("btn-success");
    experienceButton.classList.remove("btn-warning");
  }
};
experienceCard.addEventListener("mouseover", experienceMouseOver);
experienceCard.addEventListener("mouseout", experienceMouseOut);
experienceButton.addEventListener("click", showHideExperience);

// Xử lý cho nút view more/less của kỹ năng
const skillsButton = document.getElementById("btn-skills");
const skillsCard = document.getElementById("skills");
const skillsInfoCard = document.getElementById("skillsInfo");

const skillsMouseOver = function () {
  skillsButton.classList.remove("hidden");
};
const skillsMouseOut = function () {
  skillsButton.classList.add("hidden");
};
const showHideSkills = function () {
  if (skillsInfoCard.classList.contains("hidden")) {
    skillsInfoCard.classList.remove("hidden");
    skillsButton.textContent = "View less ⬆️";
    skillsButton.classList.remove("btn-success");
    skillsButton.classList.add("btn-warning");
  } else {
    console.log("showed");
    skillsInfoCard.classList.add("hidden");
    skillsButton.textContent = "View more ⬇️";
    skillsButton.classList.add("btn-success");
    skillsButton.classList.remove("btn-warning");
  }
};

skillsCard.addEventListener("mouseover", skillsMouseOver);
skillsCard.addEventListener("mouseout", skillsMouseOut);
skillsButton.addEventListener("click", showHideSkills);

// Xử lý cho nút view more/less của ngôn ngữ
const languagesButton = document.getElementById("btn-languages");
const languagesCard = document.getElementById("languages");
const languagesInfoCard = document.getElementById("languagesInfo");

const languagesMouseOver = function () {
  languagesButton.classList.remove("hidden");
};
const languagesMouseOut = function () {
  languagesButton.classList.add("hidden");
};
const showHideLanguages = function () {
  if (languagesInfoCard.classList.contains("hidden")) {
    languagesInfoCard.classList.remove("hidden");
    languagesButton.textContent = "View less ⬆️";
    languagesButton.classList.remove("btn-success");
    languagesButton.classList.add("btn-warning");
  } else {
    languagesInfoCard.classList.add("hidden");
    languagesButton.textContent = "View more ⬇️";
    languagesButton.classList.add("btn-success");
    languagesButton.classList.remove("btn-warning");
  }
};

languagesCard.addEventListener("mouseover", languagesMouseOver);
languagesCard.addEventListener("mouseout", languagesMouseOut);
languagesButton.addEventListener("click", showHideLanguages);

// Xử lý cho nút view more/less của ngôn ngữ
const activitiesButton = document.getElementById("btn-activities");
const activitiesCard = document.getElementById("activities");
const activitiesInfoCard = document.getElementById("activitiesInfo");

const activitiesMouseOver = function () {
  activitiesButton.classList.remove("hidden");
};
const activitiesMouseOut = function () {
  activitiesButton.classList.add("hidden");
};
const showHideActivities = function () {
  if (activitiesInfoCard.classList.contains("hidden")) {
    activitiesInfoCard.classList.remove("hidden");
    activitiesButton.textContent = "View less ⬆️";
    activitiesButton.classList.remove("btn-success");
    activitiesButton.classList.add("btn-warning");
  } else {
    activitiesInfoCard.classList.add("hidden");
    activitiesButton.textContent = "View more ⬇️";
    activitiesButton.classList.add("btn-success");
    activitiesButton.classList.remove("btn-warning");
  }
};

activitiesCard.addEventListener("mouseover", activitiesMouseOver);
activitiesCard.addEventListener("mouseout", activitiesMouseOut);
activitiesButton.addEventListener("click", showHideActivities);

// Xử lý cho nút view more/less của Học vấn
const educationButton = document.getElementById("btn-education");
const educationCard = document.getElementById("education");
const educationInfoCard = document.getElementById("educationInfo");

const educationMouseOver = function () {
  educationButton.classList.remove("hidden");
};
const educationMouseOut = function () {
  educationButton.classList.add("hidden");
};
const showHideEducation = function () {
  if (educationInfoCard.classList.contains("hidden")) {
    educationInfoCard.classList.remove("hidden");
    educationButton.textContent = "View less ⬆️";
    educationButton.classList.remove("btn-success");
    educationButton.classList.add("btn-warning");
  } else {
    educationInfoCard.classList.add("hidden");
    educationButton.textContent = "View more ⬇️";
    educationButton.classList.add("btn-success");
    educationButton.classList.remove("btn-warning");
  }
};

educationCard.addEventListener("mouseover", educationMouseOver);
educationCard.addEventListener("mouseout", educationMouseOut);
educationButton.addEventListener("click", showHideEducation);

// Xử lý cho nút view more/less của Sở thích
const hobbiesButton = document.getElementById("btn-hobbies");
const hobbiesCard = document.getElementById("hobbies");
const hobbiesInfoCard = document.getElementById("hobbiesInfo");

const hobbiesMouseOver = function () {
  hobbiesButton.classList.remove("hidden");
};
const hobbiesMouseOut = function () {
  hobbiesButton.classList.add("hidden");
};
const showHideHobbies = function () {
  if (hobbiesInfoCard.classList.contains("hidden")) {
    hobbiesInfoCard.classList.remove("hidden");
    hobbiesButton.textContent = "View less ⬆️";
    hobbiesButton.classList.remove("btn-success");
    hobbiesButton.classList.add("btn-warning");
  } else {
    hobbiesInfoCard.classList.add("hidden");
    hobbiesButton.textContent = "View more ⬇️";
    hobbiesButton.classList.add("btn-success");
    hobbiesButton.classList.remove("btn-warning");
  }
};

hobbiesCard.addEventListener("mouseover", hobbiesMouseOver);
hobbiesCard.addEventListener("mouseout", hobbiesMouseOut);
hobbiesButton.addEventListener("click", showHideHobbies);
