import React from "react";
import { TextField, Button } from "@mui/material";

const AddNoteForm = (props) => {
  const { handleChange, handleClick, onChange, Title, Description, Tag } =
    props;
  return (
    <div>
      <form onSubmit={handleClick}>
        <TextField
          fullWidth
          label="Title"
          sx={{ my: 2 }}
          value={Title}
          name="title"
          onChange={onChange}
          error={Title.length < 3 && Title.length > 0}
          required
        />
        <TextField
          fullWidth
          label="Note"
          sx={{ my: 2 }}
          multiline
          value={Description}
          name="description"
          onChange={handleChange}
          error={Description.length < 5 && Description.length > 0}
          required
        />
        <TextField
          fullWidth
          label="Tags"
          sx={{ my: 2 }}
          name="tag"
          value={Tag}
          onChange={onChange}
          error={Tag.length < 3 && Tag.length > 0}
          required
        />
        <Button
          variant="contained"
          color="success"
          sx={{ my: 2 }}
          type="submit"
          disabled={
            Title.length < 3 || Description.length < 5 || Tag.length < 3
              ? true
              : false
          }
        >
          Submit
        </Button>
      </form>
    </div>
  );
};

export default AddNoteForm;
