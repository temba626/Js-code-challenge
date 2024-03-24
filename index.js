const calculateNetSalary = () => {
    const basicSalary = parseFloat(document.getElementById('basicSalary').value);
    const benefits = parseFloat(document.getElementById('benefits').value) || 0;
    const grossSalary = basicSalary + benefits;
  
    const payee = calculatePAYE(grossSalary);
    const nhifDeductions = calculateNHIFDeductions(grossSalary);
    const nssfDeductions = calculateNSSFDeductions(grossSalary);
    const netSalary = grossSalary - payee - nhifDeductions - nssfDeductions;
  
    const resultsDiv = document.getElementById('results');
    resultsDiv.style.display = 'block';
  
    document.getElementById('grossSalaryAmount').textContent = grossSalary.toFixed(2);
    document.getElementById('payeeAmount').textContent = payee.toFixed(2);
    document.getElementById('nhifDeductionsAmount').textContent = nhifDeductions.toFixed(2);
    document.getElementById('nssfDeductionsAmount').textContent = nssfDeductions.toFixed(2);
    document.getElementById('netSalaryAmount').textContent = netSalary.toFixed(2);
  };
  
  const calculatePAYE = (grossSalary) => {
    let tax = 0;
  
    if (grossSalary <= 24000) {
      tax = grossSalary * 0.10;
    } else if (grossSalary <= 32333) {
      tax = 2400 + (grossSalary - 24000) * 0.25;
    } else if (grossSalary <= 500000) {
      tax = 3880 + (grossSalary - 32333) * 0.30;
    } else if (grossSalary <= 800000) {
      tax = 104980 + (grossSalary - 500000) * 0.325;
    } else {
      tax = 184980 + (grossSalary - 800000) * 0.35;
    }
  
    return tax;
  };
  
  const calculateNHIFDeductions = (grossSalary) => {
    if (grossSalary <= 5999) {
      return 150;
    } else if (grossSalary <= 7999) {
      return 300;
    } else if (grossSalary <= 11999) {
      return 400;
    } else if (grossSalary <= 14999) {
      return 500;
    } else if (grossSalary <= 19999) {
      return 600;
    } else if (grossSalary <= 24999) {
      return 750;
    } else if (grossSalary <= 29999) {
      return 850;
    } else if (grossSalary <= 34999) {
      return 900;
    } else if (grossSalary <= 39999) {
      return 950;
    } else if (grossSalary <= 44999) {
      return 1000;
    } else if (grossSalary <= 49999) {
      return 1100;
    } else if (grossSalary <= 59999) {
      return 1200;
    } else if (grossSalary <= 69999) {
      return 1300;
    } else if (grossSalary <= 79999) {
      return 1400;
    } else if (grossSalary <= 89999) {
      return 1500;
    } else if (grossSalary <= 99999) {
      return 1600;
    } else {
      return 1700;
    }
  };
  
  const calculateNSSFDeductions = (grossSalary) => {
    const tierIUpperLimit = 7000;
    const tierIRate = 0.06;
    const tierIIUpperLimit = 36000;
    const tierIIRate = 0.06;
  
    let nssfDeduction = 0;
  
    if (grossSalary <= tierIUpperLimit) {
      nssfDeduction = grossSalary * tierIRate;
    } else {
      nssfDeduction = tierIUpperLimit * tierIRate;
      if (grossSalary > tierIIUpperLimit) {
        nssfDeduction += (grossSalary - tierIIUpperLimit) * tierIIRate;
      }
    }
  
    return nssfDeduction;
  };
  