import React, { useEffect, useState } from 'react';

const Activities = () => {
  const [activities, setActivities] = useState([]);
  const endpoint = `https://${process.env.REACT_APP_CODESPACE_NAME}-8000.app.github.dev/api/activities/`;

  useEffect(() => {
    fetch(endpoint)
      .then(res => res.json())
      .then(data => {
        const results = data.results || data;
        setActivities(results);
        console.log('Activities endpoint:', endpoint);
        console.log('Fetched activities:', results);
      })
      .catch(err => console.error('Error fetching activities:', err));
  }, [endpoint]);

  return (
    <div>
      <h2 className="mb-4 display-6 text-primary">Activities</h2>
      <div className="table-responsive">
        <table className="table table-striped table-bordered">
          <thead className="table-primary">
            <tr>
              <th>User</th>
              <th>Activity Type</th>
              <th>Duration</th>
              <th>Team</th>
            </tr>
          </thead>
          <tbody>
            {activities.map((activity, idx) => (
              <tr key={idx}>
                <td>{activity.user || '-'}</td>
                <td>{activity.activity_type || '-'}</td>
                <td>{activity.duration || '-'}</td>
                <td>{activity.team || '-'}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Activities;
