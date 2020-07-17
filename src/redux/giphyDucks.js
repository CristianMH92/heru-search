import axios from 'axios'
//states - ready to be consumed in some component
const initialData = {
    array : [ ]
}
//types(actions)
const GET_GIFS_SUCCESS = 'GET_GIFS_SUCCESS'

//reducer - accept response of API and will send to a state
export default function giphyReducer (state = initialData, action) {
    switch (action.type) {
        case GET_GIFS_SUCCESS:
            return { ...state, array: action.payload}
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
           const res = await axios.get('https://api.giphy.com/v1/stickers/trending?api_key=AUfMW8slOkzJFnZQvYMglqs0osrUvBOb&limit=25&rating=g')
            //const res = await axios.get('https://api.giphy.com/v1/gifs/search?&api_key=AUfMW8slOkzJFnZQvYMglqs0osrUvBOb&q=rainbow')
           dispatch ({
               type: GET_GIFS_SUCCESS,
               payload: res.data.data
           })
       } catch (error) {
           console.log(error)
       }
   }  