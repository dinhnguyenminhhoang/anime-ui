import { Link } from "react-router-dom";

function Watching() {
  const name = "hoang";
  return <Link to={`/@${name}`}> 123</Link>;
}
export default Watching;
