function calculateNetSalary() {
    const basicSalary = parseFloat(document.getElementById("basicSalary").value);
    const benefits = parseFloat(document.getElementById("benefits").value);

    // KRA rates from the table
    const taxRate = 0.3;
    const taxFreeAllowance = 24000;

    // NHIF rates from the table
    const nhifRates = [
        { range: [0, 5999], amount: 150 },
        { range: [6000, 7999], amount: 300 },
        { range: [8000, 11999], amount: 400 },
        { range: [12000, 14999], amount: 500 },
        { range: [15000, 19999], amount: 600 },
        { range: [20000, 24999], amount: 750 },
        { range: [25000, 29999], amount: 850 },
        { range: [30000, 34999], amount: 900 },
        { range: [35000, 39999], amount: 1000 },
        { range: [40000, 44999], amount: 1100 },
        { range: [45000, 49999], amount: 1200 },
        { range: [50000, 59999], amount: 1300 },
        { range: [60000, 69999], amount: 1400 },
        { range: [70000, 79999], amount: 1500 },
        { range: [80000, 89999], amount: 1600 },
        { range: [90000, 99999], amount: 1700 },
        { range: [100000, Infinity], amount: 1800 }
    ];

    // NSSF rates
    const nssfRateEmployee = 0.06; //this is just 6%
    const nssfRateEmployer = 0.06;

    // Calculating tax
    const taxableIncome = basicSalary + benefits - taxFreeAllowance;
    const tax = taxableIncome > 0 ? taxableIncome * taxRate : 0;

    // Calculating NHIF
    let nhif = 0;
    for (const nhifBracket of nhifRates) {
        if (basicSalary + benefits >= nhifBracket.range[0] && basicSalary + benefits <= nhifBracket.range[1]) {
            nhif = nhifBracket.amount;
            break;
        }
    }

    // Calculating NSSF
    const nssfEmployee = basicSalary * nssfRateEmployee;
    const nssfEmployer = basicSalary * nssfRateEmployer;

    // Calculating gross salary
    const grossSalary = basicSalary + benefits - tax - nhif - nssfEmployee;

    // Calculating net salary
    const netSalary = grossSalary - nssfEmployer;

    // output
    const resultElement = document.getElementById("result");
    resultElement.innerHTML = `
        Gross Salary: ${grossSalary}
        Net Salary: ${netSalary}<br>
        Tax (PAYE): ${tax}<br>
        NHIF Deductions: ${nhif}<br>
        NSSF Deductions (Employee): ${nssfEmployee}<br>
        NSSF Contributions (Employer): ${nssfEmployer}<br>
    `;
}