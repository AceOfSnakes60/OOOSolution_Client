import { useState } from 'react';
import axios from '../api/axios';
import { AbsenceReasonEnum, EmployeeStatusEnum, PositionEnum, SubdivisionEnum } from '../api/selectionLists';

function LeaveRequestForm() {
    const [formData, setFormData] = useState({
        employee: '',
        absenceReason: '',
        startDate: '',
        endDate: '',
        comment: '',
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
            const response = await axios.post('Lists/LeaveRequests', formData);
            console.log('Leave Request created:', response.data);
        } catch (error) {
            console.error('Error creating Leave Request:', error);
        }
    }

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <div>
                    <label>Employee:</label>
                    <input type="text" name="employee" value={formData.fullName} onChange={handleChange} required />
                </div>
                <div>
                    <label>Absence Reason</label>
                    <select name="absenceReason" value={formData.subdivision} onChange={handleChange} required>
                        <option value="" disabled>Select</option>
                        {AbsenceReasonEnum.map((sub, index) => {
                            return (<option key={index} value={index}>{sub}</option>)
                        })}
                    </select>
                </div>
                <div>
                    <label>Start Date</label>
                    <input type="date" name="startDate" value={formData.position} onChange={handleChange} required/>
                </div>
                <div>
                    <label>End Date</label>
                    <input type="date" name="endDate" value={formData.employeeStatus} onChange={handleChange} required/>
                </div>
                <div>
                    <label>Comment</label>
                    <input type="text" name="comment" value={formData.peoplePartner} onChange={handleChange} />
                </div>
                <button type="submit">Create Leave Request</button>
            </div>
        </form>
    )
}

export default LeaveRequestForm;