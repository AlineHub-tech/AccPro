import React, { useState, useEffect } from 'react';
import { Wallet, Info, Calculator } from 'lucide-react';
import '../styles/Salary.css';

const SalaryPage = () => {
    const [employees, setEmployees] = useState([]);

    useEffect(() => {
        const saved = JSON.parse(localStorage.getItem('nex_employees') || "[]");
        setEmployees(saved);
    }, []);

    // RWANDA TAX ENGINE (PAYE & RSSB Logic)
    const calculatePayroll = (gross) => {
        const rssb = gross * 0.03;
        const taxableIncome = gross - rssb;

        let paye = 0;
        if (taxableIncome <= 60000) {
            paye = 0;
        } else if (taxableIncome <= 100000) {
            paye = (taxableIncome - 60000) * 0.10;
        } else if (taxableIncome <= 200000) {
            paye = 4000 + (taxableIncome - 100000) * 0.20;
        } else {
            paye = 24000 + (taxableIncome - 200000) * 0.30;
        }

        const netSalary = gross - rssb - paye;
        return { rssb, paye, netSalary };
    };

    return (
        <div className="salary-container">
            <div className="salary-header">
                <h1>Salary <span>Structure.</span></h1>
                <p style={{color: '#64748b'}}>Automated tax compliance according to RRA & RSSB regulations.</p>
            </div>

            {/* TAX RULES OVERVIEW - FIXED THE ERROR HERE */}
            <div className="tax-rules-grid">
                <div className="rule-card">
                    <h4>RSSB CONTRIBUTION</h4>
                    <p>3.0%</p>
                </div>
                <div className="rule-card">
                    <h4>PAYE (0 - 60k)</h4>
                    <p>0%</p>
                </div>
                <div className="rule-card">
                    <h4>PAYE (60k - 100k)</h4>
                    <p>10%</p>
                </div>
                <div className="rule-card">
                    <h4>PAYE (&gt; 200k)</h4> {/* FIXED: Used &gt; instead of > */}
                    <p>30%</p>
                </div>
            </div>

            <div className="salary-table-card">
                <table className="emp-table">
                    <thead>
                        <tr>
                            <th>Employee</th>
                            <th>Gross (RWF)</th>
                            <th>RSSB (3%)</th>
                            <th>PAYE (Tax)</th>
                            <th>Net Pay</th>
                        </tr>
                    </thead>
                    <tbody>
                        {employees.map((emp) => {
                            const { rssb, paye, netSalary } = calculatePayroll(emp.salary);
                            return (
                                <tr key={emp.id}>
                                    <td style={{fontWeight: '700'}}>{emp.name}</td>
                                    <td style={{fontWeight: '600'}}>{emp.salary.toLocaleString()}</td>
                                    <td><span className="badge-deduction">-{rssb.toLocaleString()}</span></td>
                                    <td><span className="badge-deduction">-{paye.toLocaleString()}</span></td>
                                    <td className="net-amount">{Math.round(netSalary).toLocaleString()} RWF</td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default SalaryPage;
