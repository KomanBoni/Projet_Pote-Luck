import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';

export default function UserProfile() {
  const router = useRouter();
  const { id } = router.query;
  const [user, setUser] = useState(null);

  useEffect(() => {
    async function fetchUser() {
      const response = await fetch('app/profile/[profile_name]/users.json');
      const data = await response.json();
      const userData = data.find((user) => user.user_id[id]);
      setUser(userData);
    }

    if (id) {
      fetchUser();
    }
  }, [id]);

  if (!user) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>{user.Name}</h1>
      <img src={user.Avatar} alt={user.Name} />
      <p>Email: {user.Email}</p>
      <p>Address: {user.Address}</p>
      <h2>Dietary Regime:</h2>
      <ul>
        <li>Vegan: {user.Regime.Vegan ? 'Yes' : 'No'}</li>
        <li>Vegetarian: {user.Regime.Vegetarian ? 'Yes' : 'No'}</li>
        <li>Gluten-free: {user.Regime.GlutenFree ? 'Yes' : 'No'}</li>
        <li>Lactose-free: {user.Regime.LactoseFree ? 'Yes' : 'No'}</li>
        <li>Pork-free: {user.Regime.PorkFree ? 'Yes' : 'No'}</li>
        <li>Egg-free: {user.Regime.EggFree ? 'Yes' : 'No'}</li>
        <li>Nuts-free: {user.Regime.NutsFree ? 'Yes' : 'No'}</li>
        <li>Alcohol-free: {user.Regime.AlcoholFree ? 'Yes' : 'No'}</li>
      </ul>
    </div>
  );
}