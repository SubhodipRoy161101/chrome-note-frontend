import React, { useContext, useState } from "react";
import noteContext from "../context/notes/noteContext";
import AddNoteForm from "./AddNoteForm";

const Addnote = () => {
  const [value, setValue] = useState("");
  const [Note, setNote] = useState({ title: "", description: "", tag: "" });

  const handleChange = (e) => {
    setValue(e.target.value);
    setNote({ ...Note, [e.target.name]: e.target.value });
  };

  const onChange = (e) => {
    setNote({ ...Note, [e.target.name]: e.target.value });
  };

  const handleClick = (e) => {
    e.preventDefault();
    addNote(Note.title, Note.description, Note.tag);
    setNote({ title: "", description: "", tag: "" });
  };

  const context = useContext(noteContext);
  const { addNote } = context;
  return (
    <>
      <h2>Add Note : </h2>
      <AddNoteForm
        handleChange={handleChange}
        onChange={onChange}
        handleClick={handleClick}
        Title={Note.title}
        Description={Note.description}
        Tag={Note.tag}
        value={value}
      />
    </>
  );
};

export default Addnote;
