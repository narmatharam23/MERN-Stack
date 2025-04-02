document.getElementById('savebtn').addEventListener('click', () => {
    const payData = {
        name: document.getElementById('name').value, 
        eid: document.getElementById('eid').value,
        phone: document.getElementById('phone').value,
    };
    localStorage.setItem('payData', JSON.stringify(payData));
    alert("PaySlip data saved successfully!");
});
document.getElementById('printbtn').addEventListener('click', () => {
    const payData = JSON.parse(localStorage.getItem('payData'));
    if(payData)
    {
        const print = window.open('', '_blank');

        print.document.writeln(`Name: ${payData.name}<br>`);
        print.document.writeln(`EmpID: ${payData.eid}<br>`);
        print.document.writeln(`Phone no: ${payData.phone}<br>`);
    }
})