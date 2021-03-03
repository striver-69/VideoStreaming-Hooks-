import axios from 'axios'

const KEY='AIzaSyCYnJLCwWfzLs7HoX__IPUQROlx1tq3yig'

export default axios.create({
  baseURL:'https://www.googleapis.com/youtube/v3',
  params:{
    part:'snippet',
    type:'video',
    maxResults:5,
    key:KEY
  }
})

