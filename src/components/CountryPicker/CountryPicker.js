import { FormControl, NativeSelect } from "@material-ui/core";
import { useEffect, useState } from "react";
import { fetchCountries } from "../../api";
import styles from './CountryPicker.module.css';

const CountryPicker = ({handleCountryChange}) => {
    const [fethchedCountries, setFethchedCountries] = useState([])
    useEffect(()=>{
        const fetchAPI = async ()=>{
            setFethchedCountries(await fetchCountries());
        }
        fetchAPI();
    },[setFethchedCountries]);

    return ( 
        <FormControl className={styles.formControl}>
            <NativeSelect defaultValue="" onChange={(e)=>handleCountryChange(e.target.value)}>
                <option value="">Global</option>
                {fethchedCountries.map((country,i)=><option key={i} value={country}>{country}</option>)}
            </NativeSelect>
        </FormControl>
     );
}
 
export default CountryPicker;