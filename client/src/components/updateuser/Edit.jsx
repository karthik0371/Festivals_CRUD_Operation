import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom';
import axios from "axios";
import toast from 'react-hot-toast';

const Edit = () => {

 const festivals = {
    festival_name :"", 
    location :"", 
    date :"",
    genre :"", 
    ticket_price :"" 
 }

 const {id} = useParams();
 const navigate = useNavigate();
 const [festival, setFestival] = useState(festivals);

 const inputHandler = (e) =>{
    const {name, value} = e.target;
    setFestival({...festival, [name]:value});
    console.log(festival);
 }

 useEffect(()=>{
    axios.get(`http://localhost:8000/api/getone/${id}`)
    .then((response)=>{
        setFestival(response.data)
    })
    .catch((error)=>{
        console.log(error);
    })
 },[id])


 const submitForm = async(e)=>{
    e.preventDefault();
    await axios.put(`http://localhost:8000/api/update/${id}`, festival)
    .then((response)=>{
       toast.success(response.data.msg, {position:"top-right"})
       navigate("/")
    })
    .catch(error => console.log(error))
 }

  return (
    <div className="conatiner mt-4">
    <Link to="/"className='btn  btn-secondary mb-3'>Back</Link>
    <h1 className="mb-4">Update Festival</h1>
    <form onSubmit={submitForm}>
        <div className="mb-3">
            <label htmlFor="festival_name" className='form-label'>Festival Name</label>
            <input type="text" className='form-control' value={festival.festival_name} onChange={inputHandler} id="festival_name" name="festival_name" placeholder="Festival Name" />      
        </div>
        <div className="mb-3">
            <label htmlFor="location" className='form-label'>Location</label>
            <input type="text" className='form-control' value={festival.location} onChange={inputHandler} id="location" name="location" placeholder="Location" />
        </div>
        <div className="mb-3">
            <label htmlFor="date" className='form-label'>Date</label>
            <input type="text" className='form-control' value={festival.date} onChange={inputHandler} id="date" name="date" placeholder="Date" />
        </div>
        <div className="mb-3">
            <label htmlFor="genre" className='form-label'>Genre</label>
            <input type="text" className='form-control' value={festival.genre} onChange={inputHandler} id="genre" name="genre" placeholder="Genre" />
        </div>
        <div className="mb-3">
            <label htmlFor="ticket_price" className='form-label'>Ticket Price</label>
            <input type="text" className='form-control' value={festival.ticket_price} onChange={inputHandler} id="ticket_price" name="ticket_price" placeholder="Ticket Price" />
        </div>
        <div>
            <button type="submit" className="btn btn-primary">Update User</button>
        </div>
    </form>
</div>
  )
}

export default Edit