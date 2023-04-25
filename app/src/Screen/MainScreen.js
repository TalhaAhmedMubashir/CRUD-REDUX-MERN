import { useSelector, useDispatch } from "react-redux"
import { useEffect } from "react"
import { getuser } from '../appslicer/appslicer'
import RegisterUser from "../Pages/Resgister"
import Display from '../Pages/ServerData'
import { DataLabel, mainScreenOne, mainScreenOneC2, loadDataStyle, loaddata, LoadDataLabel, loadDataServerLabel } from '../Style/Style';

export default function MainDisplayScreen() {
    const { userData } = useSelector((state) => state.myappuser)
    const dispatch = useDispatch();
    const loadatasec = 3000;

    useEffect(
        () => {
            const timerID = setInterval(() => dispatch(getuser()), loadatasec)
            return (() => clearInterval(timerID))
        }, []
    )

    return (
        <div style={mainScreenOne}>
            <div>
                <RegisterUser />
            </div>
            <div>
                {
                    (userData.length > 0 ? <LoadData userdata={userData} /> : "Loading Data...")
                }
            </div>
        </div>
    )
}
export function LoadData(props) {
    return (
        <div style={mainScreenOneC2}>
            <div style={loadDataServerLabel}><h4>Server Data</h4></div>
            <div style={loadDataStyle}>
                <div style={LoadDataLabel}>Name</div>
                <div style={LoadDataLabel}>Age</div>
                <div style={LoadDataLabel}>Contact</div>
            </div>
            <div>
                {
                    props.userdata.map((value, index) => {
                        return <Display serverdata={value} key={index} />
                    })
                }
                <label style={DataLabel}>Note: To update/delete any data click on it.</label>
            </div>
        </div>
    )
}