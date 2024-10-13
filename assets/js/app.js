const navigation_container = document.querySelector(".menu_list");

[...navigation_container.children].forEach((li) => {
  li.addEventListener("click", (e) => {
    navigation_container.querySelector(".active").classList.remove("active");
    li.querySelector("a").classList.add("active");
  });
});

const modalSwitchServices = document.querySelectorAll(".modalSwitchServices");
const modalService = document.querySelector(".modal_services");

modalSwitchServices.forEach((element, i) => {
  element.addEventListener("click", (e) => {
    e.preventDefault();
    if (i === 0) {
      modalService.querySelector(".modal_services_title").textContent =
        "Web Development";
      modalService.querySelector(".modal_services_text").textContent =
        "Web development is the work involved in developing a website for the Internet (World Wide Web) or an intranet (a private network).";
    } else if (i === 1) {
      modalService.querySelector(".modal_services_title").textContent =
        "Web Design";
      modalService.querySelector(".modal_services_text").textContent =
        "Web design encompasses many different skills and disciplines in the production and maintenance of websites.";
    } else if (i === 2) {
      modalService.querySelector(".modal_services_title").textContent =
        "Mobile Development";
      modalService.querySelector(".modal_services_text").textContent =
        "Mobile development is a broad term for the work involved in developing software applications for mobile devices.";
    } else if (i === 3) {
      modalService.querySelector(".modal_services_title").textContent =
        "Database";
      modalService.querySelector(".modal_services_text").textContent =
        "Database development is the work involved in developing a database for a specific business application.";
    }
    modalService.classList.remove("modal_inactive");
  });
});

const modalClose = document.querySelector(".modal_close");
modalClose.addEventListener("click", (e) => {
  e.preventDefault();
  modalService.classList.add("modal_inactive");
});

const filter_btns = document
  .querySelector(".filter_projects")
  .querySelectorAll("ul li");

filter_btns.forEach((element) => {
  element.addEventListener("click", (e) => {
    e.preventDefault();
    document.querySelector(".filter_active").classList.remove("filter_active");
    element.classList.add("filter_active");

    const dataFilter = element.dataset.filter;
    document.querySelectorAll(".w_box").forEach((element) => {
      if (dataFilter === "all") {
        element.classList.remove("card_inactive");
        element.style.position = "relative";
        element.style.zIndex = "1";
        element.style.transform = "translateX(0px)";
      } else if (element.dataset.filter === dataFilter) {
        element.classList.remove("card_inactive");
        element.style.position = "relative";
        element.style.zIndex = "1";
        element.style.transform = "translateX(0px)";
      } else {
        element.style.position = "absolute";
        element.style.zIndex = "-1";
        element.style.transform = "translateX(-10000px)";
        element.classList.add("card_inactive");
      }
    })
  });
});

const modal_work = document.querySelector(".modal_work");
const modal_work_close = document.querySelector(".modal_work_close");
modal_work_close.addEventListener("click", (e) => {
  e.preventDefault();
  modal_work.classList.toggle("modal_inactive");
})

const w_box_details_a = document.querySelectorAll(".w_box_details > a");

w_box_details_a.forEach((element) => {
  element.addEventListener("click", (e) => {
    e.preventDefault();
    modal_work.classList.toggle("modal_inactive");
  })
})