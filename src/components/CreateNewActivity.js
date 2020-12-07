import React, { useState } from 'react'
import Activities from './Activities'
import '../index.css';
import { useHistory } from 'react-router-dom'
import {hitAPI} from '../api/index'

const URL_MY_ACTIVITIES = 'https://fitnesstrac-kr.herokuapp.com/api/activities'

const CreateNewActivity = () => {

    const [name, setActivityName] = useState ('')
    const [description, setActivityDescription] = useState ('') 
    const [isDirty, setIsDirty] = useState (false)
    const history = useHistory()


    return (
        <>
        <div className='createNewActivity'>
            <form onSubmit={async (e) => {
                event.preventDefault()
                setIsDirty(true)
                if (name === name ) {
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
                try {
                const result = await hitAPI('POST', '/activities', activityData)
                console.log(result)
                
                name(result.activity)
                console.log(result)
                } catch (error) {
                console.error(error)
                }
                setActivityName('')
                setActivityDescription('')
                history.push('/activities')
                }}>
                <div className='my-activities'>
                <h2 className="my-activites-title">Create My Activity</h2>
                <input className="activity-name-input" placeholder="Activity Name" value={name} onChange={(event) =>{
                    setActivityName(event.target.value)
                }}
                type="text" />
                {isDirty && name === name  ? (
                <h2 style={{ color: 'red' }}>Activity already exists</h2>
                ) : null}
                <textarea className="my-activity-description-area" placeholder="Activity Description"value={description} onChange={(event) => {
                setActivityDescription(event.target.value)
                }}
                type="text"/>
                {isDirty && description.length === 0 
                ? (<h2 style={{ color: 'red' }}>You need a description</h2>
                ) : null}
                <button className="my-activities-button">Create Activity</button>
                </div>
            </form>
        </div>
    </>
    )
}

export default CreateNewActivity;
