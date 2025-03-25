import { createContext, useState, useEffect } from 'react';

// contexto para  usuario
const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    console.log('Valor en localStorage:', storedUser); // verifica el localStorage

    if (storedUser) {
      setUser(storedUser);
    }
  }, []);

  // actualizar los datos del usuario
  const updateUser = (updatedUser) => {
    if (updatedUser) {
      setUser(updatedUser);
      try {
        // guardar el usuario actualizado
        localStorage.setItem('user', JSON.stringify(updatedUser));
        console.log('Usuario actualizado:', updatedUser);
      } catch (error) {
        console.error('Error al guardar el usuario en localStorage:', error);
      }
    }
  };

  return (
    <UserContext.Provider value={{ user, updateUser }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserContext;
