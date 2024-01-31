// pages/profile/[id].tsx
import { useRouter } from 'next/navigation';
import { useState, useEffect } from 'react';

interface User {
  user_id: {
    [key: string]: string;
  };
  Name: string;
  Email: string;
  Password: string;
  Avatar: string;
  DateCreation: string;
  Address: string;
  Regime: {
    Vegan: boolean;
    Vegetarian: boolean;
    GlutenFree: boolean;
    LactoseFree: boolean;
    PorkFree: boolean;
    EggFree: boolean;
    NutsFree: boolean;
    AlcoholFree: boolean;
  };
  Events: [];
}

const UserProfile: React.FC = () => {
  const router = useRouter();
  const { id } = router.query;
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    async function fetchUser() {
      try {
        const response = await fetch('/user.json');
        const data = await response.json();

        // Utilisation de Object.values pour obtenir un tableau des valeurs des clés
        const userData = data.find((user: User) => Object.values(user.user_id)[0] === id);

        setUser(userData);
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
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
};

export default UserProfile;
