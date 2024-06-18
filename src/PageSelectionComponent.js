import React, { useState } from 'react';
import './App.css'; // Import your CSS file for component styling

const PageSelectionComponent = () => {
  const [selectAll, setSelectAll] = useState(false);
  const [pageSelection, setPageSelection] = useState({
    "Page 1": false,
    "Page 2": false,
    "Page 3": false,
    "Page 4": false,
    // we can add more pages as needed
  });

  const handlePageSelect = (page) => {
    setPageSelection({
      ...pageSelection,
      [page]: !pageSelection[page],
    });
  };

  const handleSelectAll = () => {
    const newSelectAll = !selectAll;
    setSelectAll(newSelectAll);
    const newPageSelection = {};
    for (let page in pageSelection) {
      newPageSelection[page] = newSelectAll;
    }
    setPageSelection(newPageSelection);
  };

  const handleDone = () => {
    console.log("Done button clicked");
  };

  return (
    <div className="page-selection-container">
      <div className="center-container">
        <label className="select-all-label">
          
          All Pages
          <input
            type="checkbox"
            checked={selectAll}
            onChange={handleSelectAll}
          />
        </label>
        <div className="pages-container">
          {Object.keys(pageSelection).map((page) => (
            <label key={page} className="page-label">
                {page}
              <input
                type="checkbox"
                checked={pageSelection[page]}
                onChange={() => handlePageSelect(page)}
              />
              
            </label>
          ))}
        </div>
        <button className="done-button" onClick={handleDone}>Done</button>
      </div>
    </div>
  );
};

export default PageSelectionComponent;
