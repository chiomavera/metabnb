import {Link} from "react-router-dom";
const Button = () => {
    return (
      <div>
           <button className="connect"><Link to="#connect-wallet">Connect Wallet</Link></button>
      </div>
    );
  }
  
  export default Button;