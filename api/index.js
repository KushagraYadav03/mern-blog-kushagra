import express from 'express'
import dotenv from 'dotenv'
import cookieParser from 'cookie-parser'
import cors from 'cors'
import mongoose from 'mongoose'

// Route imports
import AuthRoute from './routes/Auth.route.js'
import UserRoute from './routes/User.route.js'
import CategoryRoute from './routes/Category.route.js'
import BlogRoute from './routes/Blog.route.js'
import CommentRouote from './routes/Comment.route.js'
import BlogLikeRoute from './routes/Bloglike.route.js'

// Load env vars
dotenv.config()

const PORT = process.env.PORT || 3000
const app = express()

// Middlewares
app.use(cookieParser())
app.use(express.json())
app.use(cors({
    origin: process.env.FRONTEND_URL,
    credentials: true
}))

// Routes
app.use('/api/auth', AuthRoute)
app.use('/api/user', UserRoute)
app.use('/api/category', CategoryRoute)
app.use('/api/blog', BlogRoute)
app.use('/api/comment', CommentRouote)
app.use('/api/blog-like', BlogLikeRoute)

// Global error handler
app.use((err, req, res, next) => {
    const statusCode = err.statusCode || 500
    const message = err.message || 'Internal server error.'
    res.status(statusCode).json({
        success: false,
        statusCode,
        message
    })
})

// DB Connection + Server Start
mongoose.connect(process.env.MONGODB_CONN, {
    dbName: 'yt-mern-blog',
})
.then(() => {
    console.log('✅ Database connected.')
    app.listen(PORT, () => {
        console.log(`🚀 Server running on port: ${PORT}`)
    })
})
.catch(err => {
    console.error('❌ Database connection failed:', err.message)
    process.exit(1)
})
