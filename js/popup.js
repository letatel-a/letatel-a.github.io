var link = document.querySelector(".contacts .btn");
      var popup = document.querySelector(".modal-window");
      var overlay = document.querySelector(".overlay");
      var close = popup.querySelector(".close");
      var form = popup.querySelector("form");
      var name = popup.querySelector("#username");
      var mail = popup.querySelector("#usermail");
      var message = popup.querySelector("textarea");
      var storageName = localStorage.getItem("name");
      var storageMail = localStorage.getItem("mail");

      link.addEventListener("click", function(event) {
        event.preventDefault();
        popup.classList.add("modal-window-show");
        overlay.classList.add("modal-window-show");
        
        if (storageName) {
          name.value = storageName;
        }
        if (storageMail) {
          mail.value = storageMail;
        }
      });

      close.addEventListener("click", function(event) {
        event.preventDefault();
        popup.classList.remove("modal-window-show");
        popup.classList.remove("modal-error");
        overlay.classList.remove("modal-window-show");
      });

      form.addEventListener("submit", function(event) {
        if (!name.value || !mail.value || !message.value) {
        event.preventDefault();
        popup.classList.remove("modal-error");
        popup.offsetWidth = popup.offsetWidth;/* без этого выражения анимация срабатывает только единожды */
        popup.classList.add("modal-error");
      } else {
          localStorage.setItem("name", name.value);
          localStorage.setItem("mail", mail.value);
        }
      });