import { useEffect, useState } from "react";
import axios from '../api/axios';

function EmployeeTable(){
    const [employees, setEmployees] = useState([]);

    const fetchEmployees = async()=>{
        try{
            const response = await axios.get(`/Lists/employees`);
            const data = response.data || [];
            
            setEmployees(data)
        } catch(error){
            console.error('Error fetching employees: ', error);
        }
    }

    useEffect(() => {
        fetchEmployees();
    }, []);

    return (
        <div>
            <h1>Employees</h1>
            <div>
                <div>
                    <label>Search by name:</label>
                    <input type="text"></input>
                </div>
                {employees.length>0?(
                <table>
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>Full Name</th>
                            <th>Subdivision</th>
                            <th>Position</th>
                            <th>Employee Status</th>
                            <th>People Partner</th>
                            <th>Out of Office Balance</th>
                        </tr>
                    </thead>
                    <tbody>
                {employees.map((item, index)=>{

                    const fullName = item.fullName ?? 'N/A';
                    const subdivision = item.subdivision ?? 'N/A';
                    const position = item.position ?? 'N/A';
                    const employeeStatus = item.employeeStatus ?? 'N/A';
                    const peoplePartner = item.peoplePartner ?? 'EMPTY';
                    const outOfOfficeBalance = item.outOfOfficeBalance ?? 'N/A';
                    return(
                    <tr key={index}>
                        <th>{item.id}</th>
                        <td>{fullName}</td>
                        <td>{subdivision}</td>
                        <td>{position}</td>
                        <td>{employeeStatus}</td>
                        <td>{peoplePartner}</td>
                        <td>{outOfOfficeBalance}</td>
                    </tr>
                );
                    })}
        
                </tbody>
                </table>):<h2>No employees found</h2>}
            </div>
        </div>
    )

}

export default EmployeeTable;