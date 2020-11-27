import React, {useState, useEffect} from 'react'
// import {URL_ACTIVITIES} from '../api/index'

const URL_ACTIVITIES = 'http://fitnesstrac-kr.herokuapp.com/api/activities'

const UseEffectFetchActivities = () =>{
    const [activities, setActivities] = useState([]);

    const getActivities = async () => {
        const response = await fetch(URL_ACTIVITIES);
        const activities = await response.json();
        setActivities(activities);
        console.log(activities)
 };
    


useEffect(() => {
    getActivities();
}, []);
return (
    <>
    <h3>Activities</h3>
    <div className='activities'>
        {activities.map((activity) => {
            const {id, name,description} = activity;
        return (
            <div key={id}>
                <h4>{name}</h4>
                <h4>{description}</h4>
            </div>
        )
        })}
    </div>
    </>
)
};

export default UseEffectFetchActivities;



