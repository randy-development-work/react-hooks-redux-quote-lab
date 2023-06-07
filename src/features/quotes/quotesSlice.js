import { v4 as uuid } from "uuid";
import { createSlice } from "@reduxjs/toolkit";

// Action Creators
// TODO: Create action creators as defined in tests

export const addQuote = (quote) => {
  return {
    type: "quotes/add",
    payload: quote,
  };
};

export const removeQuote = (id) => {
  return {
    type: "quotes/remove",
    payload: id,
  };
};

export const upvoteQuote = (id) => {
  return {
    type: "quotes/upvote",
    payload: id,
  };
};

export const downvoteQuote = (id) => {
  return {
    type: "quotes/downvote",
    payload: id,
  };
};

// Reducer
const initialState = [];

export default function quotesReducer(state = initialState, action) {
  switch (action.type) {
    case "quotes/add":
      return [...state, action.payload];

    case "quotes/remove":
      return state.filter((quote) => quote.id !== action.payload);

    case "quotes/upvote":
      return state.map((quote) =>
        quote.id === action.payload
          ? { ...quote, votes: quote.votes + 1 }
          : quote
      );
    case "quotes/downvote":
      return state.map((quote) =>
        quote.id === action.payload && quote.votes > 0
          ? { ...quote, votes: quote.votes - 1 }
          : quote
      );
    default:
      break;
  }
  return state;
}

// // Slice alternative
// const slice = createSlice({
//   name: "quotes",
//   initialState: [],
//   reducers: {
//     add: (state, action) => {
//       state.push(action.payload);
//     },
//     remove: (state, action) => {
//       state = state.filter((quote) => quote.id !== action.payload);
//     },
//     upvote: (state, action) => {
//       state = state.map((quote) =>
//         quote.id === action.payload
//           ? { ...quote, votes: quote.votes + 1 }
//           : quote
//       );
//     },
//     downvote: (state, action) => {
//       state = state.map((quote) =>
//         quote.id === action.payload && quote.votes > 0
//           ? { ...quote, votes: quote.votes - 1 }
//           : quote
//       );
//     },
//   },
// });

// // actions
// const { add, remove, upvote, downvote } = slice.actions

// // exports
// export { add, remove, upvote, downvote }
// export default slice.reducer
