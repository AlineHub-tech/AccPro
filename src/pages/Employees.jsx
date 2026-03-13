import React, { useState, useEffect } from 'react';
import { UserPlus, Trash2 } from 'lucide-react';
import Swal from 'sweetalert2';
import '../styles/Employees.css';

const Employees = () => {
    const [employees, setEmployees] = useState([]);
    const [formData, setFormData] = useState({ name: '', position: '', salary: '' });

    useEffect(() => {
        const saved = JSON.parse(localStorage.getItem('nex_employees') || "[]");
        setEmployees(saved);
    }, []);

    const handleAdd = (e) => {
        e.preventDefault();
        if (!formData.name || !formData.salary) return;

        const newEmp = { id: Date.now(), ...formData, salary: Number(formData.salary) };
        const updated = [...employees, newEmp];
        setEmployees(updated);
        localStorage.setItem('nex_employees', JSON.stringify(updated));
        setFormData({ name: '', position: '', salary: '' });
        
        Swal.fire({
            title: 'Saved',
            text: 'Employee added.',
            icon: 'success',
            timer: 1500,
            showConfirmButton: false
        });
    };

    const handleDelete = (id) => {
        const filtered = employees.filter(emp => emp.id !== id);
        setEmployees(filtered);
        localStorage.setItem('nex_employees', JSON.stringify(filtered));
    };

    return (
        <div className="emp-container">
            <div className="emp-header">
                <h1>Workforce <span>Registry.</span></h1>
                <div className="emp-count">Active Members: {employees.length}</div>
            </div>

            <div className="emp-form-card">
                <form className="emp-form" onSubmit={handleAdd}>
                    <div className="input-group">
                        <label>Full Name</label>
                        <input 
                            type="text" 
                            placeholder="Employee Name"
                            value={formData.name}
                            onChange={(e) => setFormData({...formData, name: e.target.value})}
                            required
                        />
                    </div>
                    <div className="input-group">
                        <label>Position</label>
                        <input 
                            type="text" 
                            placeholder="Designation"
                            value={formData.position}
                            onChange={(e) => setFormData({...formData, position: e.target.value})}
                            required
                        />
                    </div>
                    <div className="input-group">
                        <label>Salary (RWF)</label>
                        <input 
                            type="number" 
                            placeholder="Gross Amount"
                            value={formData.salary}
                            onChange={(e) => setFormData({...formData, salary: e.target.value})}
                            required
                        />
                    </div>
                    <button type="submit" className="btn-save">
                        <UserPlus size={16} className="btn-icon"/> Add Member
                    </button>
                </form>
            </div>

            <div className="table-responsive">
                <table className="emp-table">
                    <thead>
                        <tr>
                            <th>Member Name</th>
                            <th>Position</th>
                            <th>Gross (RWF)</th>
                            <th className="text-center">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {employees.map((emp) => (
                            <tr key={emp.id}>
                                <td className="font-bold">{emp.name}</td>
                                <td>{emp.position}</td>
                                <td className="font-bolder">{emp.salary.toLocaleString()}</td>
                                <td>
                                    <div className="action-wrapper">
                                        <button className="btn-delete-icon" onClick={() => handleDelete(emp.id)}>
                                            <Trash2 size={16} />
                                        </button>
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Employees;
