import { v4 as uuid } from 'uuid';

let users = [];

export const getUsers = (req, res) => {
    // console.log(`Users in the database: ${[...users]}`);
    // console.log("USer at server : ",users)
    res.send(JSON.stringify(users));
}

export const createUser = (req, res) => {   
    const user = req.body;
    users.push({...user, id: uuid()});
    res.send(JSON.stringify(users));
};

export const getUser = (req, res) => {
    res.send(req.params.id)
};

export const deleteUser = (req, res) => { 
    const dataindex = users.findIndex((data)=>data.id === req.params.id)
    if(dataindex !== -1){
        //remove only one element at certain index
        users.splice(dataindex,1)
    }
    
};

export const updateUser =  (req,res) => {

    const updatedata = req.body
    const dataindex = users.findIndex((data)=>data.id === req.params.id)

    if(dataindex !== -1){
        users[dataindex] = {...users[dataindex], ...updatedata}
    }

    // user.username = req.body.username;
    // user.age = req.body.age;
    // const [name,contact,age] = [...user]
    // name = req.body.name
    // for(const userproperty in data){
    //     if(userproperty !== 'id'){
    //         if(req.body.hasOwnProperty(userproperty)){
    //             data[userproperty] = req.body[userproperty]
    //         }
    //     }
    // }
};