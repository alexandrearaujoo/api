const express = require('express')
const router = express.Router()
const api = require('../services/api.js')

router.get('/:owner/:repo', async (req, res) => {
    try {
        await await api.get(`/repos/${req.params.owner}/${req.params.repo}`)
        .then(response => {
            const {id, name, full_name,visibility, default_branch, description, html_url, owner} = response.data
            const newData = {
                    id: id,
                    name:name,
                    full_name: full_name,
                    visibility: visibility,
                    default_branch: default_branch,
                    description: description,
                    html_url: html_url
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

module.exports = router