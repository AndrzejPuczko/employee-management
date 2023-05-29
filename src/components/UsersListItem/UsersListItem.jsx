const UsersListItem = ({ userData: { average, name, lengthOfService } }) => (
	<li>
		<div>{average}</div>
		<div>
			<p>{name}</p>
			<p>{lengthOfService}</p>
		</div>
		<button>X</button>
	</li>
)

export default UsersListItem
