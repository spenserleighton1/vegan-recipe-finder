import { cleanData } from '../dataCleaner'

describe('the "dataCleaner" at its best', () => {
  it('should return a cleaned version of the data', () => {
    const mockData = {"count": 30, "recipes": [{"publisher": "Two Peas and Their Pod", "f2f_url": "http://food2fork.com/view/ed9409", "title": "Gluten-Free Vegan Banana Peanut Butter Chocolate Chip Cookies", "source_url": "http://www.twopeasandtheirpod.com/gluten-free-vegan-banana-peanut-butter-chocolate-chip-cookies/", "recipe_id": "ed9409", "image_url": "http://static.food2fork.com/BananaPeanutButterChocolateChipCookies13e87.jpg", "social_rank": 99.99999999081042, "publisher_url": "http://www.twopeasandtheirpod.com"}]}

    const expected = [{ recipeTitle: 'Gluten-Free Vegan Banana Peanut Butter Chocolate Chip Cookies',
    recipeLink: 'http://www.twopeasandtheirpod.com/gluten-free-vegan-banana-peanut-butter-chocolate-chip-cookies/',
    recipeImage: 'http://static.food2fork.com/BananaPeanutButterChocolateChipCookies13e87.jpg'}]

    const results = cleanData(mockData.recipes)

    expect(results).toEqual(expected)
  })
})