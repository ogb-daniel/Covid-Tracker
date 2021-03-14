
import {Cards,Chart,CountryPicker} from './components'
import styles from './App.module.css'
import React from 'react';
import cx from 'classnames'
import { fetchData } from './api';

import coronaImage from './images/covid.jpg'

const icon = {
    hidden: {
      pathLength: 0,
      fill: "rgba(255, 255, 255, 0)"
    },
    visible: {
      pathLength: 1,
      fill: "rgba(255, 255, 255, 1)"
    }
  }
class App extends React.Component {

    state={
        data:{},
        country:'',
    }

   async componentDidMount(){
        const fetchedData = await fetchData();
        this.setState({data:fetchedData})
    }

    handleCountryChange = async (country) =>{
        const fetchedData = await fetchData(country);
        this.setState({data:fetchedData,country:country})
    }

    render(){

        const { data,country } = this.state

        return(
            data ? (
                <div className={styles.container}>
                <img className={styles.image} alt="COVID-19" src={coronaImage}/>
                <Cards data={data}/>
                <CountryPicker handleCountryChange={this.handleCountryChange}/>
                <Chart data={data} country={country} />
            </div>
            ) : <div className={styles.container}>
                <h5>Loading.....</h5>
                <p>Please make sure you have a network access</p>
                <img className={styles.imageLg} alt="COVID-19" src={coronaImage}/>
            </div>
         
        )
    }
}
 
export default App;