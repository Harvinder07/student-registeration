import React, { useEffect, useState } from 'react';
import Button from '../../component/Button/Button';
import TextInput from '../../component/Input/TextInput';
import TextArea from '../../component/TextArea/TextArea';
import { useDispatch, useSelector } from 'react-redux';
import './student-registration.css'
import { addStudent } from '../../redux/action/studentAction';
import Radio from '../../component/Radio/Radio';

const StudentRegisteration = ({
    id,
}) => {
    const [data, setData] = useState({}); 
    const [imageURLs, setImageURLs] = useState([]);
    const dispatch = useDispatch();  
    const studentsList = useSelector((state) => state.allStudents.student);
    useEffect(() => {
        if(id){
            setData(studentsList[id])
        }
    }, [])
    const handleChange = (event) => {
        console.log(data, 'data')

        setData({
            ...data,
            [event.target.name]: event.target.value
        })
    }
    const submit = (e) => {
        e.preventDefault();
        if(id){
            console.log(studentsList[id], '111');
            console.log(...studentsList, '222');
            console.log(studentsList[id], '333')
            studentsList[id] = {...studentsList[id], ...data}
        } else{
            const finalData = {...data, imageURLs}
            dispatch(addStudent(finalData));
            e.target.reset()
        }
    }

    const fileSelectHandler = (e) => {
        const [ file ] = e.target.files
        console.log(file,'file')
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
            <div>
                <label>Select Gender</label>
                <Radio 
                    name="gender"
                    value={(studentsList[id] && studentsList[id].gender) || data.gender}
                    changed={handleChange}
                    options={gender}
                    selected={studentsList[id] && studentsList[id].gender}
                />
            </div>
            <TextInput 
                label="DOB"
                name="dob"
                inputType="date"
                inputValue={(studentsList[id] && studentsList[id].dob) || data.dob}
                placeholder="Date of Birth"
                changed={handleChange}
            />
            <div className='form-group'>
                <label>Country</label>
                <select className='form-control' name='country' onChange={handleChange}>
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

            <Button text="Submit" type="submit" variant="primary"/>

        </form>
    )
}

export default StudentRegisteration