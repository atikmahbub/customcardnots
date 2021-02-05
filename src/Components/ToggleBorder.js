import React,{useEffect} from 'react'
import ToggleButton from '@material-ui/lab/ToggleButton';
import ToggleButtonGroup from '@material-ui/lab/ToggleButtonGroup';
import B1 from '../Assets/images/border/b1.png'
import B2 from '../Assets/images/border/b2.png'


const ToggleBorder = ({getValue}) => {

    const [groupValue, setGroupValue] = React.useState();
 
    const handleChange = (_event, value) => {
        if(value){
            setGroupValue(value);
        }
    };

    useEffect(()=>{
        if(getValue){
            getValue(groupValue)
        }
    },[,groupValue,setGroupValue])


    return (
        <ToggleButtonGroup size="large" value={groupValue} exclusive onChange={handleChange} className = "toggle-border">
            <ToggleButton value = "b1" aria-label="left aligned" className="border-toggle-item" >
                <img src={B1} className="img-border"/>
                <div className="border-price">+5$</div>
            </ToggleButton>
           
            <ToggleButton value = "b2"  aria-label="left aligned" className="border-toggle-item">
                <img src={B2}  className="img-border"/>
                <div className="border-price">+5$</div>
            </ToggleButton>
            <ToggleButton value = "none"  aria-label="left aligned" className="border-toggle-item">
                
                <div className="border-price">None</div>
            </ToggleButton>
        </ToggleButtonGroup>
    )
}

export default ToggleBorder
