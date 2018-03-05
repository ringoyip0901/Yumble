import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { render } from 'react-dom';
import Avatar from 'material-ui/Avatar';
import ReactHover from 'react-hover';
import Hovered from './children/Hovered';
import ReactStickies from 'react-stickies';
import { GridList, GridTile } from 'material-ui/GridList';
import IconButton from 'material-ui/IconButton';
import StarBorder from 'material-ui/svg-icons/toggle/star-border';
import heart from '../../../images/heart.svg';
import "../../css/index.css"

const List = (props) => {

  const boxes = [];
  const names = [];
  let name = "no name"; 
  let price;
  let rating;
  let phone; 
  let location; 
  let link;
  let image; 

  const styles = {
    root: {
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'space-around',
    },
    gridList: {
      display: 'flex',
      flexWrap: 'nowrap',
      overflowX: 'auto',
    },
    titleStyle: {
      color: 'rgb(0, 188, 212)',
    },
  };

  for (let i = 0; i < props.saved.size; i++) {
    props.saved.forEach((data, index) => {
      if (names.indexOf(data.get("name")) === -1) {
        names.push(data.get('name'))
        boxes.push(data)
      }
    })
  } 

  return (
    <section id="list">
      <header className="list-title">
        <h1>Favorites <img id="heart" src={heart} /></h1>
      </header>
      <div id="listOfLikes" style={styles.root}>
        <GridList style={styles.gridList} cols={2.2}>
        {boxes.map((box) => (
          <GridTile key={box.get('image')} cols={2.2}>
          <div id='avatar' onMouseEnter={() => props.hover(box.get('name'), box.get('url'), box.get('rating'), box.get('location'), box.get('phone'), box.get('price'), box.get('image'))}>
            <Avatar src={box.get('image')} size={100} />
          </div>
          </GridTile>
        ))}
        </GridList>
      </div>
      <Hovered name={props.hoverName} 
      price={props.hoverPrice} 
      rating={props.hoverRating}
      phone={props.hoverPhone}
      location={props.hoverLocation}
      url={props.hoverURL}
      image={props.hoverImage}
      />
    </section>
  )
}

export default List;

