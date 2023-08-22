document.getElementById("gstCalculatorForm").addEventListener("submit", function (e) {
    e.preventDefault();
    
    const amount = parseFloat(document.getElementById("amount").value);
    const gstRate = parseFloat(document.getElementById("gstRate").value);
    const taxInclusive = document.getElementById("taxInclusive").checked;
    
    if (isNaN(amount) || isNaN(gstRate)) {
      document.getElementById("result").textContent = "Please enter valid values.";
    } else {
      const gstAmount = taxInclusive ? (amount * gstRate) / (100 + gstRate) : (amount * gstRate) / 100;
      const totalAmount = taxInclusive ? amount : amount + gstAmount;
      document.getElementById("result").textContent = `GST Amount: ${gstAmount.toFixed(2)} | Total Amount: ${totalAmount.toFixed(2)}`;
    }
  });

  