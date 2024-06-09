
import '../styles/TravelForm.css'; 
import axios from 'axios'
import { useForm} from "react-hook-form"
import { Link } from 'react-router-dom';
const TravelForm = () => {

    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm();

      const OnSubmit = async(data) => {
        try {
            const response = await axios.post('http://localhost:3000/travel', data);
        } catch (error) {
            console.error('There was an error submitting the form!', error);
        }
        
    };
  return (
    <>
    <h1>Post Travel Itinerary for your Others</h1>

    <form method='POST' action='/travel' className="travel-form"  onSubmit={handleSubmit(OnSubmit)}>
      <div className="form-group">
        <label htmlFor="fromPlace">From Place:</label>
        <input
          type="text"
          id="fromPlace"
          name="fromPlace"
          required
          {...register('fromplace')}
        />
      </div>
      <div className="form-group">
        <label htmlFor="toPlace">Destination</label>
        <input
          type="text"
          id="toPlace"
          name="toPlace"
          required
          {...register('dest')}
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
        <label htmlFor="numberOfDays">Number of Days</label>
        <input
          type="number"
          id="numberOfDays"
          name="numberOfDays"
          required
          {...register('days')}
        />
      </div>
      <div className="form-group">
        <label htmlFor="numberOfPeople">Number of People</label>
        <input
          type="number"
          id="numberOfPeople"
          name="numberOfPeople"
          required
          {...register('people')}
        />
      </div>
      <div className="form-group">
              <label htmlFor="address">Places to visit</label>
              <textarea id="places" name="places" rows="8" cols="80" {...register("places")} required></textarea>
            </div>
            <div className='btn'>
            <button type="submit" >Submit</button>
            <Link to='/query'><button>Search Plans</button></Link>
            </div>
     
    </form>
    </>

  );
};

export default TravelForm;