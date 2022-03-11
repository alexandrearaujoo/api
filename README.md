<h1 align="center">
	<img src="https://rodrigoavalente.github.io/assets/images/steroidtocat.png" />
</h1>

<h1 align="center">GitHub API</h1>

##  BaseURL 
https://github-api-kenzieacademy.herokuapp.com/

## Endpoint
GET - /repos/owner/repo

*exemplo:https://github-api-kenzieacademy.herokuapp.com/repos/facebook/react *
```json
{
	"data": {
		"id": 10270250,
		"name": "react",
		"full_name": "facebook/react",
		"visibility": "public",
		"default_branch": "main",
		"description": "A declarative, efficient, and flexible JavaScript library for building user interfaces.",
		"html_url": "https://github.com/facebook/react"
	},
	"owner": {
		"id": 69631,
		"avatar_url": "https://avatars.githubusercontent.com/u/69631?v=4",
		"page": "https://github.com/facebook"
	}
}
```
