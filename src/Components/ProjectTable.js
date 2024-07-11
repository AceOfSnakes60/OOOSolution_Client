import { useEffect, useState } from "react";
import axios from '../api/axios';

function ProjectTable(){
    const [projects, setProjects] = useState([]);

    useEffect(()=>{

            axios.get('/Lists/Projects').then(response=>{
                setProjects(response.data);
                console.log(response);
            }).catch(error => {
                console.error('Error fetching Projects: ', error);
            });
    },[])
    return (
        <div>
            <h1>Projects</h1>
                {projects.length>0?(
                    <table>
                        <thead>
                            <tr>
                                <th>Id</th>
                                <th>Project Type</th>
                                <th>Start Date</th>
                                <th>End Date</th>
                                <th>Manager</th>
                                <th>Comment</th>
                                <th>Project Status</th>
                            </tr>
                        </thead>
                    
                    <tbody>
                    {projects.map((item, index)=>{
                    return(
                    <tr key={index}>
                        <td>{item.id}</td>
                        <td>{item.startDate}</td>
                        <td>{item.endDate}</td>
                        <td>{item.manager}</td>
                        <td>{item.comment}</td>
                        <td>{item.projectStatus}</td>
                    </tr>
                   )}
                )
                }
                </tbody></table>
                ):<h2>Projects Not found</h2>}
        </div>
    )

}

export default ProjectTable;