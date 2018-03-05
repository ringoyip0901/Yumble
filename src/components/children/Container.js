import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import "../../css/index.css"
import FlatButton from 'material-ui/FlatButton';
import FloatingActionButton from 'material-ui/FloatingActionButton'
import check from '../../../images/cutlery.svg'
import cross from '../../../images/eat.svg'
import logo from '../../../images/logo.svg'
import coffee from '../../../images/coffee-cup.svg'


const Container = (props) => {

  const likeFunction = (name, image, link, rating, location, phone, price) => {
    props.save(name, image, link, rating, location, phone, price)
    return props.count();
  }

  const increment = () => {
    return props.count();
  }

  const style = {
    flatbutton: {
     borderRadius: 13,
    }, 
    flatAction: {
      marginRight: 20,
    }
  }

  return (
    <section id="container">
      <header className="container-title">
        <h1>Yumble <img id="logo" src={logo} /></h1>
      </header>
      <div id="input">
        <form>
          <input type="text" id="category" name="category" placeholder="Look up restaurants!"></input>
          <input type="text" id="location" name="location" placeholder="Where?"></input><FlatButton onClick={props.press} label="Search" backgroundColor="white" labelStyle={style.flatbutton} hoverColor="#FB4672"/> 
        </form>
      </div>
      <div id="frame">
        <img id="frameImage" src={props.image}></img>
        <div id="name">
          <p>{props.name}</p>
        </div>
      </div>
      <div id="buttons">
        <div className="hvr-pulse-grow" id="likeButton">
          <FloatingActionButton onClick={() => likeFunction(props.name, props.image, props.url, props.rating, props.location, props.phone, props.price)} backgroundColor="white" style={style.flatAction}>
            <img src={check} />
          </FloatingActionButton> 
        </div>
        <div className="hvr-pulse-grow" id="dislikeButton">
          <FloatingActionButton onClick={increment} backgroundColor="white" style={style.flatAction }>
            <img src={cross} />
          </FloatingActionButton> 
        </div>
      </div>
    </section>
  )
}

export default Container;
