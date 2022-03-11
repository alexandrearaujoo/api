<h1 align="center">
	<img src="https://rodrigoavalente.github.io/assets/images/steroidtocat.png" />
</h1>

<h1 align="center">GitHub API</h1>

##  BaseURL 
http://localhost:3000/ (SUBSTITUIR PELA URL DO HEROKU)

## Endpoint
GET - /repos/owner/repos

*exemplo: http://localhost:3000/repos/facebook/react *
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
