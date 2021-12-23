import axios from 'axios';
import { useQuery, QueryCache } from 'react-query';

const fetchProduct = (limit = 10) => axios.get(`/api/id`).then(({ data }) => data);

const useSearch = (limit = 10) => {
  const queryCache = new QueryCache({
    onError: (error) => {
      console.log(error);
    },
    onSuccess: (data) => {
      console.log(data);
    },
  });
  return useQuery(['products', limit], () => fetchProduct(limit), {
    placeholderData: () => queryCache.find('products'),
    staleTime: 5000,
  });
};
export { useSearch, fetchProduct };
