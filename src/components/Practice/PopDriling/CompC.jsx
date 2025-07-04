import { useContext } from 'react';
import { Data, Data1 } from '../../../App';


function CompC() {
    
    const userName = useContext(Data);
    const userAge = useContext(Data1)

    return (
        <h1>My name is {userName} and i am is {userAge} years old</h1>

    //    <Data.Consumer>
    //     {(name) => {
    //         return <Data1.Consumer>
    //             {(age) => {
    //                 return <h1>My name is {name} and i am {age} years old</h1>
    //             }}
    //         </Data1.Consumer>
    //     }}
    //    </Data.Consumer>
    );
}

export default CompC;