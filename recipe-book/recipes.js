// Default recipes
const defaultRecipes = [
  {
    title: "Sourdough Basics",
    ingredients: [
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
      "Stretch & fold 11 times & cover (11 times because I have weak arms)",
      "After 30 min 5 stretch & folds then cover",
      "After 30 min 5 stretch & folds then cover",
      "After 30 min 5 stretch & folds then cover",
      "Sit for 2 hours (let bulk ferment at least 50~70%)",
      "Bubbly then ready -> flour surface -> shape -> twist",
      "Rest for 20 min then shape again",
      "Flour dough & cover & into fridge for 3~4 hours",
      "Score -> flour surface -> spray water",
      "Pre-heat oven 420°F 30 min with pan underneath and pour boiling water when starting to bake",
      "Bake for 10 min uncovered and water steam removed",
      "Let rest and enjoy when cool"
    ],
    source: "https://youtube.com/shorts/QkQLnrnzfKM?si=ZqQDcwF7R7WLgZQf"
  },
  {
    title: "Sourdough Chocolate Chip Cookies",
    ingredients: [
      "266g (1 C) butter browned (butter in sauce pan on low-med heat until little brown granules and bubbly, then cool for ~30 min)",
      "355g (2 1/2 C) all-purpose flour",
      "4g (1 tsp) baking powder",
      "6g (1 tsp) baking soda",
      "4g (3/4 tsp) salt",
      "100g (1/2 C) sugar",
      "165g (3/4 C) light brown sugar",
      "200g (3/4 C) sourdough starter",
      "8g (2 tsp) vanilla extract",
      "2 egg yolks",
      "1 C chocolate chips (or walnuts)"
    ],
    instructions: [
      "Make the brown butter, let it rest on the side",
      "Mix dry ingredients",
      "When butter is cool, cream sugar together, then add wet ingredients",
      "Slowly mix in dry ingredients in parts (don't over mix)",
      "Mix in chocolate chips (and walnuts)",
      "Roll into 70g (3 Tbs) balls and set in refrigerator for at least 2 hours. Overnight tastes better",
      "Optional: add a little bit of salt on each cookie",
      "Bake 375°F for 11-13 min",
      "Freezing instructions: right out of the freezer bake for 15 min (add 2-3 more min)",
      "Eat after they cool"
    ],
    source: "https://youtu.be/q-zavoza7Jo?si=XSv1WbL8wQR38Hqv&t=36"
  },
  {
    title: "White Chocolate Matcha Cookies",
    ingredients: [
      "1 C butter",
      "1.5 C brown sugar",
      "2 eggs",
      "2 tsp vanilla extract",
      "2 1/2 C flour",
      "1 tsp baking soda",
      "1/4 tsp salt",
      "4 Tbs matcha powder",
      "1 C white chocolate chips"
    ],
    instructions: [
      "Cream butter & brown sugar until smooth",
      "Mix in eggs & vanilla",
      "Add flour, baking soda, matcha powder and mix",
      "Fold in white chocolate chips",
      "Roll cookie dough into balls",
      "Bake 350°F for 10–13 min until edges are firm (they don't spread out too much)",
      "Cool & enjoy!"
    ],
    source: "https://lovemischka.com/matcha-green-tea-cookies-with-white-chocolate/?fbclid=IwY2xjawKaMWRleHRuA2FlbQIxMQABHjy39Af9nGbp7FDZGB3lcElpyE2O8YHZIv5sDopfOpLs-sP5zj9oXRg8EAFD_aem_1IR4-qthCuYiC2yUGuPgkQ"
  },
  {
    title: "Protein Brownies",
    ingredients: [
      "1/4 C milk",
      "2 eggs",
      "1/2 C chocolate protein powder (can also use normal protein powder)",
      "1 C almond butter (I used peanut butter)",
      "1/2 C maple syrup",
      "1 tsp baking powder",
      "1/2 C chocolate chips",
      "1/4 C cocoa powder",
      "1/4 tsp sea salt",
      "1 tsp vanilla extract"
    ],
    instructions: [
      "Whisk milk and eggs then rest of the wet ingredients",
      "Add dry ingredients",
      "Fold in chocolate chips",
      "In a greased 8x8 pan bake for 25–30 min at 350°F",
      "Do the toothpick test & let cool"
    ]
  },
  {
    title: "Yogurt",
    ingredients: [
      "Leftover yogurt (a little bit left in the container, or 1 Tbs)",
      "1 bag of milk or 1L (depending on your rice cooker size)"
    ],
    instructions: [
      "Simmer milk for about 30 min, stir if needed so it doesn't burn, you don't want it to boil",
      "Put pot in cold water and let sit for 10 min to cool down",
      "When it's still warm but not hot, mix in a little milk with the yogurt to make a concentrate",
      "Add the mixture into the milk",
      "Pour into rice cooker and mix with wooden spoon",
      "Keep it in 'keep warm' settings for 5–6 hours",
      "Store in fridge or strain for Greek yogurt"
    ]
  }
];

