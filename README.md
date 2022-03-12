<h1 align="center">
	<img src="https://rodrigoavalente.github.io/assets/images/steroidtocat.png" />
</h1>

<h1 align="center">GitHub API</h1>

Api intermediária para consumir a API oficial do GitHub: https://api.github.com/

##  BaseURL 
https://github-api-kenzieacademy.herokuapp.com/

## Endpoint
`GET - /repos/owner/repo`

Para realizar a requisição, digite o nome da organização ou o usuário do github (owner), logo após digite o nome do repositório (repo) que pertence a organização ou usuário passado.

*exemplo:https://github-api-kenzieacademy.herokuapp.com/repos/facebook/react *

`Status code - 200`

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
