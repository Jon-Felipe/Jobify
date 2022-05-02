import React, { useEffect } from 'react';
import { useAppContext } from '../../context/appContext';

// components
import StatsContainer from '../../components/StatsContainer';
import Loading from '../../components/Loading';
import ChartsContainer from '../../components/ChartsContainer';

const Stats = () => {
  const { showStats, isLoading, monthlyApplications } = useAppContext();

  useEffect(() => {
    showStats();
    // eslint-disable-next-line
  }, []);

  if (isLoading) {
    return <Loading center />;
  }

  return (
    <>
      <StatsContainer />
      {monthlyApplications.length > 0 && <ChartsContainer />}
    </>
  );
};

export default Stats;
