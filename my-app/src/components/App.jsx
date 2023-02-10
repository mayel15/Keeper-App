import React, {useState} from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
    
    const [allNotes, setNotes] = useState([]);

    function addNote(newNote){     
        setNotes(prevValue => {
            return [
                ...prevValue,
                newNote
            ]
        })
    }

    function deleteNote(id){ 
        setNotes(prevValue=>{
            return prevValue.filter((noteItem, index)=>{
                return index !== id;
            })
        })
    }
           
  return (
    <div>
      <Header />
      <CreateArea 
        onAdd={addNote}
      />
      {allNotes.map((n, index) => {
        return (
            <Note 
                key={index} 
                id={index}
                deleteNote={deleteNote}
                title={n.title} 
                content={n.content}
            />
        )
      })}
      
      <Footer />
    </div>
  );
}

export default App;