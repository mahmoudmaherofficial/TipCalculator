function calculateTip() {
  // Get the input values
  const billAmount = parseFloat(document.getElementById("billAmount").value);
  const tipPercentage = parseFloat(
    document.getElementById("tipPercentage").value
  );

  // Validate inputs
  if (isNaN(billAmount) || billAmount <= 0) {
    alert("Please enter a valid bill amount.");
    return;
  }
  if (isNaN(tipPercentage) || tipPercentage < 0) {
    alert("Please enter a valid tip percentage.");
    return;
  }

  // Calculate the tip
  const tipAmount = (billAmount * (tipPercentage / 100)).toFixed(2);
  const totalAmount = (billAmount + parseFloat(tipAmount)).toFixed(2);

  // Display the result
  document.getElementById(
    "result"
  ).innerHTML = `Tip Amount: $${tipAmount} <br> Total Amount: $${totalAmount}`;
}
