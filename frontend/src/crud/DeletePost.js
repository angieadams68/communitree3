import { Link } from "react-router-dom";

const Delete = () => {
  return (
    <div className="Delete">
      <form id="Delete-Search"></form>
      <Link to="/">Home</Link>

      <main>
        <p>Post successfully deleted.</p>
      </main>
    </div>
  );
};

export default Delete;
