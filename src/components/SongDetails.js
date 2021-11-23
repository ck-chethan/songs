import React from "react";
import { connect } from "react-redux";

const SongDetails = ({ song }) => {
    if (!song) {
        return <div className="">Select a Song</div>
    }
    return (
        <div>
            <h3>Detalis for:</h3>
            <p>
                Title: {song.title}
                <br />
                Duration: {song.duration}
            </p>
        </div>
    )
}

const mapStateToProps = (state) => {
    return { song: state.selectedSong }
}

export default connect(mapStateToProps)(SongDetails)
