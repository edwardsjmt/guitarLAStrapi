module.exports = ({ env }) => ({
  connection: {
    client: 'postgres',
    connection: {
      host: env('DATABASE_HOST', 'dpg-cer8u3irrk00n42e4spg-a.frankfurt-postgres.render.com'),
      port: env.int('DATABASE_PORT', 5432),
      database: env('DATABASE_NAME', 'guitarla_bg12'),
      user: env('DATABASE_USERNAME', 'root'),
      password: env('DATABASE_PASSWORD', 'AeyVcF5x54Ov20VZ7WcCAn1apgBRd116'),
      ssl: env.bool('DATABASE_SSL', true),
    },
  },
});
