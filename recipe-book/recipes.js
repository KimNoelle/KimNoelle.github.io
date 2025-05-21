//existing recipes
const recipes = [
  {
    title: "Sourdough Basics",
    ingredients: [ // spelling corrected
      "Bread flour (has more protein compared to all-purpose flour)",
      "Filtered water",
      "Jar",
      "Something to stir with that is not metal (metal will kill sourdough)"
    ],
    instructions: [
      "Using bread flour, whole wheat flour, or rye flour will make sourdough stronger.",
      "You need a warm place to let the starter grow.",
      "If you have active starter in the fridge and want to make 100g of active starter:",
      "THURS 9pm (1:4:4) → 10g starter : 40g flour : 40g water",
      "FRI 9am (1:2:2) → 20g starter : 40g flour : 40g water",
      "FRI 9pm (1:2:2) → 20g starter : 40g flour : 40g water",
      "SAT 7–9am → You’ll have 100g of active starter ready to bake"
    ]
  },
  {
    title: "Sourdough Bread",
    ingredients: [
      "100g sourdough starter",
      "290g warm water",
      "10g salt",
      "400g bread flour"
    ],
    instructions: [
      "Mix & cover for 1 hour",
      "stretch & fold 11 times & cover (11 times because I have weak arms)",
      "after 30 min 5 stretch & folds then cover",
      "after 30 min 5 stretch & folds then cover",
      "after 30 min 5 stretch & folds then cover",
      "sit for 2 hours (let bulk ferment at lease 50~70%)",
      "bubbly then ready -> flour surface -> shape -> twist",
      "rest for 20 min then shape again",
      "flour dough & cover & into fridge for 3~4 hours",
      "score-> flour surface -> spray water",
      "pre-heat oven 420'F 30 min with pan underneath and pour boiling water when starting to bake",
      "bake for 10 min uncovered and water steam removed",
      "let rest and enjoy when cool"
    ]
  },
  {
    title: "Sourdough Chocolate Chip Cookies",
    ingredients: [
      "266g (1 C) butter browned (butter in sauce pan on low-med heat when littel brown granuals and bubbly read. Let sit for about 30 min to cool)",
      "355g (2 1/2 C) all purpose flour",
      "4g (1tsp) baking powerder", 
      "6g (1sp) baking soda",
      "4g (3/4tsp)salt", 
      "100g (1/2 C) sugar", 
      "165g (3/4 cup) light brown sugar", 
      "200g (3/4 C) sourdough starter", 
      "8g (2tsp) vanilla extract", 
      "2 egg yolk", 
      "1 C chocolate chips (/ walnuts)"
    ],
    instructions: [
      "Make the brown butter, let it rest on the side",
      "Mix dry ingredents",
      "when butter is cool, cream sugar together, then add wet ingredients",
      "slowly mix in dry ingredients in parts (don't over mix)",
      "Mix in chocolate chips (and walnuts)",
      "roll into 70g (3Tbs) balls and set in refigerator for at least 2 hours. Over night taste better.",
      "optional: add a little bit of salt on each cookie",
      "bake 375'F for 11-13 min",
      "Freezing instructions: right out of the freezer bake for 15 min (add 2~3 more min)",
      "eat after they cool"
    ]
  },
    {
    title: "White Chocolate Matcha Cookies",
    ingredients: [
      "1C butter","1.5C brown sugar", "2 eggs", "2tsp vanilla extract","2 1/2C flour", "1tsp baking soda", "1/4tsp salt", "4Tbs matcha powder", "1C white chocolate chips"
    ],
    instructions: [
      "cream butter & brown sugar until smooth",
      "mix in eggs & vanilla",
      "add flour, baking soda, matcha poweder and mix",
      "fold in white chocolate chips",
      "roll cookie dough into balls",
      "350'F bake for 10~13 min until edges are firm (they don't spread out too much)",
      "cool & enjoy!"
    ]
  }
];

function renderRecipe(index) {
  const recipe = recipes[index];
  const display = document.getElementById("recipe-display");

  display.innerHTML = `
    <h2>${recipe.title}</h2>
    <div class="ingredients">
      <strong>Ingredients:</strong>
      <ul>
        ${recipe.ingredients.map(item => `<li>${item}</li>`).join("")}
      </ul>
    </div>
    <div class="instructions">
      <strong>Instructions:</strong>
      <ol>
        ${recipe.instructions.map(step => `<li>${step}</li>`).join("")}
      </ol>
    </div>
  `;
}

document.addEventListener("DOMContentLoaded", () => renderRecipe(0));

 


