import React, { useState } from 'react';

const Profile = () => {
  const [searchName, setSearchName] = useState('');
  const [profile, setProfile] = useState(null);

  const handleSearch = async () => {
    try {
      const response = await fetch(`/profile/${searchName}`);
      const data = await response.json();
      setProfile(data);
    } catch (error) {
      console.error('Erreur lors de la recherche du profil:', error);
    }
  };

  return (
    <div>
      <h1>Recherche de Profil</h1>
      <input
        type="text"
        placeholder="Nom de la personne"
        value={searchName}
        onChange={(e) => setSearchName(e.target.value)}
      />
      <button onClick={handleSearch}>Rechercher</button>
    </div>
  );
};

export default Profile;

