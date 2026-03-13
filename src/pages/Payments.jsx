import React, { useState, useEffect } from 'react';
import { CreditCard, CheckCircle, Calendar, Send } from 'lucide-react';
import Swal from 'sweetalert2';
import '../styles/Payments.css';

const Payments = () => {
    const [employees, setEmployees] = useState([]);
    const [payments, setPayments] = useState([]);
    const [month, setMonth] = useState("March");
    const [year, setYear] = useState(2024);

    useEffect(() => {
        const savedEmps = JSON.parse(localStorage.getItem('nex_employees') || "[]");
        const savedPays = JSON.parse(localStorage.getItem('nex_payments') || "[]");
        setEmployees(savedEmps);
        setPayments(savedPays);
    }, []);

    const getNet = (gross) => {
        const rssb = gross * 0.03;
        const taxable = gross - rssb;
        let paye = 0;
        if (taxable > 200000) paye = 24000 + (taxable - 200000) * 0.30;
        else if (taxable > 100000) paye = 4000 + (taxable - 100000) * 0.20;
        else if (taxable > 60000) paye = (taxable - 60000) * 0.10;
        return gross - rssb - paye;
    };

    const handlePay = (emp) => {
        const amount = getNet(emp.salary);
        const newPayment = {
            id: Date.now(),
            empId: emp.id,
            empName: emp.name,
            month,
            year,
            amount,
            date: new Date().toLocaleDateString()
        };

        const updatedHistory = [...payments, newPayment];
        setPayments(updatedHistory);
        localStorage.setItem('nex_payments', JSON.stringify(updatedHistory));

        Swal.fire({
            title: 'Paid!',
            text: `Payment for ${emp.name} confirmed for ${month}.`,
            icon: 'success',
            confirmButtonColor: '#facc15'
        });
    };

    const isPaid = (id) => {
        return payments.some(p => p.empId === id && p.month === month && p.year === year);
    };

    return (
        <div className="pay-container">
            <div className="pay-header">
                <h1>Execute <span>Payments.</span></h1>
                <p className="pay-subtitle">Select a period and confirm salaries for your workforce.</p>
            </div>

            <div className="pay-controls">
                <div className="controls-group">
                    <Calendar size={20} className="icon-yellow"/>
                    <select className="pay-select" value={month} onChange={(e)=>setMonth(e.target.value)}>
                        {["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"].map(m => (
                            <option key={m} value={m}>{m}</option>
                        ))}
                    </select>
                    <input 
                        type="number" 
                        className="pay-select year-input" 
                        value={year} 
                        onChange={(e)=>setYear(e.target.value)}
                    />
                </div>
                <div className="payroll-info">
                    Showing payroll for {month} {year}
                </div>
            </div>

            <div className="salary-table-card">
                <table className="emp-table">
                    <thead>
                        <tr>
                            <th>Member Name</th>
                            <th>Net Amount (RWF)</th>
                            <th>Period</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {employees.map(emp => (
                            <tr key={emp.id}>
                                <td className="emp-name-cell">{emp.name}</td>
                                <td className="emp-amount-cell">{getNet(emp.salary).toLocaleString()} RWF</td>
                                <td className="emp-period-cell">{month}, {year}</td>
                                <td>
                                    {isPaid(emp.id) ? (
                                        <span className="status-paid"><CheckCircle size={16}/> Confirmed</span>
                                    ) : (
                                        <button className="btn-execute" onClick={()=>handlePay(emp)}>
                                            <Send size={16}/> Send Payment
                                        </button>
                                    )}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Payments;
