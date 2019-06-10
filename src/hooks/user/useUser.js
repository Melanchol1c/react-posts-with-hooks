import { useState, useEffect } from 'react';
import Axios from 'axios';
import { USERS_API } from '../../apiUrls';

/**
 * Custom hook for user data.
 * @param {Number} userId Id of user for fetching data.
 * @returns Returns user data, error flag while fetching and loading status.
 */
export default function useUser(userId) {
  const [user, setUser] = useState({});
  const [userError, setUserError] = useState(false);
  const [userLoading, setUserLoading] = useState(true);

  useEffect(() => {
    Axios.get(`${USERS_API}/${userId}`)
      .then(res => {
        setUser(res.data);
        setUserLoading(false);
      })
      .catch(() => {
        setUserError(true);
      });
  }, [userId]);

  return { user, userError, userLoading };
}
