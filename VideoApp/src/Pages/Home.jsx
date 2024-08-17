import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Home() {
  const [roomCode, setroomCode] = useState("");
  const navigate = useNavigate();
  const handleinput = (e) => {
    setroomCode(e.target.value);
  };
  const handleformSubmit = (event) => {
    event.preventDefault();

    navigate(`/room/${roomCode}`);
  };
  return (
    <div className="HomePage">
      <div className="Form">
        <form onSubmit={handleformSubmit} className="form">
          <div>
            <label>Enter Room Code</label>
            <input
              type="text"
              placeholder="Enter your room code"
              required
              value={roomCode}
              onChange={handleinput}
            />
          </div>
          <button type="submit">Enter code</button>
        </form>
      </div>
    </div>
  );
}

export default Home;
