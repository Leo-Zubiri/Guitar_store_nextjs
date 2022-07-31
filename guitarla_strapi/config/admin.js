module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'f383ed4ad1aec24366ea766f1c0c6015'),
  },
});
