import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../providers/AuthProvider";


const MyToys = () => {
    const {user}=useContext(AuthContext)
    console.log(user);
    const [toys,SetToys]=useState();
    useEffect(()=>{
        fetch(`http://localhost:5000/addToys/${user?.email}`)
        .then(res=>res.json())
        .then(data=>{
            console.log(data);
            SetToys(data)
        })
    },[user])
    return (
        <div>
            <p>jfweifojweiofghjwefh</p>
        </div>
    );
};

export default MyToys;