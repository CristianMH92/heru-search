import axios from 'axios'
//consts or states - ready to be consumed in some component
const initialData = {
    array : [ ],
    arrayHome: [],
    searchWord: ''
}
//types(actions)
const GET_RANDOMGIFS_SUCCES = 'GET_RANDOMGIFS_SUCCES'
const GET_TOPGIFS_SUCCESS = 'GET_TOPGIFS_SUCCESS'
const GET_GIFS_SEARCH_SUCCESS = 'GET_GIFS_SEARCH_SUCCESS'
const GET_GIFS_WORD_SEARCH_SUCCES = 'GET_GIFS_WORD_SEARCH_SUCCES'
//reducer - accept response of API and will send to a state
export default function giphyReducer (state = initialData, action) {
    switch (action.type) {
      case GET_TOPGIFS_SUCCESS:
         return { ...state, array: action.payload }
      case GET_GIFS_SEARCH_SUCCESS:
            return { ...state, array: action.payload }
      case GET_GIFS_WORD_SEARCH_SUCCES:
         return{ ...state, array: action.payload.array, searchWord: action.payload.searchWord}
      case GET_RANDOMGIFS_SUCCES:
         return {  ...state, arrayHome: action.payload.arrayHome }
      default: 
         return state
    }
}
//actions - request API
export const  getGifsAction =  () =>  
    //disptach will activate to reducer
    //getState will get to inital data or the information stored in the state
   async  (dispatch, getState) => {
       try {
           const res = await axios({
            method: 'get',
            url: 'https://api.giphy.com/v1/stickers/trending?api_key=AUfMW8slOkzJFnZQvYMglqs0osrUvBOb&limit=25&rating=g'
          })
          console.log('top', res)
           dispatch ({
               type: GET_TOPGIFS_SUCCESS,
               payload: res.data.data
           })
       } catch (error) {
           console.log(error)
       }
   }  

export const getGifsSearch = () => async(dispatch, getState) => {
   //console.log('getState', getState().gifs.searchWord)
   const searchWord = getState().gifs.searchWord
   try {
      const res = await axios({
       method: 'get',
       url: `https://api.giphy.com/v1/stickers/search?api_key=AUfMW8slOkzJFnZQvYMglqs0osrUvBOb&q=${searchWord}&limit=25&offset=0&rating=g&lang=en`
     })
      dispatch ({
          type: GET_GIFS_SEARCH_SUCCESS,
          payload: res.data.data
      })
  } catch (error) {
      console.log(error)
  }
}

export const searchWordAction = (word) => async (dispatch, getState) => {
   const searchWordRes = word
   try {
      const res = await axios.get(`https://api.giphy.com/v1/stickers/search?api_key=AUfMW8slOkzJFnZQvYMglqs0osrUvBOb&q=${searchWordRes}&limit=25&offset=0&rating=g&lang=en`)
      dispatch({
         type: GET_GIFS_WORD_SEARCH_SUCCES,
         payload: {
            array: res.data.data,
            searchWord: searchWordRes
         }
      })
   } catch (error) {
      console.log(error)
   }
}

export const getRandomGifsAction = () => async(dispatch) => {
   try {
      const res = await axios({
       method: 'get',
       url: 'https://api.giphy.com/v1/stickers/packs?api_key=AUfMW8slOkzJFnZQvYMglqs0osrUvBOb'
     })
      dispatch ({
          type: GET_RANDOMGIFS_SUCCES,
          payload: {
            arrayHome: res.data.data
         }
      })
  } catch (error) {
      console.log(error)
  }
}