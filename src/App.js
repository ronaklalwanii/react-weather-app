import React from 'react';
import axios from "axios"
import ShowWeather from "./component"
import "bootstrap/dist/css/bootstrap.min.css"

class App extends React.Component {
  
  state = {
    query : "London",
    weather: null,
    photo: "https://images.unsplash.com/photo-1562184760-a11b3cf7c169?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjkwNjAzfQ"
  }
  
  componentDidMount() {
    this.requestWeather()
  }

  requestWeather = () => {
    // axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${this.state.query}&appid=b7a2803e98d363c72cc854fc74773305`)
    // .then(response => {
    //   this.setState({
    //     weather: response.data
    //   })
    // }).get(`https://api.unsplash.com/search/photos?page=1&query=${this.state.query}`)
    // .then(response => console.log(response.data)
    // )
    axios.all([
      axios.get(`https://cors-anywhere.herokuapp.com/api.openweathermap.org/data/2.5/weather?q=${this.state.query}&appid=b7a2803e98d363c72cc854fc74773305`),
      // axios.get(`https://pixabay.com/api/?key=10142982-c4b2a5f613574cdb77fb24620&q=${this.state.query}&image_type=photo`)
      axios.get(`https://api.unsplash.com/search/photos?page=1&query=${this.state.query}&client_id=df4eb66f523b2f241cf34067f5af53e200c1743941a679624e57b87f98b83d9b`)
    ])
    .then(axios.spread( (weather, photo) => {
      console.log(photo)
       this.setState({
        weather : weather.data,
        photo : photo.data.results[0].urls.regular
      })
    })).catch(err => console.log(err))
  }

  searchWeather = async query => {
   await this.setState({
      query
    })
    this.requestWeather()
  }

  render(){ 
    return (
      <div className="App">
        <ShowWeather 
        searchWeather={this.searchWeather}  
        query={this.state.query} 
        weather={this.state.weather}
        photo = {this.state.photo}
        />
      </div>
    );
  }
}

export default App;
