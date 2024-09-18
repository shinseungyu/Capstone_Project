document.addEventListener('DOMContentLoaded', function () {
  // section4 부분 
  const box = document.querySelectorAll(`.box`);

  for (const boxSelect of box) {
    boxSelect.addEventListener(`click`, function () {
      this.classList.add(`on`);

      for (const siblings of box) {
        if (siblings !== this) {
          siblings.classList.remove(`on`);

        }
      }
    });
  }
  // 모오달
  const openModalButtons = document.querySelectorAll(".content");
  const closeButtons = document.querySelectorAll(".close");

  // 모달 열기 버튼 클릭 이벤트 추가
  openModalButtons.forEach(button => {
    button.addEventListener("click", function () {
      const modalId = this.getAttribute("data-modal");
      const modal = document.getElementById(modalId);
      modal.style.display = "block";
    });
  });

  // 모달 닫기 버튼 클릭 이벤트 추가
  closeButtons.forEach(button => {
    button.addEventListener("click", function () {
      const modal = this.closest(".modal");
      modal.style.display = "none";
    });
  });

  // 모달 외부 클릭 시 모달 닫기
  window.addEventListener("click", function (event) {
    if (event.target.classList.contains("modal")) {
      event.target.style.display = "none";
    }
  });

  // aos 링크연결
  AOS.init();

  // swiper
  var swiper = new Swiper(".mySwiper", {
    pagination: {
      el: ".swiper-pagination",
    },
  });

});