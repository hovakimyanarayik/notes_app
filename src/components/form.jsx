import React, { useState, useContext } from 'react';
import { AlertContext } from '../context/alert/alertContext'
import { FirebaseContext } from '../context/firebase/firebaseContext';


const Form = () => {
    const [value, setValue] = useState('')
    const alert = useContext(AlertContext)
    const firebase = useContext(FirebaseContext)

    const submitHandler = e => {
        e.preventDefault()

        if(value.trim()) {
            firebase.addNote(value.trim())
            .then(() => {
                alert.show('Note has been created!', 'success')   
            }).catch(() => {
                alert.show('Something went wrong', 'danger')
            })
            
            setValue('')
        } else {
            alert.show('Enter title of node!')
        }
    }

    return ( 
        <form onSubmit={submitHandler}>
            <div className="form-group">
                <input 
                    type="text" 
                    className="form-control" 
                    placeholder='Enter notification'
                    value={value}
                    onChange={e => setValue(e.target.value)}
                />
            </div>
        </form>
     );
}
 
export default Form;