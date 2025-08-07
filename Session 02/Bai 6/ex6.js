function createUser (name, age = 18, role = "User") {
    let dev = {
        name,
        age,
        role
        
    }
    console.log(dev);
}
createUser("dev", 20, "creator")