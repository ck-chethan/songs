//Action Creator
export const selectSong = (song) => {//Named Export
    //Return an action
    return {
        type: 'SONG_SELECTED',
        payload: song
    }
}