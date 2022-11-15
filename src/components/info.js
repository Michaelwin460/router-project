export default function Info(){
    const {name, email, phone, address: {street, city}} = JSON.parse(localStorage.getItem('user'))
    // const {street, city} = JSON.parse(localStorage.getItem(user.address))
// console.log(user);

    return(
        <div style={{marginLeft:'450px', padding: '30px'}}>
            <h1>{name} details:</h1>
            <ul>
                <li>email: {email}</li>
                <li>phone: {phone}</li>
                <li>street: {street}</li>
                <li>city: {city}</li>
            </ul>
        </div>
    )
}