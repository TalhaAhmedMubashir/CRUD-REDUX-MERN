import { useDispatch} from "react-redux"
import { createuser } from '../appslicer/appslicer'
import { useState } from "react"
import { RegisterStyle , RegisterContent} from "../Style/Style";

export default function RegisterUser(){
    const dispatch = useDispatch();
    const [state, setstate] = useState(
        {
            name: "",
            age: "",
            contact: "",
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
        if(state.name.length>0){
            dispatch(createuser(state))
        }

    }

    return (
        <div style={RegisterStyle}>
            <h2>Registeration</h2>
            <input style={RegisterContent} name='name' placeholder="Name of student" onChange={(e) => { updatestate(e) }} />
            <br />
            <input style={RegisterContent} name="age" placeholder="Age of student" onChange={(e) => { updatestate(e) }} />
            <br />
            <input style={RegisterContent} name="contact" placeholder="Contact" onChange={(e) => { updatestate(e) }} />
            <br />
            <button style={RegisterContent} onClick={send}>Create User</button>
        </div>
    )    
}

