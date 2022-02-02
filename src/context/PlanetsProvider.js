import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import planetsContext from './planetsContext';
import fetchPlanets from '../API/API';

export default function PlanetsProvider(props) {
  const { children } = props;
  const [planets, setPlanets] = useState([]);
  const [planetFiltered, setPlanetFiltered] = useState([]);
  const [filterByName, setFilterByName] = useState({ name: '' });

  useEffect(() => {
    fetchPlanets().then((response) => {
      setPlanets(response);
      setPlanetFiltered(response);
    });
  }, []);

  const values = {
    planets,
    planetFiltered,
    setPlanetFiltered,
    filterByName,
    setFilterByName,
  };

  return (
    <planetsContext.Provider value={ values }>{children}</planetsContext.Provider>
  );
}

PlanetsProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
