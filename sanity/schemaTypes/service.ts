import {defineType, defineField} from 'sanity'

export const serviceType = defineType({
  name: 'service',
  title: 'Servicios',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Nombre',
      type: 'string',
    }),
    defineField({
      name: 'description',
      title: 'Descripción',
      type: 'text',
    }),
    defineField({
      name: 'price',
      title: 'Precio',
      type: 'string',
    }),
    defineField({
      name: 'duration',
      title: 'Duración',
      type: 'string',
      description: 'Opcional: duración para mostrar en la lista de servicios',
    }),
    defineField({
      name: 'isVip',
      title: 'VIP',
      type: 'boolean',
      initialValue: false,
      description: 'Marca como servicio VIP para mostrarlo en la columna VIP.',
    }),
  ],
})