
module.exports = {
    name: 'userinfo',
    description: "gives info about user.",
    execute({ message, args, roles }) {
        message.channel.send(`Your username: ${message.author.username}\nYour ID: ${message.author.id}`);
    }
}