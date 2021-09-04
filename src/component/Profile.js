import Image from "./Image"
import logo from "./Moi.png"
import PropTypes from "prop-types";

const styleImage = {
    borderRadius : '50%'
}

const styleButton = {
    backgroundColor: '#4CAF50',
    border: 'none',
    color: 'white',
    padding: '15px 32px',
    textAlign: 'center',
    fontSize: '16px',
    margin: '4px 2px',
    cursor: 'pointer',
    borderRadius: '10px'
}

const myStyle = {
    display : 'flex',
    flexDirection : 'row',
    justifyContent : 'space-evenly'
}


const Profile = (props) => {

    const handleName = () => {
        alert(props.data.fullname);
      }
    
    return(
        <div style={myStyle}>
        <Image>
            <img src={logo} alt="Me here" width="200" height="200" style={styleImage}></img>
        </Image>
        <div>
        <h3>{props.data.fullname}</h3>
        <h3>{props.data.biographie}</h3>
        <h3>{props.data.profession}</h3>
        <button onClick={handleName} style={styleButton}>Contact</button>
        </div>
        </div>
    )
}

Profile.defaultProps = {
    data : {
        fullname : 'nothing here',
        biographie : 'nothing here',
        profession : 'nothing here'
    }
}

Profile.propTypes = {
    data : PropTypes.shape({
        fullname : PropTypes.string,
        biographie : PropTypes.string,
        profession : PropTypes.string
    })
}

export default Profile;