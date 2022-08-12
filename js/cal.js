let progress = () => {
  let bill = Number(document.getElementById("yourBill").value);
  let tipInput = document.getElementById("tipInput").value;
  let tipSplit = document.getElementById("tipSplit").value;

  document.getElementById("tipPercent").innerHTML = tipInput + "%";
  document.getElementById("tipPerson").innerHTML = tipSplit + " person";

  let tipValue = bill * (tipInput / 100);
  document.getElementById("tipValue").innerHTML = "$" + tipValue;
  let total = bill + tipValue;
  document.getElementById("tipTotal").innerHTML = "$" + total;
  let tipEach = tipValue / tipSplit;
  document.getElementById("tipEach").innerHTML = "$" + tipEach;
  let newBill = total / tipSplit;
  document.getElementById("billEach").innerHTML = "$" + newBill;
};

document.getElementById("main").addEventListener("input", progress);
