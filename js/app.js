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
    ` <tr>
        <td>${fullName}</td>
        <td>${role}</td>
        <td>${avatar}/</td>
    </tr>`

	htmlTeamPrint.innerHTML += teamHtml
}