import { useNavigate } from 'react-router-dom';
import {loadDataStyleInner,loadDataStyleContent } from '../Style/Style';

export default function Display(props){ 
    const navigate = useNavigate();
    
    return(
        <div style={loadDataStyleInner} onClick={()=>{updateuserdetail(props.serverdata,navigate)}}>
            <div style={loadDataStyleContent}>{props.serverdata.name}</div>
            <div style={loadDataStyleContent}>{props.serverdata.age}</div>
            <div style={loadDataStyleContent}>{props.serverdata.contact}</div>
        </div>
    )
}

export function updateuserdetail(user,navigate){
    let url = {pathname: '/updatedata', search: `?user=${encodeURIComponent(JSON.stringify(user))}`}
    navigate(url);
}
