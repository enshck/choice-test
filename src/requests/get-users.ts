type User = {
  id: string;
  name: string;
  phone: string;
};

const data: User[] = [
  {
    id: '001',
    name: 'User 1',
    phone: '+380998511232',
  },
  {
    id: '002',
    name: 'User 2',
    phone: '+380998511233',
  },
  {
    id: '003',
    name: 'User 3',
    phone: '+380998511234',
  },
  {
    id: '004',
    name: 'User 4',
    phone: '+380998511235',
  },
  {
    id: '005',
    name: 'User 5',
    phone: '+380998511236',
  },
];

// MOCKED USERS
export const getUsers = (searchString: string) => {
  const usersPromise: Promise<User[]> = new Promise((resolve) => {
    setTimeout(() => {
      const filteredData = data.filter((elem) => {
        const { name, phone } = elem;

        return (
          name.toLowerCase().includes(searchString.toLowerCase()) ||
          phone.toLowerCase().includes(searchString.toLowerCase())
        );
      });
      resolve(filteredData);
    }, Math.random() * 1000);
  });

  return usersPromise;
};
