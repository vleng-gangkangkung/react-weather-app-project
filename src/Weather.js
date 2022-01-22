import React from "react";

export default function Weather() {
  return (
    <div className="Weather Container">
      <div class="form-row">
        <div class="form-group">
          <input
            type="text"
            class="form-control form-control-md searchCopy"
            id="search-bar"
            style="padding-left: 20px;"
            placeholder="Search city or use your current location"
          />
        </div>
      </div>

      <div class="col-md-2">
        <div class="form-group">
          <input
            type="submit"
            value="search"
            class="searchCopy btn"
            id="submit-btn"
          />
        </div>
      </div>
    </div>
  );
}
