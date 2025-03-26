import { createContext, useState, useEffect, useMemo } from 'react';
import { getAuthenticatedUser } from '../utils/userDDBB';

// contexto para  usuario
const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    console.log('Valor en localStorage:', storedUser); // verifica el localStorage

    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  // actualizar los datos del usuario
  const login = ({ email, password }) => {
    const user = getAuthenticatedUser({ email, password });
    if (!user) return;

    // guardar el uuario actualizado
    localStorage.setItem('user', JSON.stringify(user));
    setUser(user);
    console.log('Usuario actualizado:', user);
    return user;
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('user');
  };

  const contextValue = useMemo(() => ({ user, login, logout }), [user]);

  return (
    <UserContext.Provider value={contextValue}>{children}</UserContext.Provider>
  );
};

export default UserContext;
