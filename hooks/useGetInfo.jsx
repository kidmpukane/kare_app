import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const useGetInfo = (infoUrl) => {
  const fetchInfo = async () => {
    const response = await axios.get(infoUrl);
    return response.data;
  };

  const { isLoading, data, isError, error, refetch } = useQuery({
    queryKey: ["info", infoUrl], // Pass query key as an array
    queryFn: fetchInfo, // Use queryFn instead of passing directly
  });

  return { isLoading, data, isError, error, refetch };
};

export default useGetInfo;