// Load saved recipes from localStorage or use defaults
let recipes = JSON.parse(localStorage.getItem("recipes")) || defaultRecipes;

// ==========================
// 2️⃣ Load recipes
// ==========================

// Get user-added recipes from localStorage (if any)
const savedRecipes = JSON.parse(localStorage.getItem("recipes")) || [];

// Combine default + saved recipes
recipes = [...defaultRecipes, ...savedRecipes];

// Variable to track if editing
let editingIndex = null;

// Save all recipes (only user-added recipes) to localStorage
function saveRecipes() {
  const userRecipes = recipes.slice(defaultRecipes.length); // only save user-added
  localStorage.setItem("recipes", JSON.stringify(userRecipes));
}

// ==========================
// 3️⃣ Render Table of Contents
// ==========================
function renderTOC() {
  const toc = document.getElementById("recipeTOC");
  toc.innerHTML = "";

  recipes.forEach((recipe, index) => {
    const li = document.createElement("li");
    const button = document.createElement("button");
    button.textContent = recipe.title;
    button.onclick = () => displayRecipe(index); // fixed typo "onclinck"
    li.appendChild(button);
    toc.appendChild(li);
  });
}

// ==========================
// 4️⃣ Display a recipe
// ==========================
function displayRecipe(index) {
  const recipe = recipes[index];
  const display = document.getElementById("recipe-display");

  display.innerHTML = `
    <div class="recipe-sheet">
      <h2>${recipe.title}</h2>

      <div class="ingredients">
        <strong>Ingredients:</strong>
        <ul>
          ${recipe.ingredients.map(i => `<li>${i}</li>`).join("")}
        </ul>
      </div>

      <div class="instructions">
        <strong>Instructions:</strong>
        <ol>
          ${recipe.instructions.map(step => `<li>${step}</li>`).join("")}
        </ol>
        ${recipe.source ? `<p><a href="${recipe.source}" target="_blank" class="recipe-link">🔗 View Recipe Link</a></p>` : ""}
      </div>

      <button onclick="startEditRecipe(${index})">✏️ Edit</button>
      <button onclick="deleteRecipe(${index})">🗑 Delete</button>
    </div>
  `;
}

// ==========================
// 5️⃣ Add / Edit recipe
// ==========================
function startEditRecipe(index) {
  const recipe = recipes[index];
  document.getElementById("recipeTitle").value = recipe.title;
  document.getElementById("ingredients").value = recipe.ingredients.join(", ");
  document.getElementById("instructions").value = recipe.instructions.join("\n");
  document.getElementById("recipeLink").value = recipe.source || "";
  document.getElementById("addRecipeSection").style.display = "block";
  editingIndex = index;
}

document.getElementById("recipeForm").addEventListener("submit", function(e) {
  e.preventDefault();

  const title = document.getElementById("recipeTitle").value.trim();
  const ingredients = document.getElementById("ingredients").value.split(",").map(i => i.trim());
  const instructions = document.getElementById("instructions").value.split("\n").map(i => i.trim());
  const source = document.getElementById("recipeLink").value.trim();

  const newRecipe = { title, ingredients, instructions, source };

  if (editingIndex !== null) {
    recipes[editingIndex] = newRecipe;
    editingIndex = null;
  } else {
    recipes.push(newRecipe);
  }

  saveRecipes();
  renderTOC();
  displayRecipe(editingIndex !== null ? editingIndex : recipes.length - 1);

  document.getElementById("recipeForm").reset();
  document.getElementById("addRecipeSection").style.display = "none";
});

// ==========================
// 6️⃣ Delete recipe
// ==========================
function deleteRecipe(index) {
  if (confirm("Delete this recipe?")) {
    recipes.splice(index, 1);
    saveRecipes();
    renderTOC();
    if (recipes.length > 0) displayRecipe(0);
    else document.getElementById("recipe-display").innerHTML = "";
  }
}

// ==========================
// 7️⃣ Toggle Add Recipe Section
// ==========================
document.getElementById("addRecipeToggle").addEventListener("click", () => {
  const section = document.getElementById("addRecipeSection");
  section.style.display = section.style.display === "none" ? "block" : "none";
});

// ==========================
// 8️⃣ Initial render on page load
// ==========================
window.addEventListener("DOMContentLoaded", () => {
  renderTOC();
  displayRecipe(0); // Show first recipe
});