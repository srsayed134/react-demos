const App = () => {

    const myName = "Sayed";
    const multiply = (a, b) => a * b;
    const classExample = "example-1"
 

    return (
    <div>
    <p>2 + 2 = {2+2}</p>
    <p>{myName}</p>
    <p>My Friend List: {["Alex ,", "Jhon"]}</p>
    <p>3 * 2 = {multiply(3,2)}</p>
    <p className={classExample}>This is example of class</p>
    </div>

    );
};

export default App;