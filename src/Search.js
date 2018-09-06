import React, { Component } from 'react';
import style from './style';

class Search extends Component {

render() {

return (
   <div>
      <input type='text' onChange={this.props.handler} placeholder="Search Nodes" style={ style.search }></input>
   </div>
  )
 }

}
export default Search;
