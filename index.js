const api = require('./api')
const express = require('express')
const server = express()
server.use(express.json())
server.listen(3001)


server.get('/repos/:owner/:repo', async (req, res) => {
    try {
        await await api.get(`/repos/${req.params.owner}/${req.params.repo}`)
        .then(response => {
            const {id, name, full_name,visibility, default_branch, description, owner} = response.data
            const newData = {
                    id: id,
                    name:name,
                    full_name: full_name,
                    visibility: visibility,
                    default_branch: default_branch,
                    description: description
            }
            const newOwner = {
                id: owner.id,
                avatar_url: owner.avatar_url,
                page: owner.html_url,

            }
            res.status(200).send({data: newData, owner: newOwner})
        })
    }
    catch (error){
        res.status(404).send({error: error.message})
    }
})