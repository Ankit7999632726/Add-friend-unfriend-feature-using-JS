var btn = document.querySelector("button");
var h4 = document.querySelector("h4");
var flag = 0; 
btn.addEventListener("click", function () {
  h4.innerHTML = "Request Sent";
  h4.style.color = "rgb(170, 196, 54)";
  if (flag === 0) {
    setTimeout(function () {
      h4.style.color = "blue";
      h4.innerHTML = "Friends";
      btn.innerHTML = `<i class="ri-close-fill"></i>`;
      flag = 1;
    }, 2000);
  } else {
    h4.style.color = "tomato";
    h4.innerHTML = "Strangers";
    btn.innerHTML = `<i class="ri-user-add-line"></i>`;
    flag = 0;
  }
});
