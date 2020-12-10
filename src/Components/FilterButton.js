import React, { useState } from "react"
import { Button, makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  button: {
    margin: "0.5em 1em 0 0",
    borderRadius: "21px",
  },
}));
const FilterButton = ({ setClearFilter, value, handleFilter }) => {

  const [clicked, setClicked] = useState(true)

  const handleClick = () => {
    setClicked(!clicked)
    if (clicked) {
      handleFilter(value)
      setClearFilter()
    }
    !clicked && setClearFilter("clear")
  }
  const classes = useStyles();
  return (
    <Button className={classes.button} onClick={handleClick} variant={clicked ? "outlined" : "contained"}  >
      {value}
    </Button>
  )
}


export default FilterButton