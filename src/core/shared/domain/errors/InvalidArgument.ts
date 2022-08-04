export class InvalidArgument extends Error {
	constructor(message?: string) {
		super(message || 'Invalid argument error')
	}
}
