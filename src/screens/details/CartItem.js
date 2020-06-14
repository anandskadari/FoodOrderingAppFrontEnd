import React, { Component } from 'react';
import Icon from '@material-ui/icons/RadioButtonCheckedOutlined';
import IconButton from '@material-ui/core/IconButton';
import Add from '@material-ui/icons/Add';
import Remove from '@material-ui/icons/Remove';
import {Typography } from "@material-ui/core";
import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    paddingLeft: theme.spacing(3),
    paddingRight: theme.spacing(3),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }
})
class CartItem extends Component {

  render() {
    const { classes } = this.props;
    const color = this.props.cartItem.item.item_type === "NON_VEG" ? "red" : "green";
    return (
      <div>  
         {this.props.checkout !== true &&
          <div style={{ display: "flex", flexDirection: "row", width: "100%", padding: "1%" }}>
        <div style={{ width: "10%", display: "flex", alignItems: "center" }}><Icon style={{ color: color }} fontSize="small">circle</Icon></div>
        <div style={{ width: "40%", display: "flex", alignItems: "center", textTransform: "capitalize" }}><span style={{ color: "grey" }}> {this.props.cartItem.item.item_name} </span></div>
        <div style={{ display: "flex", alignItems: "center" }}>
          {/* <i  className="cartButton fa fa-minus" aria-hidden="true" onClick = {(event) => this.props.removeItem(this.props.cartItem)}></i> */}
          {this.props.checkout !== true &&
            <IconButton onClick={(event) => this.props.removeItem(this.props.cartItem)} aria-hidden="true"><Remove style={{ height: "100%" }} /></IconButton>}
        </div>
        <div style={{ display: "flex", alignItems: "center" }}> {this.props.cartItem.quantity} </div>
        <div style={{ display: "flex", alignItems: "center", paddingRight: "17%" }}>
          {/* <i  className="cartButton fa fa-plus" aria-hidden="true" onClick = {(event) => this.props.addItem(this.props.cartItem)}></i> */}
          {this.props.checkout !== true &&
            <IconButton onClick={(event) => this.props.addItem(this.props.cartItem)} aria-hidden="true"><Add style={{ height: "100%" }} /></IconButton>}

        </div>
        <div style={{ display: "flex", alignItems: "center", float: "right" }}><i className="fa fa-rupee-sign" aria-hidden="true"><span style={{ color: "grey" }}> {this.props.cartItem.item.price.toFixed(2)} </span></i></div>
      </div>}
      {this.props.checkout === true &&
         <div className={classes.root}>         
             <Grid container spacing={3}>
             <Grid item xs={2}>
             <Icon className={classes.paper} style={{ color: color }} fontSize="small">circle</Icon>
            </Grid>
            <Grid item xs={6} >
            <Typography className={classes.paper}>{this.props.cartItem.item.item_name}  </Typography>
            </Grid>
            <Grid item xs={2}>
            <Typography className={classes.paper}> {this.props.cartItem.quantity}</Typography>
            </Grid>
            <Grid item xs={2}>            
            <i className={classes.paper} className="fa fa-rupee-sign" >{this.props.cartItem.item.price}</i>
              </Grid>
             </Grid>
    </div>}
        </div>

        )
    }
}
export default  withStyles(styles)(CartItem);