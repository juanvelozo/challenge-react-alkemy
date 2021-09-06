import React from 'react';

function SearchResultItem({data}) {
  return (
    <div className="card m-3 grid" style={{width: '20rem'}}>
      <img src={data.image.url} alt="pic" className="card-img-top"/>
      <div className="card-body p-2">
        <p className="card-title">{data.name}</p>
        <div>
          <p>Name: {data.biography['full-name']}</p>
          <p>Weight: {data.appearance.weight[1]}</p>
          <p>Height: {data.appearance.height[1]}</p>
          <p>Eye Color: {data.appearance['eye-color']}</p>
          <p>Occupation: {data.work.occupation}</p>
          <p>Aliases: 
            {data.biography.aliases.map
              (
                alias => 
                <li key={alias}>{alias}</li>
              )
            }
          </p>
        </div>
      </div>
    </div>
  );
}

export default SearchResultItem;