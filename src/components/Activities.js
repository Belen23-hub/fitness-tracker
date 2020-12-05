import React, {useState, useEffect} from 'react'
// import {URL_ACTIVITIES} from '../api/index'
import {Auth} from "./Auth";


const URL_ACTIVITIES = 'http://fitnesstrac-kr.herokuapp.com/api/activities'

const Activities = (props) =>{
    const [activities, setActivities] = useState([]);

    const getActivities = async () => {
        const response = await fetch(URL_ACTIVITIES);
        const activities = await response.json();
        setActivities(activities);
        // console.log(activities)
    };
    


useEffect(() => {
    getActivities();
}, []);
return (
    <>
    <h2>Activities</h2>
    <div className='activities'>
        {activities.map((activity) => {
            const {id, name,description} = activity;
        return (
            <div className='card-activity' key={id}>
                <h4>{name}</h4>
                <h4 className='description'>{description}</h4>
            </div>
        )
        })}
    </div>
    </>
)
};

export default Activities;


