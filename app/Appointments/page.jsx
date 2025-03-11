import './Appointments.css'
import SearchBar from "../Components/SearchBar";
import FilterSidebar from "../Components/FilterSidebar"
import DoctorsList from "../Components/DoctorsList"
export default function home(){
    return(
        <div className="container">
           <div className="search-container">
             <SearchBar/>
           </div>
            <div className="search-results">
            <h2>6 doctors available</h2>
            <p className="search-description">Book appointments with minimum wait-time & verified doctor details</p>
            <div className="search-content" >
             <FilterSidebar />
             <DoctorsList/>
            </div>
            </div>
        </div>
        
    )
}