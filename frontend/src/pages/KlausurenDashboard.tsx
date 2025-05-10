import { useEffect } from "react";

function KlausurenDashboard() {
  /* Set the current page title */
  useEffect(() => {
    document.title = "Dashboard";
  }, []);

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-12 col-sm-8 col-md-6 col-lg-4"> 

      <h1 className="text-center">Dashboard</h1>
      <h5 className="text-center">Hello World!</h5>
      </div>
    </div>
    </div>
  );
}

export default KlausurenDashboard;