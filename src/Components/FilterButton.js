import React, {useState} from "react"
import { Button, makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    button:{
      marginRight:"1.4rem",
      borderRadius: "21px",
    }
  }));
const FilterButton = ({setClearFilter, value, handleFilter})  => {
    
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
    return(
        <Button className={classes.button} onClick={handleClick} variant="outlined"  >
        {value}
      </Button>
    )
}


export default FilterButton