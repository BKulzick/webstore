import logo from '../../images/hexagon.png'; // Tell webpack this JS file uses this image
import Location from './Location';
console.log(logo); // /logo.84287d09.png


const Board = () => {
    return <div>
                <h1>HELLO!</h1>
                <Location/>
        <Location/><Location/><Location/>
            </div>;
}

export default Board;