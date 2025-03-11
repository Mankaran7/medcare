
import './FilterSidebar.css'
export default function FilterSidebar() {
  return (
    <div className="filter-sidebar">
      <h3 className="filter-title">Filter by</h3>

      <div className="filter-section">
        <h4 className="filter-section-title">Rating</h4>
        <div className="filter-options">
          <label className="filter-option">
            <input type="radio" name="rating" value="show-all" defaultChecked />
            Show All
          </label>
          <label className="filter-option">
            <input type="radio" name="rating" value="5" />
            5 star
          </label>
          <label className="filter-option">
            <input type="radio" name="rating" value="4" />
            4 star
          </label>
          <label className="filter-option">
            <input type="radio" name="rating" value="3" />
            3 star
          </label>
          <label className="filter-option">
            <input type="radio" name="rating" value="2" />
            2 star
          </label>
        </div>
      </div>

      <div className="filter-section">
        <h4 className="filter-section-title">Experience</h4>
        <div className="filter-options">
          <label className="filter-option">
            <input type="radio" name="experience" value="15+" defaultChecked />
            15+ years
          </label>
          <label className="filter-option">
            <input type="radio" name="experience" value="10-15" />
            10-15 years
          </label>
          <label className="filter-option">
            <input type="radio" name="experience" value="5-10" />
            5-10 years
          </label>
          <label className="filter-option">
            <input type="radio" name="experience" value="3-5" />
            3-5 years
          </label>
          <label className="filter-option">
            <input type="radio" name="experience" value="1-3" />
            1-3 years
          </label>
          <label className="filter-option">
            <input type="radio" name="experience" value="0-1" />
            0-1 years
          </label>
          
        </div>
      </div>

      <div className="filter-section">
        <h4 className="filter-section-title">Gender</h4>
        <div className="filter-options">
          <label className="filter-option">
            <input type="radio" name="gender" value="any" defaultChecked />
            Show all
          </label>
          <label className="filter-option">
            <input type="radio" name="gender" value="male" />
            Male
          </label>
          <label className="filter-option">
            <input type="radio" name="gender" value="female" />
            Female
          </label>
        </div>
      </div>
    </div>
  )
}