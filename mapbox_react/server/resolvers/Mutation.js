const {v4: uuid} = require("uuid/")
const Mutation = {
    async createUser(parent, {data}, { User, pubsub }, info) {
        //console.log(data)
        const user = {
            id: uuid(),
            popularity: 0,
            ...data
        }
        
        await User.create(user)
        
        pubsub.publish('user', {
            user: {
                mutation: 'CREATED',
                data: user
            }
        })
        /*
        pubsub.publish(`post ${args.data.fromUser}`, {
            post: {
                mutation: 'CREATED',
                data: post
            }
        })*/
        return user
    },
    async deleteUser(parent, {id}, {User}, info){
        const { deletedCount } = await User.deleteOne({id: id})
        let state
        if(deletedCount === 0){
            state = "User not found!"
        }
        else{
            state = `${deletedCount} users are deleted`
        }
        const ret = {state: state}
        return ret
    }
    ,
    async deleteAllUsers(parent, args , { User }, info) {
        const { deletedCount } = await User.deleteMany({})
        let state = `${deletedCount} users are deleted.`
        const ret = {state: state}
        return ret
    }
}

module.exports = Mutation 