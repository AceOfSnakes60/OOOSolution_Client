import { useState } from 'react';
import axios from '../api/axios';
import { ProjectStatusEnum, ProjectTypeEnum, SubdivisionEnum } from '../api/selectionLists';

function ProjectForm() {
    const [formData, setFormData] = useState({
        projectType: '',
        startDate: '',
        endDate: '',
        manager: '',
        comment: '',
        projectStatus: ''
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
            const response = await axios.post('Lists/Projects', formData);
            console.log('Employee created:', response.data);
        } catch (error) {
            console.error('Error creating employee:', error);
        }
    }

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <div>
                    <label>Project Type*:</label>
                    <select name="projectType" value={formData.projectType} onChange={handleChange} required>
                        <option value="" disabled>Select</option>
                        {ProjectTypeEnum.map((sub, index) => {
                            return (<option key={index} value={index}>{sub}</option>)
                        })}
                    </select>
                </div>
                <div>
                    <label>Start Date*</label>
                    <input type="date" name="startDate" value={formData.startDate} onChange={handleChange} required />
                </div>
                <div>
                    <label>End Date</label>
                    <input type="date" name="endDate" value={formData.endDate} onChange={handleChange} />
                </div>
                <div>
                    <label>Manager</label>
                    <input type="text" name="manager" value={formData.manager} onChange={handleChange} required />
                </div>
                <div>
                    <label>comment</label>
                    <input type="text" name="comment" value={formData.peoplePartner} onChange={handleChange} />
                </div>
                <div>
                    <label>Project Status</label>
                    <select name="projectStatus" value={formData.projectStatus} onChange={handleChange} required>
                        <option value="" disabled>Select</option>
                        {ProjectStatusEnum.map((sub, index) => {
                            return (<option key={index} value={index}>{sub}</option>)
                        })}
                    </select>
                    <h4>*required</h4>
                </div>
                <button type="submit">Create Project</button>
            </div>
        </form>
    )
}

export default ProjectForm;