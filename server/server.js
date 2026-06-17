require("dotenv").config();

const express = require("express");
const cors = require("cors");
const swaggerUi = require("swagger-ui-express");
const swaggerSpec = require("./swagger");

const app = express();

app.use(cors());
app.use(express.json());

// Documentation Swagger
app.use(
  "/api-docs",
  swaggerUi.serve,
  swaggerUi.setup(swaggerSpec)
);

// Routes
const livresRoutes = require("./routes/livresRoutes");

app.use("/api/livres", livresRoutes);

// Route d'accueil
app.get("/", (req, res) => {
  res.send("API Bibliothèque opérationnelle");
});

// Export pour les tests
module.exports = app;

// Démarrer le serveur seulement hors test
if (process.env.NODE_ENV !== "test") {
  app.listen(process.env.PORT, () => {
    console.log(`✅ Serveur lancé sur le port ${process.env.PORT}`);
    console.log(
      `📚 Documentation Swagger disponible sur : http://localhost:${process.env.PORT}/api-docs`
    );
  });
}