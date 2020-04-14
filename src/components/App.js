import React from 'react';
import axios from 'axios';
import ApicardList from './ApicardList';
import Headerinfo from './Headerinfo';
import Endline from './Endinfo';
class App extends React.Component {
  state = { apis: [] };

  componentDidMount() {
    axios
      .get('https://api.rootnet.in/covid19-in/stats/latest')
      .then((response) => {
        this.setState({ apis: response.data.data.regional });
        // console.log(this.state.apis);
      });
  }

  render() {
    return (
      <div>
        <Headerinfo />
        <ApicardList api={this.state.apis} />
        <Endline />
      </div>
    );
  }
}
export default App;
