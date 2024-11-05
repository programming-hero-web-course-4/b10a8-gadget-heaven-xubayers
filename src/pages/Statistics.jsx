import { useEffect } from "react";

export default function Statistics() {
  useEffect(() => {
    document.title = "Statistics || Gadget Heaven";
  }, []);

  return <div>statistics</div>;
}
