import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { selectAuthToken } from "../../store/authTokenSlice";
import { useSelector } from "react-redux";

function ProtectedRoute(props) {
  const { Compunent } = props;
  const navigate = useNavigate();
  //   const [authToken, setAuthToken] = useState('');
  const authToken = useSelector(selectAuthToken);

  const haveUser = async () => {
    if (!authToken) {
      navigate("/login");
    }
  };

  useEffect(() => {
    haveUser();
  });

  return (
    <>
      <Compunent />
    </>
  );
}

export default ProtectedRoute;
