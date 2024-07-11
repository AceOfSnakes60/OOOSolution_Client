import { useEffect, useState } from "react";
import axios from '../api/axios';

function LeaveRequestTable(){
    const [leaveRequest, setLeaveRequest] = useState([]);
    const [approve, setApprove] = useState()

    useEffect(()=>{

            axios.get('/Lists/LeaveRequests').then(response=>{
                setLeaveRequest(response.data);
            }).catch(error => {
                console.error('Error fetching Leave Request: ', error);
            });
    },[])

    const handleApproveClick = (e)=>{
        e.preventDefault();

        setApprove(e.target.id)

    }
    return (
        <div>
            <h1>Leave Request</h1>
            {leaveRequest.length>0?(
                <table>
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>Employee</th>
                            <th>Absence Reason</th>
                            <th>Start Date</th>
                            <th>End Date</th>
                            <th>comment</th>
                            <th>Approval Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {leaveRequest.map((item, index) =>{
                            return(
                                <tr key={index}>
                                    <td>{item.id}</td>
                                    <td>{item.employee}</td>
                                    <td>{item.absenceReason}</td>
                                    <td>{item.startDate}</td>
                                    <td>{item.endDate}</td>
                                    <td>{item.comment}</td>
                                    <td>{item.approvalStatus}</td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
            ) : <h2> No Leave Requests Found</h2>}
        </div>
    )

}

export default LeaveRequestTable;