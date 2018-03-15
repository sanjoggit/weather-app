import React from 'react';
import {connect} from 'react-redux';
import './weather_list.css';

class WeatherList extends React.Component{


  
  render(){
    console.log('this.props.weather', this.props.weather)
    const data = this.props.weather.map(data=>data)[0];
    const weatherDate = data && data.list && data.list.map((date)=>{
      return ( new Date(date.dt_txt).getDay() + ',' +
      new Date(date.dt_txt).getDate() +','+
      new Date(date.dt_txt).getMonth()
      )  
    }
      );
      console.log(weatherDate);
      
    
    return(
      <section>
        <div className="container">
          <div className="row">
           <div className="col-sm-12">
             <div className="row weather-row d-flex justify-content-center">
              <div className="col-sm-2 card-container">
                <div className="card">
                  <div className="card-header">
                    Today
                  </div>
                  <div className="card-body">
                    <article>Icon</article>
                    <article className="temp">
                      Temperature
                    </article>
                    <article className="desc">
                      Description
                    </article>
                  </div>
                </div>
              </div>
              <div className="col-sm-2 card-container">
                <div className="card">
                  <div className="card-header">
                    Today
                  </div>
                  <div className="card-body">
                    <article>Icon</article>
                    <article className="temp">
                      Temperature
                    </article>
                    <article className="desc">
                      Description
                    </article>
                  </div>
                </div>
              </div>
              <div className="col-sm-2 card-container">
                <div className="card">
                  <div className="card-header">
                    Today
                  </div>
                  <div className="card-body">
                    <article>Icon</article>
                    <article className="temp">
                      Temperature
                    </article>
                    <article className="desc">
                      Description
                    </article>
                  </div>
                </div>
              </div>
              <div className="col-sm-2 card-container">
                <div className="card">
                  <div className="card-header">
                    Today
                  </div>
                  <div className="card-body">
                    <article>Icon</article>
                    <article className="temp">
                      Temperature
                    </article>
                    <article className="desc">
                      Description
                    </article>
                  </div>
                </div>
              </div>
              <div className="col-sm-2 card-container">
                <div className="card">
                  <div className="card-header">
                    Today
                  </div>
                  <div className="card-body">
                    <article>Icon</article>
                    <article className="temp">
                      Temperature
                    </article>
                    <article className="desc">
                      Description
                    </article>
                  </div>
                </div>
              </div>

             </div>            
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
