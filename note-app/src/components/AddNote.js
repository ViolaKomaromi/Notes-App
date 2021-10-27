import { useState } from "react";

const AddNote = ({ handleAddNote }) => {

    const [noteText, setNoteText] = useState('');

    const limit = 200;

    const handleChange = (e) => {
        // console.log(e.target.value);
        if (limit - e.target.value.length >= 0){
            setNoteText(e.target.value);
        }
        

    }

    // no empty spaces can be saved inside of the Note and reset the value of a new one
    const handleSaveClick = () => {
        if (noteText.trim().length > 0) {
            handleAddNote(noteText);
            setNoteText('');
        }

    };

    return (
        <div className='note new'>
            <textarea
                rows='8'
                cols='10'
                placeholder='type a note...'
                value={noteText}
                onChange={handleChange}
                
            ></textarea>

            🇨🇮 <div className='note-footer'>
                <small>{limit - noteText.length}</small>
                <button className='save' onClick={handleSaveClick}>Save</button>
            </div>
        </div>
    )
}

export default AddNote;

