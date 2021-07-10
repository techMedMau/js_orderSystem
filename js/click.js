var arr = new Array(4);

document.querySelector("#Input_ch").addEventListener("input", function (e) {
  arr[0] = parseInt(this.value, 10);
 
})

document.querySelector("#Input_p").addEventListener("input", function (e) {
  arr[1] = parseInt(this.value, 10);
 
});

document.querySelector("#Input_c").addEventListener("input", function (e) {
  arr[2] = parseInt(this.value, 10);
  
});

document.querySelector("#Input_f").addEventListener("input", function (e) {
  arr[3] = parseInt(this.value, 10);
  
});

document.querySelector("#Next").addEventListener("click", function () {
  console.log(arr)
  for (var i = 0; i < arr.length; i += 1) {
    
    if (arr[i] === undefined) {
      arr[i] = 0;
    }
    if (isNaN(arr[i])) {
      alert("您輸入的格式有誤！");
      return;
    }
   
  }
  open();
  count();
});

function open() {
  document.querySelector("#Cart").classList.add("show");
  document.querySelector("#Order").classList.add("disshow");
}

function count() {
  const total = arr[0] * 100 + arr[1] * 80 + arr[2] * 70 + arr[3] * 85;
  document.querySelector("#Total").textContent = total;
  const pay = total * 0.8 + 30;
  document.querySelector("#Pay").textContent = pay;
}

document.querySelector("#Submit").addEventListener("click", function () {
  document.querySelector("#Cart").classList.remove("show");
  document.querySelector("#End").classList.remove("disshow");
});
