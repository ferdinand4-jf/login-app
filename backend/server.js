const express = require('express')
const cors = require('cors')


const app = express()


app.use(cors())
app.use(express.json())


// route pour se connecter

app.post('/login', (req, res) => {
    // variable de champ email et password
    const { email, password } = req.body;
    if (email == "test@gmail.com" && password == "test") {
        return res.json({
            // si les valeurs dans le champ sont vraie retuner le message de success
            success: true,
            message: 'Connexion réussie'
        });
    }
    //si les valeurs dans le champs faux retourner de message d'erreur
    return res.status(401).json({
        success: false,
        message: 'Email ou mot de passe incorrecte'
    });
});


app.listen(5000, () => {
    console.log('Backend lancé sur le por 5000');
});