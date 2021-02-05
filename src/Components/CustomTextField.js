import React from 'react'
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles({
    root: {
      "& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
        borderColor: "#EFE436"
      },
      "&:hover .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
        borderColor: "#EFE436"
      },
      "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline": {
        borderColor: "#EFE436"
      },
      "& .MuiInputLabel-outlined.Mui-focused": {
        color: "black"
      }
    }
  });


const CustomTextField = ({label , value , onChange}) => {
    const classes = useStyles()
    return (
        <React.Fragment>
            <TextField 
                variant="outlined"
                label={label}
                fullWidth
                className = {classes.root}
                value = {value}
                onChange = {onChange}
            />
        </React.Fragment>
    )
}

export default CustomTextField
