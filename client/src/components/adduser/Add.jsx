import React ,{ useState } from 'react';
import axios from 'axios';
import toast from 'react-hot-toast';
import { Link,useNavigate } from 'react-router-dom';

 const Add = () => {
    const festivals={                             //users-empty container
        festival_name:"",
        location:"",
        date:"",
        genre:"",
        ticket_price:""
    }
        const [festival,setFestival] =useState(festivals);           //user-for single user

        const navigate = useNavigate();

        //Javascript function
        const inputHandler = (e)=>{                  
            const {name ,value} = e.target;          
            setFestival({...festival,[name]:value});         
        }

        const submitForm = async(e) => {
            e.preventDefault();
            await axios.post("http://localhost:8000/api/create",festival)
                .then((res) => {
                    toast.success(res.data.msg, { position: "top-right"});
                    navigate("/");
                })   
                .catch(error=>console.error(error))  
        }                
            


    return ( 
        <div className="conatiner mt-4">
            <Link to="/"className='btn  btn-secondary mb-3'>Back</Link>
            <h1 className="mb-4">Add new Festival</h1>
            <form onSubmit={submitForm}>
                <div className="mb-3">
                    <label htmlFor="festival_name" className='form-label'>Festival Name</label>
                    <input type="text" className='form-control' onChange={inputHandler} id="festival_name" name="festival_name" placeholder="Festival Name" />      
                </div>
                <div className="mb-3">
                    <label htmlFor="location" className='form-label'>Location</label>
                    <input type="text" className='form-control'  onChange={inputHandler} id="location" name="location" placeholder="Location" />
                </div>
                <div className="mb-3">
                    <label htmlFor="date" className='form-label'>Date</label>
                    <input type="text" className='form-control' onChange={inputHandler} id="date" name="date" placeholder="Date" />
                </div>
                <div className="mb-3">
                    <label htmlFor="genre" className='form-label'>Genre</label>
                    <input type="text" className='form-control' onChange={inputHandler} id="genre" name="genre" placeholder="Genre" />
                </div>
                <div className="mb-3">
                    <label htmlFor="ticket_price" className='form-label'>Ticket Price</label>
                    <input type="text" className='form-control' onChange={inputHandler} id="ticket_price" name="ticket_price" placeholder="Ticket Price" />
                </div>
                <div>
                    <button type="submit" className="btn btn-primary">Add Festival</button>
                </div>
            </form>
        </div>
    );
};

export default Add;