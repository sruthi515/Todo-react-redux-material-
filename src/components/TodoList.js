import React from "react";
import Container from "@material-ui/core/Container";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import ListItemText from "@material-ui/core/ListItemText";
import IconButton from "@material-ui/core/IconButton";
import CheckCircleIcon from "@material-ui/icons/CheckCircle";
import * as actionTypes from "../store/actions";
import { useSelector, useDispatch } from "react-redux";
import { setEdit, setItem, deleteItem, setTitle } from "../store/actions";

const useStyles = makeStyles({
  container: {
    padding: 16,
  },
});

function TodoList({ ...props }) {
  const classes = useStyles();
  const dispatch = useDispatch();
  const { items = [] } = useSelector((s) => s);

  const handleEdit = (item) => {
    dispatch(setTitle(item.value));
    dispatch(setEdit());
    dispatch(setItem(item));
  };

  const handleDelete = (item) => {
    dispatch(setItem(item));
    dispatch(deleteItem());
  };
  return (
    <Container className={classes.container} maxWidth="md">
      {!items.length ? (
        <Typography variant="h6" color="error">
          No Data to display
        </Typography>
      ) : (
        <List>
          {items.map((item) => {
            return (
              <ListItem key={item.id} button>
                <ListItemIcon>
                  <CheckCircleIcon color="primary" />
                </ListItemIcon>

                <ListItemText primary={item.value} />
                <ListItemSecondaryAction>
                  <IconButton
                    edge="end"
                    aria-label="edit"
                    onClick={() => handleEdit(item)}
                  >
                    <EditIcon />
                  </IconButton>
                  <IconButton
                    edge="end"
                    aria-label="delete"
                    onClick={() => handleDelete(item)}
                  >
                    <DeleteIcon />
                  </IconButton>
                </ListItemSecondaryAction>
              </ListItem>
            );
          })}
        </List>
      )}
    </Container>
  );
}

export default TodoList;
