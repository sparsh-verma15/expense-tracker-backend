const config = {
  env: process.env.NODE_ENV || 'development',
  port: process.env.PORT || 3000,
  jwtSecret: process.env.JWT_SECRET || "YOUR_secret_key",
  // mongoUri: process.env.MONGODB_URI ||
  //   process.env.MONGO_HOST ||
  //   'mongodb://' + (process.env.IP || 'localhost') + ':' +
  //   (process.env.MONGO_PORT || '27017') +
  //   '/mernproject'
  mongoUri:"mongodb+srv://sparshverma1511:WPQtRreiJO1CTy9e@expense-tracker-db.kulb1tx.mongodb.net/?retryWrites=true&w=majority"
}
//WPQtRreiJO1CTy9e

export default config
