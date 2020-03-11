import React from "react";
import { logoutUser } from "../../actions/authActions";
import ImageTransfer from "./ImageTransfer";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";

function Dashboard() {
  const history = useHistory();
  const dispatch = useDispatch();
  const onLogoutClick = () => {
    dispatch(logoutUser());
    history.push("/login");
  };
  const { user } = useSelector(state => state.auth);

  return (
    <div>
      <ImageTransfer />
      <button
        style={{
          width: "150px",
          borderRadius: "3px",
          letterSpacing: "1.5px",
          marginTop: "1rem"
        }}
        onClick={onLogoutClick}
        className="btn btn-large waves-effect waves-light hoverable blue accent-3"
      >
        Logout
      </button>
    </div>
  );
}

export default Dashboard;
