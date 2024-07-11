import { useEffect, useState } from "react";
import axios from '../api/axios';

function ApprovalRequestTable(){
    const [approvalRequest, setApprovalRequest] = useState([]);

    useEffect(()=>{


            axios.get('/Lists/ApprovalRequests').then(response=>{
                setApprovalRequest(response.data);
            }).catch(error => {
                console.error('Error fetching Approval Request: ', error);
            });
        

    },[])
    return (
        <div>
            <h1>Approval Request</h1>
                {approvalRequest.length>0?(
                    <table>
                        <thead>
                            <tr>
                                <th>Id</th>
                                <th>Approver</th>
                                <th>Leave Request</th>
                                <th>Approval Status</th>
                                <th>Comment</th>
                            </tr>
                        </thead>
                        <tbody>{
                    approvalRequest.map((item, index)=>{
                        <tr key={index}>
                        <td>{item.id}</td>
                        <td>{item.approver}</td>
                        <td>{item.leaveRequest}</td>
                        <td>{item.approvalStatus}</td>
                        <td>{item.comment}</td>
                        </tr>
                    })
                }
                    </tbody>
                </table>
            ): <h2>No Approval Requests found</h2>}
        </div>
    )

}

export default ApprovalRequestTable;