import React, {useState} from 'react'

import {connect} from 'react-redux'

import {createPin} from '../../reducers/pinReducer'

const NewPin = (props) => {

  const [type, setType] = useState('')
  const [name, setName] = useState('')
  const [exhibitionStart, setStart] = useState('')
  const [exhibitionEnd, setEnd] = useState('')
  const [openingHours, setOpeninghours] = useState('')
  const [address, setAddress] = useState('')
  const [lon, setlon] = useState(null)
  const [lat, setlat] = useState(null)
  const [keywords, setKeywords] = useState([])
  const [fee, setFee] = useState([])
  const [picture, setPicture] = useState('')
  const [link, setLink] = useState('')
  const [description, setDescription] = useState('')
  const [museocard, setMuseocard] = useState(false)


  const handleSubmit = (event) => {
    event.preventDefault()
    const pin = {
      type: type,
      name: name,
      exhibitionStart: exhibitionStart,
      exhibitionEnd: exhibitionEnd,
      openingHours: openingHours,
      address: address,
      lon: { $numberDecimal: lon} ,
      lat: { $numberDecimal: lat},
      keywords: keywords,
      fees: fee,
      picture: picture,
      link: link,
      description: description,
      museocard: museocard
    }
    try {
      props.createPin(pin)
    } catch (e) {
      console.log(e)
    }


  }

  return (
    <div>
    <form onSubmit={handleSubmit}>
      <div>
        type
        <select
          value={type}
          onChange={({target}) => setType(target.value)}
          >
          <option value='exhibition'>exhibition</option>
          <option value='gallery'>gallery</option>
          <option value='museum'>museum</option>

        </select>
      </div>
      <div>
        name
        <input
          value={name}
          onChange={({target}) => setName(target.value)}
        />
      </div>
      <div>
        exhibition-start
        <input
          value={exhibitionStart}
          onChange={({target}) => setStart(target.value)}
        />
      </div>
      <div>
        exhibition-end
        <input
          value={exhibitionEnd}
          onChange={({target}) => setEnd(target.value)}
        />
      </div>
      <div>
        opening-hours
        <input
          value={openingHours}
          onChange={({target}) => setOpeninghours(target.value)}
        />
      </div>
      <div>
        address
        <input
          value={address}
          onChange={({target}) => setAddress(target.value)}
        />
      </div>
      <div>
        longitude
        <input
          value={lon}
          onChange={({target}) => setlon(target.value)}
        />
      </div>
      <div>
        latitude
        <input
          value={lat}
          onChange={({target}) => setlat(target.value)}
        />
      </div>
      <div>
        keywords
        <input
          value={keywords}
          onChange={({target}) => setKeywords(target.value)}
        />
      </div>
      <div>
        fee
        <input
          value={fee}
          onChange={({target}) => setFee(target.value)}
        />
      </div>
      <div>
        picture
        <input
          value={picture}
          onChange={({target}) => setPicture(target.value)}
        />
      </div>
      <div>
        link
        <input
          value={link}
          onChange={({target}) => setLink(target.value)}
        />
      </div>
      <div>
        description
        <input
          value={description}
          onChange={({target}) => setDescription(target.value)}
        />
      </div>
      <div>
        museocard
        <select
          value={museocard}
          onChange={({target}) => setMuseocard(target.value)}
          >
            <option value={true}>true</option>
            <option value={false}>false</option>

        </select>
      </div>
      <button type='submit'>create</button>
    </form>

    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    user: state.user
  }
}
const mapDispatchToProps = {
  createPin
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NewPin)
