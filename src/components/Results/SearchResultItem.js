import React from "react";

function SearchResultItem({ data }) {
  return (
    <div className="card ms-3" style={{ maxwidth: "20rem" }}>
      <div className="row no-gutters">
        <div className="col-md-6">
          <img src={data.image.url} alt="pic" className="card-img" />
        </div>
        <div className="col-md-6">
          <div className="card-body">
            <h2 className="font-weight-bolder card-title">{data.name}</h2>

            <div className="card-text">
              <p>Name: {data.biography["full-name"]}</p>
              {/* 
              <p>Weight: {data.appearance.weight[1]}</p>
              <p>Height: {data.appearance.height[1]}</p>
              <p>Eye Color: {data.appearance["eye-color"]}</p>
              <p>Occupation: {data.work.occupation}</p> */}
              {data.biography.aliases !== data.biography["full-name"] && (
                <p className="card-text">{data.biography.aliases}</p>
              )}
              {/* <p>
                Aliases:
                {data.biography.aliases.map((alias) => (
                  <li key={alias}>{alias}</li>
                ))}
              </p> */}
              <button className="btn btn-dark">Recluit!</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SearchResultItem;
