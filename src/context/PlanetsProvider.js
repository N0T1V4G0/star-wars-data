import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import planetsContext from './planetsContext';
import fetchPlanets from '../API/API';

export default function PlanetsProvider(props) {
  const { children } = props;
  const [planets, setPlanets] = useState([]);
  const [planetFiltered, setPlanetFiltered] = useState([]);
  const [filterByName, setFilterByName] = useState({ name: '' });
  const [filterByNumericValues, setFilterByNumericValues] = useState([]);
  const [column, setColumn] = useState('population');
  const [operator, setOperator] = useState('maior que');
  const [operatorOptions, setOperatorOptions] = useState([
    'maior que',
    'menor que',
    'igual a',
  ]);
  const [valueFilter, setValueFilter] = useState(0);
  const [filterOptions, setFilterOptions] = useState([
    'population',
    'orbital_period',
    'diameter',
    'rotation_period',
    'surface_water',
  ]);

  useEffect(() => {
    fetchPlanets().then((response) => {
      setPlanets(response);
      setPlanetFiltered(response);
    });
  }, []);

  useEffect(() => {
    const filteredByNumValues = planets.filter((planet) => {
      // console.log(planet);
      if (operator === 'menor que') {
        return planet[column] < valueFilter;
      }
      if (operator === 'maior que') {
        return planet[column] > valueFilter;
      } if (operator === 'igual a') {
        return planet[column] === valueFilter;
      }
    });
    setPlanetFiltered(filteredByNumValues);
  }, [planets, column, operator, valueFilter, setValueFilter, setColumn, setOperator]);

  const values = {
    planets,
    planetFiltered,
    setPlanetFiltered,
    filterByName,
    setFilterByName,
    filterByNumericValues,
    setFilterByNumericValues,
    filterOptions,
    operatorOptions,
    setColumn,
    setOperator,
    valueFilter,
    setValueFilter,
  };

  return (
    <planetsContext.Provider value={ values }>{children}</planetsContext.Provider>
  );
}

PlanetsProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
