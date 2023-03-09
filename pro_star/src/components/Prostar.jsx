import React, { useState } from 'react';
import prostars from './prostars.json';

function Prostar() {
  const [prostarList, setProstarList] = useState(prostars.slice(0, 5));

  function addRandomProstar() {
    const randomIndex = Math.floor(Math.random() * prostars.length);
    const randomProstar = prostars[randomIndex];
    setProstarList([...prostarList, randomProstar]);
  }

  function sortByName() {
    const sortedProstarList = [...prostarList].sort((a, b) =>
      a.name.localeCompare(b.name)
    );
    setProstarList(sortedProstarList);
  }

  function sortByPopularity() {
    const sortedProstarList = [...prostarList].sort(
      (a, b) => b.popularity - a.popularity
    );
    setProstarList(sortedProstarList);
  }

  function deleteProstar(index) {
    const newProstarList = [...prostarList];
    newProstarList.splice(index, 1);
    setProstarList(newProstarList);
  }

  return (
    <div className="container">
      <h1 className='heading'>Prostar List</h1>
      <div className="menu_buttons">
      <button className='btn' onClick={addRandomProstar}>Add Random Prostar</button>
      <button className='btn' onClick={sortByName}>Sort by Name</button>
      <button className='btn' onClick={sortByPopularity}>Sort by Popularity</button>
      </div>
     
      <table>
        <thead>
          <tr className='info_heading'>
            <th>Picture</th>
            <th>Name</th>
            <th>Popularity</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {prostarList.map((prostar, index) => (
            <tr key={index}>
              <td className='img_container'>
                <img className='prostar_img' src={prostar.pictureUrl} alt={prostar.name} />
              </td>
              <td>{prostar.name}</td>
              <td>{prostar.popularity.toFixed(2)}</td>
              <td>
                <button className='btn_delete' onClick={() => deleteProstar(index)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Prostar;