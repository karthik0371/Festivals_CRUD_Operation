import React, { useEffect, useState } from 'react';
import axios from 'axios';
import toast from 'react-hot-toast';
import { Link } from 'react-router-dom';

const Festivals = () => {
  const [festival, setFestival] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:8000/api/getall');
        setFestival(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  const deleteFestival = async (festivalId) => {
    try {
      const response = await axios.delete(`http://localhost:8000/api/delete/${festivalId}`);
      setFestival((prevFestival) => prevFestival.filter((festival) => festival._id !== festivalId));
      toast.success(response.data.msg, { position: 'top-right' });
    } catch (error) {
      console.error('Error deleting festival:', error);
    }
  };

  return (
    <div className='userTable'>
      <Link to={'/add'} className='btn btn-primary mb-3'>Add Festival</Link>
      <table className='table table-bordered'>
        <thead className='thead-dark'>
          <tr>
            <th>S.No.</th>
            <th>Festival Name</th>
            <th>Location</th>
            <th>Date</th>
            <th>Genre</th>
            <th>Ticket Price</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {festival.map((festival, index) => (
            <tr key={festival._id}>
              <td>{index + 1}</td>
              <td>{festival.festival_name}</td>
              <td>{festival.location}</td>
              <td>{festival.date}</td>
              <td>{festival.genre}</td>
              <td>{festival.ticket_price}</td>
              <td className='actionButtons'>
                <button className="btn btn-danger btn-sm me-2" 
                onClick={() => deleteFestival(festival._id)}>
                    <i className="fa-solid fa-trash"></i>Delete</button>

                <Link to={`/edit/${festival._id}`} className='btn btn-warning btn-sm'>
                <i className="fa-solid fa-pen-to-square"></i>Edit</Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Festivals;
