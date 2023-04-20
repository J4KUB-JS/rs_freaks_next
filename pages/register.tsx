import Link from "next/link";

const JoinClub = () => {
  return (
    <div className="joinClubSection">
      <div className="card">
        <div className="headline">
          Dive into <br></br> world of cars
        </div>
        <form>
          <div className="inputElement">
            <label htmlFor="full-name">Full name</label>
            <input id="full-name" name="full-name" type="text" />
          </div>
          <div className="inputElement">
            <label htmlFor="email">Email</label>
            <input id="email" name="email" type="email" />
          </div>
          <div className="inputElement">
            <label htmlFor="password">Password</label>
            <input id="password" name="password" type="password" />
          </div>
          <button type="submit">Join</button>
          <div className="login">
            Already have account? <Link href="/">Login</Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default JoinClub;
