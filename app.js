  const axios = require('axios');
  const fs = require('fs');
  const http = require('https');
  const { username, password, urlEncodedPW, url } = require('./keys.js');
  
const patchRequest = (eventId) => {
  axios({
    method:'patch',
    url:`${url}${eventId}/`,
    data: {
      status: 'active'
    }
  })
  .then((response) => {
    console.log('success')
  })
  .catch(console.error)  
}

const getRequest = (eventId) => {
  axios({
    method:'get',
    url:`https://act.demandprogress.org/rest/v1/event/${eventId}/?campaign=3`,
    responseType:'json',
    auth: {
      username: username,
      password: password
    }
  })
  .then((response) => {
    patchRequest(response.data.id)
  })
  .catch(console.error)  
}

const eachEvent = (events) => {
  events.forEach((event) => {
    getRequest(event)
  })
}

//insert events in array below

const events = [2141]

eachEvent(events)
