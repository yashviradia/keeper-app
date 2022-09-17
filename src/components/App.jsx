import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import notes from "../notes.js";

function App() {
    return (
        <div>
            <Header />
            {notes.map(newNote => {
                return <Note key={newNote.id} id={newNote.id} title={newNote.title} content={newNote.content}/>
            })}
            <Footer />
        </div>
    );
}

export default App;