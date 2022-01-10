module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '52248b0008c045d38c7d7b8aca7914c6'),
  },
});
