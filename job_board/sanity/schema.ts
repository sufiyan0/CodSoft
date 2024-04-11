import { type SchemaTypeDefinition } from 'sanity'
import { jobs } from './jobs'
import { authors } from './author'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [jobs, authors],
}
