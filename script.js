// burger
var sidemenu = document.getElementById("sidemenu");

function openmenu() {
  sidemenu.style.right = "0";
}
function closemenu() {
  sidemenu.style.right = "-200px";
}

// cursor tab
var tablinks = document.getElementsByClassName("tab-links");
var tabcontents = document.getElementsByClassName("tab-contents");

function opentab(tabname) {
  for (tablink of tablinks) {
    tablink.classList.remove("active-link");
  }
  for (tabcontent of tabcontents) {
    tabcontent.classList.remove("active-tab");
  }
  event.currentTarget.classList.add("active-link");
  document.getElementById(tabname).classList.add("active-tab");
}

//button seemore
function seeMore() {
  const hiddenWorks = document.querySelectorAll('.work[style="display:none;"]');
  hiddenWorks.forEach((work) => {
    work.style.display = "block";
  });
  const section = document.getElementById("portfolio");
  section.classList.add("expanded");
  const btnSeeMore = document.querySelector(".btn.btn-primary");
  btnSeeMore.style.display = "none";
}

//emailjs
function sendMail() {
  var params = {
    subject_id: document.getElementById("subject_id").value,
    from_name: document.getElementById("from_name").value,
    user_email: document.getElementById("user_email").value,
    message: document.getElementById("message").value,
  };
  emailjs.send("service_knq6j6l", "template_7z6ffls", params).then(
    function (response) {
      alert("SUCCESS!", response.status, response.text);
      document.getElementById("subject_id").value = "";
      document.getElementById("from_name").value = "";
      document.getElementById("user_email").value = "";
      document.getElementById("message").value = "";
    },
    function (error) {
      alert("FAILED...", error);
    }
  );
}
