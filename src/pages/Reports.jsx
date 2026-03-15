import React, { useState, useEffect } from 'react';
import { BarChart3, Download, TrendingUp, Users, FileText } from 'lucide-react';
import jsPDF from 'jspdf';
import 'jspdf-autotable';
import '../styles/Report.css';

const Reports = () => {
    const [payments, setPayments] = useState([]);
    const [totalDisbursed, setTotalDisbursed] = useState(0);

    useEffect(() => {
        // 1. Emeza ko iyi KEY ari: "nex_payments" (nk'uko iri muri Payments.jsx)
        const savedHistory = JSON.parse(localStorage.getItem('nex_payments') || "[]");
        setPayments(savedHistory);
        
        const total = savedHistory.reduce((acc, curr) => acc + curr.amount, 0);
        setTotalDisbursed(total);
    }, []);

    const downloadPDF = () => {
        if (payments.length === 0) return;

        const doc = new jsPDF();
        doc.setFontSize(18);
        doc.text("FINANCIAL DISBURSEMENT REPORT", 14, 20);
        
        const tableColumn = ["Employee", "Month", "Year", "Net Paid (RWF)", "Date"];
        const tableRows = payments.map(p => [
            p.empName, 
            p.month, 
            p.year, 
            p.amount.toLocaleString(), 
            p.date
        ]);

        doc.autoTable(tableColumn, tableRows, { startY: 30 });
        doc.text(`Total Disbursed: ${totalDisbursed.toLocaleString()} RWF`, 14, doc.lastAutoTable.finalY + 10);
        doc.save(`Payroll_Report_${Date.now()}.pdf`);
    };

    return (
        <div className="info-container">
            <div className="report-header" style={{display:'flex', justifyContent:'space-between', alignItems:'center', flexWrap:'wrap', gap:'20px'}}>
                <div className="info-header">
                    <h1>Financial <span>Reports.</span></h1>
                    <p>Analyze and export your payroll history.</p>
                </div>
                {payments.length > 0 && (
                    <button className="btn-export" onClick={downloadPDF}>
                        <Download size={18} className="yellow-dot"/> EXPORT PDF
                    </button>
                )}
            </div>

            <div className="stats-grid">
                <div className="stat-card">
                    <div className="stat-label"><TrendingUp size={16}/> Total Disbursed</div>
                    <div className="stat-value">{totalDisbursed.toLocaleString()} <small>RWF</small></div>
                </div>
                <div className="stat-card">
                    <div className="stat-label"><Users size={16}/> Transactions</div>
                    <div className="stat-value">{payments.length}</div>
                </div>
            </div>

            <div className="table-responsive">
                <table className="emp-table">
                    <thead>
                        <tr>
                            <th>Employee</th>
                            <th>Period</th>
                            <th>Amount Paid</th>
                            <th>Date Executed</th>
                        </tr>
                    </thead>
                    <tbody>
                        {payments.length > 0 ? payments.slice().reverse().map(pay => (
                            <tr key={pay.id}>
                                <td className="font-bold">{pay.empName}</td>
                                <td>{pay.month} {pay.year}</td>
                                <td className="font-bolder">{pay.amount.toLocaleString()} RWF</td>
                                <td>{pay.date}</td>
                            </tr>
                        )) : (
                            <tr>
                                <td colSpan="4" style={{textAlign: 'center', padding: '40px', color: '#94a3b8'}}>
                                    No reports found. Please execute payments first.
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Reports;
