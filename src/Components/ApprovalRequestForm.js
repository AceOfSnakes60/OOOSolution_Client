import { ApprovalStatusEnum } from "../api/selectionLists";
import { useState } from "react";
import axios from '../api/axios';

function ApprovalRequestForm() {
    const [formData, setFormData] = useState({
        approver: '',
        leaveRequest: '',
        approvalStatus: '',
        comment: ''
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
            const response = await axios.post('/Lists/ApprovalRequests', formData);
            console.log('Employee created:', response.data);
        } catch (error) {
            console.error('Error creating employee:', error);
        }
    }

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <div>
                    <div>
                        <label>Approver Id*:</label>
                        <input type="text" name="approver" value={formData.approver} onChange={handleChange} required />
                    </div>
                    <div>
                        <label>Leave Request Id*</label>
                        <input type="text" name="leaveRequest" value={formData.leaveRequest} onChange={handleChange} required/>
                    </div>
                    <div>
                        <label>Approval status*</label>
                        <select name="approvalStatus" value={formData.approvalStatus} onChange={handleChange} required >
                        <option value="" disabled>Select</option>
                        {ApprovalStatusEnum.map((sub, index) => {
                            return (<option key={index} value={index}>{sub}</option>)
                        })}
                        </select>
                    </div>
                    <div>
                        <label>Comment</label>
                        <input type="text" name="comment" value={formData.comment} onChange={handleChange} />
                    </div>
                    <h4>*required</h4>
                </div>
                <button type="submit">Create Project</button>
            </div>
        </form>
    )
}

export default ApprovalRequestForm;