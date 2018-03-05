let yumble = "yumble";

export const HOVER = "HOVER";
export function hoverRestaurant(name, url, rating, location, phone, price, image) {
  return {
    type: HOVER,
    name: name, 
    url: url, 
    rating: rating, 
    location: location, 
    phone: phone,
    price: price,
    image: image,
  }  
}

export const SAVE = "SAVE";
export function saveRestaurants(name, image, url, rating, location, phone, price) {
  return {
    type: SAVE,
    name: name, 
    image: image, 
    url: url, 
    rating: rating, 
    location: location, 
    phone: phone,
    price: price,
  }
}

export const SEARCH = "SEARCH";
export function search() {
  return {
    type: SEARCH
  }
}

export const COUNT = "COUNT";
export function increaseCount() {
  return {
    type: COUNT,
  }
}

export const REQUEST_POSTS = "REQUEST_POSTS"
function requestPosts(yumble) {
  return {
    type: REQUEST_POSTS,
    yumble
  }
}

export const RECEIVE_POSTS = "RECEIVE_POSTS"
function receivePosts(yumble, json) {
  let date = new Date()
  return {
    type: RECEIVE_POSTS,
    yumble, 
    posts: json,
    index: 0,
    receivedAt: date
  }
}

export const INVALIDATE_YELP = "INVALIDATE_YELP"
export function invalidate(yumble) {
  return {
    type: INVALIDATE_YELP, 
    yumble
  }
}

export function fetchYelp(information) {
  return async dispatch => {
    function onSuccess(success) {
      dispatch(receivePosts(yumble, success));
      return success;
    }

    function onError(error) {
      return error;
    }
    
    try {
      dispatch(requestPosts(yumble))
      const success = await fetch('/search', {
        method: "POST", 
        headers: {
          "Accept": "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(information)
      }).then(
        response => response.json()
      )
      return onSuccess(success)
    } catch (error) {
      return onError(error);
    }
  }
}

// export function fetchYelp(information) {
//   return dispatch => {
//     dispatch(requestPosts(yumble))
//     return fetch('/search', {
//       method: "POST", 
//       headers: {
//         "Accept": "application/json",
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify(information)
//     }).then(
//       response => response.json(),
//     )
//     .then(json => 
//       dispatch(receivePosts(yumble, json))
//     )
//   }
// }