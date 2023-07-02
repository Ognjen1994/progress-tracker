import './ProgressTracker.scss';

import React from 'react';
import { useQuery } from 'react-query';

import { fetchData } from '@/api/api';
import ErrorMessage from '@/components/errorMessage/ErrorMessage';
import Spinner from '@/components/spinner/Spinner';
import TaskProgressWidget from '@/components/taskProgressWidget/TaskProgressWidget';

interface Group {
  name: string;
  tasks: Task[];
}

interface Task {
  description: string;
  value: number;
  checked: boolean;
}

const ProgressTracker = () => {
  const PROGRESS_DATA_QUERY_KEY = 'progressData';

  const API_URL = `${
    import.meta.env.VITE_API_BASE_URL
  }/ba0d534f68e34f1be86d7fe7eff92c96/raw/98a91477905ea518222a6d88dd8b475328a632d3/mock-progress`;

  const { data, isLoading, error } = useQuery<Group[], Error>(
    PROGRESS_DATA_QUERY_KEY,
    () => fetchData<Group[]>(API_URL),
    {
      cacheTime: 60 * 1000, // Cache data for 1 minute
      enabled: true,
    }
  );

  if (isLoading) {
    return <Spinner />;
  }

  if (error) {
    return (
      <ErrorMessage
        message={error.message}
        onClick={() => window.location.reload()}
      />
    );
  }

  return (
    <div className="progress-tracker">
      <h1 className="progress-tracker__title">Progress Tracker</h1>
      <TaskProgressWidget
        data={data || []}
        className="progress-tracker__widget"
      />
    </div>
  );
};

export default ProgressTracker;
