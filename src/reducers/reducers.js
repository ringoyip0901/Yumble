import { combineReducers } from 'redux';
import { List, Map } from 'immutable';
import { COUNT, SEARCH, INVALIDATE_YELP, REQUEST_POSTS, RECEIVE_POSTS, SAVE, HOVER } from '../actions/actions'

const initialCount = {
  count: 0
};

const initialLikes = []

const initialHover = {};

function hover(state = initialHover, action) {
  switch(action.type) {
    case 'HOVER':
      return {
        name: action.name,
        url: action.url, 
        rating: action.rating, 
        location: action.location, 
        phone: action.phone, 
        price: action.price,
        image: action.image
      }
    default: 
      return state;
  }
}

function search(state = "Let's Yumble", action) {
  switch(action.type) {
    case 'SEARCH': {
      return action.yumble.items;
    }
    default: 
      return state;
  }
}

function increment(state = initialCount, action) {
  switch(action.type) {
    case 'COUNT': 
      return {
        count: state.count + 1
      };
    default: 
      return state;
  }
}

function save(state = List(initialLikes), action) {
  switch(action.type) {
    case 'SAVE':
      // return Object.assign({}, state, {
      //   name: state.name.concat(action.name)
      // })
      return state.push(Map({
        name: action.name,
        image: action.image, 
        url: action.url, 
        rating: action.rating, 
        location: action.location, 
        phone: action.phone, 
        price: action.price,
      }))
    default: 
      return state;
  }
}

function posts(
  state = {
    isFetching: false, 
    didInvalidate: false, 
    items: [],
    index: 0, 
  }, 
  action 
) {
  switch(action.type) {
    case INVALIDATE_YELP: 
      return Object.assign({}, state, {
        didInvalidate: true
      })
    case REQUEST_POSTS: 
      return Object.assign({}, state, {
        isFetching: true,
        didInvalidate: false
      })
    case RECEIVE_POSTS: 
      return Object.assign({}, state, {
        isFetching: false,
        didInvalidate: false,
        items: action.posts,
        number: action.index + 1,
        lastUpdated: action.receivedAt
      })
    default:
      return state
  }
}

function postsByYelp(state = {}, action) {
  switch(action.type) {
    case INVALIDATE_YELP:
    case RECEIVE_POSTS:
    case REQUEST_POSTS:
      return Object.assign({}, state, {
        [action.yumble]: posts(state[action.yumble], action)
      })
    default: 
      return state;
  }
}

// Object.assign({}, state, {
//   [action.restaurants]: posts(state[action.restaurants], action)
// }) === 
// let nextState = {}
// nextState[action.restaurants] = posts(state[action.restaurants], action)
// return Object.assign({}, state, nextState)

const rootReducer = combineReducers({
  postsByYelp, 
  search, 
  increment, 
  save, 
  hover
})

export default rootReducer;