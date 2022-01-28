import React, { useContext } from 'react';
import planetsContext from '../context/planetsContext';

export default function Header() {
  const { setFilterByName } = useContext(planetsContext);
  return (
    <div>
      <input
        data-testid="name-filter"
        type="text"
        onChange={ (e) => setFilterByName({ name: e.target.value }) }
      />
    </div>
  );
}
