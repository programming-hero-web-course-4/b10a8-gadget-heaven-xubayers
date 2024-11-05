import { useRouteError } from "react-router-dom";

export default function ErrorPage() {
  const err = useRouteError();
  console.log(err);
  return (
    <div className="h-screen flex flex-col justify-center items-center">
      <h1 className="text-3xl text-error">{err.status} </h1>
      <h2 className="text-xl">{err.statusText}</h2>
    </div>
  );
}
