const USER_DATABASE_NAME = 'usersDDBB';

export const getAuthenticatedUser = ({ email, password }) => {
  //autenticamos usuario verificando email y passwword en localsetore
  if (!email || !password)
    throw new Error('Correo electrónico o contraseña incorrectos');

  const users = JSON.parse(localStorage.getItem(USER_DATABASE_NAME)) || [];

  const user = users.find(
    (user) => user.email === email && user.password === password
  );

  if (!user) throw new Error('Correo electrónico o contraseña incorrectos'); //lanza error si no encuentra

  return user;
};

export const updateUser = (user) => {
  //actualizamos el usuario, funcion profile
  if (!user) throw new Error('usuario erroneo.');

  const users = JSON.parse(localStorage.getItem(USER_DATABASE_NAME)) || [];

  const updatedUsers = users.map(
    (existingUser) => (existingUser.email === user.email ? user : existingUser) //recorre lista y reemplaza
  );

  localStorage.setItem(USER_DATABASE_NAME, JSON.stringify(updatedUsers)); //vuelve a guardar en localstore
};

export const addUser = (user) => {
  //agrega nuevo usuario
  if (!user) throw new Error('Usuario erroneo.');
  const users = JSON.parse(localStorage.getItem(USER_DATABASE_NAME)) || [];

  const isUserRegister = users.some(
    //verificamos mismo usuario con mismo email.
    (existingUser) => existingUser.email === user.email
  );

  if (isUserRegister)
    throw new Error('Este correo electrónico ya está registrado.');

  const updatedUsers = [...users, user];
  localStorage.setItem(USER_DATABASE_NAME, JSON.stringify(updatedUsers)); //agrega y guarda

  return user;
};
