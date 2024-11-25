import { Link, Redirect } from "expo-router";

const scanComponent = () => {
  return <Link href="./scanner" style={{ color: "blue", fontWeight: "bold", padding: 50 }}>START SCAN</Link>
}

export default scanComponent
