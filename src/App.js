
import './App.css';
import ApprovalRequestForm from './Components/ApprovalRequestForm';
import ApprovalRequestTable from './Components/ApprovalRequestTable';
import EmployeeForm from './Components/EmployeeForm';
import EmployeeTable from './Components/EmployeeTable';
import LeaveRequestForm from './Components/LeaveRequestForm';
import LeaveRequestTable from './Components/LeaveRequestTable';
import ProjectForm from './Components/ProjectForm';
import ProjectTable from './Components/ProjectTable';

function App() {
  return (
    <div className="App">
      <EmployeeTable/>
      <EmployeeForm/>        
      <ProjectTable/>
      <ProjectForm/>
      <LeaveRequestTable/>
      <LeaveRequestForm/>
      <ApprovalRequestTable/>
      <ApprovalRequestForm/>
      
    </div>
  );
}

export default App;
