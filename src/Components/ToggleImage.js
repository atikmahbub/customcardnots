import React , {useEffect, useState} from 'react'
import ToggleButton from '@material-ui/lab/ToggleButton';
import ToggleButtonGroup from '@material-ui/lab/ToggleButtonGroup';



const TogglemImage = ({getBackground}) => {

    const [groupValue, setGroupValue] = useState();
    console.log("888" , groupValue)
    const handleChange = (_event, value) => {
        if(value){
            setGroupValue(value);
        }
    };

    useEffect(()=>{
        if(getBackground){
            getBackground(groupValue)
        }
    },[groupValue,setGroupValue])


    return (
        <ToggleButtonGroup size="large" value={groupValue} exclusive onChange={handleChange} className = "toggle-Image">
            <ToggleButton value = "m1" aria-label="left aligned" className="toggle-image-item im1">
                +100$
            </ToggleButton>
            <ToggleButton value = "m2"  aria-label="left aligned" className="toggle-image-item im2">
                +100$
            </ToggleButton>
            <ToggleButton value = "m3"  aria-label="left aligned" className="toggle-image-item im3">
                +100$
            </ToggleButton>
            <ToggleButton value = "m4"  aria-label="left aligned" className="toggle-image-item im4">
               +100$
            </ToggleButton>

        </ToggleButtonGroup>
    )
}

export default TogglemImage
