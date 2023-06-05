import { Input } from '../../_elements/Input/Input'
import { SearchBarWrapper, StatusInfo } from './SearchBar.styles'

const SearchBar = () => (
	<SearchBarWrapper>
		<StatusInfo>
			<p>Logged as:</p>
			<p>
				<strong>Manager</strong>
			</p>
		</StatusInfo>
		<Input />
	</SearchBarWrapper>
)

export default SearchBar
