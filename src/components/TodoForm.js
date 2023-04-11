import React from "react";
import Container from "@material-ui/core/Container";
import { useSelector, useDispatch } from "react-redux";
import { setTitle, setError, addItem, editItem } from "../store/actions";
import { makeStyles, Grid, Button, TextField } from "@material-ui/core";

const useStyles = makeStyles({
  root: {
    marginTop: 16,
    marginBottom: 16,
    padding: 16,
    boxShadow:
      "0px 3px 5px -1px rgba(0,0,0,0.2), 0px 6px 10px 0px rgba(0,0,0,0.14), 0px 1px 18px 0px rgba(0,0,0,0.12)",
  },
  button: {
    marginTop: 16,
  },
});

const TodoForm = ({ ...props }) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const { title, edit, error } = useSelector((s) => s);

  const handleChange = (event) => {
    const title = event.target.value;
    dispatch(setTitle(title));
    if (title.length === 0) {
      dispatch(setError("Please enter title"));
    } else {
      dispatch(setError(""));
    }
  };

  const handleClick = () => {
    if (title.length === 0) {
      dispatch(setError("Please enter title"));
      return;
    }
    if (edit) {
      dispatch(editItem());
    } else {
      dispatch(addItem());
    }
  };
  return (
    <Container maxWidth="sm" className={classes.root}>
      <Grid container alignItems="center">
        <Grid item md={12}>
          <TextField
            value={title}
            onChange={handleChange}
            error={!!error}
            helperText={error}
            id="outlined-basic"
            fullWidth
            label="Enter Title"
            multiline
            variant="outlined"
          />
        </Grid>
        <Grid item md={12}>
          <Button
            className={classes.button}
            variant="contained"
            color="primary"
            onClick={handleClick}
          >
            {edit ? "Edit" : "Add"}
          </Button>
        </Grid>
      </Grid>
    </Container>
  );
};

export default TodoForm;
