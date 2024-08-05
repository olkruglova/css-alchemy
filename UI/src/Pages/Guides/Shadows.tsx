import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { fetchJSON } from "../../services/fetch";

function Shadows() {
  let { shadowType } = useParams();

  console.log(shadowType);

  const getData = () => {
    if (!shadowType) {
      return;
    }

    fetchJSON(`guides/${shadowType}`)
      .then((response) => {
        console.log(response);
        // return response.json();
      })
      .then(function (myJson) {
        console.log(myJson);
      });
  };

  useEffect(() => {
    getData();
  }, [shadowType]);

  return (
    <div className="shadows flex flex-row w-4/5 pt-16 pb-8 px-12 m-auto overflow-hidden"></div>
  );
}

export default Shadows;
