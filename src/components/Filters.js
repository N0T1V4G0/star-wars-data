import React, { useContext, useState } from 'react';
import planetsContext from '../context/planetsContext';

function Filters() {
  const { planets, setPlanetFiltered } = useContext(planetsContext);

  const [column, setColumn] = useState('population');
  const [operator, setOperator] = useState('maior que');
  const [valueFilter, setValueFilter] = useState(0);
  const [filterOptions] = useState([
    'population',
    'orbital_period',
    'diameter',
    'rotation_period',
    'surface_water',
  ]);
  const [operatorOptions] = useState(['maior que', 'menor que', 'igual a']);

  const handleFilterByNum = () => {
    const filteredByNum = planets.filter((planet) => {
      if (operator === 'maior que') {
        return planet[column] > valueFilter * 1;
      }
      if (operator === 'menor que') {
        return planet[column] < valueFilter * 1;
      }
      return planet[column] === valueFilter;
    });
    setPlanetFiltered(filteredByNum);
  };

  return (
    <div style={ { display: 'flex' } }>
      <div>
        <select
          data-testid="column-filter"
          onChange={ (e) => setColumn(e.target.value) }
        >
          {filterOptions.map((option, i) => (
            <option key={ i } value={ option }>
              {option}
            </option>
          ))}
        </select>
      </div>
      <div>
        <select
          data-testid="comparison-filter"
          onChange={ (e) => setOperator(e.target.value) }
        >
          {operatorOptions.map((OperatorOption, i) => (
            <option key={ i } value={ OperatorOption }>
              {OperatorOption}
            </option>
          ))}
        </select>
      </div>
      <input
        type="number"
        data-testid="value-filter"
        value={ valueFilter }
        onChange={ (e) => setValueFilter(e.target.value) }
      />
      <button
        type="button"
        data-testid="button-filter"
        onClick={ (e) => {
          e.preventDefault();
          handleFilterByNum();
        } }
      >
        Filtrar
      </button>
    </div>
  );
}

export default Filters;
