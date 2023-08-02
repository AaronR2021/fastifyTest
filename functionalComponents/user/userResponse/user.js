const {findAllCommentQuery,findAllUsersQuery} = require('../userQuery/user');

async function findAllComment (request, reply) {
    const comments = await findAllCommentQuery();
    if(comments){
        reply.status(201).send(comments)
    }else{
        reply.status(404).send('comments not found')
    }
    
}

async function findAllUsers (request, reply) {
    const users =await findAllUsersQuery();
    if(users){
        reply.status(201).send(users)
    }else{
        reply.status(404).send('user not found')
    }
}

module.exports = {
    findAllUsers,
    findAllComment
};