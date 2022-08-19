import React, { useEffect, useState } from 'react';
import {useNavigate} from 'react-router-dom';
import Button from '../../component/Button/Button';
import TextInput from '../../component/Input/TextInput';
import TextArea from '../../component/TextArea/TextArea';
import { useDispatch, useSelector } from 'react-redux';
import './student-registration.css'
import { addStudent } from '../../redux/action/studentAction';
import Radio from '../../component/Radio/Radio';
import PropTypes from 'prop-types'


const StudentRegisteration = ({
    id,
    type
}) => {
    const [data, setData] = useState({}); 
    const [imageURLs, setImageURLs] = useState([]);
    const dispatch = useDispatch();  
    const history = useNavigate();
    const studentsList = useSelector((state) => state.allStudents.student);
    useEffect(() => {
        if(id !== undefined && type === 'edit'){
            setData(studentsList[id])
        }
    }, [])
    const handleChange = (event) => {
        setData({
            ...data,
            [event.target.name]: event.target.value
        })
    }
    const submit = (e) => {
        e.preventDefault();
        if(id && type === 'edit'){
            studentsList[id] = {...studentsList[id], ...data}
        } else{
            const finalData = {...data, imageURLs}
            dispatch(addStudent(finalData));
            e.target.reset()
            history('/view-student')
        }
    }

    const fileSelectHandler = (e) => {
        const [ file ] = e.target.files
        const newImageURL = URL.createObjectURL(file);
        setImageURLs([...imageURLs, newImageURL]);
    };
    
    const gender = ['male', 'female', 'transgender', 'other']
    
    return(
        <form className='form' onSubmit={submit}>
            <TextInput 
                label="First Name"
                name="firstname"
                inputType="text"
                inputValue={data.firstname}
                placeholder="First Name"
                changed={handleChange}
            />
            <TextInput 
                label="Last Name"
                name="lastname"
                inputType="text"
                inputValue={ data.lastname}
                placeholder="Last Name"
                changed={handleChange}
            />
            <TextInput 
                label="Father Name"
                name="fathername"
                inputType="text"
                inputValue={data.fathername}
                placeholder="Father Name"
                changed={handleChange}
            />
            <TextInput 
                label="Email ID"
                name="emailid"
                inputType="email"
                inputValue={ data.emailid}
                placeholder="Email ID"
                changed={handleChange}
            />
            <TextArea 
                placeholder="Enter your complete Address"
                name="address"
                inputValue={ data.address}
                label="Address"
                changed={handleChange}
            />
            <TextInput 
                label="Mobile No."
                name="mobilenumber"
                inputType="number"
                inputValue={ data.mobilenumber}
                placeholder="Mobile No."
                maxlength={10}
                changed={handleChange}
            />
            <div className='mb-3'>
                <label>Select Gender</label>
                <Radio 
                    name="gender"
                    value={data.gender}
                    changed={handleChange}
                    options={gender}
                    selected={data.gender || studentsList[id] && studentsList[id].gender}
                />
            </div>
            <TextInput 
                label="DOB"
                name="dob"
                inputType="date"
                inputValue={data.dob}
                placeholder="Date of Birth"
                changed={handleChange}
            />
            <div className='form-group'>
                <label>Country</label>
                <select className='form-control' name='country' onChange={handleChange}>
                    <option value="" disabled>Select Country</option>
                    <option value="India">India</option>
                    <option value="Singapore">Singapore</option>
                    <option value="America">America</option>
                    <option value="Australia">Australia</option>
                </select>
            </div>
            <div className="d-flex gap12">
                <div className='uploaded-img gap12'>
                {(imageURLs || studentsList[id].imageURLs).map((url) => (
                    <div className='upload no-border'>
                        <img src={url} />
                    </div>
                ))}
                </div>
                <div className='upload-file'>
                    <input
                        id="imageFile"
                        type="file"
                        accept="image/*"
                        name="upload"
                        className="fileupload"
                        multiple
                        onChange={(e) =>
                            fileSelectHandler(e)
                        }
                    />
                    <button className='upload'><i className='fas fa-plus'></i></button>

                </div>
            </div>

            <div className='mt-2'><Button text="Submit" type="submit" width="full" variant="primary"/></div>

        </form>
    )
}

StudentRegisteration.propTypes = {
    id: PropTypes.number,
    type:PropTypes.string
  };

export default StudentRegisteration