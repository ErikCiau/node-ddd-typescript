import { DataSource, EntityTarget, Repository } from 'typeorm'

export class TypeORM {
	private connection = new DataSource({
		type: 'mysql',
	})

	public async getRepository<T>(entity: EntityTarget<T>): Promise<Repository<T>> {
		const connection = await this.getConnection()
		return connection.getRepository(entity)
	}

	private async getConnection() {
		try {
			const isConnectionInitialized = this.connection.isInitialized
			if (!isConnectionInitialized) {
				await this.connection.initialize()
			}
			return this.connection
		} catch (error) {
			throw error
		}
	}
}
