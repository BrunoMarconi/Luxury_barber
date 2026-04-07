import {defineType, defineField} from 'sanity'

export const galleryPhotoType = defineType({
  name: 'galleryPhoto',
  title: 'Galería de fotos',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Título',
      type: 'string',
    }),
    defineField({
      name: 'alt',
      title: 'Texto alternativo',
      type: 'string',
      description: 'Descripción corta de la imagen para accesibilidad',
    }),
    defineField({
      name: 'image',
      title: 'Imagen',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'size',
      title: 'Tamaño',
      type: 'string',
      options: {
        list: [
          {title: 'Alto', value: 'tall'},
          {title: 'Ancho', value: 'wide'},
          {title: 'Cuadrado', value: 'square'},
        ],
      },
      initialValue: 'tall',
    }),
    defineField({
      name: 'order',
      title: 'Orden',
      type: 'number',
      initialValue: 0,
      description: 'Orden en que aparecen en la galería',
    }),
  ],
})