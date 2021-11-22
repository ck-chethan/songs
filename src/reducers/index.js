//Reducers
const songsReducer = () => {
    return [
        { title: 'Faded', duration: '3:48' },
        { title: 'Alone', duration: '2:36' },
        { title: 'The Spectre', duration: '5:24' },
        { title: 'Darkside', duration: '6:12' }
    ];
};

const selectedSongReducer = (selectedSong = null, action) => {
    if (action.type === 'SONG_SELECTED') {
        return action.payload;
    }
    return selectedSong;
}