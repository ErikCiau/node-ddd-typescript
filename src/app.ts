import 'reflect-metadata'
import cors from 'cors'
import helmet from 'helmet'
import { InversifyExpressServer } from 'inversify-express-utils'
import morgan from 'morgan'
import { serverConfig as config } from './config/server'
import { container } from './container'
const app = new InversifyExpressServer(container)

const serverConfig = app.setConfig((express) => {
	express.use(cors())
	express.use(morgan('dev'))
	express.use(helmet())
})

const { PORT } = config
const server = serverConfig.build()

server.listen(PORT, () => {
	console.log(`Server running on port ${PORT} 🚀`)
})
