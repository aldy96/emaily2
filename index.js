const express = require('express'); //pemanggilan modul di JS, tapi bukan ES15, contoh di ES15 = "import e from "e" "
const app = express();

app.get('/', (req, res) => {
    res.send({hi: 'there'});
});
//ada format tersendiri, get = command, / = router nya, req = reqques, res = respone

const PORT = process.env.PORT || 5000;
app.listen(PORT); // pada port berapa
