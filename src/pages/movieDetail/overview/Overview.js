import React, { useEffect, useState } from 'react';
import { getMovieDetail } from '../../../api';

const Overview = () => {
  const [overview, setOverview] = useState();

  useEffect(() => {
    const fetchData = async (id) => {
      const overviewResult = await getMovieDetail();

      setOverview(overviewResult);
    };
    fetchData();
  }, []);

  return <div>Overview</div>;
};

export default Overview;
