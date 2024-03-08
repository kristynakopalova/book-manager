export const fetcherWithAuth = async (args: string[]) => {
  return fetch(args[0], {
    headers: { Authorization: 'Bearer ' + args[1] },
  }).then((res) => res.json());
};
