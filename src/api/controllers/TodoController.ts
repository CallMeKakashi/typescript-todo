

import db from "../models"

const ToDo = db.ToDo

export const create_todo = async (req: any, res: any) => {
	try {

		const todo = await ToDo.create()

	} catch (err: any) {
		console.error(err);
		return res.json(err.message)
	}

}

export const update_todo = async (req: any, res: any) => {
	try {

		const todo = await ToDo.create()

	} catch (err: any) {
		console.error(err);
		return res.json(err.message)
	}

}

export const delete_todo = async (req: any, res: any) => {
	try {

		const todo = await ToDo.create()

	} catch (err: any) {
		console.error(err);
		return res.json(err.message)
	}

}

export const list_todos = async (req: any, res: any) => {
	try {

		const todo = await ToDo.create()

	} catch (err: any) {
		console.error(err);
		return res.json(err.message)
	}

}
