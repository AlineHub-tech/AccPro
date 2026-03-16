# 🚀 AccPro: Modern Financial Suite for Accountants

![React](https://shields.io)
![Vite](https://shields.io)
![Lucide](https://shields.io)
![License](https://shields.io)

**AccPro** is a professional, high-density financial suite designed for modern Rwandan firms. Built for precision and speed, it automates **payroll generation**, **RRA & RSSB tax compliance**, and **audit-ready reporting**. With a secure, local-first architecture and a sleek Nexventures-style UI, it empowers accountants to lead with clarity.

---
## 📸 Screenshots


---
| Landing Page | Employee Management |
| :---: | :---: |
| ![Landing](https://placeholder.com) | ![Employees](https://placeholder.com) |

| Salary Engine | Financial Reports |
| :---: | :---: |
| ![Salary](https://placeholder.com) | ![Reports](https://placeholder.com) |

---

## ✨ Key Features

- **Automated Payroll:** One-click monthly salary generation.
- **Tax Precision:** Built-in RRA (PAYE) and RSSB calculation logic.
- **CRUD Operations:** Manage employees with a modern, sleek interface.
- **Reporting:** Export professional, audit-ready PDF reports using `jspdf`.
- **Responsive Design:** Optimized for Mobile, Tablet, and Desktop.
- **Data Sovereignty:** Local-first storage (LocalStorage) ensures data never leaves your device.

---

## 🛠️ Project Structure

```text
src/
├── components/       # Reusable UI (Navbar, Footer)
├── pages/            # Page Views (Landing, Employees, Salary, etc.)
├── styles/           # External CSS modules for each page
├── App.jsx           # Routing and Main Layout logic
├── App.css           # Global Reset & Responsive Overrides
└── main.jsx          # Entry point
Use code with caution.

🧮 Calculation Logic (Rwanda Compliance)
The app uses a built-in tax engine to calculate net salaries based on the latest Rwandan tax brackets:
RSSB: 3% Employee contribution.
PAYE (RRA):
0 - 60,000 RWF: 0%
60,001 - 100,000 RWF: 10%
100,001 - 200,000 RWF: 20%
> 200,000 RWF: 30%
🚀 Getting Started
Clone the repository:
bash
git clone https://github.com
Use code with caution.

Install dependencies:
bash
npm install
Use code with caution.

Run the development server:
bash
npm run dev
Use code with caution.

📦 Tech Stack
Frontend: React.js
Icons: Lucide-React
Alerts: SweetAlert2
PDF Generation: jsPDF & autoTable
Styling: Modern CSS (Nexventures-style)
📄 License
This project is licensed under the MIT License.
