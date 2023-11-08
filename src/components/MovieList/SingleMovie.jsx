import { useParams, useNavigate } from 'react-router-dom';

const SingleMovie = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const handleBackNav = () => {
    navigate(-1);
  };
  return (
    <div>
      <p>SingleMovie - {id}</p>
      <button onClick={handleBackNav}>Go Back</button>
    </div>
  );
};

export default SingleMovie;
