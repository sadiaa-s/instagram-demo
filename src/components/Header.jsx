import Button from 'react-bootstrap/Button';
import { IoMdMenu } from "react-icons/io";
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';
export default function Header() {
  return (
    <>

      <div className="logo">
        <Button variant="warning">Sadia</Button>
        <div>
          <span className="fs-2 fw-bold">+</span>
          <span><IoMdMenu /></span>
        </div>
      </div>
      <div className="profile-section">
      <img className="img" src="img.jpeg" alt="" />
    
        <div className="follow-section">

          <p >6 <br />No of posts</p> 
          <p> 864 <br />Followers</p>
          <p>830 <br />Following</p>
        </div>
      </div>
      <div className="button-group">
        <button>Edit profile</button>
        <button>Share profile</button>
      </div>
    </>
  );
}