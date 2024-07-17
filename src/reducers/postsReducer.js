// src/reducers/postsReducer.js
const initialState = {
    posts: [],
  };
  
  const postsReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'ADD_POST':
        return { ...state, posts: [...state.posts, action.payload] };
      default:
        return state;
    }
  };
  
  export default postsReducer;
  