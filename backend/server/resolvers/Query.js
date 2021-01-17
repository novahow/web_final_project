const Query = {
    users(parent, args, { User }, info) {
        //console.log(args)
        if(!args.query.department){
            return User.find({})
        }
        else{
            return User.find({department: args.query.department})
        }
    }
}

module.exports = Query