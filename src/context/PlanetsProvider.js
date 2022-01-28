import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import planetsContext from './planetsContext';
import fetchPlanets from '../API/API';

export default function PlanetsProvider(props) {
  const { children } = props;
  const [planets, setPlanets] = useState([]);
  const [filterByName, setFilterByName] = useState({ name: '' });
  const [planetFiltered, setPlanetFiltered] = useState([]);

  useEffect(() => {
    fetchPlanets().then((response) => {
      setPlanets(response);
      setPlanetFiltered(response);
    });
  }, []);

  const values = {
    planets,
    filterByName,
    setFilterByName,
    setPlanetFiltered,
    planetFiltered,
  };

  return (
    <planetsContext.Provider value={ values }>{children}</planetsContext.Provider>
  );
}

PlanetsProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
