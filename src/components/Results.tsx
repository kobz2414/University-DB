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
      const res = await fetch("https://raw.githubusercontent.com/Hipo/university-domains-list/master/world_universities_and_domains.json")
      const result = await res.json();
      let filter = []


      if(props.nameProp && props.countryProp){
        result.forEach((university: any) => {
          if(university.name.toLowerCase().includes(props.nameProp.toLowerCase()) && university.country.toLowerCase().includes(props.countryProp.toLowerCase())){
            if(!filter.some(data => data.country === university.country && data.name === university.name)){
              filter.push(university)
            }
          }
        })
      }else{
        if(props.nameProp){
          result.forEach((university: any) => {
            if(university.name.toLowerCase().includes(props.nameProp.toLowerCase())){
              if(!filter.some(data => data.country === university.country && data.name === university.name)){
                filter.push(university)
              }
            }
          })
        }
  
        if(props.countryProp){
          result.forEach((university: any) => {
            if(university.country.toLowerCase().includes(props.countryProp.toLowerCase())){
              if(!filter.some(data => data.country === university.country && data.name === university.name)){
                filter.push(university)
              }
            }
          })
        }
      }

      filter.sort((a, b) =>{
        return Number(b.name > a.name)
      })

      setData(filter);
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
