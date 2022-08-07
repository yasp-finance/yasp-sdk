export const protocolProviderSpec = {
  type: 'object',
  properties: {
    title: {
      type: 'string',
    },
  },
  additionalProperties: false,
  required: ['title'],
} as const
