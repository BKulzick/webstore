import logo from '../../../images/hexagon.png'; // Tell webpack this JS file uses this image



const Location = () => {
    return <div>
                <img src={logo} alt="Logo"/>
            </div>;
}

export default Location;