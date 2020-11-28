import React, { useState } from 'react'
import Activities from './Activities'
import '../index.css';

const URL_MY_ACTIVITIES = 'http://fitnesstrac-kr.herokuapp.com/api/activities'
const MyActivities = () => {
    const [activityName, setActivityName] = useState ('')
    const [activityDescription, setActivityDescription] = useState ('') 
    const [isDirty, setIsDirty] = useState (false)
    // const {addNewActivity} = props

    

    return (
        <>
        <div className='createNewActivity'>
            <form onSubmit={async (e) => {event.preventDefault()
                setIsDirty(true)
                if (name.length ===0) {
                    setIsDirty(true)
                    return
                }
                if (description.length ==0) {
                    setIsDirty(true)
                    return
                }
                const activityData = {
                    name: name,
                    description: description,
                }
                }}>
                <div className='my-activities'>
                <h2>Create My Activity</h2>
                <h3>Activity Name:</h3>
                <input value={activityName} onChange={(event) =>{
                    setActivityName(event.target.value)
                }}
                type="text" />
                {isDirty && title.length === 0 ? (
                <h3 style={{ color: 'red' }}>You need a title</h3>
                ) : null}
                <h3>Description:</h3>
                <textarea value={activityDescription} onChange={(e) => {
                setActivityDescription(e.target.value)
                }}
                type="text"/>
                {isDirty && description.length === 0 ? (
                <h3 style={{ color: 'red' }}>You need a description</h3>
                ) : null}
                <button>Create Activity</button>
                </div>
            </form>
        </div>
    </>
    )
}

export default MyActivities;
