import { useEffect, useState } from "react";
import NotesList from "./components/Notes";
import { nanoid } from 'nanoid';
import Search from './components/Search';
import Header from './components/Header';



const App = () => {
  const [notes, setNotes] = useState([
    {
      id: nanoid(),
      text: 'first note',
      date: '15/10/2021'
    },
    {
      id: nanoid(),
      text: 'second note ',
      date: '12/10/2021'
    },
    {
      id: nanoid(),
      text: 'more note',
      date: '13/10/2021'
    },
    {
      id: nanoid(),
      text: 'noooooootes wohoooo',
      date: '20/10/2021'
    }
  ]);

   // hooks
  const [searchText, setSearchText] = useState('');

  const [darkMode, setDarkMode] = useState(false);

  //saving the notes
   useEffect(()=> {
        const savedNotes = JSON.parse(localStorage.getItem('react-notes-app-data')
        );
        if(savedNotes){
          setNotes(savedNotes);
        }
   }, [])

  useEffect(() => {
    localStorage.setItem('react-notes-app-data', JSON.stringify(notes))
  }, [notes]);

  const addNote = (text) => {
    // console.log(text);
    const date = new Date()
    const newNote = {
      id: nanoid(),
      text: text,
      date: date.toLocaleDateString()

    }
    const newNotes = [...notes, newNote];
    setNotes(newNotes);

  }

  const deleteNote = (id) => {
    const newNotes = notes.filter((note) => note.id !== id)
    setNotes(newNotes);

  }

  return (
    <div className={`${darkMode && 'dark-mode'}`}>
      <div className='container'>
        <Header handleToggleDarkMode={setDarkMode} />
        <Search handleSearchNote={setSearchText} />
        <NotesList
          notes={notes.filter((note) => note.text.toLowerCase().includes(searchText))} handleAddNote={addNote}
          handleDeleteNote={deleteNote} />

      </div>
    </div>

  );
}



export default App;
