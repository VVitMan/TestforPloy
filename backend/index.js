import express from 'express';
import testRoute from './routes/test.route.js';

/* Initial "app" from express */
const app = express();
/* Allow JSON parsing from body request */
app.use(express.json());


/* Server Port */
const port = 6000;
app.listen(port, () => {
    console.log(`Server is running on ${port}`);
});

// /* กำหนดทางเส้นทางหลวง */
// app.get('/', (req, res) => {
//     res.json({ message: 'Hello, World!' });
// });
app.use("/api/ployZa", testRoute);





