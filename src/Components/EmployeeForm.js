import { useState } from 'react';
import axios from '../api/axios';
import { EmployeeStatusEnum, PositionEnum, SubdivisionEnum } from '../api/selectionLists';

function EmployeeForm() {
    const [formData, setFormData] = useState({
        fullName: '',
        subdivision: '',
        position: '',
        employeeStatus: '',
        peoplePartner: '',
        outOfOfficeBalance: ''
    })

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('Lists/employees', formData);
            console.log('Employee created:', response.data);
        } catch (error) {
            console.error('Error creating employee:', error);
        }
    }

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <div>
                    <label>Full Name:</label>
                    <input type="text" name="fullName" value={formData.fullName} onChange={handleChange} required />
                </div>
                <div>
                    <label>Subdivision</label>
                    <select name="subdivision" value={formData.subdivision} onChange={handleChange} required>
                        <option value="" disabled>Select</option>
                        {SubdivisionEnum.map((sub, index) => {
                            return (<option key={index} value={index}>{sub}</option>)
                        })}
                    </select>
                </div>
                <div>
                    <label>Position</label>
                    <select name="position" value={formData.position} onChange={handleChange} required>
                        <option value="" disabled>Select</option>
                        {PositionEnum.map((sub, index) => {
                            return (<option key={index} value={index}>{sub}</option>)
                        })}
                    </select>
                </div>
                <div>
                    <label>Employee Status</label>
                    <select name="employeeStatus" value={formData.employeeStatus} onChange={handleChange} required>
                        <option value="" disabled>Select</option>
                        {EmployeeStatusEnum.map((sub, index) => {
                            return (<option key={index} value={index}>{sub}</option>)
                        })}
                    </select>
                </div>
                <div>
                    <label>People Partner</label>
                    <input type="number" name="peoplePartner" value={formData.peoplePartner} onChange={handleChange} />
                </div>
                <div>
                    <label>Out of Office Balance</label>
                    <input type="number" name="outOfOfficeBalance" value={formData.outOfOfficeBalance} onChange={handleChange} />
                </div>
                <button type="submit">Create Employee</button>
            </div>
        </form>
    )
}

export default EmployeeForm;