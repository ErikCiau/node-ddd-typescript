import { v4 } from 'uuid'
import uuidValidate from 'uuid-validate'
import { InvalidArgument } from './errors/InvalidArgument'

export class Uuid {
	readonly value: string

	constructor(value: string) {
		this.validate(value)
		this.value = value
	}

	public static generate() {
		return new Uuid(v4())
	}

	private validate(value: string) {
		const isValid = uuidValidate(value)

		if (!isValid) {
			throw new InvalidArgument(`the value "${value}" is not a uuid valid`)
		}
	}
}
