function App() {

    return (<User 
    img = "https://avatars.githubusercontent.com/u/85052811?v=4"
    name = "Sayed"
    age = {22}
    isMarried={false}
    hobbies = {["Codding", "Watching movies", "Gaming"]} />
   );
};

const User = ({img, name, age, isMarried, hobbies}) => {
    return <section>
        <img src={img} alt={name} width={200}/>
        <h1>Name : {name}</h1>
        <h1>Age : {age}</h1>
        <h1>Maritial status : {isMarried}</h1>
        <h1>Hobies: {hobbies}</h1>
    </section>
}

export default App