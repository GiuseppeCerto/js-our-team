const teamPeople = [
	{
		fullName: 'Wayne Barret',
		role: 'Founder & CEO',
        avatar: 'wayne-barnett-founder-ceo.jpg',
	},
	{
		fullName: 'Angela Caroll',
		role: 'Chief Editor',
        avatar:'angela-caroll-chief-editor.jpg',
	},
	{
		fullName: 'Walter Gordon',
		role: 'Office Manager',
        avatar: 'walter-gordon-office-manager.jpg',
	},
	{
		fullName: 'Angela Lopez',
		role: 'Social Media Manager',
        avatar: 'angela-lopez-social-media-manager.jpg',
	},
    {
		fullName: 'Scott Estrada',
		role: 'Developer',
        avatar: 'scott-estrada-developer.jpg',
	},
    {
		fullName: 'Barbara Ramos',
		role: 'Graphic Designer',
        avatar: 'barbara-ramos-graphic-designer.jpg',
	},
]

let htmlTeamPrint = document.getElementById('teamPrint')

console.log(htmlTeamPrint)

for (let key in teamPeople) {

    console.log(teamPeople[key])

}

for (let i = 0; i < teamPeople.length; i++) {
	const team = teamPeople[i]
	const fullName = team.fullName
	const role = team.role
    const avatar = team.avatar

	const teamHtml = 
    `
        <div class="card">
            <img src="./img/${avatar}" class="card-img-top rounded mt-3" alt="#">
            <div class="card-body">
                <h5 class="card-title">${fullName}</h5>
                <p class="card-text">${role}</p>
            </div>
        </div>

    `

	htmlTeamPrint.innerHTML += teamHtml
}
