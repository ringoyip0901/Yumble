import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Container from './children/Container'
import List from './children/List'
import Hovered from './children/children/Hovered'
import { increaseCount, search, fetchYelp, saveRestaurants, hoverRestaurant } from '../actions/actions.js'
import "../css/index.css"

export const Display = (props) => {
  const { state, search, fetchYelp, increaseCount, saveRestaurants, hoverRestaurant } = props; 
  let name = "Let's find a place!"
  let image = "https://i.ndtvimg.com/i/2017-09/coffee_625x350_41505820033.jpg?downsize=630:380&output-quality=70&output-format=webp";
  let url = "";
  let rating = "";
  let location = "";
  let phone = "";
  let price = "";
  let saved;

  let hoverName = "No Name";
  let hoverURL; 
  let hoverRating; 
  let hoverLocation;
  let hoverPhone;
  let hoverPrice;
  let hoverImage;

  const press = (e) => {
    e.preventDefault();
    const term = document.getElementById('category').value;
    const location = document.getElementById('location').value;
    const information = {
      "term": term, 
      "location": location
    }
    return fetchYelp(information);
  }

  if (state.postsByYelp.yumble) {
    const restaurants = state.postsByYelp.yumble.items;
    if (restaurants.length > 0) {
      name = state.postsByYelp.yumble.items[state.increment.count]["name"];
      image = state.postsByYelp.yumble.items[state.increment.count]["image_url"];
      url = state.postsByYelp.yumble.items[state.increment.count]["url"];
      rating = state.postsByYelp.yumble.items[state.increment.count]["rating"];
      location = state.postsByYelp.yumble.items[state.increment.count]['location']["display_address"].join(", ").split(" ").join(" ");
      phone = state.postsByYelp.yumble.items[state.increment.count]["display_phone"];
      price = state.postsByYelp.yumble.items[state.increment.count]["price"];
    }
  }

  // if (state.postsByYelp.yumble) {
  //   const restaurants = state.postsByYelp.yumble.items;
  //   if (restaurants.length === state.increment.count) {
  //     console.log("ran out");
  //   }
  // }

  if (state.save) {
    saved = state.save;
  }

  if (state.hover) {
    hoverName = state.hover.name;
    hoverURL = state.hover.url;
    hoverRating = state.hover.rating;
    hoverLocation = state.hover.location;
    hoverPhone = state.hover.phone;
    hoverPrice = state.hover.price;
    hoverImage = state.hover.image;
  }

  return (
    <MuiThemeProvider>
    <main>
      <Container  name={name} image={image} url={url} rating={rating} location={location} phone={phone} price={price} press={press} count={increaseCount} save={saveRestaurants}/>
      <List saved={saved} 
      hover={hoverRestaurant} 
      hoverName={hoverName} 
      hoverURL={hoverURL}
      hoverRating={hoverRating}
      hoverLocation={hoverLocation}
      hoverPhone={hoverPhone}
      hoverPrice={hoverPrice}
      hoverImage={hoverImage}
      />
    </main>
    </MuiThemeProvider>
  )
}

