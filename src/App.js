import React, {Component} from 'react';
import './App.css';
import Header from './component/header';
import SearchBar from './containers/search_bar';
import Currentweather from './containers/current_weather';
import {bindActionCreators} from 'redux';
import {fetchWeather} from './actions/index';
import {connect} from 'react-redux';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      city: ''
    }
  }
  onInputChange = (e)=>{
    this.setState({
      city: e.target.value
    })
  }


  onFormSubmit = (e)=>{
    e.preventDefault();
    if(this.state.city.length > 0){
      this.props.fetchWeather(this.state.city);
      this.setState({
      city: ''
    }) 
    }
           
  } 

  render() {
    // console.log('props from app', this.props.weather);
    
    return (
          <section>
            <Header />
            <div className="container">                
              <SearchBar
                onFormSubmit = {this.onFormSubmit}
                onInputChange = {this.onInputChange}
                city = {this.state.city}
                />
              <Currentweather
                city = {this.state.city}
               /> 
            </div>        
          </section>
        );
  }
}

const mapStateToProps = state =>{
  return{
    weather: state.weather
  }
}

const mapDispatchToProps = dispatch =>{
  return bindActionCreators({fetchWeather}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(App);

