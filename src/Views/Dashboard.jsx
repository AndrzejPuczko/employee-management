import React, { useEffect, useState } from 'react'
import { ViewWrapper } from '../components/_modules/ViewWrapper/ViewWrapper'
import UsersList from '../components/_templates/UsersList/UsersList'
import { useParams, Link } from 'react-router-dom'
import axios from 'axios'

const Dashboard = () => {
	const { id } = useParams()
	const [employees, setEmployees] = useState([])
	const [departments, setDepartments] = useState([])

	useEffect(() => {
		axios
			.get(`/departments`)
			.then(({ data }) => setDepartments(data))
			.catch(err => console.log(err))
	}, [])

	useEffect(() => {
		axios
			.get(`/employees/${id || departments[0]}`)
			.then(({ data }) => setEmployees(data.employees))
			.catch(err => console.log(err))
	}, [id, departments])

	return (
		<ViewWrapper>
			<nav>
				{departments.map(department => (
					<Link key={department} to={`/departments/${department}`}>
						{department}{' '}
					</Link>
				))}
			</nav>
			<UsersList user={employees} />
		</ViewWrapper>
	)
}

export default Dashboard
