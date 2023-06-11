import { rest } from 'msw'
import { employees } from '../data/employees'
import { departments } from '../data/departments'

export const handlers = [
    rest.get('/departments', (request, response, context)=>{
        return response(context.status(200), context.json(departments))
    }),

	rest.get('/employees/:departments', (req, res, ctx) => {
		if (req.params.departments) {
			const matchingEmployees = employees.filter(employee => employee.departments === req.params.departments)
			return res(
				ctx.status(200),
				ctx.json({
					employees: matchingEmployees,
				})
			)
		}
		return res(ctx.status(200), ctx.json({ employees }))
	}),
]
