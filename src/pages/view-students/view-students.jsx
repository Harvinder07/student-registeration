import React, { useState } from 'react';
import './view-students.css';
import { useSelector } from 'react-redux';
import Button from '../../component/Button/Button';
import Modal from '../../component/Modal/Modal';
import StudentRegisteration from '../student-registration/student-registration';


const ViewStudent = () => {
    const [showDeleteModal, setShowDeleteModal] = useState(false);
    const [showEditModal, setShowEditModal] = useState(false);
    const [editId, setEditId] = useState();
    const studentsList = useSelector((state) => state.allStudents.student);  

    const confirmationModal = (idx) => {
        studentsList.splice(idx, 1)
        setShowDeleteModal(true)
    } 
    
    const close = () => {
        setShowDeleteModal(false)
        setShowEditModal(false)
    }
    let editStudentId;
    const editDetail = (idx) => {
        setEditId(idx);
        setShowEditModal(true);
    }

    return(
        <>
            <table>
                <thead>
                    <th>Image</th>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Father Name</th>
                    <th>Email ID</th>
                    <th>Address</th>
                    <th>Mobile no.</th>
                    <th>Gender </th>
                    <th>DOB</th>
                    <th>Country </th>
                    <th>action</th>
                </thead>
                <tbody>
                    {studentsList.map((student, idx) => {
                        console.log('inside',idx)
                        return(
                            <tr key={student.firstname + idx}>
                                <td><img className='rowimg' src={student.imageURLs && student.imageURLs[0]} /></td>
                                <td>{student.firstname}</td>
                                <td>{student.lastname}</td>
                                <td>{student.fathername}</td>
                                <td>{student.emailid}</td>
                                <td>{student.address}</td>
                                <td>{student.mobilenumber}</td>
                                <td>{student.gender}</td>
                                <td>{student.dob}</td>
                                <td>{student.country}</td>
                                <td>
                                    <button onClick={() => editDetail(idx)}><i className='fas fa-pencil'></i></button>
                                    <button onClick={() => confirmationModal(idx)}><i className='fas fa-trash'></i></button>
                                </td>
                                
                            </tr>
                        )
                    })}
                    {studentsList.length === 0 && <tr> <td className='nodata' colspan="11" align='center'> No Record Found</td></tr>}
                </tbody>
            </table>
            {
                showDeleteModal && <Modal onclose={close}><p>Student entery has been deleted</p></Modal>
            }
            {console.log(editStudentId, 'editStudentId')}
            {
                showEditModal && <Modal onclose={close}><StudentRegisteration id={editId}/></Modal>
            }
        </>
    )
}

export default ViewStudent