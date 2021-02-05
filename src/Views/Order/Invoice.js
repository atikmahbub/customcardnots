import React from 'react'
import { Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
      backgroundColor: theme.palette.background.paper,
    },
    checkout : {
      background : "#DAA520",
      color : "#fff",
      boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
      '&:hover': {
        backgroundColor: "#DAA520",
        color: '#FFF'
    }
    }
  }));

function Invoice({data}) {
    const classes = useStyles()

    const [invoiceDetails, setInvoiceDetails] = React.useState({
        item : null,
        totalPrice : 100,
    })


    React.useEffect(()=>{
        if(data){
            if(data.border && data.border !== 'none'){
                setInvoiceDetails({
                    item : {Text : 'Border' , Price : "+5$"},
                    totalPrice : 100 + 5,
                })
            }
            if(data.border && data.border === 'none'){
                setInvoiceDetails({
                    item : null,
                    totalPrice : 100
                })
            }
        }
    },[data])
    return (
        <>
            {
            invoiceDetails.item &&
                <div className="row  extra-fac">
                    <div>
                        {invoiceDetails.item?.Text}
                    </div>
                    <div>
                        {invoiceDetails.item?.Price}
                    </div>
                </div>
            }
            <hr></hr>
            <div className="row">
                <div className="col-md-12 price">
                    <div>
                        <Button variant="contained"  className={classes.checkout} size="large" fullWidth>
                            Checkout
                        </Button>
                        </div>
                    <div>Total</div>
                    <div>{invoiceDetails.totalPrice}$</div>
                </div>
            </div>
        </>
    )
}

export default Invoice