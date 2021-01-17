const Subscription = {
    user: {
        subscribe(parent, args, { pubsub }, info) {
            return pubsub.asyncIterator(`user`)
        }
    }
}
 module.exports = Subscription