import React from 'react'
import { connect } from 'react-redux'
import { selectSong } from '../action'

const SongList = ({ songs, selectSong }) => {

    return (
        <div>
            {/* {songs.map(song => {
                return (
                    <div className="item" key={song.title}>
                        <div className="right floated content">
                            <button className="ui button primary">Select</button>
                        </div>
                        <div className="content">
                            {song.title}
                        </div>
                    </div>
                )
            })} */}
            <div className="ui divided list">{renderedList({ songs, selectSong })}</div>


        </div>
    )
}


const renderedList = ({ songs, selectSong }) => {
    return songs.map(song => {
        return (
            <div className="item" key={song.title}>
                <div className="right floated content">
                    <button onClick={() => selectSong(song)} className="ui button primary">Select</button>
                </div>
                <div className="content">
                    {song.title}
                </div>
            </div>
        )
    })
}

const mapStateToProps = (state) => {
    console.log(state)
    return { songs: state.songs }
}

export default connect(mapStateToProps, {
    selectSong: selectSong
})(SongList)
