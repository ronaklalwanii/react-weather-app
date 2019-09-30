import React from 'react'

class ShowWeather extends React.Component{

    state = {
        val : ""
    }

    render(){
        let weather = this.props.weather
        return <div className="show-weather ">
            <div className="search mt-3 ml-3">
               <form onSubmit={(e) => {
                   e.preventDefault()
                   this.props.searchWeather(this.state.val)
               }}>
               <input type="text" className="form-control" onChange={e => this.setState({val: e.target.value})} placeholder="Search City"/>
               </form>
            </div>
            <div className="weather-info d-flex justify-content-center align-items-center flex-wrap">
                <div className="d-flex flex-column text-center">
                   <div className="icon">
                {weather !== null ? <img src={`http://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`} alt="weather icon" /> : ""}
                    </div> 
                <h1 className="text-white">{weather ? weather.name : "Loading..."}</h1>
                </div>
                <img className="rounded-circle ml-5"  src={this.props.photo} alt="city" height="200" width="200" />
            </div>
            <div className="footer text-white d-flex justify-content-end aling-items-end">
               <ul className="list-inline">
                   <li className="list-inline-item">Humidity: {weather !== null ? weather.main.humidity : "Loading..."}</li>
                   <li className="list-inline-item">Sky: {weather !== null ? weather.weather[0].main : "Loading..."}</li>
                   <li className="list-inline-item">Wind Speed: {weather !== null ? weather.wind.speed : "Loading..."}mps</li>
               </ul>
            </div>
        </div>
    }
}
export default ShowWeather