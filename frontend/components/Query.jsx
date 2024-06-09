import {React , useState} from 'react'
import axios from 'axios';
import { useForm } from 'react-hook-form';
import '../styles/Query.css'
import Data from './Data';
const Query = () => {
    const [users, setUsers] = useState([]);
    const[render,setRender] = useState(false)
    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm();
    const OnSubmit  = async()=>{
        try {
            const response = await axios.get('http://localhost:3000/query');
            setUsers([...response.data]);
            console.log(users);
        } catch (err) {
            console.error(err);
        }
    }

    const hClick = ()=>{
        setRender(true);
    }
  return (
    <>
    <div className="form-container">
    <h2>Travel Form</h2>
    <form action='/query' method='GET' onSubmit={handleSubmit(OnSubmit)}>
        <div className="form-group">
            <label htmlFor="fromPlace">From Place</label>
            <input
                type="text"
                id="fromPlace"
                name="fromPlace"
                required
                {...register('fromplace')}
            />
        </div>
        <div className="form-group">
            <label htmlFor="destination">Destination</label>
            <input
                type="text"
                id="destination"
                name="destination"
                {...register('dest')}
                required
            />
        </div>
        <div className="form-group">
            <label htmlFor="budget">Budget</label>
            <input
                type="number"
                id="budget"
                name="budget"
                required
                {...register('budget')}
            />
        </div>
    
        <div className="form-group">
            <button type='submit' onClick={hClick}>Search</button>
        </div>
    </form>
</div>
{render && <Data />}



</>
  )
}

export default Query