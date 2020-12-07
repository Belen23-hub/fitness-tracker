import React, {useState, useEffect} from 'react'




const URL_ACTIVITIES = 'https://fitnesstrac-kr.herokuapp.com/api/activities'

const Activities = (props) =>{
    const [activities, setActivities] = useState([]);

    const getActivities = async () => {
        const response = await fetch(URL_ACTIVITIES);
        const activities = await response.json();
        setActivities(activities);
    };
    


useEffect(() => {
    getActivities();
}, []);
return (
    <>
    <h1 className="activities-title">Activities</h1>
    <div className='activities'>
        {activities.map((activity) => {
            const {id, name,description} = activity;
        return (
            <div className='card-activity' key={id}>
                <h3 className="card-activity-name">{name}</h3>
                <h4 className='card-description'>Description: {description}</h4>
            </div>
        )
        })}
    </div>
    </>
)
};

export default Activities;


