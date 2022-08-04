import { Container } from 'inversify'
import { sharedModule } from './core/shared/module'

const container = new Container()

container.load(
  sharedModule,
)

export { container }
