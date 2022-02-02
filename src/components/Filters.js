import React, { useContext } from 'react';
import planetsContext from '../context/planetsContext';

function Filters() {
  const {
    planets,
    filterOptions,
    operatorOptions,
    setColumn,
    setOperator,
    setValueFilter,
    setPlanetFiltered,
    valueFilter,
    operator,
    column,
    planetFiltered,
  } = useContext(planetsContext);

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
        } }
      >
        Filtrar
      </button>
    </div>
  );
}

export default Filters;
