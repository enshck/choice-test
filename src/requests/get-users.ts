type User = {
  id: string;
  name: string;
};

const data: User[] = [
  {
    id: '001',
    name: 'Name 1',
  },
  {
    id: '002',
    name: 'Name 2',
  },
  {
    id: '003',
    name: 'Name 3',
  },
  {
    id: '004',
    name: 'Name 4',
  },
  {
    id: '005',
    name: 'Name 5',
  },
];

// MOCKED USERS
export const getUsers = (searchString: string) => {
  const usersPromise: Promise<User[]> = new Promise((resolve) => {
    setTimeout(() => {
      resolve(data);
    }, 300);
  });

  return usersPromise;
};
