import React, {Component} from 'react';
import '../App.css';
export class QuickMenu extends Component{

    closeNav = ()=>{
        document.getElementById("mySidenav").style.width = "0";

    }

    openNav = ()=>{
        document.getElementById("mySidenav").style.width = "250px";
 
    }

    render(){
        const sidenav ={
            height: '100%',
            width: '0',
            position: 'fixed',
            zIndex: '1',
            top: '0',
            left: '0',
            backgroundColor: '#111',
            overflowX: 'hidden',
            transition: '0.5s',
            paddingTop: '60px',
            fontFamily: "Lato", 
            //backgroundColor: '#1abc9c',
            color:'white'
           
          }
          const  anchor =  {
            padding: '8px 8px 8px 32px',
            textDecoration: 'none',
            fontSize: '25px',
            //color: '#818181',
            display: 'block',
            transition: '0.3s'
          }
          const openNavbt = {
            fontSize:'30px',
            cursor:'pointer'
          }

          const  closebtn ={
            position: 'absolute',
            top: 0,
            right: '25px',
            fontSize: '36px',
            marginLeft: '50px'
          }

        return (
            <div>
                <div className = "sidenav" id="mySidenav" style = {sidenav}>
                    <a href="javascript:void(0)" className="closebtn" onClick={this.closeNav}>&times;</a>
                    <a href="#" style  = {anchor}>About</a>
                    <a href="#" style  = {anchor}>Services</a>
                    <a href="#" style  = {anchor}>Clients</a>
                    <a href="#" style  = {anchor}>Contact</a>
                </div>
                <span style={openNavbt} onClick={this.openNav}>&#9776; </span>
            </div>
        )
    }
}
export default QuickMenu