import React from 'react';
import { Routes, Route } from "react-router-dom";
import StudentRegisteration from '../pages/student-registration/student-registration';
import ViewStudent from '../pages/view-students/view-students';

const Routing = () => {
    const route = [
        {
            path: '/',
            component: <StudentRegisteration />
        },,
        {
            path: './add-student',
            component: <StudentRegisteration />
        },
        {
            path: './view-student',
            component: <ViewStudent/>
        }
    ]
    return(
        <>
            <Routes>
                <Route path='/' element={<StudentRegisteration />}/>
                <Route path='/add-student' element={<StudentRegisteration />}/>
                <Route path='/view-student' element={<ViewStudent />}/>
                {/* {route.map((item) => {
                    const { path, component} = item;
                    return <Route key={path} path={path} element={component}/>
                })} */}
            </Routes>  
        </>
    )
}

export default Routing;