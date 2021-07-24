import { combineReducers } from "redux";


const songReducer = () => {
    return [
        { title: "I want it that way", artist: "Back Street Boy" },
        { title: "Love Story", artist: "Taylor Swift" }

    ]


}

const selectSongReducer = (selectSong = null, action) => {
    if (action.type === "SONG_SELECTED") {
        return action.payload;
    }
    return selectSong;

}

export default combineReducers({
    songs: songReducer,
    selectSong: selectSongReducer
})

