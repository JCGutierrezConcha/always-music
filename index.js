import express from 'express'
import routeStudent from './routes/student.route.js'

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use('/', routeStudent)

const PORT = process.env.PORT || 3000
app.listen(PORT, () => {
    console.log(`Server listening on PORT ${PORT}`)
})