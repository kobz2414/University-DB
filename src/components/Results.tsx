import { useEffect, useState } from "react";

interface Data {
  country?: String;
  web_pages?: string;
  "state-province"?: String;
  name?: String;
}

export const Results = (props: { nameProp: String; countryProp: String;}) => {
  const [data, setData] = useState<Data[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch(
        `http://universities.hipolabs.com/search?name=${
          props.nameProp || props.countryProp ? props.nameProp : " "
        }&country=${
          props.nameProp || props.countryProp ? props.countryProp : ""
        }`
      );
      const result = await res.json();
      setData(result);
    };

    fetchData();
  }, [props.nameProp, props.countryProp]);

  if (!props.nameProp && !props.countryProp) {
    return null;
  }

  return (
    <>
      {data.length !== 0 ? (
        data.map((item, index) => (
            <div
              key={index}
              tabIndex={index}
              className="collapse collapse-arrow border border-base-300 bg-primary rounded-box my-2"
            >
              <div className="collapse-title text-xl font-medium">
                {item.name}
              </div>
              <div className="collapse-content">
                <p>{item.country}</p>
                <a href={item.web_pages}>{item.web_pages}</a>
              </div>
            </div>
          ))
      ): <progress className="progress w-56 mt-20"></progress>}
    </>
  );
};
