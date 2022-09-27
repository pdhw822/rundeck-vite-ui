import { plugin, defaultConfig } from '@formkit/vue'
import { type UserModule } from '~/types'

// Setup Formkit
export const install: UserModule = ({ app }) => {

  app.use(plugin, defaultConfig({
    theme: 'genesis'
  }))
 
}


