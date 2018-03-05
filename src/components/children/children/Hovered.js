import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Avatar from 'material-ui/Avatar';
import "../../../css/index.css"

const Hovered = (props) => {

  const showLink = (url) => {
    if (url) {
      return "VISIT YELP"
    }
  }

  return (
    <section id="hover">
      <div id="hovered">
        <div id="data">
          <header>
            <div id="hoverFrame">
              <Avatar src={props.image ? props.image : "https://i.ndtvimg.com/i/2017-09/coffee_625x350_41505820033.jpg?downsize=630:380&output-quality=70&output-format=webp"} size={200}/>
            </div>
          </header>
          <h1>{props.name}</h1>
          <div id="price">{props.price}</div>
          <div id="rating">{props.rating}</div>
          <div id="phone">{props.phone}</div>
          <div id="location">{props.location}</div>
          <div id="link">
            <a href={props.url}>{props.url ? "VISIT YELP" : null}</a> 
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hovered;