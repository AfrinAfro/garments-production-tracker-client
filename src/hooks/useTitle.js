import { useEffect } from "react";

const useTitle = title => {
  useEffect(() => {
    document.title = `${title} | GarmentsPro`;
  }, [title]);
};

export default useTitle;