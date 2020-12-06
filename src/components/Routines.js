import React, {useState, useEffect} from 'react'





const URL_ROUTINES = 'http://fitnesstrac-kr.herokuapp.com/api/routines'

const Routines = (props) =>{
    const [routines, setRoutines] = useState([]);
     const [activities, setActivities] = useState([]);

    const getRoutines = async () => {
        const response = await fetch(URL_ROUTINES);
        const routines = await response.json();
        setRoutines(routines);
        console.log(routines)
    };
    


useEffect(() => {
    getRoutines();
}, []);


return (
    <>
    <h1>Routines</h1>
    <div>
        {routines.forEach((routine, index, []) => {
        return (
            <div className='card-activity' key={index}>
                <h3>Author:{routine.creatorId}</h3>
                <h4>isPublic: {routine.ReactisPublic}</h4>
                <h4>Name: {routine.name}</h4>
                <h4>Goal: {routine.goal}</h4>
                <h4>Author Name: {routine.creatorName}</h4>
                   <div >
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
            </div>
        )
    })} 
    </div>
    </>
)
}

export default Routines;

