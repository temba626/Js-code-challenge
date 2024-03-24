// Function to calculate net salary
const calculateNetSalary = () => {
    // Get basic salary and benefits input values
    const basicSalary = parseFloat(document.getElementById('basicSalary').value);
    const benefits = parseFloat(document.getElementById('benefits').value) || 0;
    // Calculate gross salary
    const grossSalary = basicSalary + benefits;
  
    // Calculate PAYE (Tax)
    const payee = calculatePAYE(grossSalary);
    // Calculate NHIF deductions
    const nhifDeductions = calculateNHIFDeductions(grossSalary);
    // Calculate NSSF deductions
    const nssfDeductions = calculateNSSFDeductions(grossSalary);
    // Calculate net salary
    const netSalary = grossSalary - payee - nhifDeductions - nssfDeductions;
  
    //  results
    const resultsDiv = document.getElementById('results');
    resultsDiv.style.display = 'block';
  
    document.getElementById('grossSalaryAmount').textContent = grossSalary.toFixed(2);
    document.getElementById('payeeAmount').textContent = payee.toFixed(2);
    document.getElementById('nhifDeductionsAmount').textContent = nhifDeductions.toFixed(2);
    document.getElementById('nssfDeductionsAmount').textContent = nssfDeductions.toFixed(2);
    document.getElementById('netSalaryAmount').textContent = netSalary.toFixed(2);
};
  
// Function to calculate PAYE (Tax)
const calculatePAYE = (grossSalary) => {
    let tax = 0;
  
// Calculate tax based on tax brackets and rates
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
  
// Function to calculate NHIF deductions
const calculateNHIFDeductions = (grossSalary) => {
    // NHIF deduction calculation based on provided rates

};
  
// Function to calculate NSSF deductions

const calculateNSSFDeductions = (grossSalary) => {
    // NSSF deduction calculation
};
  