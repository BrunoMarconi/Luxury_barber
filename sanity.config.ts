import {defineConfig} from 'sanity'
import {deskTool} from 'sanity/desk'
import {structureTool} from 'sanity/structure'
import {schemaTypes} from './sanity/schemaTypes/index'

export default defineConfig({
  name: 'default',
  title: 'The Professional Barber',
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID ?? 'd989k6zn',
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET ?? 'production',
  basePath: '/studio',
  plugins: [deskTool(), structureTool()],
  schema: {
    types: schemaTypes,
  },
})  