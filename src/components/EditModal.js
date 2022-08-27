import React, { useContext, useState } from "react";
import noteContext from "../context/notes/noteContext";
import { Box, Backdrop, Fade, Modal } from "@mui/material";
import AddNoteForm from "./AddNoteForm";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  boxShadow: 24,
  borderRadius: "5%",
  p: 4,
};

const EditModal = (props) => {
  const context = useContext(noteContext);
  const { editNote } = context;
  const { note, setOpen, open, Note, setNote } = props;
  // eslint-disable-next-line
  const [value, setValue] = useState("");
  const handleClose = () => setOpen(false);

  const handleClick = (e) => {
    console.log(note);
    e.preventDefault();
    const id = note._id;
    console.log(id);
    const { title, description, tag } = Note;
    console.log(title, description, tag);
    editNote({ id, title, description, tag });
    setNote({
      title: Note.title,
      description: Note.description,
      tag: Note.tag,
    });
  };

  const handleChange = (e) => {
    setValue(e.target.value);
    setNote({ ...Note, [e.target.name]: e.target.value });
  };

  const onChange = (e) => {
    setNote({ ...Note, [e.target.name]: e.target.value });
  };

  return (
    <>
      <div>
        <Modal
          aria-labelledby="transition-modal-title"
          aria-describedby="transition-modal-description"
          open={open}
          onClose={handleClose}
          closeAfterTransition
          BackdropComponent={Backdrop}
          BackdropProps={{
            timeout: 500,
          }}
        >
          <Fade in={open}>
            <Box sx={style}>
              <AddNoteForm
                handleChange={handleChange}
                onChange={onChange}
                handleClick={handleClick}
                Title={Note.title}
                Description={Note.description}
                Tag={Note.tag}
              />
            </Box>
          </Fade>
        </Modal>
      </div>
    </>
  );
};

export default EditModal;
