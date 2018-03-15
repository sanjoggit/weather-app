import React from 'react';
import {connect} from 'react-redux';
import './weather_list.css';

class WeatherList extends React.Component{


  
  render(){
    //console.log('this.props.weather', this.props.weather)
    const weather = this.props.weather.map((data, i)=>{
       
        return(
            <div className="col-sm-3" key={i}>
                <div className="card">
                    <div className="card-header">
                        <article className="city">{data.name}</article>
                        <article className="text">Current Weather</article>
                    </div>
                    <div className="card-body">
                        <article className="icon">
                            <img src={`http://openweathermap.org/img/w/${data.weather[0].icon}.png`} alt={data.weather[0].icon}/>
                        </article>
                        <article className="temp">
                        {data.main.temp}&#8451;
                        </article>
                        <article className="desc">
                        {data.weather[0].description}
                        </article>
                    </div>
                </div>
            </div>
        );
    });
    
    return(
      <section>
        <div className="row d-flex justify-content-center">
            <div className="col-sm-8">
                <div className="row weather-row">                    
                    {weather}
                </div>
            </div>
        </div>
      </section>
    )
  }
}


const mapStateToProps = state =>{
  return{
    weather: state.weather
  }
}

export default connect(mapStateToProps)(WeatherList);