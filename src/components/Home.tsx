import { Results } from "./Results"

export const Home = () => {
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
          />
        </div>
        <div className="form-control w-72 max-w-xs">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input
            type="text"
            placeholder="Ex. Hardvard"
            className="input input-bordered w-full max-w-xs text-xs"
          />
        </div>
      </div>
      <div>
        <button className="btn btn-active px-10">Search</button>
      </div>

      <Results />
    </div>
  );
};
