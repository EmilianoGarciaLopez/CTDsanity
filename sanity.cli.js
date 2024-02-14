import {defineCliConfig} from 'sanity/cli'
import schemas from "./schemas/schema";

export default defineCliConfig({
  api: {
    projectId: 'bkw7at5a',
    dataset: 'development'
  },
  schema: {
    types: schemas,
  },
})
