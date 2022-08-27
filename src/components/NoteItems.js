import React, { useContext, useState } from "react";
import noteContext from "../context/notes/noteContext";
import {
  Card,
  CardContent,
  Typography,
  IconButton,
  Tooltip,
  Box,
} from "@mui/material";

import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import ModeEditOutlinedIcon from "@mui/icons-material/ModeEditOutlined";
import EditModal from "./EditModal";

const NoteItems = (props) => {
  const context = useContext(noteContext);
  const { deleteNote } = context;
  const { note } = props;
  const [open, setOpen] = useState(false);
  const [Note, setNote] = useState({ title: "", description: "", tag: "" });

  const handleEditClick = () => {
    setOpen(true);
    console.log(note);
    setNote({
      title: note.title,
      description: note.description,
      tag: note.tag,
    });
  };

  return (
    <>
      <Card sx={{ minWidth: 275, my: 2, boxShadow: 3, borderRadius: 3 }}>
        <CardContent>
          <Typography variant="h5" component="div">
            {note.title}
          </Typography>
          <Typography sx={{ mb: 1.5 }} color="text.secondary">
            {note.tag}
          </Typography>
          <Typography variant="body2">{note.description}</Typography>
        </CardContent>
        <Box sx={{ m: 1 }}>
          <Tooltip
            title="Delete"
            onClick={() => {
              deleteNote(note._id);
            }}
          >
            <IconButton>
              <DeleteOutlineOutlinedIcon />
            </IconButton>
          </Tooltip>
          <Tooltip
            title="Edit"
            onClick={() => {
              handleEditClick();
            }}
          >
            <IconButton>
              <ModeEditOutlinedIcon />
            </IconButton>
          </Tooltip>
        </Box>
      </Card>
      {/* Edit Modal */}
      <EditModal
        setOpen={setOpen}
        open={open}
        note={note}
        setNote={setNote}
        Note={Note}
      />
    </>
  );
};

export default NoteItems;
