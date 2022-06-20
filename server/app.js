const express = require('express');
const cors = require("cors")
const app = express();
const port = 8080;

//to prevent CORS policy: No 'Access-Control-Allow-Origin' we use corsOptions
const whitelist = ["http://localhost:3000"]
const corsOptions = {
  origin: function (origin, callback) {
    if (!origin || whitelist.indexOf(origin) !== -1) {
      callback(null, true)
    } else {
      callback(new Error("Not allowed by CORS"))
    }
  },
  credentials: true,
}
app.use(cors(corsOptions))

app.get('/api/v1/getNotifications', (req, res) => {
    res.send({
        notifications: [
            {
                color: 'red',
                information: 'B-LAO APU Air intake flap actuator needs to be reviewed',
                active: false,
                date: 'NOV-21-2017'
            },
            {
                color: 'red',
                information: 'B-HLQ equipment status: SHUTDOWN. LRU Fault: Bleed flow sensor assembly failed',
                active: true,
                date: 'NOV-20-217'
            },
            {
                color: 'yellow',
                information: 'B-KPT equipment criticality: ADIVSORY.LRU Fault: EGT Rake 1 failure',
                active: true,
                date: 'NOV-18-2017'
            },
            {
                color: 'green',
                information: 'B-LAO APU Air intake flap actuator needs to be reviewed',
                active: false,
                date: 'NOV-12-2017'
            },
            {
                color: 'red',
                information: 'B-HLQ equipment status: SHUTDOWN. LRU Fault: Bleed flow sensor assembly failed',
                active: false,
                date: 'NOV-10-2018'
            },
            {
                color: 'yellow',
                information: 'B-HLQ equipment status: SHUTDOWN. LRU Fault: Bleed flow sensor assembly failed',
                active: false,
                date: 'NOV-08-2017'
            },
            {
                color: 'red',
                information: 'B-LAO APU Air intake flap actuator needs to be reviewed',
                active: true,
                date: 'NOV-04-2017'
            }
        ]
    })
});

app.listen(port, () => console.log(`The server is now listening on port: ${port}`));