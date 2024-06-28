import axios from "axios";
import { useState, useEffect } from "react";
import { NavigationLink } from "../../Types/Navigation";

const useNavigation = () => {
  const [navigationLinks, setNavigationLinks] = useState<NavigationLink[]>([]);

  useEffect(() => {
    axios.get("Data/NavigationData.json").then((res) => {
      setNavigationLinks(res.data.navigation);
    });
  }, []);

  return { navigationLinks };
};

export default useNavigation;
