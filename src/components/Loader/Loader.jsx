import { TailSpin } from "react-loader-spinner";

export const Loader = () => {
      return (
    <div>
      <TailSpin 
        height="50" 
        width="50" 
        color="blue" 
        ariaLabel="loading"
      />
    </div>
  );
}