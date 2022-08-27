import React, { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import noteContext from "../context/notes/noteContext";
import NoteItems from "./NoteItems";

const Notes = () => {
  const context = useContext(noteContext);
  const { notes, fetchNotes } = context;
  let navigate = useNavigate();
  const fetched = React.useRef(false);

  useEffect(() => {
    if (fetched.current === false) {
      if (localStorage.getItem("token")) {
        fetchNotes();
      } else {
        navigate("/login");
      }
      // return () => {
      // +
      fetched.current = true; // +
    }
  }, []);

  return (
    <>
      <h2>All Notes</h2>
      {notes.length === 0 && "No notes. Created note will appear here"}
      {notes.map((note) => {
        return <NoteItems note={note} key={note._id} />;
      })}
    </>
  );
};

export default Notes;
