import React from "react";
import {
  makeStyles,
  Container,
  Typography,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  IconButton,
  ListItemSecondaryAction,
} from "@material-ui/core";
import { useSelector, useDispatch } from "react-redux";
import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";
import CheckCircleIcon from "@material-ui/icons/CheckCircle";
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
