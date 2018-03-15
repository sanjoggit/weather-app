import React from 'react';
import './search_bar.css';

class SearchBar extends React.Component{

  render(){
    return(
      <section>
          <div className="row d-flex justify-content-center">
            <div className="col-md-8 ">
              <form onSubmit={e=>this.props.onFormSubmit(e)}>
                <div className="input-group input-container">
                  <input
                     type="text"
                     className="form-control"
                     placeholder="Enter City Name"
                     value={this.props.city}
                     onChange={this.props.onInputChange}
                    />
                  <div className="input-group-prepend search">
                    <i className="fa fa-search" onClick={e=>this.props.onFormSubmit(e)}></i>
                  </div>
                </div>
              </form>
            </div>
            </div>
        </section>
    )
  }
}
export default SearchBar;
