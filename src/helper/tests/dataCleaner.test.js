import { cleanData, cleanRecipe } from '../dataCleaner'

describe('dataCleaner', () => {
  it('should return a cleaned version of the data', () => {
    const mockData = {"count": 30, "recipes": [{"publisher": "Two Peas and Their Pod", "f2f_url": "http://food2fork.com/view/ed9409", "title": "Gluten-Free Vegan Banana Peanut Butter Chocolate Chip Cookies", "source_url": "http://www.twopeasandtheirpod.com/gluten-free-vegan-banana-peanut-butter-chocolate-chip-cookies/", "recipe_id": "ed9409", "image_url": "http://static.food2fork.com/BananaPeanutButterChocolateChipCookies13e87.jpg", "social_rank": 99.99999999081042, "publisher_url": "http://www.twopeasandtheirpod.com"}]}

    const expected = [{"recipeId": "ed9409", "recipeImage": "http://static.food2fork.com/BananaPeanutButterChocolateChipCookies13e87.jpg", "recipeLink": "http://www.twopeasandtheirpod.com/gluten-free-vegan-banana-peanut-butter-chocolate-chip-cookies/", "recipeTitle": "Gluten-Free Vegan Banana Peanut Butter Chocolate Chip Cookies"}]

    const results = cleanData(mockData.recipes)

    expect(results).toEqual(expected)
  })
})

describe('cleanRecipe', () => {
  it('should return a clean version of recipe data', () => {
    const mockData = {"recipe": {"publisher": "Two Peas and Their Pod", "f2f_url": "http://food2fork.com/view/ed9409", "ingredients": ["3 large, very ripe bananas, peeled", "1/2 cup creamy all-natural peanut butter", "1 tablespoon coconut oil, slightly warmed, but not melted", "2 tablespoons agave nectar", "1 teaspoon vanilla extract", "2 1/2 cups gluten-free oats", "1 teaspoon baking powder", "1/4 teaspoon ground cinnamon", "1/4 teaspoon sea salt", "3/4 cup vegan chocolate chips"], "source_url": "http://www.twopeasandtheirpod.com/gluten-free-vegan-banana-peanut-butter-chocolate-chip-cookies/", "recipe_id": "ed9409", "image_url": "http://static.food2fork.com/BananaPeanutButterChocolateChipCookies13e87.jpg", "social_rank": 99.99999999081042, "publisher_url": "http://www.twopeasandtheirpod.com", "title": "Gluten-Free Vegan Banana Peanut Butter Chocolate Chip Cookies"}}

    const expected = {"id": "ed9409", "image": "http://static.food2fork.com/BananaPeanutButterChocolateChipCookies13e87.jpg", "ingredients": ["3 large, very ripe bananas, peeled", "1/2 cup creamy all-natural peanut butter", "1 tablespoon coconut oil, slightly warmed, but not melted", "2 tablespoons agave nectar", "1 teaspoon vanilla extract", "2 1/2 cups gluten-free oats", "1 teaspoon baking powder", "1/4 teaspoon ground cinnamon", "1/4 teaspoon sea salt", "3/4 cup vegan chocolate chips"], "linkUrl": "http://www.twopeasandtheirpod.com/gluten-free-vegan-banana-peanut-butter-chocolate-chip-cookies/", "publisher": "Two Peas and Their Pod", "title": "Gluten-Free Vegan Banana Peanut Butter Chocolate Chip Cookies"}

    const results = cleanRecipe(mockData)

    expect(results).toEqual(expected)
  })
})