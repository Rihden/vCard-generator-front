import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

export default function Redirect() {
  const navigate = useNavigate();
  const { uuid } = useParams();
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    if (!uuid) navigate('/')
    const fetchUser = async () => {
      const response = await (
        await fetch(
          `/api/users/${uuid}`
        )
      ).json();

      if (!response.data.firstname) navigate('/')
      setUserData(response.data)
      window.location = `https://pay.google.com/gp/v/save/${response.data?.token}`
    };
    fetchUser();

  }, []);

  // Simple redirection
  return (
    <div>Redirecting to {`https://pay.google.com/gp/v/save/${userData?.token}`}</div>
  )
}