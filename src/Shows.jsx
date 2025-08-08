import { useState, useEffect } from 'react'
import { ShowDetails } from './ShowDetails.jsx'
import { ShowTile } from './ShowTile.jsx'

export function Shows({ genre, setGenre }) {
  const [searchButtonClicked, setSearchButtonClicked ] = useState(false)
  
  useEffect(() => { console.log("shows.jsx says " + genre) }, [genre])
  const [showSearch, setShowSearch] = useState('')

  let genreList = []
  const [showList, setShow] = useState([{
    "id": 1,
    "url": "https://www.tvmaze.com/shows/1/under-the-dome",
    "name": "Under the Dome",
    "type": "Scripted",
    "language": "English",
    "genres": [
      "Drama",
      "Science-Fiction",
      "Thriller"
    ],
    "status": "Ended",
    "runtime": 60,
    "averageRuntime": 60,
    "premiered": "2013-06-24",
    "ended": "2015-09-10",
    "officialSite": "http://www.cbs.com/shows/under-the-dome/",
    "schedule": {
      "time": "22:00",
      "days": [
        "Thursday"
      ]
    },
    "rating": {
      "average": 6.5
    },
    "weight": 99,
    "network": {
      "id": 2,
      "name": "CBS",
      "country": {
        "name": "United States",
        "code": "US",
        "timezone": "America/New_York"
      },
      "officialSite": "https://www.cbs.com/"
    },
    "webChannel": null,
    "dvdCountry": null,
    "externals": {
      "tvrage": 25988,
      "thetvdb": 264492,
      "imdb": "tt1553656"
    },
    "image": {
      "medium": "https://static.tvmaze.com/uploads/images/medium_portrait/81/202627.jpg",
      "original": "https://static.tvmaze.com/uploads/images/original_untouched/81/202627.jpg"
    },
    "summary": "<p><b>Under the Dome</b> is the story of a small town that is suddenly and inexplicably sealed off from the rest of the world by an enormous transparent dome. The town's inhabitants must deal with surviving the post-apocalyptic conditions while searching for answers about the dome, where it came from and if and when it will go away.</p>",
    "updated": 1747942783,
    "_links": {
      "self": {
        "href": "https://api.tvmaze.com/shows/1"
      },
      "previousepisode": {
        "href": "https://api.tvmaze.com/episodes/185054",
        "name": "The Enemy Within"
      }
    }
  }])
  const [detailsPage, setDetailsPage] = useState(null)
  let test = showList.map(show => genreList.push(show.genres))

  useEffect(() => {
    fetch("https://api.tvmaze.com/shows")
      .then(res => res.json())
      .then(data => setShow(data))
  }, [])

  useEffect(()=> {
    function queryShowSetter(formData) {
      const newList = []
      const query = formData.get('showSearch')
      console.log(query)
      for(item of showList) {
        if(item.name.includes(query) === true) {
          newList.push(item)
        } 
      }
      //setShow(query)
      console.log(newList)
    }
  },[searchButtonClicked])
   

  return (
    <>
      <form
        id="search"
        action={setSearchButtonClicked}
      >
        <input
          type="text"
          placeholder="Search For Shows"
          name='showSearch'
        />
        <input type='submit' value='Search' />
      </form>

      {detailsPage ?
        detailsPage
        :
        <div className='show-list'>
          {showList.map(show => <ShowTile genre={genre} setGenre={setGenre} setDetailsPage={setDetailsPage} show={show} key={show.id} />)}
        </div>
      }

    </>
  )
}

// function search(formData) {
//     const query = formData.get("showSearch");
//     alert(`You searched for '${query}'`);
//   }

// function enterSubmit(input) {
  //   //if keystroke is enter
  //   // do same as search button
  //   //queryShowSetter(input)
  //   console.log(input)
  //   //else ignore
  // }
