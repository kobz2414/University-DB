import { useState } from "react";
import { Results } from "./Results"

export const Home = () => {
    const [country, setCountry] = useState("")
    const [name, setName] = useState("")
    const [propName, setPropName] = useState("")
    const [propCountry, setPropCountry] = useState("")

    const handleSubmit = (name: string, country: string) => {
        setPropName(name)
        setPropCountry(country)
    }

  return (
    <div className="flex flex-col items-center justify-center mt-20">
      <div>
        <h1 className="text-9xl place-self-center">Hello</h1>
      </div>
      <div className="mb-6">
        <h3>Find universities with a click of a button</h3>
      </div>
      <div className="mb-5">
        <div className="form-control w-72 max-w-xs">
          <label className="label">
            <span className="label-text">Country</span>
          </label>
          <input
            type="text"
            placeholder="Ex. Philippines"
            className="input input-bordered w-full max-w-xs text-xs"
            onChange={(e) => setCountry(e.target.value)}
          />
        </div>
        <div className="form-control w-72 max-w-xs">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input
            type="text"
            placeholder="Ex. Harvard"
            className="input input-bordered w-full max-w-xs text-xs"
            onChange={(e) => setName(e.target.value)}
          />
        </div>
      </div>
      <div>
        <button className="btn btn-active px-10 mb-7" onClick={() => handleSubmit(name, country)}>Search</button>
      </div>

      <Results nameProp = {propName} countryProp = {propCountry} />
    </div>
  );
};
