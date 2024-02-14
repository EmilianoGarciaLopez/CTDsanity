import { defineConfig } from 'sanity';
import { structureTool } from 'sanity/structure';
import { visionTool } from '@sanity/vision';
import schemas from './schemas/schema';

export default defineConfig({
  title: 'CTD',
  projectId: 'bkw7at5a',
  dataset: 'production',
  plugins: [
      structureTool({}),
      visionTool()
  ],
  tools: (prev, context) => {
    const isAdmin = context.currentUser?.roles
      .find(({ name }) => name === 'administrator')
    if (isAdmin) {
      return prev
    }
    return prev.filter((tool) => tool.name !== 'vision')
  },
  schema: {
    types: schemas,
  },
});
