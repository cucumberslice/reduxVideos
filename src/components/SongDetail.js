import React from 'react'
import { connect } from 'react-redux'


const SongDetail = (props) => {
    console.log(props)
    return <div>song detail</div>
}

const mapStatetoProps = (state) => {
     return { song: state.selectedSong}
}

export default connect(mapStatetoProps)(SongDetail)
