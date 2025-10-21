// import {useState, useEffect} from "react";
// import "../Styles/search_location.css"
// const SearchLocation = () => {

//     const [FormValue, setFormValue] = useState(
//         {
//             startLocation:"",
//             endLocation:""
//         }
//     )

//      const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormValue((prev) => ({
//       ...prev,
//       [name]: value
//     }));
//   };

//    const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log("Form Submitted:", FormValue);
//     // You can use `formValue` elsewhere or pass it to an API

//   };

    

//     return (
//         <>
//                 <div className="wrappe">
//                     <form action="" onSubmit={handleSubmit}>
//                         <div className="from-group">
//                             <label htmlFor="">start-location</label>
//                             <input type="text" className="form-control" name="startLocation" value={FormValue.startLocation} onChange={handleChange} />
//                         </div>
//                         <div className="from-group">
//                             <label htmlFor="">end-location</label>
//                             <input type="text" className="from-control" name="endLocation" value={FormValue.endLocation} onChange={handleChange} />
//                         </div>
//                         <button type="submit">search</button>
//                     </form>
//                 </div>
//         </>
//     )
// }

// export default SearchLocation


// import React, { useState } from "react";
// import { createClient } from "@supabase/supabase-js";

// // ✅ Your Supabase credentials here
// const supabaseUrl = 'https://xdbhtxoheaqgrbruapxv.supabase.co';
// const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InhkYmh0eG9oZWFxZ3JicnVhcHh2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTk5NjQ1MjgsImV4cCI6MjA3NTU0MDUyOH0.kJIhesOoD7DYbR2ggSkxZO3w5VTECuLHGNztmwIs7PA';
// const supabase = createClient(supabaseUrl, supabaseKey);

// const SearchLocation = () => {
//   const [formValue, setFormValue] = useState({
//     startPoint: "",
//     endPoint: "",
//     seats: 1,
//   });

//   const [results, setResults] = useState([]);
//   const [error, setError] = useState(null);

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormValue((prev) => ({
//       ...prev,
//       [name]: value,
//     }));
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setError(null);
//     setResults([]);

//     const { startPoint, endPoint, seats } = formValue;

//     const { data, error } = await supabase
//       .from("searched_locations")
//       .select("*")
//       .ilike("start_location", `%${startPoint}%`)
//       .ilike("end_location", `%${endPoint}%`)
//       .gte("available_seats", parseInt(seats, 10));

//     if (error) {
//       console.error("Supabase error:", error);
//       setError(error.message);
//       return;
//     }

//     console.log("Search Results:", data);
//     setResults(data);
//   };

//   return (
//     <div className="wrapper">
//       <form onSubmit={handleSubmit}>
//         <div className="form-group">
//           <label>Start Location</label>
//           <input
//             type="text"
//             className="form-control"
//             name="startPoint"
//             value={formValue.startPoint}
//             onChange={handleChange}
//             required
//           />
//         </div>

//         <div className="form-group">
//           <label>End Location</label>
//           <input
//             type="text"
//             className="form-control"
//             name="endPoint"
//             value={formValue.endPoint}
//             onChange={handleChange}
//             required
//           />
//         </div>

//         <div className="form-group">
//           <label>Seats</label>
//           <input
//             type="number"
//             className="form-control"
//             name="seats"
//             min="1"
//             value={formValue.seats}
//             onChange={handleChange}
//           />
//         </div>

//         <button type="submit">Search</button>
//       </form>

//       <div className="results">
//         <h3>Results:</h3>
//         {error && <p style={{ color: "red" }}>Error: {error}</p>}
//         {results.length === 0 && !error ? (
//           <p>No matching routes found.</p>
//         ) : (
//           <ul>
//             {results.map((route) => (
//               <li key={route.id}>
//                 {route.start_location} → {route.end_location} (
//                 {route.available_seats} seats)
//               </li>
//             ))}
//           </ul>
//         )}
//       </div>
//     </div>
//   );
// };

// export default SearchLocation;



import React, { useState } from "react";
import { createClient } from "@supabase/supabase-js";

// ✅ Your Supabase credentials here
const supabaseUrl = 'https://xdbhtxoheaqgrbruapxv.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InhkYmh0eG9oZWFxZ3JicnVhcHh2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTk5NjQ1MjgsImV4cCI6MjA3NTU0MDUyOH0.kJIhesOoD7DYbR2ggSkxZO3w5VTECuLHGNztmwIs7PA';
const supabase = createClient(supabaseUrl, supabaseKey);

const SearchLocation = () => {
  const [formValue, setFormValue] = useState({
    startPoint: "",
    endPoint: "",
    seats: 1,
    rideTime: "", // ✅ Added
  });

  const [results, setResults] = useState([]);
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValue((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    setResults([]);

    const { startPoint, endPoint, seats, rideTime } = formValue;

    let query = supabase
      .from("searched_locations")
      .select("*")
      .ilike("start_location", `%${startPoint}%`)
      .ilike("end_location", `%${endPoint}%`)
      .gte("available_seats", parseInt(seats, 10));

    // ✅ Optional filter by ride_time
    if (rideTime) {
      // Combine date with time to create a full ISO timestamp
      const today = new Date().toISOString().split("T")[0]; // YYYY-MM-DD
      const fullDateTime = `${today}T${rideTime}:00`; // Add seconds

      query = query.gte("ride_time", fullDateTime);
    }

    const { data, error } = await query;

    if (error) {
      console.error("Supabase error:", error);
      setError(error.message);
      return;
    }

    console.log("Search Results:", data);
    setResults(data);
  };

  return (
    <div className="wrapper">
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Start Location</label>
          <input
            type="text"
            className="form-control"
            name="startPoint"
            value={formValue.startPoint}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label>End Location</label>
          <input
            type="text"
            className="form-control"
            name="endPoint"
            value={formValue.endPoint}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label>Seats</label>
          <input
            type="number"
            className="form-control"
            name="seats"
            min="1"
            value={formValue.seats}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label>Earliest Ride Time (optional)</label>
          <input
            type="time"
            className="form-control"
            name="rideTime"
            value={formValue.rideTime}
            onChange={handleChange}
          />
        </div>

        <button type="submit">Search</button>
      </form>

      <div className="results">
        <h3>Results:</h3>
        {error && <p style={{ color: "red" }}>Error: {error}</p>}
        {results.length === 0 && !error ? (
          <p>No matching routes found.</p>
        ) : (
          <ul>
            {results.map((route) => (
              <li key={route.id}>
                {route.start_location} → {route.end_location} (
                {route.available_seats} seats) —{" "}
                {new Date(route.ride_time).toLocaleTimeString([], {
                  hour: "2-digit",
                  minute: "2-digit",
                })}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default SearchLocation;
