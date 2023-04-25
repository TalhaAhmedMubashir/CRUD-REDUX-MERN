import { useDispatch } from "react-redux"
import { updateuser, deleteuser } from '../appslicer/appslicer'
import { useState } from "react"
import { useLocation, useNavigate } from 'react-router-dom';
import { updateContentbuttons,updateContent,updateContentDiv, updateStyle0, updateStyle1 } from "../Style/Style";


export default function UpdateUser() {
    const location = useLocation();
    const navigate = useNavigate();
    const queryObject = new URLSearchParams(location.search);
    const userParam = queryObject.get("user");
    const user = JSON.parse(decodeURIComponent(userParam));

    const dispatch = useDispatch();

    const [state, setstate] = useState(
        {
            name: user.name,
            age: user.age,
            contact: user.contact,
            id: user.id,
        }
    )

    function updatestate(e) {
        setstate(
            {
                ...state,
                [e.target.name]: e.target.value,
            }
        )
    }

    function send() {
        dispatch(updateuser(state))
        const url = "/";
        navigate(url)
    }

    function deleteData() {
        dispatch(deleteuser(state))
        const url = "/";
        navigate(url)
    }

    return (
        <div style={updateStyle0}>
            <div style={updateStyle1}>
                <h1>Update Data</h1>
                <div style={updateContentDiv}><input style={updateContent} name='name' placeholder="Name of student" value={state.name} onChange={(e) => { updatestate(e) }} /></div>
                <div style={updateContentDiv}><input style={updateContent} name="age" placeholder="Age of student" value={state.age} onChange={(e) => { updatestate(e) }} /></div>
                <div style={updateContentDiv}><input style={updateContent} name="contact" placeholder="Contact" value={state.contact} onChange={(e) => { updatestate(e) }} /></div>
                <div style={updateContentDiv}>
                    <button style={updateContentbuttons} onClick={send}>Update User</button>
                    <button style={updateContentbuttons} onClick={deleteData}>Delete</button>
                </div>
            </div>
        </div>
    )
}


