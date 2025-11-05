const swaggerJsdoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');

module.exports = (app) => {
  const spec = swaggerJsdoc({
    definition: {
      openapi: '3.0.3',
      info: {
        title: 'CABAPRO Árbitros API',
        version: '1.0.0',
        description: `
          <h3>API REST de Árbitros - CABA PRO</h3>
          <p>
            Esta API permite que los árbitros puedan autenticarse, ver su dashboard,
            aceptar/rechazar asignaciones y ver las notificaciones
          </p>
        `,
        contact: {
          name: 'agr',
          email: 'jclondonoo@eafit.edu.co'
        },
      },
      servers: [
        {
          url: 'http://localhost:3000',
          description: 'Servidor local'
        },
        {
          url: 'http://107.21.1.154:3000',
          description: 'Servidor desplegado en AWS'
        }
      ],
      tags: [
        { name: 'Auth', description: 'Autenticación y registro de árbitros' },
        { name: 'Referees', description: 'Dashboard y perfil del árbitro' },
        { name: 'Assignments', description: 'Gestión de asignaciones' },
        { name: 'Notifications', description: 'Alertas y mensajes del sistema' },
      ],
      components: {
        schemas: {
          Referee: {
            type: 'object',
            properties: {
              id: { type: 'integer', example: 5 },
              name: { type: 'string', example: 'agr' },
              email: { type: 'string', example: 'agr@example.com' },
              ranking: { type: 'string', example: 'FIBA' },
              specialty: { type: 'string', example: 'Court Referee' },
              phoneNumber: { type: 'string', example: '+57 312 000 0000' },
              photoUrl: { type: 'string', example: 'https://cabapro-referees-images.s3.us-east-1.amazonaws.com/5.jpg' },
            }
          },
          Notification: {
            type: 'object',
            properties: {
              id: { type: 'integer', example: 12 },
              title: { type: 'string', example: 'Nueva asignación disponible' },
              message: { type: 'string', example: 'Partido en Medellín - 05/11/2025' },
              read: { type: 'boolean', example: false }
            }
          }
        }
      }
    },
    apis: ['./src/routes/*.js']
  });

  app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(spec, {
    explorer: true,
    customCss: '.swagger-ui .topbar { display: none }',
    customSiteTitle: 'CABAPRO Árbitros API Docs'
  }));
};