import { useState } from 'react'

const AddTask = ({ onAdd }) => {
    const [text, setText] = useState('');
    const [day, setDay] = useState('');
    const [reminder, setReminder] = useState(false);

    // SUBMIT the form
    // Here we are performing some validation
    // before submitting the form.
    const onSubmit = (e) => {
        e.preventDefault();

        if(!text) {
            alert('Cannot leave fields empty!')
            return;
        }

        onAdd({ text, day, reminder });

        setText('');
        setDay('');
        setReminder(false);
    }

    return (
        <form className = 'add-form' onSubmit = {onSubmit}>
            <div className = 'form-control'>
                <label>Task</label>
                <input type = 'text' placeholder = 'Add task'
                value = {text} onChange = {(e) => setText(e.target.value)} />
            </div>
            <div className = 'form-control'>
                <label>Day & Time</label>
                <input type = 'text' placeholder = 'Add Day & Time' 
                value = {day} onChange = {(e) => setDay(e.target.value)} />
            </div>
                <div className = 'form-control form-control-check'>
                <label>Set Reminder</label>
                <input type = 'checkbox' value = {reminder} 
                onChange = {(e) => setReminder(e.currentTarget.checked)} />
            </div>
            <div className = 'form-control'>
                <input type = 'submit' placeholder = 'Add task' 
                value = 'Save Task' className = 'btn btn-block' />
            </div>
        </form>
    )
}

export default AddTask
