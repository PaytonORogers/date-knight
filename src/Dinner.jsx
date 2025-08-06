import { useState, useEffect } from 'react'
var testData = {
  "recipes": [
    {
      "id": 637210,
      "image": "https://img.spoonacular.com/recipes/637210-556x370.jpg",
      "imageType": "jpg",
      "title": "Carrot Oat Muffins",
      "readyInMinutes": 45,
      "servings": 18,
      "sourceUrl": "https://www.foodista.com/recipe/CK3DJ2FF/carrot-oat-muffins",
      "vegetarian": true,
      "vegan": false,
      "glutenFree": true,
      "dairyFree": true,
      "veryHealthy": false,
      "cheap": false,
      "veryPopular": false,
      "sustainable": false,
      "lowFodmap": false,
      "weightWatcherSmartPoints": 2,
      "gaps": "no",
      "preparationMinutes": null,
      "cookingMinutes": null,
      "aggregateLikes": 3,
      "healthScore": 8,
      "creditsText": "foodista.com",
      "license": null,
      "sourceName": "foodista.com",
      "pricePerServing": 23.49,
      "extendedIngredients": [
        {
          "id": 19912,
          "aisle": "Health Foods",
          "image": "agave.png",
          "consistency": "LIQUID",
          "name": "agave nectar",
          "nameClean": "agave nectar",
          "original": "1/4 cup of agave nectar, I use raw and organic",
          "originalName": "agave nectar, I use raw and organic",
          "amount": 0.25,
          "unit": "cup",
          "meta": [
            "raw",
            "organic"
          ],
          "measures": {
            "us": {
              "amount": 0.25,
              "unitShort": "cups",
              "unitLong": "cups"
            },
            "metric": {
              "amount": 55,
              "unitShort": "ml",
              "unitLong": "milliliters"
            }
          }
        },
        {
          "id": 9019,
          "aisle": "Canned and Jarred",
          "image": "applesauce.png",
          "consistency": "SOLID",
          "name": "applesauce",
          "nameClean": "applesauce",
          "original": "1 cup of organic applesauce",
          "originalName": "organic applesauce",
          "amount": 1,
          "unit": "cup",
          "meta": [
            "organic"
          ],
          "measures": {
            "us": {
              "amount": 1,
              "unitShort": "cup",
              "unitLong": "cup"
            },
            "metric": {
              "amount": 244,
              "unitShort": "ml",
              "unitLong": "milliliters"
            }
          }
        },
        {
          "id": 18369,
          "aisle": "Baking",
          "image": "white-powder.jpg",
          "consistency": "SOLID",
          "name": "baking powder",
          "nameClean": "baking powder",
          "original": "3 teaspoons of baking powder",
          "originalName": "baking powder",
          "amount": 3,
          "unit": "teaspoons",
          "meta": [],
          "measures": {
            "us": {
              "amount": 3,
              "unitShort": "tsps",
              "unitLong": "teaspoons"
            },
            "metric": {
              "amount": 3,
              "unitShort": "tsps",
              "unitLong": "teaspoons"
            }
          }
        },
        {
          "id": 18372,
          "aisle": "Baking",
          "image": "white-powder.jpg",
          "consistency": "SOLID",
          "name": "baking soda",
          "nameClean": "baking soda",
          "original": "1 teaspoon baking soda",
          "originalName": "baking soda",
          "amount": 1,
          "unit": "teaspoon",
          "meta": [],
          "measures": {
            "us": {
              "amount": 1,
              "unitShort": "tsp",
              "unitLong": "teaspoon"
            },
            "metric": {
              "amount": 1,
              "unitShort": "tsp",
              "unitLong": "teaspoon"
            }
          }
        },
        {
          "id": 11124,
          "aisle": "Produce",
          "image": "sliced-carrot.png",
          "consistency": "SOLID",
          "name": "carrots",
          "nameClean": "carrots",
          "original": "3 cups of shredded carrots",
          "originalName": "shredded carrots",
          "amount": 3,
          "unit": "cups",
          "meta": [
            "shredded"
          ],
          "measures": {
            "us": {
              "amount": 3,
              "unitShort": "cups",
              "unitLong": "cups"
            },
            "metric": {
              "amount": 384,
              "unitShort": "g",
              "unitLong": "grams"
            }
          }
        },
        {
          "id": 2010,
          "aisle": "Spices and Seasonings",
          "image": "cinnamon.jpg",
          "consistency": "SOLID",
          "name": "cinnamon",
          "nameClean": "cinnamon",
          "original": "1 teaspoon organic cinnamon",
          "originalName": "organic cinnamon",
          "amount": 1,
          "unit": "teaspoon",
          "meta": [
            "organic"
          ],
          "measures": {
            "us": {
              "amount": 1,
              "unitShort": "tsp",
              "unitLong": "teaspoon"
            },
            "metric": {
              "amount": 1,
              "unitShort": "tsp",
              "unitLong": "teaspoon"
            }
          }
        },
        {
          "id": 1123,
          "aisle": "Milk, Eggs, Other Dairy",
          "image": "egg.png",
          "consistency": "SOLID",
          "name": "eggs",
          "nameClean": "eggs",
          "original": "3 organic eggs",
          "originalName": "organic eggs",
          "amount": 3,
          "unit": "",
          "meta": [
            "organic"
          ],
          "measures": {
            "us": {
              "amount": 3,
              "unitShort": "",
              "unitLong": ""
            },
            "metric": {
              "amount": 3,
              "unitShort": "",
              "unitLong": ""
            }
          }
        },
        {
          "id": 11216,
          "aisle": "Produce",
          "image": "ginger.png",
          "consistency": "SOLID",
          "name": "ginger",
          "nameClean": "ginger",
          "original": "2 teaspoons of chopped ginger",
          "originalName": "chopped ginger",
          "amount": 2,
          "unit": "teaspoons",
          "meta": [
            "chopped"
          ],
          "measures": {
            "us": {
              "amount": 2,
              "unitShort": "tsps",
              "unitLong": "teaspoons"
            },
            "metric": {
              "amount": 2,
              "unitShort": "tsps",
              "unitLong": "teaspoons"
            }
          }
        },
        {
          "id": 2047,
          "aisle": "Spices and Seasonings",
          "image": "salt.jpg",
          "consistency": "SOLID",
          "name": "salt",
          "nameClean": "salt",
          "original": "1/2 teaspoon salt",
          "originalName": "salt",
          "amount": 0.5,
          "unit": "teaspoon",
          "meta": [],
          "measures": {
            "us": {
              "amount": 0.5,
              "unitShort": "tsps",
              "unitLong": "teaspoons"
            },
            "metric": {
              "amount": 0.5,
              "unitShort": "tsps",
              "unitLong": "teaspoons"
            }
          }
        },
        {
          "id": 2050,
          "aisle": "Baking",
          "image": "vanilla-extract.jpg",
          "consistency": "LIQUID",
          "name": "vanilla extract",
          "nameClean": "vanilla extract",
          "original": "1 teaspoon of organic vanilla extract",
          "originalName": "organic vanilla extract",
          "amount": 1,
          "unit": "teaspoon",
          "meta": [
            "organic"
          ],
          "measures": {
            "us": {
              "amount": 1,
              "unitShort": "tsp",
              "unitLong": "teaspoon"
            },
            "metric": {
              "amount": 1,
              "unitShort": "tsp",
              "unitLong": "teaspoon"
            }
          }
        },
        {
          "id": 20132,
          "aisle": "Gluten Free",
          "image": "brown-flour.jpg",
          "consistency": "SOLID",
          "name": "oat flour",
          "nameClean": "oat flour",
          "original": "2 cups of organic whole oat flour",
          "originalName": "organic whole oat flour",
          "amount": 2,
          "unit": "cups",
          "meta": [
            "whole",
            "organic"
          ],
          "measures": {
            "us": {
              "amount": 2,
              "unitShort": "cups",
              "unitLong": "cups"
            },
            "metric": {
              "amount": 240,
              "unitShort": "g",
              "unitLong": "grams"
            }
          }
        }
      ],
      "summary": "If you want to add more \u003Cb\u003Egluten free, dairy free, and lacto ovo vegetarian\u003C/b\u003E recipes to your collection, Carrot Oat Muffins might be a recipe you should try. For \u003Cb\u003E23 cents per serving\u003C/b\u003E, you get a breakfast that serves 18. One serving contains \u003Cb\u003E90 calories\u003C/b\u003E, \u003Cb\u003E3g of protein\u003C/b\u003E, and \u003Cb\u003E2g of fat\u003C/b\u003E. This recipe from Foodista requires vanillan extract, carrots, salt, and baking soda. Only a few people made this recipe, and 3 would say it hit the spot. From preparation to the plate, this recipe takes approximately \u003Cb\u003E45 minutes\u003C/b\u003E. All things considered, we decided this recipe \u003Cb\u003Edeserves a spoonacular score of 51%\u003C/b\u003E. This score is pretty good. If you like this recipe, take a look at these similar recipes: \u003Ca href=\"https://spoonacular.com/recipes/carrot-oat-muffins-164600\"\u003ECarrot-Oat Muffins\u003C/a\u003E, \u003Ca href=\"https://spoonacular.com/recipes/carrot-oat-muffins-496873\"\u003ECarrot Oat Muffins\u003C/a\u003E, and \u003Ca href=\"https://spoonacular.com/recipes/healthy-applesauce-carrot-muffins-aka-carrot-cake-muffins-569339\"\u003EHealthy Applesauce Carrot Muffins {a.k.a. Carrot Cake Muffins}\u003C/a\u003E.",
      "cuisines": [],
      "dishTypes": [
        "morning meal",
        "brunch",
        "breakfast"
      ],
      "diets": [
        "gluten free",
        "dairy free",
        "lacto ovo vegetarian"
      ],
      "occasions": [],
      "instructions": "\u003Col\u003E\u003Cli\u003ECombine all dry ingredients in a bowl\u003C/li\u003E\u003Cli\u003ECombine all wet ingredients in a bowl except carrots and ginger and mix well.\u003C/li\u003E\u003Cli\u003EGently add dry ingredients to wet ingredients and mix until just blended.  Be careful not to over-mix because this will result in hard muffins.\u003C/li\u003E\u003Cli\u003EOnce the wet and dry ingredients are blended, gently fold in carrots and ginger until spread throughout.\u003C/li\u003E\u003Cli\u003ESpray muffin tins with nonstick cooking spray and add mixture to 2/3 of the cup.\u003C/li\u003E\u003Cli\u003EBake at 350F for 20 minutes until golden brown on top.\u003C/li\u003E\u003Cli\u003ELet cool in tins for 2-3 minutes before transferring to a cooling rack.\u003C/li\u003E\u003C/ol\u003E",
      "analyzedInstructions": [
        {
          "name": "",
          "steps": [
            {
              "number": 1,
              "step": "Combine all dry ingredients in a bowl",
              "ingredients": [],
              "equipment": [
                {
                  "id": 404783,
                  "name": "bowl",
                  "localizedName": "bowl",
                  "image": "https://spoonacular.com/cdn/equipment_100x100/bowl.jpg"
                }
              ]
            },
            {
              "number": 2,
              "step": "Combine all wet ingredients in a bowl except carrots and ginger and mix well.Gently add dry ingredients to wet ingredients and mix until just blended.  Be careful not to over-mix because this will result in hard muffins.Once the wet and dry ingredients are blended, gently fold in carrots and ginger until spread throughout.Spray muffin tins with nonstick cooking spray and add mixture to 2/3 of the cup.",
              "ingredients": [
                {
                  "id": 4679,
                  "name": "cooking spray",
                  "localizedName": "cooking spray",
                  "image": "cooking-spray.png"
                },
                {
                  "id": 11124,
                  "name": "carrot",
                  "localizedName": "carrot",
                  "image": "sliced-carrot.png"
                },
                {
                  "id": 11216,
                  "name": "ginger",
                  "localizedName": "ginger",
                  "image": "ginger.png"
                },
                {
                  "id": 0,
                  "name": "spread",
                  "localizedName": "spread",
                  "image": ""
                }
              ],
              "equipment": [
                {
                  "id": 404671,
                  "name": "muffin tray",
                  "localizedName": "muffin tray",
                  "image": "https://spoonacular.com/cdn/equipment_100x100/muffin-tray.jpg"
                },
                {
                  "id": 404783,
                  "name": "bowl",
                  "localizedName": "bowl",
                  "image": "https://spoonacular.com/cdn/equipment_100x100/bowl.jpg"
                }
              ]
            },
            {
              "number": 3,
              "step": "Bake at 350F for 20 minutes until golden brown on top.",
              "ingredients": [],
              "equipment": [
                {
                  "id": 404784,
                  "name": "oven",
                  "localizedName": "oven",
                  "image": "https://spoonacular.com/cdn/equipment_100x100/oven.jpg",
                  "temperature": {
                    "number": 350,
                    "unit": "Fahrenheit"
                  }
                }
              ],
              "length": {
                "number": 20,
                "unit": "minutes"
              }
            },
            {
              "number": 4,
              "step": "Let cool in tins for 2-3 minutes before transferring to a cooling rack.",
              "ingredients": [],
              "equipment": [
                {
                  "id": 405900,
                  "name": "wire rack",
                  "localizedName": "wire rack",
                  "image": "https://spoonacular.com/cdn/equipment_100x100/wire-rack.jpg"
                }
              ],
              "length": {
                "number": 3,
                "unit": "minutes"
              }
            }
          ]
        }
      ],
      "originalId": null,
      "spoonacularScore": 54.4966773986816,
      "spoonacularSourceUrl": "https://spoonacular.com/carrot-oat-muffins-637210"
    },
    {
      "id": 638488,
      "image": "https://img.spoonacular.com/recipes/638488-556x370.jpg",
      "imageType": "jpg",
      "title": "Chicken-Tortilla Chip Soup",
      "readyInMinutes": 45,
      "servings": 8,
      "sourceUrl": "https://www.foodista.com/recipe/CGYQCRH6/chicken-tortilla-chip-soup",
      "vegetarian": false,
      "vegan": false,
      "glutenFree": true,
      "dairyFree": true,
      "veryHealthy": false,
      "cheap": false,
      "veryPopular": false,
      "sustainable": false,
      "lowFodmap": true,
      "weightWatcherSmartPoints": 1,
      "gaps": "no",
      "preparationMinutes": null,
      "cookingMinutes": null,
      "aggregateLikes": 11,
      "healthScore": 10,
      "creditsText": "foodista.com",
      "license": null,
      "sourceName": "foodista.com",
      "pricePerServing": 109.32,
      "extendedIngredients": [
        {
          "id": 14412,
          "aisle": "Beverages",
          "image": "water.png",
          "consistency": "LIQUID",
          "name": "water",
          "nameClean": "water",
          "original": "5 cups water",
          "originalName": "water",
          "amount": 5,
          "unit": "cups",
          "meta": [],
          "measures": {
            "us": {
              "amount": 5,
              "unitShort": "cups",
              "unitLong": "cups"
            },
            "metric": {
              "amount": 1.183,
              "unitShort": "l",
              "unitLong": "liters"
            }
          }
        },
        {
          "id": 5062,
          "aisle": "Meat",
          "image": "chicken-breasts.png",
          "consistency": "SOLID",
          "name": "chicken breasts",
          "nameClean": "chicken breasts",
          "original": "4 chicken breasts",
          "originalName": "chicken breasts",
          "amount": 4,
          "unit": "",
          "meta": [],
          "measures": {
            "us": {
              "amount": 4,
              "unitShort": "",
              "unitLong": ""
            },
            "metric": {
              "amount": 4,
              "unitShort": "",
              "unitLong": ""
            }
          }
        },
        {
          "id": 1026076,
          "aisle": "Canned and Jarred",
          "image": null,
          "consistency": "SOLID",
          "name": "bouillon cubes",
          "nameClean": "bouillon cubes",
          "original": "2 bouillon cubes (chicken)",
          "originalName": "bouillon cubes (chicken)",
          "amount": 2,
          "unit": "",
          "meta": [
            "(chicken)"
          ],
          "measures": {
            "us": {
              "amount": 2,
              "unitShort": "",
              "unitLong": ""
            },
            "metric": {
              "amount": 2,
              "unitShort": "",
              "unitLong": ""
            }
          }
        },
        {
          "id": 11124,
          "aisle": "Produce",
          "image": "sliced-carrot.png",
          "consistency": "SOLID",
          "name": "carrots",
          "nameClean": "carrots",
          "original": "2 carrots, diced",
          "originalName": "carrots, diced",
          "amount": 2,
          "unit": "",
          "meta": [
            "diced"
          ],
          "measures": {
            "us": {
              "amount": 2,
              "unitShort": "",
              "unitLong": ""
            },
            "metric": {
              "amount": 2,
              "unitShort": "",
              "unitLong": ""
            }
          }
        },
        {
          "id": 11165,
          "aisle": "Produce",
          "image": "cilantro.png",
          "consistency": "SOLID",
          "name": "cilantro",
          "nameClean": "cilantro",
          "original": "1/2 cup diced cilantro (coriander)",
          "originalName": "diced cilantro (coriander)",
          "amount": 0.5,
          "unit": "cup",
          "meta": [
            "diced",
            "(coriander)"
          ],
          "measures": {
            "us": {
              "amount": 0.5,
              "unitShort": "cups",
              "unitLong": "cups"
            },
            "metric": {
              "amount": 8,
              "unitShort": "g",
              "unitLong": "grams"
            }
          }
        },
        {
          "id": 1042047,
          "aisle": "Spices and Seasonings",
          "image": "garlic-salt.jpg",
          "consistency": "SOLID",
          "name": "lawry's seasoned salt",
          "nameClean": "lawry's seasoned salt",
          "original": "1 teaspoon Lawry's seasoned salt",
          "originalName": "Lawry's seasoned salt",
          "amount": 1,
          "unit": "teaspoon",
          "meta": [],
          "measures": {
            "us": {
              "amount": 1,
              "unitShort": "tsp",
              "unitLong": "teaspoon"
            },
            "metric": {
              "amount": 1,
              "unitShort": "tsp",
              "unitLong": "teaspoon"
            }
          }
        }
      ],
      "summary": "Chicken-Tortilla Chip Soup could be just the \u003Cb\u003Egluten free, dairy free, fodmap friendly, and whole 30\u003C/b\u003E recipe you've been looking for. For \u003Cb\u003E$1.09 per serving\u003C/b\u003E, you get a main course that serves 8. One portion of this dish contains around \u003Cb\u003E24g of protein\u003C/b\u003E, \u003Cb\u003E3g of fat\u003C/b\u003E, and a total of \u003Cb\u003E137 calories\u003C/b\u003E. 11 person have tried and liked this recipe. Head to the store and pick up carrots, cilantro, bouillon cubes, and a few other things to make it today. It can be enjoyed any time, but it is especially good for \u003Cb\u003EAutumn\u003C/b\u003E. From preparation to the plate, this recipe takes about \u003Cb\u003E45 minutes\u003C/b\u003E. It is brought to you by Foodista. Taking all factors into account, this recipe \u003Cb\u003Eearns a spoonacular score of 58%\u003C/b\u003E, which is good. \u003Ca href=\"https://spoonacular.com/recipes/tortilla-chip-crusted-chicken-with-queso-sauce-1562207\"\u003ETortilla Chip Crusted Chicken with Queso Sauce\u003C/a\u003E, \u003Ca href=\"https://spoonacular.com/recipes/cheese-tortilla-chip-chicken-enchilada-chilaquiles-1014028\"\u003ECheese Tortilla Chip Chicken Enchilada Chilaquiles\u003C/a\u003E, and \u003Ca href=\"https://spoonacular.com/recipes/garden-of-eatin-tortilla-chip-chicken-strips-83735\"\u003EGarden Of Eatin’ Tortilla Chip Chicken Strips\u003C/a\u003E are very similar to this recipe.",
      "cuisines": [],
      "dishTypes": [
        "soup",
        "lunch",
        "main course",
        "main dish",
        "dinner"
      ],
      "diets": [
        "gluten free",
        "dairy free",
        "fodmap friendly",
        "whole 30"
      ],
      "occasions": [
        "fall",
        "winter"
      ],
      "instructions": "Boil all of the above for 30-40 minutes. On serving, add corn chips, Monterey Jack cheese and slices of avocado.",
      "analyzedInstructions": [
        {
          "name": "",
          "steps": [
            {
              "number": 1,
              "step": "Boil all of the above for 30-40 minutes. On serving, add corn chips, Monterey Jack cheese and slices of avocado.",
              "ingredients": [
                {
                  "id": 1001025,
                  "name": "monterey jack cheese",
                  "localizedName": "monterey jack cheese",
                  "image": "shredded-cheese-white.jpg"
                },
                {
                  "id": 19003,
                  "name": "corn chips",
                  "localizedName": "corn chips",
                  "image": "fritos-or-corn-chips.jpg"
                },
                {
                  "id": 9037,
                  "name": "avocado",
                  "localizedName": "avocado",
                  "image": "avocado.jpg"
                }
              ],
              "equipment": [],
              "length": {
                "number": 40,
                "unit": "minutes"
              }
            }
          ]
        }
      ],
      "originalId": null,
      "spoonacularScore": 60.9757766723633,
      "spoonacularSourceUrl": "https://spoonacular.com/chicken-tortilla-chip-soup-638488"
    },
    {
      "id": 716424,
      "image": "https://img.spoonacular.com/recipes/716424-556x370.jpg",
      "imageType": "jpg",
      "title": "Strawberry Basil Sorbet (no Ice Cream Maker Necessary!)",
      "readyInMinutes": 45,
      "servings": 1,
      "sourceUrl": "https://fullbellysisters.blogspot.com/2011/05/strawberry-basil-sorbet-no-ice-cream.html",
      "vegetarian": true,
      "vegan": true,
      "glutenFree": true,
      "dairyFree": true,
      "veryHealthy": false,
      "cheap": false,
      "veryPopular": false,
      "sustainable": false,
      "lowFodmap": false,
      "weightWatcherSmartPoints": 8,
      "gaps": "no",
      "preparationMinutes": null,
      "cookingMinutes": null,
      "aggregateLikes": 101,
      "healthScore": 2,
      "creditsText": "Full Belly Sisters",
      "license": "CC BY-SA 3.0",
      "sourceName": "Full Belly Sisters",
      "pricePerServing": 55.58,
      "extendedIngredients": [
        {
          "id": 2044,
          "aisle": "Produce",
          "image": "fresh-basil.jpg",
          "consistency": "SOLID",
          "name": "basil leaves",
          "nameClean": "basil leaves",
          "original": "about 1/4c finely chopped basil leaves",
          "originalName": "about finely chopped basil leaves",
          "amount": 0.25,
          "unit": "c",
          "meta": [
            "finely chopped"
          ],
          "measures": {
            "us": {
              "amount": 0.25,
              "unitShort": "cups",
              "unitLong": "cups"
            },
            "metric": {
              "amount": 6,
              "unitShort": "g",
              "unitLong": "grams"
            }
          }
        },
        {
          "id": 1044053,
          "aisle": "Oil, Vinegar, Salad Dressing",
          "image": "basil-oil.jpg",
          "consistency": "LIQUID",
          "name": "basil oil",
          "nameClean": "basil oil",
          "original": "1t basil oil (optional)",
          "originalName": "basil oil (optional)",
          "amount": 1,
          "unit": "t",
          "meta": [],
          "measures": {
            "us": {
              "amount": 0.321,
              "unitShort": "tsps",
              "unitLong": "teaspoons"
            },
            "metric": {
              "amount": 0.321,
              "unitShort": "tsps",
              "unitLong": "teaspoons"
            }
          }
        },
        {
          "id": 19912,
          "aisle": "Health Foods",
          "image": "agave.png",
          "consistency": "LIQUID",
          "name": "honey",
          "nameClean": "honey",
          "original": "2-3T honey or agave",
          "originalName": "honey or agave",
          "amount": 2,
          "unit": "T",
          "meta": [],
          "measures": {
            "us": {
              "amount": 2,
              "unitShort": "Tbsps",
              "unitLong": "Tbsps"
            },
            "metric": {
              "amount": 2,
              "unitShort": "Tbsps",
              "unitLong": "Tbsps"
            }
          }
        },
        {
          "id": 9316,
          "aisle": "Produce",
          "image": "strawberries.png",
          "consistency": "SOLID",
          "name": "strawberries",
          "nameClean": "strawberries",
          "original": "1 bag organic strawberries (my bag was 12 oz; 16 oz would be better!), thawed for about a 1/2 hour",
          "originalName": "organic strawberries (my bag was 12 oz; 16 oz would be better!), thawed for about a 1/2 hour",
          "amount": 1,
          "unit": "bag",
          "meta": [
            "organic",
            "thawed",
            "for a 1/2 hour",
            "(my bag was 12 oz; 16 oz would be better!)"
          ],
          "measures": {
            "us": {
              "amount": 1,
              "unitShort": "bag",
              "unitLong": "bag"
            },
            "metric": {
              "amount": 1,
              "unitShort": "bag",
              "unitLong": "bag"
            }
          }
        }
      ],
      "summary": "Strawberry Basil Sorbet (no Ice Cream Maker Necessary!) might be just the dessert you are searching for. This recipe serves 1 and costs 56 cents per serving. Watching your figure? This gluten free, dairy free, lacto ovo vegetarian, and vegan recipe has \u003Cb\u003E172 calories\u003C/b\u003E, \u003Cb\u003E0g of protein\u003C/b\u003E, and \u003Cb\u003E5g of fat\u003C/b\u003E per serving. If you have basil leaves, basil oil, honey, and a few other ingredients on hand, you can make it. Plenty of people made this recipe, and 101 would say it hit the spot. It is perfect for \u003Cb\u003EMother's Day\u003C/b\u003E. It is brought to you by fullbellysisters.blogspot.com. From preparation to the plate, this recipe takes approximately \u003Cb\u003E45 minutes\u003C/b\u003E. Overall, this recipe earns a \u003Cb\u003Erather bad spoonacular score of 25%\u003C/b\u003E. Similar recipes include \u003Ca href=\"https://spoonacular.com/recipes/strawberry-sorbet-without-an-ice-cream-maker-581814\"\u003EStrawberry Sorbet (without an ice cream maker)\u003C/a\u003E, \u003Ca href=\"https://spoonacular.com/recipes/coconut-mango-pineapple-sorbet-ice-cream-maker-giveaway-607524\"\u003ECoconut Mango-Pineapple Sorbet + Ice Cream Maker Giveaway\u003C/a\u003E, and \u003Ca href=\"https://spoonacular.com/recipes/no-ice-cream-maker-salted-caramel-bourbon-nutter-butter-and-chocolate-chunk-ice-cream-520118\"\u003ENo-Ice-Cream-Maker Salted Caramel, Bourbon, Nutter Butter and Chocolate Chunk Ice Cream\u003C/a\u003E.",
      "cuisines": [],
      "dishTypes": [
        "dessert"
      ],
      "diets": [
        "gluten free",
        "dairy free",
        "lacto ovo vegetarian",
        "vegan"
      ],
      "occasions": [
        "mother's day",
        "summer"
      ],
      "instructions": "",
      "analyzedInstructions": [],
      "originalId": null,
      "spoonacularScore": 19.9524974822998,
      "spoonacularSourceUrl": "https://spoonacular.com/strawberry-basil-sorbet-no-ice-cream-maker-necessary-716424"
    },
    {
      "id": 644848,
      "image": "https://img.spoonacular.com/recipes/644848-556x370.jpg",
      "imageType": "jpg",
      "title": "Gluten Free Pancakes",
      "readyInMinutes": 45,
      "servings": 12,
      "sourceUrl": "https://www.foodista.com/recipe/GG6LGJS5/gluten-free-pancakes",
      "vegetarian": true,
      "vegan": false,
      "glutenFree": true,
      "dairyFree": false,
      "veryHealthy": false,
      "cheap": false,
      "veryPopular": false,
      "sustainable": false,
      "lowFodmap": false,
      "weightWatcherSmartPoints": 3,
      "gaps": "no",
      "preparationMinutes": null,
      "cookingMinutes": null,
      "aggregateLikes": 2,
      "healthScore": 0,
      "creditsText": "foodista.com",
      "license": null,
      "sourceName": "foodista.com",
      "pricePerServing": 34.1,
      "extendedIngredients": [
        {
          "id": 19912,
          "aisle": "Health Foods",
          "image": "agave.png",
          "consistency": "LIQUID",
          "name": "agave nectar",
          "nameClean": "agave nectar",
          "original": "2 tablespoons agave nectar",
          "originalName": "agave nectar",
          "amount": 2,
          "unit": "tablespoons",
          "meta": [],
          "measures": {
            "us": {
              "amount": 2,
              "unitShort": "Tbsps",
              "unitLong": "Tbsps"
            },
            "metric": {
              "amount": 2,
              "unitShort": "Tbsps",
              "unitLong": "Tbsps"
            }
          }
        },
        {
          "id": 18369,
          "aisle": "Baking",
          "image": "white-powder.jpg",
          "consistency": "SOLID",
          "name": "baking powder",
          "nameClean": "baking powder",
          "original": "1 teaspoon baking powder",
          "originalName": "baking powder",
          "amount": 1,
          "unit": "teaspoon",
          "meta": [],
          "measures": {
            "us": {
              "amount": 1,
              "unitShort": "tsp",
              "unitLong": "teaspoon"
            },
            "metric": {
              "amount": 1,
              "unitShort": "tsp",
              "unitLong": "teaspoon"
            }
          }
        },
        {
          "id": 93740,
          "aisle": "Gluten Free",
          "image": "almond-meal-or-almond-flour.jpg",
          "consistency": "SOLID",
          "name": "blanched almond flour",
          "nameClean": "blanched almond flour",
          "original": "1 cup blanched almond flour",
          "originalName": "blanched almond flour",
          "amount": 1,
          "unit": "cup",
          "meta": [],
          "measures": {
            "us": {
              "amount": 1,
              "unitShort": "cup",
              "unitLong": "cup"
            },
            "metric": {
              "amount": 112,
              "unitShort": "g",
              "unitLong": "grams"
            }
          }
        },
        {
          "id": 1123,
          "aisle": "Milk, Eggs, Other Dairy",
          "image": "egg.png",
          "consistency": "SOLID",
          "name": "eggs",
          "nameClean": "eggs",
          "original": "2 large eggs",
          "originalName": "eggs",
          "amount": 2,
          "unit": "large",
          "meta": [],
          "measures": {
            "us": {
              "amount": 2,
              "unitShort": "large",
              "unitLong": "larges"
            },
            "metric": {
              "amount": 2,
              "unitShort": "large",
              "unitLong": "larges"
            }
          }
        },
        {
          "id": 1077,
          "aisle": "Milk, Eggs, Other Dairy",
          "image": "milk.png",
          "consistency": "LIQUID",
          "name": "preferred milk alternative",
          "nameClean": "preferred milk alternative",
          "original": "1/4 cup almond milk, or preferred milk alternative",
          "originalName": "almond milk, or preferred milk alternative",
          "amount": 0.25,
          "unit": "cup",
          "meta": [],
          "measures": {
            "us": {
              "amount": 0.25,
              "unitShort": "cups",
              "unitLong": "cups"
            },
            "metric": {
              "amount": 61,
              "unitShort": "ml",
              "unitLong": "milliliters"
            }
          }
        },
        {
          "id": 2047,
          "aisle": "Spices and Seasonings",
          "image": "salt.jpg",
          "consistency": "SOLID",
          "name": "salt",
          "nameClean": "salt",
          "original": "pinch of salt",
          "originalName": "pinch of salt",
          "amount": 1,
          "unit": "pinch",
          "meta": [],
          "measures": {
            "us": {
              "amount": 1,
              "unitShort": "pinch",
              "unitLong": "pinch"
            },
            "metric": {
              "amount": 1,
              "unitShort": "pinch",
              "unitLong": "pinch"
            }
          }
        },
        {
          "id": 93696,
          "aisle": "Health Foods",
          "image": "white-powder.jpg",
          "consistency": "SOLID",
          "name": "tapioca flour",
          "nameClean": "tapioca flour",
          "original": "3/4 cup tapioca flour",
          "originalName": "tapioca flour",
          "amount": 0.75,
          "unit": "cup",
          "meta": [],
          "measures": {
            "us": {
              "amount": 0.75,
              "unitShort": "cups",
              "unitLong": "cups"
            },
            "metric": {
              "amount": 90,
              "unitShort": "g",
              "unitLong": "grams"
            }
          }
        },
        {
          "id": 1052050,
          "aisle": "Baking",
          "image": "vanilla.jpg",
          "consistency": "SOLID",
          "name": "vanilla",
          "nameClean": "vanilla",
          "original": "1/2 teaspoon vanilla",
          "originalName": "vanilla",
          "amount": 0.5,
          "unit": "teaspoon",
          "meta": [],
          "measures": {
            "us": {
              "amount": 0.5,
              "unitShort": "tsps",
              "unitLong": "teaspoons"
            },
            "metric": {
              "amount": 0.5,
              "unitShort": "tsps",
              "unitLong": "teaspoons"
            }
          }
        },
        {
          "id": 14412,
          "aisle": "Beverages",
          "image": "water.png",
          "consistency": "LIQUID",
          "name": "warm water",
          "nameClean": "warm water",
          "original": "1 1/2 cups warm water",
          "originalName": "warm water",
          "amount": 1.5,
          "unit": "cups",
          "meta": [],
          "measures": {
            "us": {
              "amount": 1.5,
              "unitShort": "cups",
              "unitLong": "cups"
            },
            "metric": {
              "amount": 354.882,
              "unitShort": "ml",
              "unitLong": "milliliters"
            }
          }
        },
        {
          "id": 2053,
          "aisle": "Oil, Vinegar, Salad Dressing",
          "image": "vinegar-(white).jpg",
          "consistency": "LIQUID",
          "name": "distilled vinegar",
          "nameClean": "distilled vinegar",
          "original": "1/4 teaspoon distilled white vinegar",
          "originalName": "distilled white vinegar",
          "amount": 0.25,
          "unit": "teaspoon",
          "meta": [
            "white"
          ],
          "measures": {
            "us": {
              "amount": 0.25,
              "unitShort": "tsps",
              "unitLong": "teaspoons"
            },
            "metric": {
              "amount": 0.25,
              "unitShort": "tsps",
              "unitLong": "teaspoons"
            }
          }
        },
        {
          "id": 93626,
          "aisle": "Baking",
          "image": "white-powder.jpg",
          "consistency": "SOLID",
          "name": "xanthan gum",
          "nameClean": "xanthan gum",
          "original": "1 teaspoon xanthan gum",
          "originalName": "xanthan gum",
          "amount": 1,
          "unit": "teaspoon",
          "meta": [],
          "measures": {
            "us": {
              "amount": 1,
              "unitShort": "tsp",
              "unitLong": "teaspoon"
            },
            "metric": {
              "amount": 1,
              "unitShort": "tsp",
              "unitLong": "teaspoon"
            }
          }
        }
      ],
      "summary": "You can never have too many breakfast recipes, so give Gluten Free Pancakes a try. This recipe serves 12. Watching your figure? This gluten free and lacto ovo vegetarian recipe has \u003Cb\u003E105 calories\u003C/b\u003E, \u003Cb\u003E3g of protein\u003C/b\u003E, and \u003Cb\u003E6g of fat\u003C/b\u003E per serving. For \u003Cb\u003E34 cents per serving\u003C/b\u003E, this recipe \u003Cb\u003Ecovers 2%\u003C/b\u003E of your daily requirements of vitamins and minerals. A mixture of preferred milk alternative, baking powder, warm water, and a handful of other ingredients are all it takes to make this recipe so scrumptious. From preparation to the plate, this recipe takes roughly \u003Cb\u003E45 minutes\u003C/b\u003E. 2 people were glad they tried this recipe. It is brought to you by Foodista. With a spoonacular \u003Cb\u003Escore of 12%\u003C/b\u003E, this dish is not so amazing. Try \u003Ca href=\"https://spoonacular.com/recipes/2-ingredient-sweet-potato-pancakes-gluten-free-dairy-free-nut-free-1224983\"\u003E2-ingredient Sweet Potato Pancakes {gluten-free, dairy-free, nut-free}\u003C/a\u003E, \u003Ca href=\"https://spoonacular.com/recipes/2-ingredient-sweet-potato-pancakes-gluten-free-dairy-free-nut-free-630749\"\u003E2-ingredient Sweet Potato Pancakes {gluten-free, dairy-free, nut-free}\u003C/a\u003E, and \u003Ca href=\"https://spoonacular.com/recipes/2-ingredient-sweet-potato-pancakes-gluten-free-dairy-free-nut-free-1379303\"\u003E2-ingredient Sweet Potato Pancakes {gluten-free, dairy-free, nut-free}\u003C/a\u003E for similar recipes.",
      "cuisines": [],
      "dishTypes": [
        "morning meal",
        "brunch",
        "breakfast"
      ],
      "diets": [
        "gluten free",
        "lacto ovo vegetarian"
      ],
      "occasions": [],
      "instructions": "\u003Col\u003E\u003Cli\u003EStart by making the buttermilk. Mix together the almond milk and vinegar, set aside.\u003C/li\u003E\u003Cli\u003EIn a large bowl, whisk together all of the dry ingredients: almond flour, tapioca flour, xanthan gum, salt, and baking powder.\u003C/li\u003E\u003Cli\u003EIn a medium-sized bowl, whisk together all of the wet ingredients: agave nectar, eggs, milk mixture, water, and vanilla.\u003C/li\u003E\u003Cli\u003EWhisk the wet ingredients into the dry, mixing well. Add warm water one tablespoon at a time if the batter needs to be thinned out more.\u003C/li\u003E\u003Cli\u003EHeat a skillet or griddle over medium heat.\u003C/li\u003E\u003Cli\u003ELightly grease the skillet and, using an ice cream scoop, pour in the batter. Then, spread it out with the back of a spoon.\u003C/li\u003E\u003Cli\u003ECook for 1 minute, or until the bottom of the pancake is firm.\u003C/li\u003E\u003Cli\u003EFlip it over, squish it down with a spatula, and cook an additional 1-2 minutes or until done.\u003C/li\u003E\u003Cli\u003ESet aside on a plate and repeat with the remaining batter. Makes 10-12 pancakes.\u003C/li\u003E\u003Cli\u003EServe with Earth Balance butter and syrup or fruit. Delicious!\u003C/li\u003E\u003C/ol\u003E",
      "analyzedInstructions": [
        {
          "name": "",
          "steps": [
            {
              "number": 1,
              "step": "Start by making the buttermilk.",
              "ingredients": [
                {
                  "id": 1230,
                  "name": "buttermilk",
                  "localizedName": "buttermilk",
                  "image": "buttermilk.jpg"
                }
              ],
              "equipment": []
            },
            {
              "number": 2,
              "step": "Mix together the almond milk and vinegar, set aside.In a large bowl, whisk together all of the dry ingredients: almond flour, tapioca flour, xanthan gum, salt, and baking powder.In a medium-sized bowl, whisk together all of the wet ingredients: agave nectar, eggs, milk mixture, water, and vanilla.",
              "ingredients": [
                {
                  "id": 18369,
                  "name": "baking powder",
                  "localizedName": "baking powder",
                  "image": "white-powder.jpg"
                },
                {
                  "id": 93696,
                  "name": "tapioca starch",
                  "localizedName": "tapioca starch",
                  "image": "white-powder.jpg"
                },
                {
                  "id": 19912,
                  "name": "agave",
                  "localizedName": "agave",
                  "image": "agave.png"
                },
                {
                  "id": 10093740,
                  "name": "almond flour",
                  "localizedName": "almond flour",
                  "image": "almond-meal-or-almond-flour.jpg"
                },
                {
                  "id": 93607,
                  "name": "almond milk",
                  "localizedName": "almond milk",
                  "image": "almond-milk.png"
                },
                {
                  "id": 93626,
                  "name": "xanthan gum",
                  "localizedName": "xanthan gum",
                  "image": "white-powder.jpg"
                },
                {
                  "id": 1052050,
                  "name": "vanilla",
                  "localizedName": "vanilla",
                  "image": "vanilla.jpg"
                },
                {
                  "id": 2053,
                  "name": "vinegar",
                  "localizedName": "vinegar",
                  "image": "vinegar-(white).jpg"
                },
                {
                  "id": 14412,
                  "name": "water",
                  "localizedName": "water",
                  "image": "water.png"
                },
                {
                  "id": 1123,
                  "name": "egg",
                  "localizedName": "egg",
                  "image": "egg.png"
                },
                {
                  "id": 1077,
                  "name": "milk",
                  "localizedName": "milk",
                  "image": "milk.png"
                },
                {
                  "id": 2047,
                  "name": "salt",
                  "localizedName": "salt",
                  "image": "salt.jpg"
                }
              ],
              "equipment": [
                {
                  "id": 404661,
                  "name": "whisk",
                  "localizedName": "whisk",
                  "image": "https://spoonacular.com/cdn/equipment_100x100/whisk.png"
                },
                {
                  "id": 404783,
                  "name": "bowl",
                  "localizedName": "bowl",
                  "image": "https://spoonacular.com/cdn/equipment_100x100/bowl.jpg"
                }
              ]
            },
            {
              "number": 3,
              "step": "Whisk the wet ingredients into the dry, mixing well.",
              "ingredients": [],
              "equipment": [
                {
                  "id": 404661,
                  "name": "whisk",
                  "localizedName": "whisk",
                  "image": "https://spoonacular.com/cdn/equipment_100x100/whisk.png"
                }
              ]
            },
            {
              "number": 4,
              "step": "Add warm water one tablespoon at a time if the batter needs to be thinned out more.",
              "ingredients": [
                {
                  "id": 14412,
                  "name": "water",
                  "localizedName": "water",
                  "image": "water.png"
                }
              ],
              "equipment": []
            },
            {
              "number": 5,
              "step": "Heat a skillet or griddle over medium heat.Lightly grease the skillet and, using an ice cream scoop, pour in the batter. Then, spread it out with the back of a spoon.Cook for 1 minute, or until the bottom of the pancake is firm.Flip it over, squish it down with a spatula, and cook an additional 1-2 minutes or until done.Set aside on a plate and repeat with the remaining batter. Makes 10-12 pancakes.",
              "ingredients": [
                {
                  "id": 19095,
                  "name": "ice cream",
                  "localizedName": "ice cream",
                  "image": "https://spoonacular.com/cdn/ingredients_100x100/vanilla-ice-cream.png"
                },
                {
                  "id": 0,
                  "name": "spread",
                  "localizedName": "spread",
                  "image": ""
                }
              ],
              "equipment": [
                {
                  "id": 404742,
                  "name": "ice cream scoop",
                  "localizedName": "ice cream scoop",
                  "image": "https://spoonacular.com/cdn/equipment_100x100/ice-cream-scoop.jpg"
                },
                {
                  "id": 404645,
                  "name": "frying pan",
                  "localizedName": "frying pan",
                  "image": "https://spoonacular.com/cdn/equipment_100x100/pan.png"
                },
                {
                  "id": 404642,
                  "name": "spatula",
                  "localizedName": "spatula",
                  "image": "https://spoonacular.com/cdn/equipment_100x100/spatula-or-turner.jpg"
                }
              ],
              "length": {
                "number": 3,
                "unit": "minutes"
              }
            },
            {
              "number": 6,
              "step": "Serve with Earth Balance butter and syrup or fruit. Delicious!",
              "ingredients": [
                {
                  "id": 1001,
                  "name": "butter",
                  "localizedName": "butter",
                  "image": "butter-sliced.jpg"
                },
                {
                  "id": 9431,
                  "name": "fruit",
                  "localizedName": "fruit",
                  "image": "mixed-fresh-fruit.jpg"
                },
                {
                  "id": 0,
                  "name": "syrup",
                  "localizedName": "syrup",
                  "image": ""
                }
              ],
              "equipment": []
            }
          ]
        }
      ],
      "originalId": null,
      "spoonacularScore": 7.69554376602173,
      "spoonacularSourceUrl": "https://spoonacular.com/gluten-free-pancakes-644848"
    },
    {
      "id": 664615,
      "image": "https://img.spoonacular.com/recipes/664615-556x370.jpg",
      "imageType": "jpg",
      "title": "Vegetable Tart With Goat Cheese",
      "readyInMinutes": 25,
      "servings": 4,
      "sourceUrl": "https://www.foodista.com/recipe/NGWYYZNV/vegetable-tart-with-goat-cheese",
      "vegetarian": true,
      "vegan": false,
      "glutenFree": false,
      "dairyFree": false,
      "veryHealthy": false,
      "cheap": false,
      "veryPopular": false,
      "sustainable": false,
      "lowFodmap": false,
      "weightWatcherSmartPoints": 13,
      "gaps": "no",
      "preparationMinutes": null,
      "cookingMinutes": null,
      "aggregateLikes": 2,
      "healthScore": 45,
      "creditsText": "Foodista.com – The Cooking Encyclopedia Everyone Can Edit",
      "license": "CC BY 3.0",
      "sourceName": "Foodista",
      "pricePerServing": 163.67,
      "extendedIngredients": [
        {
          "id": 11463,
          "aisle": "Frozen",
          "image": "spinach-frozen.jpg",
          "consistency": "SOLID",
          "name": "spinach",
          "nameClean": "spinach",
          "original": "1 cup Spinach, if frozen, thaw and drain",
          "originalName": "Spinach, if frozen, thaw and drain",
          "amount": 1,
          "unit": "cup",
          "meta": [
            "frozen",
            "thaw"
          ],
          "measures": {
            "us": {
              "amount": 1,
              "unitShort": "cup",
              "unitLong": "cup"
            },
            "metric": {
              "amount": 156,
              "unitShort": "g",
              "unitLong": "grams"
            }
          }
        },
        {
          "id": 1159,
          "aisle": "Cheese",
          "image": "goat-cheese.jpg",
          "consistency": "SOLID",
          "name": "goat cheese",
          "nameClean": "goat cheese",
          "original": "1/4 cup crumbled goat cheese",
          "originalName": "crumbled goat cheese",
          "amount": 0.25,
          "unit": "cup",
          "meta": [
            "crumbled"
          ],
          "measures": {
            "us": {
              "amount": 0.25,
              "unitShort": "cups",
              "unitLong": "cups"
            },
            "metric": {
              "amount": 56.75,
              "unitShort": "g",
              "unitLong": "grams"
            }
          }
        },
        {
          "id": 11260,
          "aisle": "Produce",
          "image": "mushrooms.png",
          "consistency": "SOLID",
          "name": "mushrooms",
          "nameClean": "mushrooms",
          "original": "1 cup sliced mushrooms",
          "originalName": "sliced mushrooms",
          "amount": 1,
          "unit": "cup",
          "meta": [
            "sliced"
          ],
          "measures": {
            "us": {
              "amount": 1,
              "unitShort": "cup",
              "unitLong": "cup"
            },
            "metric": {
              "amount": 96,
              "unitShort": "ml",
              "unitLong": "milliliters"
            }
          }
        },
        {
          "id": 18337,
          "aisle": "Frozen",
          "image": "puff-pastry.png",
          "consistency": "SOLID",
          "name": "puff pastry",
          "nameClean": "puff pastry",
          "original": "1 sheet Puff Pastry",
          "originalName": "Puff Pastry",
          "amount": 1,
          "unit": "sheet",
          "meta": [],
          "measures": {
            "us": {
              "amount": 1,
              "unitShort": "sheet",
              "unitLong": "sheet"
            },
            "metric": {
              "amount": 1,
              "unitShort": "sheet",
              "unitLong": "sheet"
            }
          }
        },
        {
          "id": 11821,
          "aisle": "Produce",
          "image": "red-pepper.jpg",
          "consistency": "SOLID",
          "name": "bell pepper",
          "nameClean": "bell pepper",
          "original": "1 red Bell Pepper, sliced",
          "originalName": "red Bell Pepper, sliced",
          "amount": 1,
          "unit": "",
          "meta": [
            "red",
            "sliced"
          ],
          "measures": {
            "us": {
              "amount": 1,
              "unitShort": "",
              "unitLong": ""
            },
            "metric": {
              "amount": 1,
              "unitShort": "",
              "unitLong": ""
            }
          }
        },
        {
          "id": 1102047,
          "aisle": "Spices and Seasonings",
          "image": "salt-and-pepper.jpg",
          "consistency": "SOLID",
          "name": "salt and pepper",
          "nameClean": "salt and pepper",
          "original": "Salt and pepper to taste",
          "originalName": "Salt and pepper to taste",
          "amount": 4,
          "unit": "servings",
          "meta": [
            "to taste"
          ],
          "measures": {
            "us": {
              "amount": 4,
              "unitShort": "servings",
              "unitLong": "servings"
            },
            "metric": {
              "amount": 4,
              "unitShort": "servings",
              "unitLong": "servings"
            }
          }
        }
      ],
      "summary": "The recipe Vegetable Tart With Goat Cheese can be made \u003Cb\u003Ein around 25 minutes\u003C/b\u003E. One portion of this dish contains around \u003Cb\u003E10g of protein\u003C/b\u003E, \u003Cb\u003E27g of fat\u003C/b\u003E, and a total of \u003Cb\u003E399 calories\u003C/b\u003E. This lacto ovo vegetarian recipe serves 4 and costs \u003Cb\u003E$1.64 per serving\u003C/b\u003E. It is brought to you by Foodista. If you have salt and pepper, bell pepper, mushrooms, and a few other ingredients on hand, you can make it. Only a few people made this recipe, and 2 would say it hit the spot. With a spoonacular \u003Cb\u003Escore of 84%\u003C/b\u003E, this dish is super. \u003Ca href=\"https://spoonacular.com/recipes/savory-spring-vegetable-and-goat-cheese-tart-115490\"\u003ESavory Spring Vegetable and Goat Cheese Tart\u003C/a\u003E, \u003Ca href=\"https://spoonacular.com/recipes/goat-cheese-tart-552207\"\u003EGoat Cheese Tart\u003C/a\u003E, and \u003Ca href=\"https://spoonacular.com/recipes/pear-and-goat-cheese-tart-1047798\"\u003EPear and Goat Cheese Tart\u003C/a\u003E are very similar to this recipe.",
      "cuisines": [],
      "dishTypes": [],
      "diets": [
        "lacto ovo vegetarian"
      ],
      "occasions": [],
      "instructions": "\u003Col\u003E\u003Cli\u003EPre-heat oven to 350F. \u003C/li\u003E\u003Cli\u003ERoll out puff pastry onto a cookie sheet, leaving parchment paper on pan to keep it from sticking. \u003C/li\u003E\u003Cli\u003ESpread spinach over the top, leaving an inch of the sides uncovered. \u003C/li\u003E\u003Cli\u003ESpread mushrooms on top of spinach and add bell pepper slices on top. \u003C/li\u003E\u003Cli\u003ESprinkle crumbled goat cheese over the top. Salt and pepper to taste. \u003C/li\u003E\u003Cli\u003EBake for 15-20 minutes\u003C/li\u003E\u003C/ol\u003E",
      "analyzedInstructions": [
        {
          "name": "",
          "steps": [
            {
              "number": 1,
              "step": "Pre-heat oven to 350F.",
              "ingredients": [],
              "equipment": [
                {
                  "id": 404784,
                  "name": "oven",
                  "localizedName": "oven",
                  "image": "https://spoonacular.com/cdn/equipment_100x100/oven.jpg",
                  "temperature": {
                    "number": 350,
                    "unit": "Fahrenheit"
                  }
                }
              ]
            },
            {
              "number": 2,
              "step": "Roll out puff pastry onto a cookie sheet, leaving parchment paper on pan to keep it from sticking.",
              "ingredients": [
                {
                  "id": 18337,
                  "name": "puff pastry sheets",
                  "localizedName": "puff pastry sheets",
                  "image": "puff-pastry.png"
                },
                {
                  "id": 10118192,
                  "name": "cookies",
                  "localizedName": "cookies",
                  "image": "https://spoonacular.com/cdn/ingredients_100x100/shortbread-cookies.jpg"
                },
                {
                  "id": 0,
                  "name": "roll",
                  "localizedName": "roll",
                  "image": "dinner-yeast-rolls.jpg"
                }
              ],
              "equipment": [
                {
                  "id": 404770,
                  "name": "baking paper",
                  "localizedName": "baking paper",
                  "image": "https://spoonacular.com/cdn/equipment_100x100/baking-paper.jpg"
                },
                {
                  "id": 404727,
                  "name": "baking sheet",
                  "localizedName": "baking sheet",
                  "image": "https://spoonacular.com/cdn/equipment_100x100/baking-sheet.jpg"
                },
                {
                  "id": 404645,
                  "name": "frying pan",
                  "localizedName": "frying pan",
                  "image": "https://spoonacular.com/cdn/equipment_100x100/pan.png"
                }
              ]
            },
            {
              "number": 3,
              "step": "Spread spinach over the top, leaving an inch of the sides uncovered.",
              "ingredients": [
                {
                  "id": 10011457,
                  "name": "spinach",
                  "localizedName": "spinach",
                  "image": "spinach.jpg"
                },
                {
                  "id": 0,
                  "name": "spread",
                  "localizedName": "spread",
                  "image": ""
                }
              ],
              "equipment": []
            },
            {
              "number": 4,
              "step": "Spread mushrooms on top of spinach and add bell pepper slices on top.",
              "ingredients": [
                {
                  "id": 10211821,
                  "name": "bell pepper",
                  "localizedName": "bell pepper",
                  "image": "bell-pepper-orange.png"
                },
                {
                  "id": 11260,
                  "name": "mushrooms",
                  "localizedName": "mushrooms",
                  "image": "https://spoonacular.com/cdn/ingredients_100x100/mushrooms.png"
                },
                {
                  "id": 10011457,
                  "name": "spinach",
                  "localizedName": "spinach",
                  "image": "spinach.jpg"
                },
                {
                  "id": 0,
                  "name": "spread",
                  "localizedName": "spread",
                  "image": ""
                }
              ],
              "equipment": []
            },
            {
              "number": 5,
              "step": "Sprinkle crumbled goat cheese over the top. Salt and pepper to taste.",
              "ingredients": [
                {
                  "id": 1102047,
                  "name": "salt and pepper",
                  "localizedName": "salt and pepper",
                  "image": "salt-and-pepper.jpg"
                },
                {
                  "id": 1159,
                  "name": "goat cheese",
                  "localizedName": "goat cheese",
                  "image": "goat-cheese.jpg"
                }
              ],
              "equipment": []
            },
            {
              "number": 6,
              "step": "Bake for 15-20 minutes",
              "ingredients": [],
              "equipment": [
                {
                  "id": 404784,
                  "name": "oven",
                  "localizedName": "oven",
                  "image": "https://spoonacular.com/cdn/equipment_100x100/oven.jpg"
                }
              ]
            }
          ]
        }
      ],
      "originalId": null,
      "spoonacularScore": 85.6056060791016,
      "spoonacularSourceUrl": "https://spoonacular.com/vegetable-tart-with-goat-cheese-664615"
    },
    {
      "id": 632116,
      "image": "https://img.spoonacular.com/recipes/632116-556x370.jpg",
      "imageType": "jpg",
      "title": "Almond Cookie Bar",
      "readyInMinutes": 45,
      "servings": 22,
      "sourceUrl": "https://www.foodista.com/recipe/F3QRLC6D/almond-cookie-bar",
      "vegetarian": false,
      "vegan": false,
      "glutenFree": false,
      "dairyFree": false,
      "veryHealthy": false,
      "cheap": false,
      "veryPopular": false,
      "sustainable": false,
      "lowFodmap": false,
      "weightWatcherSmartPoints": 10,
      "gaps": "no",
      "preparationMinutes": null,
      "cookingMinutes": null,
      "aggregateLikes": 9,
      "healthScore": 1,
      "creditsText": "Foodista.com – The Cooking Encyclopedia Everyone Can Edit",
      "license": "CC BY 3.0",
      "sourceName": "Foodista",
      "pricePerServing": 72.09,
      "extendedIngredients": [
        {
          "id": 10112061,
          "aisle": "Baking",
          "image": "almonds.jpg",
          "consistency": "SOLID",
          "name": "almond flakes",
          "nameClean": "almond flakes",
          "original": "35g Almond flakes",
          "originalName": "Almond flakes",
          "amount": 35,
          "unit": "g",
          "meta": [],
          "measures": {
            "us": {
              "amount": 1.235,
              "unitShort": "oz",
              "unitLong": "ounces"
            },
            "metric": {
              "amount": 35,
              "unitShort": "g",
              "unitLong": "grams"
            }
          }
        },
        {
          "id": 19719,
          "aisle": "Nut butters, Jams, and Honey",
          "image": "apricot-jam.jpg",
          "consistency": "SOLID",
          "name": "apricot gel/jam",
          "nameClean": "apricot gel/jam",
          "original": "Apricot Gel/Jam, as needed",
          "originalName": "Apricot Gel/Jam, as needed",
          "amount": 22,
          "unit": "servings",
          "meta": [
            "as needed"
          ],
          "measures": {
            "us": {
              "amount": 22,
              "unitShort": "servings",
              "unitLong": "servings"
            },
            "metric": {
              "amount": 22,
              "unitShort": "servings",
              "unitLong": "servings"
            }
          }
        },
        {
          "id": 19334,
          "aisle": "Baking",
          "image": "light-brown-sugar.jpg",
          "consistency": "SOLID",
          "name": "brown sugar",
          "nameClean": "brown sugar",
          "original": "25g Brown sugar",
          "originalName": "Brown sugar",
          "amount": 25,
          "unit": "g",
          "meta": [],
          "measures": {
            "us": {
              "amount": 0.882,
              "unitShort": "oz",
              "unitLong": "ounces"
            },
            "metric": {
              "amount": 25,
              "unitShort": "g",
              "unitLong": "grams"
            }
          }
        },
        {
          "id": 1001,
          "aisle": "Milk, Eggs, Other Dairy",
          "image": "butter-sliced.jpg",
          "consistency": "SOLID",
          "name": "butter",
          "nameClean": "butter",
          "original": "50g Cold butter, cut to cubes",
          "originalName": "Cold butter, cut to cubes",
          "amount": 50,
          "unit": "g",
          "meta": [
            "cold"
          ],
          "measures": {
            "us": {
              "amount": 1.764,
              "unitShort": "oz",
              "unitLong": "ounces"
            },
            "metric": {
              "amount": 50,
              "unitShort": "g",
              "unitLong": "grams"
            }
          }
        },
        {
          "id": 10118192,
          "aisle": "Sweet Snacks",
          "image": "shortbread-cookies.jpg",
          "consistency": "SOLID",
          "name": "cookie base",
          "nameClean": "cookie base",
          "original": "Cookie Base",
          "originalName": "Cookie Base",
          "amount": 22,
          "unit": "servings",
          "meta": [],
          "measures": {
            "us": {
              "amount": 22,
              "unitShort": "servings",
              "unitLong": "servings"
            },
            "metric": {
              "amount": 22,
              "unitShort": "servings",
              "unitLong": "servings"
            }
          }
        },
        {
          "id": 1077,
          "aisle": "Milk, Eggs, Other Dairy",
          "image": "milk.png",
          "consistency": "LIQUID",
          "name": "milk",
          "nameClean": "milk",
          "original": "1 tbsp Fresh milk",
          "originalName": "Fresh milk",
          "amount": 1,
          "unit": "tbsp",
          "meta": [
            "fresh"
          ],
          "measures": {
            "us": {
              "amount": 1,
              "unitShort": "Tbsp",
              "unitLong": "Tbsp"
            },
            "metric": {
              "amount": 1,
              "unitShort": "Tbsp",
              "unitLong": "Tbsp"
            }
          }
        },
        {
          "id": 1008020,
          "aisle": "Bakery/Bread",
          "image": "img.spoonacular.",
          "consistency": "SOLID",
          "name": "oatmeal cornflakes",
          "nameClean": "oatmeal cornflakes",
          "original": "20g Oatmeal Crushed cornflakes",
          "originalName": "Oatmeal Crushed cornflakes",
          "amount": 20,
          "unit": "g",
          "meta": [
            "crushed"
          ],
          "measures": {
            "us": {
              "amount": 0.705,
              "unitShort": "oz",
              "unitLong": "ounces"
            },
            "metric": {
              "amount": 20,
              "unitShort": "g",
              "unitLong": "grams"
            }
          }
        },
        {
          "id": 20081,
          "aisle": "Baking",
          "image": "flour.png",
          "consistency": "SOLID",
          "name": "flour",
          "nameClean": "flour",
          "original": "100g Plain flour",
          "originalName": "Plain flour",
          "amount": 100,
          "unit": "g",
          "meta": [
            "plain"
          ],
          "measures": {
            "us": {
              "amount": 3.527,
              "unitShort": "oz",
              "unitLong": "ounces"
            },
            "metric": {
              "amount": 100,
              "unitShort": "g",
              "unitLong": "grams"
            }
          }
        },
        {
          "id": 20080,
          "aisle": "Baking",
          "image": "flour.png",
          "consistency": "SOLID",
          "name": "wholemeal flour",
          "nameClean": "wholemeal flour",
          "original": "80g Wholemeal flour",
          "originalName": "Wholemeal flour",
          "amount": 80,
          "unit": "g",
          "meta": [],
          "measures": {
            "us": {
              "amount": 2.822,
              "unitShort": "oz",
              "unitLong": "ounces"
            },
            "metric": {
              "amount": 80,
              "unitShort": "g",
              "unitLong": "grams"
            }
          }
        }
      ],
      "summary": "Almond Cookie Bar might be just the dessert you are searching for. One portion of this dish contains about \u003Cb\u003E3g of protein\u003C/b\u003E, \u003Cb\u003E10g of fat\u003C/b\u003E, and a total of \u003Cb\u003E255 calories\u003C/b\u003E. This recipe serves 22. For \u003Cb\u003E72 cents per serving\u003C/b\u003E, this recipe \u003Cb\u003Ecovers 5%\u003C/b\u003E of your daily requirements of vitamins and minerals. 9 people have made this recipe and would make it again. This recipe from Foodista requires wholemeal flour, apricot gel/jam, milk, and cookie base. From preparation to the plate, this recipe takes about \u003Cb\u003E45 minutes\u003C/b\u003E. All things considered, we decided this recipe \u003Cb\u003Edeserves a spoonacular score of 21%\u003C/b\u003E. This score is not so outstanding. Users who liked this recipe also liked \u003Ca href=\"https://spoonacular.com/recipes/raspberry-coconut-almond-cookie-bar-recipe-54149\"\u003ERaspberry Coconut-almond Cookie Bar Recipe\u003C/a\u003E, \u003Ca href=\"https://spoonacular.com/recipes/cookie-dough-frozen-yogurt-in-quest-bar-cookie-cups-video-included-616840\"\u003ECookie Dough Frozen Yogurt in Quest Bar Cookie Cups {video included!}\u003C/a\u003E, and \u003Ca href=\"https://spoonacular.com/recipes/the-cookie-bar-607756\"\u003EThe Cookie Bar\u003C/a\u003E.",
      "cuisines": [],
      "dishTypes": [
        "dessert"
      ],
      "diets": [],
      "occasions": [],
      "instructions": "\u003Col\u003E\u003Cli\u003EBeat butter and sugar until light and fluffy.\u003C/li\u003E\u003Cli\u003EIn a bowl combine wholemeal flour and plain flour together, then mix in the butter mixture with a rubber spatula and knead gently to a soft dough.\u003C/li\u003E\u003Cli\u003ETurn out the dough on to a flour surface or line with a plastic sheet below and with another plastic sheet on top. Then roll to a square. Chill for at least 1 hour.\u003C/li\u003E\u003Cli\u003ETransfer the dough on a non grease paper and cover with a plastic sheet on top, then roll to dough to about 3mm thick.\u003C/li\u003E\u003Cli\u003EPrick the dough with a fork and bake for about 15-18 minutes until brown at preheated oven 180C and leave biscuit to cool.\u003C/li\u003E\u003Cli\u003ESpread the apricot jam over the top of the biscuit, set aside.\u003C/li\u003E\u003Cli\u003EMix topping ingredients and spread evenly on the biscuit with a palette knife.\u003C/li\u003E\u003Cli\u003EBake for 15 minutes until golden.\u003C/li\u003E\u003Cli\u003ERemove cooked biscuit from the oven and leave to cool completely, then cut into bars.\u003C/li\u003E\u003C/ol\u003E",
      "analyzedInstructions": [
        {
          "name": "",
          "steps": [
            {
              "number": 1,
              "step": "Beat butter and sugar until light and fluffy.In a bowl combine wholemeal flour and plain flour together, then mix in the butter mixture with a rubber spatula and knead gently to a soft dough.Turn out the dough on to a flour surface or line with a plastic sheet below and with another plastic sheet on top. Then roll to a square. Chill for at least 1 hour.",
              "ingredients": [
                {
                  "id": 20080,
                  "name": "whole wheat flour",
                  "localizedName": "whole wheat flour",
                  "image": "flour.png"
                },
                {
                  "id": 20081,
                  "name": "all purpose flour",
                  "localizedName": "all purpose flour",
                  "image": "flour.png"
                },
                {
                  "id": 1001,
                  "name": "butter",
                  "localizedName": "butter",
                  "image": "butter-sliced.jpg"
                },
                {
                  "id": 0,
                  "name": "dough",
                  "localizedName": "dough",
                  "image": "pizza-dough"
                },
                {
                  "id": 19335,
                  "name": "sugar",
                  "localizedName": "sugar",
                  "image": "sugar-in-bowl.png"
                },
                {
                  "id": 0,
                  "name": "roll",
                  "localizedName": "roll",
                  "image": "dinner-yeast-rolls.jpg"
                }
              ],
              "equipment": [
                {
                  "id": 404642,
                  "name": "spatula",
                  "localizedName": "spatula",
                  "image": "https://spoonacular.com/cdn/equipment_100x100/spatula-or-turner.jpg"
                },
                {
                  "id": 404783,
                  "name": "bowl",
                  "localizedName": "bowl",
                  "image": "https://spoonacular.com/cdn/equipment_100x100/bowl.jpg"
                }
              ],
              "length": {
                "number": 60,
                "unit": "minutes"
              }
            },
            {
              "number": 2,
              "step": "Transfer the dough on a non grease paper and cover with a plastic sheet on top, then roll to dough to about 3mm thick.Prick the dough with a fork and bake for about 15-18 minutes until brown at preheated oven 180C and leave biscuit to cool.",
              "ingredients": [
                {
                  "id": 18009,
                  "name": "biscuits",
                  "localizedName": "biscuits",
                  "image": "buttermilk-biscuits.jpg"
                },
                {
                  "id": 0,
                  "name": "dough",
                  "localizedName": "dough",
                  "image": "pizza-dough"
                },
                {
                  "id": 0,
                  "name": "roll",
                  "localizedName": "roll",
                  "image": "dinner-yeast-rolls.jpg"
                }
              ],
              "equipment": [
                {
                  "id": 404784,
                  "name": "oven",
                  "localizedName": "oven",
                  "image": "https://spoonacular.com/cdn/equipment_100x100/oven.jpg",
                  "temperature": {
                    "number": 180,
                    "unit": "Celsius"
                  }
                }
              ],
              "length": {
                "number": 18,
                "unit": "minutes"
              }
            },
            {
              "number": 3,
              "step": "Spread the apricot jam over the top of the biscuit, set aside.",
              "ingredients": [
                {
                  "id": 19719,
                  "name": "apricot jam",
                  "localizedName": "apricot jam",
                  "image": "apricot-jam.jpg"
                },
                {
                  "id": 18009,
                  "name": "biscuits",
                  "localizedName": "biscuits",
                  "image": "buttermilk-biscuits.jpg"
                },
                {
                  "id": 0,
                  "name": "spread",
                  "localizedName": "spread",
                  "image": ""
                }
              ],
              "equipment": []
            },
            {
              "number": 4,
              "step": "Mix topping ingredients and spread evenly on the biscuit with a palette knife.",
              "ingredients": [
                {
                  "id": 18009,
                  "name": "biscuits",
                  "localizedName": "biscuits",
                  "image": "buttermilk-biscuits.jpg"
                },
                {
                  "id": 0,
                  "name": "spread",
                  "localizedName": "spread",
                  "image": ""
                }
              ],
              "equipment": [
                {
                  "id": 406915,
                  "name": "palette knife",
                  "localizedName": "palette knife",
                  "image": "https://spoonacular.com/cdn/equipment_100x100/palette-knife.jpg"
                }
              ]
            },
            {
              "number": 5,
              "step": "Bake for 15 minutes until golden.",
              "ingredients": [],
              "equipment": [
                {
                  "id": 404784,
                  "name": "oven",
                  "localizedName": "oven",
                  "image": "https://spoonacular.com/cdn/equipment_100x100/oven.jpg"
                }
              ],
              "length": {
                "number": 15,
                "unit": "minutes"
              }
            },
            {
              "number": 6,
              "step": "Remove cooked biscuit from the oven and leave to cool completely, then cut into bars.",
              "ingredients": [
                {
                  "id": 18009,
                  "name": "biscuits",
                  "localizedName": "biscuits",
                  "image": "buttermilk-biscuits.jpg"
                }
              ],
              "equipment": [
                {
                  "id": 404784,
                  "name": "oven",
                  "localizedName": "oven",
                  "image": "https://spoonacular.com/cdn/equipment_100x100/oven.jpg"
                }
              ]
            }
          ]
        }
      ],
      "originalId": null,
      "spoonacularScore": 30.2065258026123,
      "spoonacularSourceUrl": "https://spoonacular.com/almond-cookie-bar-632116"
    },
    {
      "id": 639125,
      "image": "https://img.spoonacular.com/recipes/639125-556x370.jpg",
      "imageType": "jpg",
      "title": "Chocolate Orange Madeleines",
      "readyInMinutes": 45,
      "servings": 8,
      "sourceUrl": "https://www.foodista.com/recipe/2R4XLSKW/chocolate-orange-madeleines",
      "vegetarian": true,
      "vegan": false,
      "glutenFree": false,
      "dairyFree": true,
      "veryHealthy": false,
      "cheap": false,
      "veryPopular": false,
      "sustainable": false,
      "lowFodmap": false,
      "weightWatcherSmartPoints": 10,
      "gaps": "no",
      "preparationMinutes": null,
      "cookingMinutes": null,
      "aggregateLikes": 3,
      "healthScore": 3,
      "creditsText": "Foodista.com – The Cooking Encyclopedia Everyone Can Edit",
      "license": "CC BY 3.0",
      "sourceName": "Foodista",
      "pricePerServing": 98.23,
      "extendedIngredients": [
        {
          "id": 20081,
          "aisle": "Baking",
          "image": "flour.png",
          "consistency": "SOLID",
          "name": "all purpose flour",
          "nameClean": "all purpose flour",
          "original": "1 cup of all purpose flour",
          "originalName": "all purpose flour",
          "amount": 1,
          "unit": "cup",
          "meta": [],
          "measures": {
            "us": {
              "amount": 1,
              "unitShort": "cup",
              "unitLong": "cup"
            },
            "metric": {
              "amount": 125,
              "unitShort": "g",
              "unitLong": "grams"
            }
          }
        },
        {
          "id": 18369,
          "aisle": "Baking",
          "image": "white-powder.jpg",
          "consistency": "SOLID",
          "name": "baking powder",
          "nameClean": "baking powder",
          "original": "1/4 teaspoon baking powder",
          "originalName": "baking powder",
          "amount": 0.25,
          "unit": "teaspoon",
          "meta": [],
          "measures": {
            "us": {
              "amount": 0.25,
              "unitShort": "tsps",
              "unitLong": "teaspoons"
            },
            "metric": {
              "amount": 0.25,
              "unitShort": "tsps",
              "unitLong": "teaspoons"
            }
          }
        },
        {
          "id": 19904,
          "aisle": "Sweet Snacks",
          "image": "dark-chocolate-pieces.jpg",
          "consistency": "SOLID",
          "name": "chocolate",
          "nameClean": "chocolate",
          "original": "7 ounces of chopped Dark chocolate",
          "originalName": "chopped Dark chocolate",
          "amount": 7,
          "unit": "ounces",
          "meta": [
            "dark",
            "chopped"
          ],
          "measures": {
            "us": {
              "amount": 7,
              "unitShort": "oz",
              "unitLong": "ounces"
            },
            "metric": {
              "amount": 198.447,
              "unitShort": "g",
              "unitLong": "grams"
            }
          }
        },
        {
          "id": 1123,
          "aisle": "Milk, Eggs, Other Dairy",
          "image": "egg.png",
          "consistency": "SOLID",
          "name": "eggs",
          "nameClean": "eggs",
          "original": "3 eggs",
          "originalName": "eggs",
          "amount": 3,
          "unit": "",
          "meta": [],
          "measures": {
            "us": {
              "amount": 3,
              "unitShort": "",
              "unitLong": ""
            },
            "metric": {
              "amount": 3,
              "unitShort": "",
              "unitLong": ""
            }
          }
        },
        {
          "id": 10719335,
          "aisle": "Baking",
          "image": "sugar-in-bowl.png",
          "consistency": "SOLID",
          "name": "granulated sugar",
          "nameClean": "granulated sugar",
          "original": "1/4 cup granulated sugar (for coating cookie press/bottom glass)",
          "originalName": "granulated sugar (for coating cookie press/bottom glass)",
          "amount": 0.25,
          "unit": "cup",
          "meta": [
            "(for coating cookie press/bottom glass)"
          ],
          "measures": {
            "us": {
              "amount": 0.25,
              "unitShort": "cups",
              "unitLong": "cups"
            },
            "metric": {
              "amount": 50,
              "unitShort": "g",
              "unitLong": "grams"
            }
          }
        },
        {
          "id": 9206,
          "aisle": "Beverages",
          "image": "orange-juice.jpg",
          "consistency": "LIQUID",
          "name": "orange juice",
          "nameClean": "orange juice",
          "original": "1 tablespoon orange juice ( use same orange )",
          "originalName": "orange juice ( use same orange )",
          "amount": 1,
          "unit": "tablespoon",
          "meta": [
            "( use same orange )"
          ],
          "measures": {
            "us": {
              "amount": 1,
              "unitShort": "Tbsp",
              "unitLong": "Tbsp"
            },
            "metric": {
              "amount": 1,
              "unitShort": "Tbsp",
              "unitLong": "Tbsp"
            }
          }
        },
        {
          "id": 9216,
          "aisle": "Produce",
          "image": "orange-zest.png",
          "consistency": "SOLID",
          "name": "orange zest",
          "nameClean": "orange zest",
          "original": "orange zest from 2 oranges",
          "originalName": "orange zest from oranges",
          "amount": 2,
          "unit": "",
          "meta": [],
          "measures": {
            "us": {
              "amount": 2,
              "unitShort": "",
              "unitLong": ""
            },
            "metric": {
              "amount": 2,
              "unitShort": "",
              "unitLong": ""
            }
          }
        },
        {
          "id": 1012047,
          "aisle": "Spices and Seasonings",
          "image": "salt.jpg",
          "consistency": "SOLID",
          "name": "sea salt",
          "nameClean": "sea salt",
          "original": "1/2 teaspoon of sea salt",
          "originalName": "sea salt",
          "amount": 0.5,
          "unit": "teaspoon",
          "meta": [],
          "measures": {
            "us": {
              "amount": 0.5,
              "unitShort": "tsps",
              "unitLong": "teaspoons"
            },
            "metric": {
              "amount": 0.5,
              "unitShort": "tsps",
              "unitLong": "teaspoons"
            }
          }
        }
      ],
      "summary": "Chocolate Orange Madeleines might be a good recipe to expand your dessert recipe box. One portion of this dish contains about \u003Cb\u003E6g of protein\u003C/b\u003E, \u003Cb\u003E12g of fat\u003C/b\u003E, and a total of \u003Cb\u003E257 calories\u003C/b\u003E. This recipe serves 8. For \u003Cb\u003E98 cents per serving\u003C/b\u003E, this recipe \u003Cb\u003Ecovers 9%\u003C/b\u003E of your daily requirements of vitamins and minerals. Head to the store and pick up orange juice, orange zest, chocolate, and a few other things to make it today. This recipe is liked by 3 foodies and cooks. From preparation to the plate, this recipe takes approximately \u003Cb\u003E45 minutes\u003C/b\u003E. It is brought to you by Foodista. It is a good option if you're following a \u003Cb\u003Edairy free and lacto ovo vegetarian\u003C/b\u003E diet. All things considered, we decided this recipe \u003Cb\u003Edeserves a spoonacular score of 32%\u003C/b\u003E. This score is rather bad. If you like this recipe, take a look at these similar recipes: \u003Ca href=\"https://spoonacular.com/recipes/blood-orange-dark-chocolate-madeleines-1094273\"\u003EBlood orange & dark chocolate madeleines\u003C/a\u003E, \u003Ca href=\"https://spoonacular.com/recipes/orange-madeleines-81184\"\u003EOrange Madeleines\u003C/a\u003E, and \u003Ca href=\"https://spoonacular.com/recipes/orange-madeleines-556010\"\u003EOrange Madeleines\u003C/a\u003E.",
      "cuisines": [],
      "dishTypes": [
        "dessert"
      ],
      "diets": [
        "dairy free",
        "lacto ovo vegetarian"
      ],
      "occasions": [],
      "instructions": "\u003Col\u003E\u003Cli\u003EPreheat the oven to 374F.\u003C/li\u003E\u003Cli\u003EGenerously grease and liberally flour a madeleine cookie tin.\u003C/li\u003E\u003Cli\u003EIn a small bowl, combine the flour, baking Powder and salt.\u003C/li\u003E\u003Cli\u003EWhisk together and set aside.\u003C/li\u003E\u003Cli\u003EIn a medium bowl, Beat the sugar and eggs on medium/high speed until the volume triples in size. This may take several minutes and you should have a beautiful thick 'ribbon' of batter when you lift the beaters out of the bowl.\u003C/li\u003E\u003Cli\u003EStir in the orange juice and orange zest.\u003C/li\u003E\u003Cli\u003EBeginning with the flour mixture, alternate adding to the egg/sugar batter with the melted butter.\u003C/li\u003E\u003Cli\u003EMix only until just combined. Refrigerate for about 45 minutes to an hour.\u003C/li\u003E\u003Cli\u003EDrop by rounded teaspoon fulls into center of the madeleine molds.\u003C/li\u003E\u003Cli\u003ELeave the batter mounded, don't spread it out.\u003C/li\u003E\u003Cli\u003EI found that I had to add more than a teaspoon, so adjust accordingly for the size of your mold. Don't worry if the dough does not fill out the entire mold. The cookies will take on the pretty pattern regardless of how big they become.\u003C/li\u003E\u003Cli\u003EBake for 10 -12 minutes or until the edges just start to turn gold and the center of the cookies spring back when lightly touched.\u003C/li\u003E\u003Cli\u003ERemove from oven and immediately tap the tin on the counter to loosen the cookies.\u003C/li\u003E\u003Cli\u003ECarefully remove the cookies and allow them to cool completely.\u003C/li\u003E\u003Cli\u003EPrepare the chocolate: Melt the chocolate in a saucepan and pour into a deep dish or cup with a wide mouth. Dip half or 1/4 of each cookie into the chocolate and place on a piece of parchment paper until the chocolate is set.\u003C/li\u003E\u003C/ol\u003E",
      "analyzedInstructions": [
        {
          "name": "",
          "steps": [
            {
              "number": 1,
              "step": "Preheat the oven to 374F.Generously grease and liberally flour a madeleine cookie tin.In a small bowl, combine the flour, baking Powder and salt.",
              "ingredients": [
                {
                  "id": 0,
                  "name": "madeleine",
                  "localizedName": "madeleine",
                  "image": "shortbread-cookies.jpg"
                },
                {
                  "id": 18369,
                  "name": "baking powder",
                  "localizedName": "baking powder",
                  "image": "white-powder.jpg"
                },
                {
                  "id": 20081,
                  "name": "all purpose flour",
                  "localizedName": "all purpose flour",
                  "image": "flour.png"
                },
                {
                  "id": 2047,
                  "name": "salt",
                  "localizedName": "salt",
                  "image": "salt.jpg"
                }
              ],
              "equipment": [
                {
                  "id": 404783,
                  "name": "bowl",
                  "localizedName": "bowl",
                  "image": "https://spoonacular.com/cdn/equipment_100x100/bowl.jpg"
                },
                {
                  "id": 404784,
                  "name": "oven",
                  "localizedName": "oven",
                  "image": "https://spoonacular.com/cdn/equipment_100x100/oven.jpg",
                  "temperature": {
                    "number": 374,
                    "unit": "Fahrenheit"
                  }
                }
              ]
            },
            {
              "number": 2,
              "step": "Whisk together and set aside.In a medium bowl, Beat the sugar and eggs on medium/high speed until the volume triples in size. This may take several minutes and you should have a beautiful thick 'ribbon' of batter when you lift the beaters out of the bowl.Stir in the orange juice and orange zest.Beginning with the flour mixture, alternate adding to the egg/sugar batter with the melted butter.",
              "ingredients": [
                {
                  "id": 9206,
                  "name": "orange juice",
                  "localizedName": "orange juice",
                  "image": "orange-juice.jpg"
                },
                {
                  "id": 9216,
                  "name": "orange zest",
                  "localizedName": "orange zest",
                  "image": "orange-zest.png"
                },
                {
                  "id": 1001,
                  "name": "butter",
                  "localizedName": "butter",
                  "image": "butter-sliced.jpg"
                },
                {
                  "id": 20081,
                  "name": "all purpose flour",
                  "localizedName": "all purpose flour",
                  "image": "flour.png"
                },
                {
                  "id": 19335,
                  "name": "sugar",
                  "localizedName": "sugar",
                  "image": "sugar-in-bowl.png"
                },
                {
                  "id": 1123,
                  "name": "egg",
                  "localizedName": "egg",
                  "image": "egg.png"
                }
              ],
              "equipment": [
                {
                  "id": 404661,
                  "name": "whisk",
                  "localizedName": "whisk",
                  "image": "https://spoonacular.com/cdn/equipment_100x100/whisk.png"
                },
                {
                  "id": 404783,
                  "name": "bowl",
                  "localizedName": "bowl",
                  "image": "https://spoonacular.com/cdn/equipment_100x100/bowl.jpg"
                }
              ]
            },
            {
              "number": 3,
              "step": "Mix only until just combined. Refrigerate for about 45 minutes to an hour.Drop by rounded teaspoon fulls into center of the madeleine molds.Leave the batter mounded, don't spread it out.I found that I had to add more than a teaspoon, so adjust accordingly for the size of your mold. Don't worry if the dough does not fill out the entire mold. The cookies will take on the pretty pattern regardless of how big they become.",
              "ingredients": [
                {
                  "id": 0,
                  "name": "madeleine",
                  "localizedName": "madeleine",
                  "image": "shortbread-cookies.jpg"
                },
                {
                  "id": 10118192,
                  "name": "cookies",
                  "localizedName": "cookies",
                  "image": "https://spoonacular.com/cdn/ingredients_100x100/shortbread-cookies.jpg"
                },
                {
                  "id": 0,
                  "name": "spread",
                  "localizedName": "spread",
                  "image": ""
                },
                {
                  "id": 0,
                  "name": "dough",
                  "localizedName": "dough",
                  "image": "pizza-dough"
                }
              ],
              "equipment": [],
              "length": {
                "number": 45,
                "unit": "minutes"
              }
            },
            {
              "number": 4,
              "step": "Bake for 10 -12 minutes or until the edges just start to turn gold and the center of the cookies spring back when lightly touched.",
              "ingredients": [
                {
                  "id": 10118192,
                  "name": "cookies",
                  "localizedName": "cookies",
                  "image": "https://spoonacular.com/cdn/ingredients_100x100/shortbread-cookies.jpg"
                }
              ],
              "equipment": [
                {
                  "id": 404784,
                  "name": "oven",
                  "localizedName": "oven",
                  "image": "https://spoonacular.com/cdn/equipment_100x100/oven.jpg"
                }
              ],
              "length": {
                "number": 12,
                "unit": "minutes"
              }
            },
            {
              "number": 5,
              "step": "Remove from oven and immediately tap the tin on the counter to loosen the cookies.Carefully remove the cookies and allow them to cool completely.Prepare the chocolate: Melt the chocolate in a saucepan and pour into a deep dish or cup with a wide mouth. Dip half or 1/4 of each cookie into the chocolate and place on a piece of parchment paper until the chocolate is set.",
              "ingredients": [
                {
                  "id": 19081,
                  "name": "chocolate",
                  "localizedName": "chocolate",
                  "image": "milk-chocolate.jpg"
                },
                {
                  "id": 10118192,
                  "name": "cookies",
                  "localizedName": "cookies",
                  "image": "https://spoonacular.com/cdn/ingredients_100x100/shortbread-cookies.jpg"
                },
                {
                  "id": 0,
                  "name": "dip",
                  "localizedName": "dip",
                  "image": ""
                }
              ],
              "equipment": [
                {
                  "id": 404770,
                  "name": "baking paper",
                  "localizedName": "baking paper",
                  "image": "https://spoonacular.com/cdn/equipment_100x100/baking-paper.jpg"
                },
                {
                  "id": 404669,
                  "name": "sauce pan",
                  "localizedName": "sauce pan",
                  "image": "https://spoonacular.com/cdn/equipment_100x100/sauce-pan.jpg"
                },
                {
                  "id": 404784,
                  "name": "oven",
                  "localizedName": "oven",
                  "image": "https://spoonacular.com/cdn/equipment_100x100/oven.jpg"
                }
              ]
            }
          ]
        }
      ],
      "originalId": null,
      "spoonacularScore": 38.7526321411133,
      "spoonacularSourceUrl": "https://spoonacular.com/chocolate-orange-madeleines-639125"
    },
    {
      "id": 663832,
      "image": "https://img.spoonacular.com/recipes/663832-556x370.jpg",
      "imageType": "jpg",
      "title": "Triple Chocolate Pumpkin Pie",
      "readyInMinutes": 45,
      "servings": 12,
      "sourceUrl": "https://www.foodista.com/recipe/2X4J3PMC/triple-chocolate-pumpkin-pie",
      "vegetarian": false,
      "vegan": false,
      "glutenFree": false,
      "dairyFree": false,
      "veryHealthy": false,
      "cheap": false,
      "veryPopular": false,
      "sustainable": false,
      "lowFodmap": false,
      "weightWatcherSmartPoints": 18,
      "gaps": "no",
      "preparationMinutes": null,
      "cookingMinutes": null,
      "aggregateLikes": 9,
      "healthScore": 4,
      "creditsText": "Foodista.com – The Cooking Encyclopedia Everyone Can Edit",
      "license": "CC BY 3.0",
      "sourceName": "Foodista",
      "pricePerServing": 121.68,
      "extendedIngredients": [
        {
          "id": 10018617,
          "aisle": "Sweet Snacks",
          "image": "graham-crackers.jpg",
          "consistency": "SOLID",
          "name": "ground graham cracker crumbs",
          "nameClean": "ground graham cracker crumbs",
          "original": "2 cups finely ground graham cracker crumbs (about 16 crackers)",
          "originalName": "finely ground graham cracker crumbs (about 16 crackers)",
          "amount": 2,
          "unit": "cups",
          "meta": [
            "finely",
            "( 16 crackers)"
          ],
          "measures": {
            "us": {
              "amount": 2,
              "unitShort": "cups",
              "unitLong": "cups"
            },
            "metric": {
              "amount": 168,
              "unitShort": "ml",
              "unitLong": "milliliters"
            }
          }
        },
        {
          "id": 1145,
          "aisle": "Milk, Eggs, Other Dairy",
          "image": "butter-sliced.jpg",
          "consistency": "SOLID",
          "name": "butter",
          "nameClean": "butter",
          "original": "3 ounces (6 tablespoons) unsalted butter, melted",
          "originalName": "ounces unsalted butter, melted",
          "amount": 6,
          "unit": "tablespoons",
          "meta": [
            "unsalted",
            "melted"
          ],
          "measures": {
            "us": {
              "amount": 6,
              "unitShort": "Tbsps",
              "unitLong": "Tbsps"
            },
            "metric": {
              "amount": 6,
              "unitShort": "Tbsps",
              "unitLong": "Tbsps"
            }
          }
        },
        {
          "id": 10719335,
          "aisle": "Baking",
          "image": "sugar-in-bowl.png",
          "consistency": "SOLID",
          "name": "granulated sugar",
          "nameClean": "granulated sugar",
          "original": "1 tablespoon granulated sugar",
          "originalName": "granulated sugar",
          "amount": 1,
          "unit": "tablespoon",
          "meta": [],
          "measures": {
            "us": {
              "amount": 1,
              "unitShort": "Tbsp",
              "unitLong": "Tbsp"
            },
            "metric": {
              "amount": 1,
              "unitShort": "Tbsp",
              "unitLong": "Tbsp"
            }
          }
        },
        {
          "id": 19334,
          "aisle": "Baking",
          "image": "light-brown-sugar.jpg",
          "consistency": "SOLID",
          "name": "light-brown sugar",
          "nameClean": "light-brown sugar",
          "original": "2 tablespoons packed light-brown sugar",
          "originalName": "packed light-brown sugar",
          "amount": 2,
          "unit": "tablespoons",
          "meta": [
            "packed"
          ],
          "measures": {
            "us": {
              "amount": 2,
              "unitShort": "Tbsps",
              "unitLong": "Tbsps"
            },
            "metric": {
              "amount": 2,
              "unitShort": "Tbsps",
              "unitLong": "Tbsps"
            }
          }
        },
        {
          "id": 1002047,
          "aisle": "Spices and Seasonings",
          "image": "salt.jpg",
          "consistency": "SOLID",
          "name": "coarse salt",
          "nameClean": "coarse salt",
          "original": "1/2 teaspoon coarse salt",
          "originalName": "coarse salt",
          "amount": 0.5,
          "unit": "teaspoon",
          "meta": [],
          "measures": {
            "us": {
              "amount": 0.5,
              "unitShort": "tsps",
              "unitLong": "teaspoons"
            },
            "metric": {
              "amount": 0.5,
              "unitShort": "tsps",
              "unitLong": "teaspoons"
            }
          }
        },
        {
          "id": 1012010,
          "aisle": "Spices and Seasonings",
          "image": "cinnamon.jpg",
          "consistency": "SOLID",
          "name": "ground cinnamon",
          "nameClean": "ground cinnamon",
          "original": "1/2 teaspoon ground cinnamon",
          "originalName": "ground cinnamon",
          "amount": 0.5,
          "unit": "teaspoon",
          "meta": [],
          "measures": {
            "us": {
              "amount": 0.5,
              "unitShort": "tsps",
              "unitLong": "teaspoons"
            },
            "metric": {
              "amount": 0.5,
              "unitShort": "tsps",
              "unitLong": "teaspoons"
            }
          }
        },
        {
          "id": 19903,
          "aisle": "Sweet Snacks",
          "image": "dark-chocolate-pieces.jpg",
          "consistency": "SOLID",
          "name": "bittersweet chocolate",
          "nameClean": "bittersweet chocolate",
          "original": "3 ounces bittersweet chocolate (preferably 61 percent cacao), finely chopped",
          "originalName": "bittersweet chocolate (preferably 61 percent cacao), finely chopped",
          "amount": 3,
          "unit": "ounces",
          "meta": [
            "finely chopped",
            "(preferably 61 percent cacao)"
          ],
          "measures": {
            "us": {
              "amount": 3,
              "unitShort": "oz",
              "unitLong": "ounces"
            },
            "metric": {
              "amount": 85.049,
              "unitShort": "g",
              "unitLong": "grams"
            }
          }
        },
        {
          "id": 19903,
          "aisle": "Sweet Snacks",
          "image": "dark-chocolate-pieces.jpg",
          "consistency": "SOLID",
          "name": "semisweet chocolate",
          "nameClean": "semisweet chocolate",
          "original": "6 ounces semisweet chocolate (preferably 55 percent cacao), chopped",
          "originalName": "semisweet chocolate (preferably 55 percent cacao), chopped",
          "amount": 6,
          "unit": "ounces",
          "meta": [
            "chopped",
            "(preferably 55 percent cacao)"
          ],
          "measures": {
            "us": {
              "amount": 6,
              "unitShort": "oz",
              "unitLong": "ounces"
            },
            "metric": {
              "amount": 170.097,
              "unitShort": "g",
              "unitLong": "grams"
            }
          }
        },
        {
          "id": 1145,
          "aisle": "Milk, Eggs, Other Dairy",
          "image": "butter-sliced.jpg",
          "consistency": "SOLID",
          "name": "butter",
          "nameClean": "butter",
          "original": "2 ounces (4 tablespoons) unsalted butter, cut into small pieces",
          "originalName": "ounces unsalted butter, cut into small pieces",
          "amount": 4,
          "unit": "tablespoons",
          "meta": [
            "unsalted",
            "cut into small pieces"
          ],
          "measures": {
            "us": {
              "amount": 4,
              "unitShort": "Tbsps",
              "unitLong": "Tbsps"
            },
            "metric": {
              "amount": 4,
              "unitShort": "Tbsps",
              "unitLong": "Tbsps"
            }
          }
        },
        {
          "id": 11424,
          "aisle": "Baking",
          "image": "pumpkin-puree.jpg",
          "consistency": "SOLID",
          "name": "solid-pack pumpkin",
          "nameClean": "solid-pack pumpkin",
          "original": "1 can (15 ounces) solid-pack pumpkin",
          "originalName": "can solid-pack pumpkin",
          "amount": 15,
          "unit": "ounces",
          "meta": [
            "canned"
          ],
          "measures": {
            "us": {
              "amount": 15,
              "unitShort": "oz",
              "unitLong": "ounces"
            },
            "metric": {
              "amount": 425.243,
              "unitShort": "g",
              "unitLong": "grams"
            }
          }
        },
        {
          "id": 1214,
          "aisle": "Baking",
          "image": "evaporated-milk.png",
          "consistency": "SOLID",
          "name": "evaporated milk",
          "nameClean": "evaporated milk",
          "original": "1 can (12 ounces) evaporated milk",
          "originalName": "can evaporated milk",
          "amount": 12,
          "unit": "ounces",
          "meta": [
            "canned"
          ],
          "measures": {
            "us": {
              "amount": 12,
              "unitShort": "oz",
              "unitLong": "ounces"
            },
            "metric": {
              "amount": 340.194,
              "unitShort": "g",
              "unitLong": "grams"
            }
          }
        },
        {
          "id": 19334,
          "aisle": "Baking",
          "image": "light-brown-sugar.jpg",
          "consistency": "SOLID",
          "name": "light-brown sugar",
          "nameClean": "light-brown sugar",
          "original": "3/4 cup packed light-brown sugar",
          "originalName": "packed light-brown sugar",
          "amount": 0.75,
          "unit": "cup",
          "meta": [
            "packed"
          ],
          "measures": {
            "us": {
              "amount": 0.75,
              "unitShort": "cups",
              "unitLong": "cups"
            },
            "metric": {
              "amount": 165,
              "unitShort": "g",
              "unitLong": "grams"
            }
          }
        },
        {
          "id": 1123,
          "aisle": "Milk, Eggs, Other Dairy",
          "image": "egg.png",
          "consistency": "SOLID",
          "name": "eggs",
          "nameClean": "eggs",
          "original": "3 large eggs",
          "originalName": "eggs",
          "amount": 3,
          "unit": "large",
          "meta": [],
          "measures": {
            "us": {
              "amount": 3,
              "unitShort": "large",
              "unitLong": "larges"
            },
            "metric": {
              "amount": 3,
              "unitShort": "large",
              "unitLong": "larges"
            }
          }
        },
        {
          "id": 20027,
          "aisle": "Baking",
          "image": "white-powder.jpg",
          "consistency": "SOLID",
          "name": "cornstarch",
          "nameClean": "cornstarch",
          "original": "1 tablespoon cornstarch",
          "originalName": "cornstarch",
          "amount": 1,
          "unit": "tablespoon",
          "meta": [],
          "measures": {
            "us": {
              "amount": 1,
              "unitShort": "Tbsp",
              "unitLong": "Tbsp"
            },
            "metric": {
              "amount": 1,
              "unitShort": "Tbsp",
              "unitLong": "Tbsp"
            }
          }
        },
        {
          "id": 2050,
          "aisle": "Baking",
          "image": "vanilla-extract.jpg",
          "consistency": "LIQUID",
          "name": "vanilla extract",
          "nameClean": "vanilla extract",
          "original": "1 teaspoon pure vanilla extract",
          "originalName": "pure vanilla extract",
          "amount": 1,
          "unit": "teaspoon",
          "meta": [
            "pure"
          ],
          "measures": {
            "us": {
              "amount": 1,
              "unitShort": "tsp",
              "unitLong": "teaspoon"
            },
            "metric": {
              "amount": 1,
              "unitShort": "tsp",
              "unitLong": "teaspoon"
            }
          }
        },
        {
          "id": 1002047,
          "aisle": "Spices and Seasonings",
          "image": "salt.jpg",
          "consistency": "SOLID",
          "name": "coarse salt",
          "nameClean": "coarse salt",
          "original": "1 1/2 teaspoons coarse salt",
          "originalName": "coarse salt",
          "amount": 1.5,
          "unit": "teaspoons",
          "meta": [],
          "measures": {
            "us": {
              "amount": 1.5,
              "unitShort": "tsps",
              "unitLong": "teaspoons"
            },
            "metric": {
              "amount": 1.5,
              "unitShort": "tsps",
              "unitLong": "teaspoons"
            }
          }
        },
        {
          "id": 1012010,
          "aisle": "Spices and Seasonings",
          "image": "cinnamon.jpg",
          "consistency": "SOLID",
          "name": "ground cinnamon",
          "nameClean": "ground cinnamon",
          "original": "3/4 teaspoon ground cinnamon",
          "originalName": "ground cinnamon",
          "amount": 0.75,
          "unit": "teaspoon",
          "meta": [],
          "measures": {
            "us": {
              "amount": 0.75,
              "unitShort": "tsps",
              "unitLong": "teaspoons"
            },
            "metric": {
              "amount": 0.75,
              "unitShort": "tsps",
              "unitLong": "teaspoons"
            }
          }
        },
        {
          "id": 2021,
          "aisle": "Spices and Seasonings",
          "image": "ginger.png",
          "consistency": "SOLID",
          "name": "ground ginger",
          "nameClean": "ground ginger",
          "original": "3/4 teaspoon ground ginger",
          "originalName": "ground ginger",
          "amount": 0.75,
          "unit": "teaspoon",
          "meta": [],
          "measures": {
            "us": {
              "amount": 0.75,
              "unitShort": "tsps",
              "unitLong": "teaspoons"
            },
            "metric": {
              "amount": 0.75,
              "unitShort": "tsps",
              "unitLong": "teaspoons"
            }
          }
        },
        {
          "id": 2025,
          "aisle": "Spices and Seasonings",
          "image": "ground-nutmeg.jpg",
          "consistency": "SOLID",
          "name": "ground nutmeg",
          "nameClean": "ground nutmeg",
          "original": "1/4 teaspoon ground nutmeg",
          "originalName": "ground nutmeg",
          "amount": 0.25,
          "unit": "teaspoon",
          "meta": [],
          "measures": {
            "us": {
              "amount": 0.25,
              "unitShort": "tsps",
              "unitLong": "teaspoons"
            },
            "metric": {
              "amount": 0.25,
              "unitShort": "tsps",
              "unitLong": "teaspoons"
            }
          }
        },
        {
          "id": 19081,
          "aisle": "Sweet Snacks",
          "image": "milk-chocolate.jpg",
          "consistency": "SOLID",
          "name": "milk chocolate",
          "nameClean": "milk chocolate",
          "original": "1 ounce milk chocolate, melted",
          "originalName": "milk chocolate, melted",
          "amount": 1,
          "unit": "ounce",
          "meta": [
            "melted"
          ],
          "measures": {
            "us": {
              "amount": 1,
              "unitShort": "oz",
              "unitLong": "ounce"
            },
            "metric": {
              "amount": 28.35,
              "unitShort": "g",
              "unitLong": "grams"
            }
          }
        },
        {
          "id": -1,
          "aisle": "?",
          "image": null,
          "consistency": "SOLID",
          "name": "ground",
          "nameClean": "ground",
          "original": "Ground cloves",
          "originalName": "Ground",
          "amount": 1,
          "unit": "cloves",
          "meta": [],
          "measures": {
            "us": {
              "amount": 1,
              "unitShort": "cloves",
              "unitLong": "clove"
            },
            "metric": {
              "amount": 1,
              "unitShort": "cloves",
              "unitLong": "clove"
            }
          }
        }
      ],
      "summary": "Triple Chocolate Pumpkin Pie might be just the dessert you are searching for. This recipe serves 12 and costs $1.22 per serving. One portion of this dish contains approximately \u003Cb\u003E6g of protein\u003C/b\u003E, \u003Cb\u003E23g of fat\u003C/b\u003E, and a total of \u003Cb\u003E415 calories\u003C/b\u003E. 9 people have made this recipe and would make it again. Head to the store and pick up butter, ground, milk chocolate, and a few other things to make it today. It is brought to you by Foodista. It is perfect for \u003Cb\u003EThanksgiving\u003C/b\u003E. From preparation to the plate, this recipe takes around \u003Cb\u003E45 minutes\u003C/b\u003E. Overall, this recipe earns a \u003Cb\u003Erather bad spoonacular score of 37%\u003C/b\u003E. Similar recipes include \u003Ca href=\"https://spoonacular.com/recipes/triple-chocolate-pumpkin-pie-24660\"\u003ETriple-chocolate Pumpkin Pie\u003C/a\u003E, \u003Ca href=\"https://spoonacular.com/recipes/triple-chocolate-pumpkin-pie-247792\"\u003ETriple Chocolate Pumpkin Pie\u003C/a\u003E, and \u003Ca href=\"https://spoonacular.com/recipes/triple-chocolate-pumpkin-pie-571283\"\u003ETriple Chocolate Pumpkin Pie\u003C/a\u003E.",
      "cuisines": [],
      "dishTypes": [
        "dessert"
      ],
      "diets": [],
      "occasions": [
        "thanksgiving"
      ],
      "instructions": "Make the crust: Preheat oven to 350 degrees. Combine graham cracker crumbs, butter, sugars, salt, and cinnamon in bowl. Firmly press mixture into bottom and up sides of a deep, 9 1/2-inch pie dish. Bake until firm, 8 to 10 minutes.\nRemove from oven, and sprinkle bittersweet chocolate over bottom of crust. Return to oven to melt chocolate, about 1 minute. Spread chocolate in a thin layer on bottom and up sides. Let cool on a wire rack. Reduce oven temperature to 325 degrees.\nMake the filling: In a large heatproof bowl set over a pot of simmering water, melt semisweet chocolate and butter, stirring until smooth. Remove from heat.\nMix pumpkin, milk, brown sugar, eggs, cornstarch, vanilla, salt, cinnamon, ginger, nutmeg, and a pinch of cloves in a medium bowl. Whisk 1/3 pumpkin mixture into chocolate mixture. Whisk in remaining pumpkin mixture until completely incorporated.\nTransfer pie dish to a rimmed baking sheet, and pour pumpkin mixture into crust. Bake until center is set but still a bit wobbly, 55 to 60 minutes. Let cool in pie dish on a wire rack. Refrigerate until well chilled, at least 8 hours (preferably overnight). Before serving, drizzle melted milk chocolate on top. Serve immediately.",
      "analyzedInstructions": [
        {
          "name": "",
          "steps": [
            {
              "number": 1,
              "step": "Make the crust: Preheat oven to 350 degrees.",
              "ingredients": [
                {
                  "id": 0,
                  "name": "crust",
                  "localizedName": "crust",
                  "image": ""
                }
              ],
              "equipment": [
                {
                  "id": 404784,
                  "name": "oven",
                  "localizedName": "oven",
                  "image": "https://spoonacular.com/cdn/equipment_100x100/oven.jpg"
                }
              ]
            },
            {
              "number": 2,
              "step": "Combine graham cracker crumbs, butter, sugars, salt, and cinnamon in bowl. Firmly press mixture into bottom and up sides of a deep, 9 1/2-inch pie dish.",
              "ingredients": [
                {
                  "id": 10018617,
                  "name": "graham cracker crumbs",
                  "localizedName": "graham cracker crumbs",
                  "image": "graham-crackers.jpg"
                },
                {
                  "id": 2010,
                  "name": "cinnamon",
                  "localizedName": "cinnamon",
                  "image": "https://spoonacular.com/cdn/ingredients_100x100/cinnamon.jpg"
                },
                {
                  "id": 1001,
                  "name": "butter",
                  "localizedName": "butter",
                  "image": "butter-sliced.jpg"
                },
                {
                  "id": 2047,
                  "name": "salt",
                  "localizedName": "salt",
                  "image": "salt.jpg"
                }
              ],
              "equipment": [
                {
                  "id": 405915,
                  "name": "pie form",
                  "localizedName": "pie form",
                  "image": "https://spoonacular.com/cdn/equipment_100x100/pie-pan.png"
                },
                {
                  "id": 404783,
                  "name": "bowl",
                  "localizedName": "bowl",
                  "image": "https://spoonacular.com/cdn/equipment_100x100/bowl.jpg"
                }
              ]
            },
            {
              "number": 3,
              "step": "Bake until firm, 8 to 10 minutes.",
              "ingredients": [],
              "equipment": [
                {
                  "id": 404784,
                  "name": "oven",
                  "localizedName": "oven",
                  "image": "https://spoonacular.com/cdn/equipment_100x100/oven.jpg"
                }
              ],
              "length": {
                "number": 8,
                "unit": "minutes"
              }
            },
            {
              "number": 4,
              "step": "Remove from oven, and sprinkle bittersweet chocolate over bottom of crust. Return to oven to melt chocolate, about 1 minute.",
              "ingredients": [
                {
                  "id": 19903,
                  "name": "bittersweet chocolate",
                  "localizedName": "bittersweet chocolate",
                  "image": "dark-chocolate-pieces.jpg"
                },
                {
                  "id": 19081,
                  "name": "chocolate",
                  "localizedName": "chocolate",
                  "image": "milk-chocolate.jpg"
                },
                {
                  "id": 0,
                  "name": "crust",
                  "localizedName": "crust",
                  "image": ""
                }
              ],
              "equipment": [
                {
                  "id": 404784,
                  "name": "oven",
                  "localizedName": "oven",
                  "image": "https://spoonacular.com/cdn/equipment_100x100/oven.jpg"
                }
              ],
              "length": {
                "number": 1,
                "unit": "minutes"
              }
            },
            {
              "number": 5,
              "step": "Spread chocolate in a thin layer on bottom and up sides.",
              "ingredients": [
                {
                  "id": 19081,
                  "name": "chocolate",
                  "localizedName": "chocolate",
                  "image": "milk-chocolate.jpg"
                },
                {
                  "id": 0,
                  "name": "spread",
                  "localizedName": "spread",
                  "image": ""
                }
              ],
              "equipment": []
            },
            {
              "number": 6,
              "step": "Let cool on a wire rack. Reduce oven temperature to 325 degrees.",
              "ingredients": [],
              "equipment": [
                {
                  "id": 405900,
                  "name": "wire rack",
                  "localizedName": "wire rack",
                  "image": "https://spoonacular.com/cdn/equipment_100x100/wire-rack.jpg"
                },
                {
                  "id": 404784,
                  "name": "oven",
                  "localizedName": "oven",
                  "image": "https://spoonacular.com/cdn/equipment_100x100/oven.jpg"
                }
              ]
            },
            {
              "number": 7,
              "step": "Make the filling: In a large heatproof bowl set over a pot of simmering water, melt semisweet chocolate and butter, stirring until smooth.",
              "ingredients": [
                {
                  "id": 19903,
                  "name": "semisweet chocolate",
                  "localizedName": "semisweet chocolate",
                  "image": "dark-chocolate-pieces.jpg"
                },
                {
                  "id": 1001,
                  "name": "butter",
                  "localizedName": "butter",
                  "image": "butter-sliced.jpg"
                },
                {
                  "id": 14412,
                  "name": "water",
                  "localizedName": "water",
                  "image": "water.png"
                }
              ],
              "equipment": [
                {
                  "id": 404783,
                  "name": "bowl",
                  "localizedName": "bowl",
                  "image": "https://spoonacular.com/cdn/equipment_100x100/bowl.jpg"
                },
                {
                  "id": 404752,
                  "name": "pot",
                  "localizedName": "pot",
                  "image": "https://spoonacular.com/cdn/equipment_100x100/stock-pot.jpg"
                }
              ]
            },
            {
              "number": 8,
              "step": "Remove from heat.",
              "ingredients": [],
              "equipment": []
            },
            {
              "number": 9,
              "step": "Mix pumpkin, milk, brown sugar, eggs, cornstarch, vanilla, salt, cinnamon, ginger, nutmeg, and a pinch of cloves in a medium bowl.",
              "ingredients": [
                {
                  "id": 19334,
                  "name": "brown sugar",
                  "localizedName": "brown sugar",
                  "image": "dark-brown-sugar.png"
                },
                {
                  "id": 20027,
                  "name": "corn starch",
                  "localizedName": "corn starch",
                  "image": "white-powder.jpg"
                },
                {
                  "id": 2010,
                  "name": "cinnamon",
                  "localizedName": "cinnamon",
                  "image": "https://spoonacular.com/cdn/ingredients_100x100/cinnamon.jpg"
                },
                {
                  "id": 11422,
                  "name": "pumpkin",
                  "localizedName": "pumpkin",
                  "image": "pumpkin.png"
                },
                {
                  "id": 1052050,
                  "name": "vanilla",
                  "localizedName": "vanilla",
                  "image": "vanilla.jpg"
                },
                {
                  "id": 1002011,
                  "name": "clove",
                  "localizedName": "clove",
                  "image": "cloves.jpg"
                },
                {
                  "id": 11216,
                  "name": "ginger",
                  "localizedName": "ginger",
                  "image": "ginger.png"
                },
                {
                  "id": 2025,
                  "name": "nutmeg",
                  "localizedName": "nutmeg",
                  "image": "ground-nutmeg.jpg"
                },
                {
                  "id": 1123,
                  "name": "egg",
                  "localizedName": "egg",
                  "image": "egg.png"
                },
                {
                  "id": 1077,
                  "name": "milk",
                  "localizedName": "milk",
                  "image": "milk.png"
                },
                {
                  "id": 2047,
                  "name": "salt",
                  "localizedName": "salt",
                  "image": "salt.jpg"
                }
              ],
              "equipment": [
                {
                  "id": 404783,
                  "name": "bowl",
                  "localizedName": "bowl",
                  "image": "https://spoonacular.com/cdn/equipment_100x100/bowl.jpg"
                }
              ]
            },
            {
              "number": 10,
              "step": "Whisk 1/3 pumpkin mixture into chocolate mixture.",
              "ingredients": [
                {
                  "id": 19081,
                  "name": "chocolate",
                  "localizedName": "chocolate",
                  "image": "milk-chocolate.jpg"
                },
                {
                  "id": 11422,
                  "name": "pumpkin",
                  "localizedName": "pumpkin",
                  "image": "pumpkin.png"
                }
              ],
              "equipment": [
                {
                  "id": 404661,
                  "name": "whisk",
                  "localizedName": "whisk",
                  "image": "https://spoonacular.com/cdn/equipment_100x100/whisk.png"
                }
              ]
            },
            {
              "number": 11,
              "step": "Whisk in remaining pumpkin mixture until completely incorporated.",
              "ingredients": [
                {
                  "id": 11422,
                  "name": "pumpkin",
                  "localizedName": "pumpkin",
                  "image": "pumpkin.png"
                }
              ],
              "equipment": [
                {
                  "id": 404661,
                  "name": "whisk",
                  "localizedName": "whisk",
                  "image": "https://spoonacular.com/cdn/equipment_100x100/whisk.png"
                }
              ]
            },
            {
              "number": 12,
              "step": "Transfer pie dish to a rimmed baking sheet, and pour pumpkin mixture into crust.",
              "ingredients": [
                {
                  "id": 11422,
                  "name": "pumpkin",
                  "localizedName": "pumpkin",
                  "image": "pumpkin.png"
                },
                {
                  "id": 0,
                  "name": "crust",
                  "localizedName": "crust",
                  "image": ""
                }
              ],
              "equipment": [
                {
                  "id": 404727,
                  "name": "baking sheet",
                  "localizedName": "baking sheet",
                  "image": "https://spoonacular.com/cdn/equipment_100x100/baking-sheet.jpg"
                },
                {
                  "id": 405915,
                  "name": "pie form",
                  "localizedName": "pie form",
                  "image": "https://spoonacular.com/cdn/equipment_100x100/pie-pan.png"
                }
              ]
            },
            {
              "number": 13,
              "step": "Bake until center is set but still a bit wobbly, 55 to 60 minutes.",
              "ingredients": [],
              "equipment": [
                {
                  "id": 404784,
                  "name": "oven",
                  "localizedName": "oven",
                  "image": "https://spoonacular.com/cdn/equipment_100x100/oven.jpg"
                }
              ],
              "length": {
                "number": 55,
                "unit": "minutes"
              }
            },
            {
              "number": 14,
              "step": "Let cool in pie dish on a wire rack. Refrigerate until well chilled, at least 8 hours (preferably overnight). Before serving, drizzle melted milk chocolate on top.",
              "ingredients": [
                {
                  "id": 19081,
                  "name": "milk chocolate",
                  "localizedName": "milk chocolate",
                  "image": "milk-chocolate.jpg"
                }
              ],
              "equipment": [
                {
                  "id": 405900,
                  "name": "wire rack",
                  "localizedName": "wire rack",
                  "image": "https://spoonacular.com/cdn/equipment_100x100/wire-rack.jpg"
                },
                {
                  "id": 405915,
                  "name": "pie form",
                  "localizedName": "pie form",
                  "image": "https://spoonacular.com/cdn/equipment_100x100/pie-pan.png"
                }
              ],
              "length": {
                "number": 480,
                "unit": "minutes"
              }
            },
            {
              "number": 15,
              "step": "Serve immediately.",
              "ingredients": [],
              "equipment": []
            }
          ]
        }
      ],
      "originalId": null,
      "spoonacularScore": 14.5556077957153,
      "spoonacularSourceUrl": "https://spoonacular.com/triple-chocolate-pumpkin-pie-663832"
    },
    {
      "id": 642540,
      "image": "https://img.spoonacular.com/recipes/642540-556x370.jpg",
      "imageType": "jpg",
      "title": "Falafel Burgers",
      "readyInMinutes": 45,
      "servings": 4,
      "sourceUrl": "https://www.foodista.com/recipe/FBWMX8MY/falafel-burgers",
      "vegetarian": true,
      "vegan": true,
      "glutenFree": false,
      "dairyFree": true,
      "veryHealthy": false,
      "cheap": false,
      "veryPopular": false,
      "sustainable": false,
      "lowFodmap": false,
      "weightWatcherSmartPoints": 20,
      "gaps": "no",
      "preparationMinutes": null,
      "cookingMinutes": null,
      "aggregateLikes": 70,
      "healthScore": 33,
      "creditsText": "foodista.com",
      "license": null,
      "sourceName": "foodista.com",
      "pricePerServing": 187.34,
      "extendedIngredients": [
        {
          "id": 16058,
          "aisle": "Canned and Jarred",
          "image": "chickpeas.png",
          "consistency": "SOLID",
          "name": "garbanzo beans",
          "nameClean": "garbanzo beans",
          "original": "2 cans garbanzo beans (chickpeas), drained and rinsed",
          "originalName": "garbanzo beans (chickpeas), drained and rinsed",
          "amount": 2,
          "unit": "cans",
          "meta": [
            "drained and rinsed",
            "(chickpeas)"
          ],
          "measures": {
            "us": {
              "amount": 2,
              "unitShort": "cans",
              "unitLong": "cans"
            },
            "metric": {
              "amount": 2,
              "unitShort": "cans",
              "unitLong": "cans"
            }
          }
        },
        {
          "id": 2009,
          "aisle": "Spices and Seasonings",
          "image": "chili-powder.jpg",
          "consistency": "SOLID",
          "name": "chili powder",
          "nameClean": "chili powder",
          "original": "1 tablespoon chili powder",
          "originalName": "chili powder",
          "amount": 1,
          "unit": "tablespoon",
          "meta": [],
          "measures": {
            "us": {
              "amount": 1,
              "unitShort": "Tbsp",
              "unitLong": "Tbsp"
            },
            "metric": {
              "amount": 1,
              "unitShort": "Tbsp",
              "unitLong": "Tbsp"
            }
          }
        },
        {
          "id": 11165,
          "aisle": "Produce",
          "image": "cilantro.png",
          "consistency": "SOLID",
          "name": "coriander",
          "nameClean": "coriander",
          "original": "1 tablespoon coriander",
          "originalName": "coriander",
          "amount": 1,
          "unit": "tablespoon",
          "meta": [],
          "measures": {
            "us": {
              "amount": 1,
              "unitShort": "Tbsp",
              "unitLong": "Tbsp"
            },
            "metric": {
              "amount": 1,
              "unitShort": "Tbsp",
              "unitLong": "Tbsp"
            }
          }
        },
        {
          "id": 1002014,
          "aisle": "Spices and Seasonings",
          "image": "ground-cumin.jpg",
          "consistency": "SOLID",
          "name": "cumin",
          "nameClean": "cumin",
          "original": "1 tablespoon cumin",
          "originalName": "cumin",
          "amount": 1,
          "unit": "tablespoon",
          "meta": [],
          "measures": {
            "us": {
              "amount": 1,
              "unitShort": "Tbsp",
              "unitLong": "Tbsp"
            },
            "metric": {
              "amount": 1,
              "unitShort": "Tbsp",
              "unitLong": "Tbsp"
            }
          }
        },
        {
          "id": 20081,
          "aisle": "Baking",
          "image": "flour.png",
          "consistency": "SOLID",
          "name": "flour",
          "nameClean": "flour",
          "original": "4 tablespoons flour",
          "originalName": "flour",
          "amount": 4,
          "unit": "tablespoons",
          "meta": [],
          "measures": {
            "us": {
              "amount": 4,
              "unitShort": "Tbsps",
              "unitLong": "Tbsps"
            },
            "metric": {
              "amount": 4,
              "unitShort": "Tbsps",
              "unitLong": "Tbsps"
            }
          }
        },
        {
          "id": 10511297,
          "aisle": "Produce",
          "image": "parsley.jpg",
          "consistency": "SOLID",
          "name": "parsley",
          "nameClean": "parsley",
          "original": "1 large handful parsley, chopped",
          "originalName": "parsley, chopped",
          "amount": 1,
          "unit": "large handful",
          "meta": [
            "chopped"
          ],
          "measures": {
            "us": {
              "amount": 1,
              "unitShort": "large handful",
              "unitLong": "large handful"
            },
            "metric": {
              "amount": 1,
              "unitShort": "large handful",
              "unitLong": "large handful"
            }
          }
        },
        {
          "id": 11215,
          "aisle": "Produce",
          "image": "garlic.png",
          "consistency": "SOLID",
          "name": "garlic",
          "nameClean": "garlic",
          "original": "2 cloves garlic, grated or finely chopped",
          "originalName": "garlic, grated or finely chopped",
          "amount": 2,
          "unit": "cloves",
          "meta": [
            "grated",
            "finely chopped"
          ],
          "measures": {
            "us": {
              "amount": 2,
              "unitShort": "cloves",
              "unitLong": "cloves"
            },
            "metric": {
              "amount": 2,
              "unitShort": "cloves",
              "unitLong": "cloves"
            }
          }
        },
        {
          "id": 9152,
          "aisle": "Produce",
          "image": "lemon-juice.jpg",
          "consistency": "LIQUID",
          "name": "juice of lemon",
          "nameClean": "juice of lemon",
          "original": "2 Zest and juice of lemons",
          "originalName": "Zest and juice of lemons",
          "amount": 2,
          "unit": "",
          "meta": [],
          "measures": {
            "us": {
              "amount": 2,
              "unitShort": "",
              "unitLong": ""
            },
            "metric": {
              "amount": 2,
              "unitShort": "",
              "unitLong": ""
            }
          }
        },
        {
          "id": 18413,
          "aisle": "Bakery/Bread",
          "image": "pita-bread.jpg",
          "consistency": "SOLID",
          "name": "pita pockets",
          "nameClean": "pita pockets",
          "original": "4 pita pockets",
          "originalName": "pita pockets",
          "amount": 4,
          "unit": "",
          "meta": [],
          "measures": {
            "us": {
              "amount": 4,
              "unitShort": "",
              "unitLong": ""
            },
            "metric": {
              "amount": 4,
              "unitShort": "",
              "unitLong": ""
            }
          }
        },
        {
          "id": 10011282,
          "aisle": "Produce",
          "image": "red-onion.png",
          "consistency": "SOLID",
          "name": "onion",
          "nameClean": "onion",
          "original": "1 small red onion, chopped",
          "originalName": "red onion, chopped",
          "amount": 1,
          "unit": "small",
          "meta": [
            "red",
            "chopped"
          ],
          "measures": {
            "us": {
              "amount": 1,
              "unitShort": "small",
              "unitLong": "small"
            },
            "metric": {
              "amount": 1,
              "unitShort": "small",
              "unitLong": "small"
            }
          }
        },
        {
          "id": 1102047,
          "aisle": "Spices and Seasonings",
          "image": "salt-and-pepper.jpg",
          "consistency": "SOLID",
          "name": "salt and pepper",
          "nameClean": "salt and pepper",
          "original": "Salt and pepper, to taste",
          "originalName": "Salt and pepper, to taste",
          "amount": 4,
          "unit": "servings",
          "meta": [
            "to taste"
          ],
          "measures": {
            "us": {
              "amount": 4,
              "unitShort": "servings",
              "unitLong": "servings"
            },
            "metric": {
              "amount": 4,
              "unitShort": "servings",
              "unitLong": "servings"
            }
          }
        },
        {
          "id": 12698,
          "aisle": "Ethnic Foods",
          "image": "tahini-paste.png",
          "consistency": "SOLID",
          "name": "tahini",
          "nameClean": "tahini",
          "original": "1/2 cup tahini",
          "originalName": "tahini",
          "amount": 0.5,
          "unit": "cup",
          "meta": [],
          "measures": {
            "us": {
              "amount": 0.5,
              "unitShort": "cups",
              "unitLong": "cups"
            },
            "metric": {
              "amount": 120,
              "unitShort": "ml",
              "unitLong": "milliliters"
            }
          }
        },
        {
          "id": 2043,
          "aisle": "Spices and Seasonings",
          "image": "turmeric.jpg",
          "consistency": "SOLID",
          "name": "turmeric",
          "nameClean": "turmeric",
          "original": "1 1/2 teaspoons turmeric",
          "originalName": "turmeric",
          "amount": 1.5,
          "unit": "teaspoons",
          "meta": [],
          "measures": {
            "us": {
              "amount": 1.5,
              "unitShort": "tsps",
              "unitLong": "teaspoons"
            },
            "metric": {
              "amount": 1.5,
              "unitShort": "tsps",
              "unitLong": "teaspoons"
            }
          }
        },
        {
          "id": 4669,
          "aisle": "Oil, Vinegar, Salad Dressing",
          "image": "vegetable-oil.jpg",
          "consistency": "LIQUID",
          "name": "vegetable oil",
          "nameClean": "vegetable oil",
          "original": "1/4 cup vegetable oil",
          "originalName": "vegetable oil",
          "amount": 0.25,
          "unit": "cup",
          "meta": [],
          "measures": {
            "us": {
              "amount": 0.25,
              "unitShort": "cups",
              "unitLong": "cups"
            },
            "metric": {
              "amount": 54.5,
              "unitShort": "ml",
              "unitLong": "milliliters"
            }
          }
        },
        {
          "id": 14412,
          "aisle": "Beverages",
          "image": "water.png",
          "consistency": "LIQUID",
          "name": "water",
          "nameClean": "water",
          "original": "3 tablespoons water",
          "originalName": "water",
          "amount": 3,
          "unit": "tablespoons",
          "meta": [],
          "measures": {
            "us": {
              "amount": 3,
              "unitShort": "Tbsps",
              "unitLong": "Tbsps"
            },
            "metric": {
              "amount": 3,
              "unitShort": "Tbsps",
              "unitLong": "Tbsps"
            }
          }
        }
      ],
      "summary": "Need a \u003Cb\u003Edairy free, lacto ovo vegetarian, and vegan main course\u003C/b\u003E? Falafel Burgers could be an excellent recipe to try. This recipe makes 4 servings with \u003Cb\u003E710 calories\u003C/b\u003E, \u003Cb\u003E23g of protein\u003C/b\u003E, and \u003Cb\u003E35g of fat\u003C/b\u003E each. For \u003Cb\u003E$1.87 per serving\u003C/b\u003E, this recipe \u003Cb\u003Ecovers 30%\u003C/b\u003E of your daily requirements of vitamins and minerals. Head to the store and pick up garbanzo beans, onion, vegetable oil, and a few other things to make it today. 70 people have tried and liked this recipe. This recipe is typical of American cuisine. It is brought to you by Foodista. From preparation to the plate, this recipe takes approximately \u003Cb\u003E45 minutes\u003C/b\u003E. Taking all factors into account, this recipe \u003Cb\u003Eearns a spoonacular score of 94%\u003C/b\u003E, which is super. Try \u003Ca href=\"https://spoonacular.com/recipes/falafel-burgers-1600153\"\u003EFalafel burgers\u003C/a\u003E, \u003Ca href=\"https://spoonacular.com/recipes/falafel-burgers-1353403\"\u003EFalafel Burgers\u003C/a\u003E, and \u003Ca href=\"https://spoonacular.com/recipes/falafel-burgers-308498\"\u003EFalafel Burgers\u003C/a\u003E for similar recipes.",
      "cuisines": [
        "American"
      ],
      "dishTypes": [
        "lunch",
        "main course",
        "main dish",
        "dinner"
      ],
      "diets": [
        "dairy free",
        "lacto ovo vegetarian",
        "vegan"
      ],
      "occasions": [],
      "instructions": "\u003Col\u003E\u003Cli\u003ECombine the chickpeas, onion, garlic, parsley, flour, spices, and salt, and pulse until the mixture is well combined. Form the mixture into 4 large patties.\u003C/li\u003E\u003Cli\u003EHeat the oil in a large, nonstick skillet set over medium-high heat. Cook for about 3 minutes per side.\u003C/li\u003E\u003Cli\u003EMake the tahini sauce: Whisk the tahini paste with the water, lemon juice and zest, salt, and freshly ground black pepper in a mixing bowl.\u003C/li\u003E\u003Cli\u003EServe the burgers in pita pockets or on a bun. Top them with tahini sauce, lettuce, and tomato.\u003C/li\u003E\u003C/ol\u003E",
      "analyzedInstructions": [
        {
          "name": "",
          "steps": [
            {
              "number": 1,
              "step": "Combine the chickpeas, onion, garlic, parsley, flour, spices, and salt, and pulse until the mixture is well combined. Form the mixture into 4 large patties.",
              "ingredients": [
                {
                  "id": 16057,
                  "name": "chickpeas",
                  "localizedName": "chickpeas",
                  "image": "chickpeas.png"
                },
                {
                  "id": 11297,
                  "name": "parsley",
                  "localizedName": "parsley",
                  "image": "parsley.jpg"
                },
                {
                  "id": 11215,
                  "name": "garlic",
                  "localizedName": "garlic",
                  "image": "garlic.png"
                },
                {
                  "id": 2035,
                  "name": "spices",
                  "localizedName": "spices",
                  "image": "spices.png"
                },
                {
                  "id": 20081,
                  "name": "all purpose flour",
                  "localizedName": "all purpose flour",
                  "image": "flour.png"
                },
                {
                  "id": 11282,
                  "name": "onion",
                  "localizedName": "onion",
                  "image": "brown-onion.png"
                },
                {
                  "id": 2047,
                  "name": "salt",
                  "localizedName": "salt",
                  "image": "salt.jpg"
                }
              ],
              "equipment": []
            }
          ]
        },
        {
          "name": "Heat the oil in a large, nonstick skillet set over medium-high heat. Cook for about 3 minutes per side.Make the tahini sauce",
          "steps": [
            {
              "number": 1,
              "step": "Whisk the tahini paste with the water, lemon juice and zest, salt, and freshly ground black pepper in a mixing bowl.",
              "ingredients": [
                {
                  "id": 1002030,
                  "name": "ground black pepper",
                  "localizedName": "ground black pepper",
                  "image": "pepper.jpg"
                },
                {
                  "id": 12698,
                  "name": "tahini",
                  "localizedName": "tahini",
                  "image": "tahini-paste.png"
                },
                {
                  "id": 9152,
                  "name": "lemon juice",
                  "localizedName": "lemon juice",
                  "image": "lemon-juice.jpg"
                },
                {
                  "id": 14412,
                  "name": "water",
                  "localizedName": "water",
                  "image": "water.png"
                },
                {
                  "id": 2047,
                  "name": "salt",
                  "localizedName": "salt",
                  "image": "salt.jpg"
                }
              ],
              "equipment": [
                {
                  "id": 405907,
                  "name": "mixing bowl",
                  "localizedName": "mixing bowl",
                  "image": "https://spoonacular.com/cdn/equipment_100x100/mixing-bowl.jpg"
                },
                {
                  "id": 404661,
                  "name": "whisk",
                  "localizedName": "whisk",
                  "image": "https://spoonacular.com/cdn/equipment_100x100/whisk.png"
                }
              ]
            },
            {
              "number": 2,
              "step": "Serve the burgers in pita pockets or on a bun. Top them with tahini sauce, lettuce, and tomato.",
              "ingredients": [
                {
                  "id": 11252,
                  "name": "lettuce",
                  "localizedName": "lettuce",
                  "image": "iceberg-lettuce.jpg"
                },
                {
                  "id": 12698,
                  "name": "tahini",
                  "localizedName": "tahini",
                  "image": "tahini-paste.png"
                },
                {
                  "id": 11529,
                  "name": "tomato",
                  "localizedName": "tomato",
                  "image": "tomato.png"
                },
                {
                  "id": 0,
                  "name": "sauce",
                  "localizedName": "sauce",
                  "image": ""
                },
                {
                  "id": 18413,
                  "name": "pita",
                  "localizedName": "pita",
                  "image": "pita-bread.jpg"
                },
                {
                  "id": 0,
                  "name": "roll",
                  "localizedName": "roll",
                  "image": "dinner-yeast-rolls.jpg"
                }
              ],
              "equipment": []
            }
          ]
        }
      ],
      "originalId": null,
      "spoonacularScore": 93.1691741943359,
      "spoonacularSourceUrl": "https://spoonacular.com/falafel-burgers-642540"
    },
    {
      "id": 653785,
      "image": "https://img.spoonacular.com/recipes/653785-556x370.jpg",
      "imageType": "jpg",
      "title": "Orange & Ginger Chicken",
      "readyInMinutes": 180,
      "servings": 4,
      "sourceUrl": "https://www.foodista.com/recipe/86QFSP6N/orange-ginger-chicken",
      "vegetarian": false,
      "vegan": false,
      "glutenFree": false,
      "dairyFree": true,
      "veryHealthy": false,
      "cheap": false,
      "veryPopular": false,
      "sustainable": false,
      "lowFodmap": false,
      "weightWatcherSmartPoints": 20,
      "gaps": "no",
      "preparationMinutes": null,
      "cookingMinutes": null,
      "aggregateLikes": 2,
      "healthScore": 7,
      "creditsText": "Foodista.com – The Cooking Encyclopedia Everyone Can Edit",
      "license": "CC BY 3.0",
      "sourceName": "Foodista",
      "pricePerServing": 139.68,
      "extendedIngredients": [
        {
          "id": 19334,
          "aisle": "Baking",
          "image": "light-brown-sugar.jpg",
          "consistency": "SOLID",
          "name": "brown sugar",
          "nameClean": "brown sugar",
          "original": "1 cup packed brown sugar",
          "originalName": "packed brown sugar",
          "amount": 1,
          "unit": "cup",
          "meta": [
            "packed"
          ],
          "measures": {
            "us": {
              "amount": 1,
              "unitShort": "cup",
              "unitLong": "cup"
            },
            "metric": {
              "amount": 220,
              "unitShort": "g",
              "unitLong": "grams"
            }
          }
        },
        {
          "id": 20081,
          "aisle": "Baking",
          "image": "flour.png",
          "consistency": "SOLID",
          "name": "flour",
          "nameClean": "flour",
          "original": "1 cup all-purpose flour",
          "originalName": "all-purpose flour",
          "amount": 1,
          "unit": "cup",
          "meta": [
            "all-purpose"
          ],
          "measures": {
            "us": {
              "amount": 1,
              "unitShort": "cup",
              "unitLong": "cup"
            },
            "metric": {
              "amount": 125,
              "unitShort": "g",
              "unitLong": "grams"
            }
          }
        },
        {
          "id": 10211216,
          "aisle": "Produce",
          "image": "ginger.png",
          "consistency": "SOLID",
          "name": "ginger root",
          "nameClean": "ginger root",
          "original": "1/2 teaspoon minced fresh ginger root",
          "originalName": "minced fresh ginger root",
          "amount": 0.5,
          "unit": "teaspoon",
          "meta": [
            "fresh",
            "minced"
          ],
          "measures": {
            "us": {
              "amount": 0.5,
              "unitShort": "tsps",
              "unitLong": "teaspoons"
            },
            "metric": {
              "amount": 0.5,
              "unitShort": "tsps",
              "unitLong": "teaspoons"
            }
          }
        },
        {
          "id": 11215,
          "aisle": "Produce",
          "image": "garlic.png",
          "consistency": "SOLID",
          "name": "garlic",
          "nameClean": "garlic",
          "original": "1/2 teaspoon minced garlic",
          "originalName": "minced garlic",
          "amount": 0.5,
          "unit": "teaspoon",
          "meta": [
            "minced"
          ],
          "measures": {
            "us": {
              "amount": 0.5,
              "unitShort": "tsps",
              "unitLong": "teaspoons"
            },
            "metric": {
              "amount": 0.5,
              "unitShort": "tsps",
              "unitLong": "teaspoons"
            }
          }
        },
        {
          "id": 11291,
          "aisle": "Produce",
          "image": "spring-onions.jpg",
          "consistency": "SOLID",
          "name": "green onion",
          "nameClean": "green onion",
          "original": "2 tablespoons chopped green onion",
          "originalName": "chopped green onion",
          "amount": 2,
          "unit": "tablespoons",
          "meta": [
            "chopped"
          ],
          "measures": {
            "us": {
              "amount": 2,
              "unitShort": "Tbsps",
              "unitLong": "Tbsps"
            },
            "metric": {
              "amount": 2,
              "unitShort": "Tbsps",
              "unitLong": "Tbsps"
            }
          }
        },
        {
          "id": 9152,
          "aisle": "Produce",
          "image": "lemon-juice.jpg",
          "consistency": "LIQUID",
          "name": "lemon juice",
          "nameClean": "lemon juice",
          "original": "1/4 cup lemon juice",
          "originalName": "lemon juice",
          "amount": 0.25,
          "unit": "cup",
          "meta": [],
          "measures": {
            "us": {
              "amount": 0.25,
              "unitShort": "cups",
              "unitLong": "cups"
            },
            "metric": {
              "amount": 61,
              "unitShort": "ml",
              "unitLong": "milliliters"
            }
          }
        },
        {
          "id": 4053,
          "aisle": "Oil, Vinegar, Salad Dressing",
          "image": "olive-oil.jpg",
          "consistency": "LIQUID",
          "name": "olive oil",
          "nameClean": "olive oil",
          "original": "3 tablespoons olive oil",
          "originalName": "olive oil",
          "amount": 3,
          "unit": "tablespoons",
          "meta": [],
          "measures": {
            "us": {
              "amount": 3,
              "unitShort": "Tbsps",
              "unitLong": "Tbsps"
            },
            "metric": {
              "amount": 3,
              "unitShort": "Tbsps",
              "unitLong": "Tbsps"
            }
          }
        },
        {
          "id": 9200,
          "aisle": "Produce",
          "image": "orange.png",
          "consistency": "SOLID",
          "name": "orange",
          "nameClean": "orange",
          "original": "1 orange",
          "originalName": "orange",
          "amount": 1,
          "unit": "",
          "meta": [],
          "measures": {
            "us": {
              "amount": 1,
              "unitShort": "",
              "unitLong": ""
            },
            "metric": {
              "amount": 1,
              "unitShort": "",
              "unitLong": ""
            }
          }
        },
        {
          "id": 1002030,
          "aisle": "Spices and Seasonings",
          "image": "pepper.jpg",
          "consistency": "SOLID",
          "name": "pepper",
          "nameClean": "pepper",
          "original": "1/4 teaspoon pepper",
          "originalName": "pepper",
          "amount": 0.25,
          "unit": "teaspoon",
          "meta": [],
          "measures": {
            "us": {
              "amount": 0.25,
              "unitShort": "tsps",
              "unitLong": "teaspoons"
            },
            "metric": {
              "amount": 0.25,
              "unitShort": "tsps",
              "unitLong": "teaspoons"
            }
          }
        },
        {
          "id": 1032009,
          "aisle": "Spices and Seasonings",
          "image": "red-pepper-flakes.jpg",
          "consistency": "SOLID",
          "name": "pepper flakes",
          "nameClean": "pepper flakes",
          "original": "1/4 teaspoon red pepper flakes",
          "originalName": "red pepper flakes",
          "amount": 0.25,
          "unit": "teaspoon",
          "meta": [
            "red"
          ],
          "measures": {
            "us": {
              "amount": 0.25,
              "unitShort": "tsps",
              "unitLong": "teaspoons"
            },
            "metric": {
              "amount": 0.25,
              "unitShort": "tsps",
              "unitLong": "teaspoons"
            }
          }
        },
        {
          "id": 1022053,
          "aisle": "Ethnic Foods",
          "image": "rice-vinegar.png",
          "consistency": "LIQUID",
          "name": "rice vinegar",
          "nameClean": "rice vinegar",
          "original": "cup rice vinegar",
          "originalName": "rice vinegar",
          "amount": 1,
          "unit": "cup",
          "meta": [],
          "measures": {
            "us": {
              "amount": 1,
              "unitShort": "cup",
              "unitLong": "cup"
            },
            "metric": {
              "amount": 255,
              "unitShort": "ml",
              "unitLong": "milliliters"
            }
          }
        },
        {
          "id": 2047,
          "aisle": "Spices and Seasonings",
          "image": "salt.jpg",
          "consistency": "SOLID",
          "name": "salt",
          "nameClean": "salt",
          "original": "1/2 teaspoon salt",
          "originalName": "salt",
          "amount": 0.5,
          "unit": "teaspoon",
          "meta": [],
          "measures": {
            "us": {
              "amount": 0.5,
              "unitShort": "tsps",
              "unitLong": "teaspoons"
            },
            "metric": {
              "amount": 0.5,
              "unitShort": "tsps",
              "unitLong": "teaspoons"
            }
          }
        },
        {
          "id": 1055062,
          "aisle": "Meat",
          "image": "chicken-breasts.png",
          "consistency": "SOLID",
          "name": "chicken breasts",
          "nameClean": "chicken breasts",
          "original": "2 boneless, skinless chicken breasts, cut into ½ pieces",
          "originalName": "boneless, skinless chicken breasts, cut into ½ pieces",
          "amount": 2,
          "unit": "",
          "meta": [
            "boneless",
            "skinless",
            "cut into ½ pieces"
          ],
          "measures": {
            "us": {
              "amount": 2,
              "unitShort": "",
              "unitLong": ""
            },
            "metric": {
              "amount": 2,
              "unitShort": "",
              "unitLong": ""
            }
          }
        },
        {
          "id": 16124,
          "aisle": "Condiments",
          "image": "soy-sauce.jpg",
          "consistency": "LIQUID",
          "name": "soy sauce",
          "nameClean": "soy sauce",
          "original": "2 1/2 tablespoons soy sauce",
          "originalName": "soy sauce",
          "amount": 2.5,
          "unit": "tablespoons",
          "meta": [],
          "measures": {
            "us": {
              "amount": 2.5,
              "unitShort": "Tbsps",
              "unitLong": "Tbsps"
            },
            "metric": {
              "amount": 2.5,
              "unitShort": "Tbsps",
              "unitLong": "Tbsps"
            }
          }
        },
        {
          "id": 14412,
          "aisle": "Beverages",
          "image": "water.png",
          "consistency": "LIQUID",
          "name": "water",
          "nameClean": "water",
          "original": "2 tablespoons water",
          "originalName": "water",
          "amount": 2,
          "unit": "tablespoons",
          "meta": [],
          "measures": {
            "us": {
              "amount": 2,
              "unitShort": "Tbsps",
              "unitLong": "Tbsps"
            },
            "metric": {
              "amount": 2,
              "unitShort": "Tbsps",
              "unitLong": "Tbsps"
            }
          }
        }
      ],
      "summary": "Orange & Ginger Chicken could be just the \u003Cb\u003Edairy free\u003C/b\u003E recipe you've been looking for. One portion of this dish contains around \u003Cb\u003E17g of protein\u003C/b\u003E, \u003Cb\u003E12g of fat\u003C/b\u003E, and a total of \u003Cb\u003E519 calories\u003C/b\u003E. This recipe serves 4 and costs $1.4 per serving. Only a few people made this recipe, and 2 would say it hit the spot. From preparation to the plate, this recipe takes roughly \u003Cb\u003E3 hours\u003C/b\u003E. A mixture of garlic, salt, orange, and a handful of other ingredients are all it takes to make this recipe so delicious. It is brought to you by Foodista. It works well as a main course. Overall, this recipe earns a \u003Cb\u003Esolid spoonacular score of 42%\u003C/b\u003E. If you like this recipe, take a look at these similar recipes: \u003Ca href=\"https://spoonacular.com/recipes/orange-ginger-chicken-474587\"\u003EOrange-Ginger Chicken\u003C/a\u003E, \u003Ca href=\"https://spoonacular.com/recipes/orange-ginger-chicken-1244385\"\u003EOrange & Ginger Chicken\u003C/a\u003E, and \u003Ca href=\"https://spoonacular.com/recipes/orange-and-ginger-chicken-182391\"\u003EOrange and Ginger Chicken\u003C/a\u003E.",
      "cuisines": [],
      "dishTypes": [
        "lunch",
        "main course",
        "main dish",
        "dinner"
      ],
      "diets": [
        "dairy free"
      ],
      "occasions": [],
      "instructions": "\u003Col\u003E\u003Cli\u003EPour 1 1/2 cups water, orange juice (about 1/4 cup from the fresh orange), lemon juice, rice vinegar, and soy sauce into a saucepan and set over medium-high heat.\u003C/li\u003E\u003Cli\u003EStir in the tablespoon orange zest, brown sugar, ginger, garlic, chopped onion, and red pepper flakes. Bring to a boil.\u003C/li\u003E\u003Cli\u003ERemove from heat, and cool 10 to 15 minutes.\u003C/li\u003E\u003Cli\u003EPlace the chicken pieces into a resealable plastic bag. When contents of saucepan have cooled, pour 1 cup of sauce into bag.\u003C/li\u003E\u003Cli\u003EReserve the remaining sauce. Seal the bag, and refrigerate at least 2 hours.\u003C/li\u003E\u003Cli\u003EIn another resealable plastic bag, mix the flour, salt, and pepper. Add the marinated chicken pieces, seal the bag, and shake to coat.\u003C/li\u003E\u003Cli\u003EHeat the olive oil in a large skillet over medium heat. Place chicken into the skillet, and brown on both sides. Drain on a plate lined with paper towels, and cover with aluminum foil.\u003C/li\u003E\u003Cli\u003EWipe out the skillet, and add the sauce. Bring to a boil over medium-high heat. Mix together the cornstarch and 2 tablespoons water; stir into the sauce. Reduce heat to medium low, add the chicken pieces, and simmer, about 5 minutes, stirring occasionally.\u003C/li\u003E\u003C/ol\u003E",
      "analyzedInstructions": [
        {
          "name": "",
          "steps": [
            {
              "number": 1,
              "step": "Pour 1 1/2 cups water, orange juice (about 1/4 cup from the fresh orange), lemon juice, rice vinegar, and soy sauce into a saucepan and set over medium-high heat.Stir in the tablespoon orange zest, brown sugar, ginger, garlic, chopped onion, and red pepper flakes. Bring to a boil.",
              "ingredients": [
                {
                  "id": 1032009,
                  "name": "red pepper flakes",
                  "localizedName": "red pepper flakes",
                  "image": "red-pepper-flakes.jpg"
                },
                {
                  "id": 9206,
                  "name": "orange juice",
                  "localizedName": "orange juice",
                  "image": "orange-juice.jpg"
                },
                {
                  "id": 1022053,
                  "name": "rice vinegar",
                  "localizedName": "rice vinegar",
                  "image": "rice-vinegar.png"
                },
                {
                  "id": 19334,
                  "name": "brown sugar",
                  "localizedName": "brown sugar",
                  "image": "dark-brown-sugar.png"
                },
                {
                  "id": 9152,
                  "name": "lemon juice",
                  "localizedName": "lemon juice",
                  "image": "lemon-juice.jpg"
                },
                {
                  "id": 9216,
                  "name": "orange zest",
                  "localizedName": "orange zest",
                  "image": "orange-zest.png"
                },
                {
                  "id": 16124,
                  "name": "soy sauce",
                  "localizedName": "soy sauce",
                  "image": "soy-sauce.jpg"
                },
                {
                  "id": 11215,
                  "name": "garlic",
                  "localizedName": "garlic",
                  "image": "garlic.png"
                },
                {
                  "id": 11216,
                  "name": "ginger",
                  "localizedName": "ginger",
                  "image": "ginger.png"
                },
                {
                  "id": 9200,
                  "name": "orange",
                  "localizedName": "orange",
                  "image": "orange.png"
                },
                {
                  "id": 11282,
                  "name": "onion",
                  "localizedName": "onion",
                  "image": "brown-onion.png"
                },
                {
                  "id": 14412,
                  "name": "water",
                  "localizedName": "water",
                  "image": "water.png"
                }
              ],
              "equipment": [
                {
                  "id": 404669,
                  "name": "sauce pan",
                  "localizedName": "sauce pan",
                  "image": "https://spoonacular.com/cdn/equipment_100x100/sauce-pan.jpg"
                }
              ]
            },
            {
              "number": 2,
              "step": "Remove from heat, and cool 10 to 15 minutes.",
              "ingredients": [],
              "equipment": [],
              "length": {
                "number": 10,
                "unit": "minutes"
              }
            },
            {
              "number": 3,
              "step": "Place the chicken pieces into a resealable plastic bag. When contents of saucepan have cooled, pour 1 cup of sauce into bag.Reserve the remaining sauce. Seal the bag, and refrigerate at least 2 hours.In another resealable plastic bag, mix the flour, salt, and pepper.",
              "ingredients": [
                {
                  "id": 1005006,
                  "name": "chicken pieces",
                  "localizedName": "chicken pieces",
                  "image": "chicken-parts.jpg"
                },
                {
                  "id": 1002030,
                  "name": "pepper",
                  "localizedName": "pepper",
                  "image": "pepper.jpg"
                },
                {
                  "id": 20081,
                  "name": "all purpose flour",
                  "localizedName": "all purpose flour",
                  "image": "flour.png"
                },
                {
                  "id": 0,
                  "name": "sauce",
                  "localizedName": "sauce",
                  "image": ""
                },
                {
                  "id": 2047,
                  "name": "salt",
                  "localizedName": "salt",
                  "image": "salt.jpg"
                }
              ],
              "equipment": [
                {
                  "id": 221671,
                  "name": "ziploc bags",
                  "localizedName": "ziploc bags",
                  "image": "https://spoonacular.com/cdn/equipment_100x100/plastic-bag.jpg"
                },
                {
                  "id": 404669,
                  "name": "sauce pan",
                  "localizedName": "sauce pan",
                  "image": "https://spoonacular.com/cdn/equipment_100x100/sauce-pan.jpg"
                }
              ],
              "length": {
                "number": 120,
                "unit": "minutes"
              }
            },
            {
              "number": 4,
              "step": "Add the marinated chicken pieces, seal the bag, and shake to coat.",
              "ingredients": [
                {
                  "id": 1005006,
                  "name": "chicken pieces",
                  "localizedName": "chicken pieces",
                  "image": "chicken-parts.jpg"
                },
                {
                  "id": 0,
                  "name": "shake",
                  "localizedName": "shake",
                  "image": ""
                }
              ],
              "equipment": []
            },
            {
              "number": 5,
              "step": "Heat the olive oil in a large skillet over medium heat.",
              "ingredients": [
                {
                  "id": 4053,
                  "name": "olive oil",
                  "localizedName": "olive oil",
                  "image": "olive-oil.jpg"
                }
              ],
              "equipment": [
                {
                  "id": 404645,
                  "name": "frying pan",
                  "localizedName": "frying pan",
                  "image": "https://spoonacular.com/cdn/equipment_100x100/pan.png"
                }
              ]
            },
            {
              "number": 6,
              "step": "Place chicken into the skillet, and brown on both sides.",
              "ingredients": [
                {
                  "id": 0,
                  "name": "chicken",
                  "localizedName": "chicken",
                  "image": "https://spoonacular.com/cdn/ingredients_100x100/whole-chicken.jpg"
                }
              ],
              "equipment": [
                {
                  "id": 404645,
                  "name": "frying pan",
                  "localizedName": "frying pan",
                  "image": "https://spoonacular.com/cdn/equipment_100x100/pan.png"
                }
              ]
            },
            {
              "number": 7,
              "step": "Drain on a plate lined with paper towels, and cover with aluminum foil.Wipe out the skillet, and add the sauce. Bring to a boil over medium-high heat.",
              "ingredients": [
                {
                  "id": 0,
                  "name": "sauce",
                  "localizedName": "sauce",
                  "image": ""
                }
              ],
              "equipment": [
                {
                  "id": 404765,
                  "name": "aluminum foil",
                  "localizedName": "aluminum foil",
                  "image": "https://spoonacular.com/cdn/equipment_100x100/aluminum-foil.png"
                },
                {
                  "id": 405895,
                  "name": "paper towels",
                  "localizedName": "paper towels",
                  "image": "https://spoonacular.com/cdn/equipment_100x100/paper-towels.jpg"
                },
                {
                  "id": 404645,
                  "name": "frying pan",
                  "localizedName": "frying pan",
                  "image": "https://spoonacular.com/cdn/equipment_100x100/pan.png"
                }
              ]
            },
            {
              "number": 8,
              "step": "Mix together the cornstarch and 2 tablespoons water; stir into the sauce. Reduce heat to medium low, add the chicken pieces, and simmer, about 5 minutes, stirring occasionally.",
              "ingredients": [
                {
                  "id": 1005006,
                  "name": "chicken pieces",
                  "localizedName": "chicken pieces",
                  "image": "chicken-parts.jpg"
                },
                {
                  "id": 20027,
                  "name": "corn starch",
                  "localizedName": "corn starch",
                  "image": "white-powder.jpg"
                },
                {
                  "id": 0,
                  "name": "sauce",
                  "localizedName": "sauce",
                  "image": ""
                },
                {
                  "id": 14412,
                  "name": "water",
                  "localizedName": "water",
                  "image": "water.png"
                }
              ],
              "equipment": [],
              "length": {
                "number": 5,
                "unit": "minutes"
              }
            }
          ]
        }
      ],
      "originalId": null,
      "spoonacularScore": 0.364420503377914,
      "spoonacularSourceUrl": "https://spoonacular.com/orange-ginger-chicken-653785"
    }
  ]
}

export function Dinner() {
  const [recipeList, setRecipes] = useState([]);
  const [page, setPage] = useState()

  useEffect(() => {
    var query = "&tag=italian";
    var apikey = "6fe330674ab24f78aa826a0b74516e31";
    randomFetch(apikey, 10, query);
  }, []);

  useEffect(() => {
    console.log(recipeList)
    if (recipeList != null) {
      var tempPage = [];
      // recipeList.map((item) => { tempPage.push(<p>{item["title"]}</p>) });
      // setPage(tempPage);
      // console.log(tempPage);
      // console.log(page);
    }
  }, [recipeList])


  const randomFetch = async (apikey, numOfResults, query) => {
    // const response = await fetch(`https://api.spoonacular.com/recipes/random?apiKey=${apikey}&number=${numOfResults}${query}`)
    // const data = await response.json();
    // setRecipes(data);
    setRecipes(testData.recipes);
  }


  function recipe(obj) {

    return 
  }
  return (
    <>
      {recipeList.map(item => <p>{item["title"]}</p>)}
    </>
  )
}
//   function RowList({ children }) {
//   return (
//     <div className="RowList">
//       {Children.map(children, child =>
//         <div className="Row">
//           {child}
//         </div>
//       )}
//     </div>
//   );
// }



var testData = {
  "recipes": [
    {
      "id": 637210,
      "image": "https://img.spoonacular.com/recipes/637210-556x370.jpg",
      "imageType": "jpg",
      "title": "Carrot Oat Muffins",
      "readyInMinutes": 45,
      "servings": 18,
      "sourceUrl": "https://www.foodista.com/recipe/CK3DJ2FF/carrot-oat-muffins",
      "vegetarian": true,
      "vegan": false,
      "glutenFree": true,
      "dairyFree": true,
      "veryHealthy": false,
      "cheap": false,
      "veryPopular": false,
      "sustainable": false,
      "lowFodmap": false,
      "weightWatcherSmartPoints": 2,
      "gaps": "no",
      "preparationMinutes": null,
      "cookingMinutes": null,
      "aggregateLikes": 3,
      "healthScore": 8,
      "creditsText": "foodista.com",
      "license": null,
      "sourceName": "foodista.com",
      "pricePerServing": 23.49,
      "extendedIngredients": [
        {
          "id": 19912,
          "aisle": "Health Foods",
          "image": "agave.png",
          "consistency": "LIQUID",
          "name": "agave nectar",
          "nameClean": "agave nectar",
          "original": "1/4 cup of agave nectar, I use raw and organic",
          "originalName": "agave nectar, I use raw and organic",
          "amount": 0.25,
          "unit": "cup",
          "meta": [
            "raw",
            "organic"
          ],
          "measures": {
            "us": {
              "amount": 0.25,
              "unitShort": "cups",
              "unitLong": "cups"
            },
            "metric": {
              "amount": 55,
              "unitShort": "ml",
              "unitLong": "milliliters"
            }
          }
        },
        {
          "id": 9019,
          "aisle": "Canned and Jarred",
          "image": "applesauce.png",
          "consistency": "SOLID",
          "name": "applesauce",
          "nameClean": "applesauce",
          "original": "1 cup of organic applesauce",
          "originalName": "organic applesauce",
          "amount": 1,
          "unit": "cup",
          "meta": [
            "organic"
          ],
          "measures": {
            "us": {
              "amount": 1,
              "unitShort": "cup",
              "unitLong": "cup"
            },
            "metric": {
              "amount": 244,
              "unitShort": "ml",
              "unitLong": "milliliters"
            }
          }
        },
        {
          "id": 18369,
          "aisle": "Baking",
          "image": "white-powder.jpg",
          "consistency": "SOLID",
          "name": "baking powder",
          "nameClean": "baking powder",
          "original": "3 teaspoons of baking powder",
          "originalName": "baking powder",
          "amount": 3,
          "unit": "teaspoons",
          "meta": [],
          "measures": {
            "us": {
              "amount": 3,
              "unitShort": "tsps",
              "unitLong": "teaspoons"
            },
            "metric": {
              "amount": 3,
              "unitShort": "tsps",
              "unitLong": "teaspoons"
            }
          }
        },
        {
          "id": 18372,
          "aisle": "Baking",
          "image": "white-powder.jpg",
          "consistency": "SOLID",
          "name": "baking soda",
          "nameClean": "baking soda",
          "original": "1 teaspoon baking soda",
          "originalName": "baking soda",
          "amount": 1,
          "unit": "teaspoon",
          "meta": [],
          "measures": {
            "us": {
              "amount": 1,
              "unitShort": "tsp",
              "unitLong": "teaspoon"
            },
            "metric": {
              "amount": 1,
              "unitShort": "tsp",
              "unitLong": "teaspoon"
            }
          }
        },
        {
          "id": 11124,
          "aisle": "Produce",
          "image": "sliced-carrot.png",
          "consistency": "SOLID",
          "name": "carrots",
          "nameClean": "carrots",
          "original": "3 cups of shredded carrots",
          "originalName": "shredded carrots",
          "amount": 3,
          "unit": "cups",
          "meta": [
            "shredded"
          ],
          "measures": {
            "us": {
              "amount": 3,
              "unitShort": "cups",
              "unitLong": "cups"
            },
            "metric": {
              "amount": 384,
              "unitShort": "g",
              "unitLong": "grams"
            }
          }
        },
        {
          "id": 2010,
          "aisle": "Spices and Seasonings",
          "image": "cinnamon.jpg",
          "consistency": "SOLID",
          "name": "cinnamon",
          "nameClean": "cinnamon",
          "original": "1 teaspoon organic cinnamon",
          "originalName": "organic cinnamon",
          "amount": 1,
          "unit": "teaspoon",
          "meta": [
            "organic"
          ],
          "measures": {
            "us": {
              "amount": 1,
              "unitShort": "tsp",
              "unitLong": "teaspoon"
            },
            "metric": {
              "amount": 1,
              "unitShort": "tsp",
              "unitLong": "teaspoon"
            }
          }
        },
        {
          "id": 1123,
          "aisle": "Milk, Eggs, Other Dairy",
          "image": "egg.png",
          "consistency": "SOLID",
          "name": "eggs",
          "nameClean": "eggs",
          "original": "3 organic eggs",
          "originalName": "organic eggs",
          "amount": 3,
          "unit": "",
          "meta": [
            "organic"
          ],
          "measures": {
            "us": {
              "amount": 3,
              "unitShort": "",
              "unitLong": ""
            },
            "metric": {
              "amount": 3,
              "unitShort": "",
              "unitLong": ""
            }
          }
        },
        {
          "id": 11216,
          "aisle": "Produce",
          "image": "ginger.png",
          "consistency": "SOLID",
          "name": "ginger",
          "nameClean": "ginger",
          "original": "2 teaspoons of chopped ginger",
          "originalName": "chopped ginger",
          "amount": 2,
          "unit": "teaspoons",
          "meta": [
            "chopped"
          ],
          "measures": {
            "us": {
              "amount": 2,
              "unitShort": "tsps",
              "unitLong": "teaspoons"
            },
            "metric": {
              "amount": 2,
              "unitShort": "tsps",
              "unitLong": "teaspoons"
            }
          }
        },
        {
          "id": 2047,
          "aisle": "Spices and Seasonings",
          "image": "salt.jpg",
          "consistency": "SOLID",
          "name": "salt",
          "nameClean": "salt",
          "original": "1/2 teaspoon salt",
          "originalName": "salt",
          "amount": 0.5,
          "unit": "teaspoon",
          "meta": [],
          "measures": {
            "us": {
              "amount": 0.5,
              "unitShort": "tsps",
              "unitLong": "teaspoons"
            },
            "metric": {
              "amount": 0.5,
              "unitShort": "tsps",
              "unitLong": "teaspoons"
            }
          }
        },
        {
          "id": 2050,
          "aisle": "Baking",
          "image": "vanilla-extract.jpg",
          "consistency": "LIQUID",
          "name": "vanilla extract",
          "nameClean": "vanilla extract",
          "original": "1 teaspoon of organic vanilla extract",
          "originalName": "organic vanilla extract",
          "amount": 1,
          "unit": "teaspoon",
          "meta": [
            "organic"
          ],
          "measures": {
            "us": {
              "amount": 1,
              "unitShort": "tsp",
              "unitLong": "teaspoon"
            },
            "metric": {
              "amount": 1,
              "unitShort": "tsp",
              "unitLong": "teaspoon"
            }
          }
        },
        {
          "id": 20132,
          "aisle": "Gluten Free",
          "image": "brown-flour.jpg",
          "consistency": "SOLID",
          "name": "oat flour",
          "nameClean": "oat flour",
          "original": "2 cups of organic whole oat flour",
          "originalName": "organic whole oat flour",
          "amount": 2,
          "unit": "cups",
          "meta": [
            "whole",
            "organic"
          ],
          "measures": {
            "us": {
              "amount": 2,
              "unitShort": "cups",
              "unitLong": "cups"
            },
            "metric": {
              "amount": 240,
              "unitShort": "g",
              "unitLong": "grams"
            }
          }
        }
      ],
      "summary": "If you want to add more \u003Cb\u003Egluten free, dairy free, and lacto ovo vegetarian\u003C/b\u003E recipes to your collection, Carrot Oat Muffins might be a recipe you should try. For \u003Cb\u003E23 cents per serving\u003C/b\u003E, you get a breakfast that serves 18. One serving contains \u003Cb\u003E90 calories\u003C/b\u003E, \u003Cb\u003E3g of protein\u003C/b\u003E, and \u003Cb\u003E2g of fat\u003C/b\u003E. This recipe from Foodista requires vanillan extract, carrots, salt, and baking soda. Only a few people made this recipe, and 3 would say it hit the spot. From preparation to the plate, this recipe takes approximately \u003Cb\u003E45 minutes\u003C/b\u003E. All things considered, we decided this recipe \u003Cb\u003Edeserves a spoonacular score of 51%\u003C/b\u003E. This score is pretty good. If you like this recipe, take a look at these similar recipes: \u003Ca href=\"https://spoonacular.com/recipes/carrot-oat-muffins-164600\"\u003ECarrot-Oat Muffins\u003C/a\u003E, \u003Ca href=\"https://spoonacular.com/recipes/carrot-oat-muffins-496873\"\u003ECarrot Oat Muffins\u003C/a\u003E, and \u003Ca href=\"https://spoonacular.com/recipes/healthy-applesauce-carrot-muffins-aka-carrot-cake-muffins-569339\"\u003EHealthy Applesauce Carrot Muffins {a.k.a. Carrot Cake Muffins}\u003C/a\u003E.",
      "cuisines": [],
      "dishTypes": [
        "morning meal",
        "brunch",
        "breakfast"
      ],
      "diets": [
        "gluten free",
        "dairy free",
        "lacto ovo vegetarian"
      ],
      "occasions": [],
      "instructions": "\u003Col\u003E\u003Cli\u003ECombine all dry ingredients in a bowl\u003C/li\u003E\u003Cli\u003ECombine all wet ingredients in a bowl except carrots and ginger and mix well.\u003C/li\u003E\u003Cli\u003EGently add dry ingredients to wet ingredients and mix until just blended.  Be careful not to over-mix because this will result in hard muffins.\u003C/li\u003E\u003Cli\u003EOnce the wet and dry ingredients are blended, gently fold in carrots and ginger until spread throughout.\u003C/li\u003E\u003Cli\u003ESpray muffin tins with nonstick cooking spray and add mixture to 2/3 of the cup.\u003C/li\u003E\u003Cli\u003EBake at 350F for 20 minutes until golden brown on top.\u003C/li\u003E\u003Cli\u003ELet cool in tins for 2-3 minutes before transferring to a cooling rack.\u003C/li\u003E\u003C/ol\u003E",
      "analyzedInstructions": [
        {
          "name": "",
          "steps": [
            {
              "number": 1,
              "step": "Combine all dry ingredients in a bowl",
              "ingredients": [],
              "equipment": [
                {
                  "id": 404783,
                  "name": "bowl",
                  "localizedName": "bowl",
                  "image": "https://spoonacular.com/cdn/equipment_100x100/bowl.jpg"
                }
              ]
            },
            {
              "number": 2,
              "step": "Combine all wet ingredients in a bowl except carrots and ginger and mix well.Gently add dry ingredients to wet ingredients and mix until just blended.  Be careful not to over-mix because this will result in hard muffins.Once the wet and dry ingredients are blended, gently fold in carrots and ginger until spread throughout.Spray muffin tins with nonstick cooking spray and add mixture to 2/3 of the cup.",
              "ingredients": [
                {
                  "id": 4679,
                  "name": "cooking spray",
                  "localizedName": "cooking spray",
                  "image": "cooking-spray.png"
                },
                {
                  "id": 11124,
                  "name": "carrot",
                  "localizedName": "carrot",
                  "image": "sliced-carrot.png"
                },
                {
                  "id": 11216,
                  "name": "ginger",
                  "localizedName": "ginger",
                  "image": "ginger.png"
                },
                {
                  "id": 0,
                  "name": "spread",
                  "localizedName": "spread",
                  "image": ""
                }
              ],
              "equipment": [
                {
                  "id": 404671,
                  "name": "muffin tray",
                  "localizedName": "muffin tray",
                  "image": "https://spoonacular.com/cdn/equipment_100x100/muffin-tray.jpg"
                },
                {
                  "id": 404783,
                  "name": "bowl",
                  "localizedName": "bowl",
                  "image": "https://spoonacular.com/cdn/equipment_100x100/bowl.jpg"
                }
              ]
            },
            {
              "number": 3,
              "step": "Bake at 350F for 20 minutes until golden brown on top.",
              "ingredients": [],
              "equipment": [
                {
                  "id": 404784,
                  "name": "oven",
                  "localizedName": "oven",
                  "image": "https://spoonacular.com/cdn/equipment_100x100/oven.jpg",
                  "temperature": {
                    "number": 350,
                    "unit": "Fahrenheit"
                  }
                }
              ],
              "length": {
                "number": 20,
                "unit": "minutes"
              }
            },
            {
              "number": 4,
              "step": "Let cool in tins for 2-3 minutes before transferring to a cooling rack.",
              "ingredients": [],
              "equipment": [
                {
                  "id": 405900,
                  "name": "wire rack",
                  "localizedName": "wire rack",
                  "image": "https://spoonacular.com/cdn/equipment_100x100/wire-rack.jpg"
                }
              ],
              "length": {
                "number": 3,
                "unit": "minutes"
              }
            }
          ]
        }
      ],
      "originalId": null,
      "spoonacularScore": 54.4966773986816,
      "spoonacularSourceUrl": "https://spoonacular.com/carrot-oat-muffins-637210"
    },
    {
      "id": 638488,
      "image": "https://img.spoonacular.com/recipes/638488-556x370.jpg",
      "imageType": "jpg",
      "title": "Chicken-Tortilla Chip Soup",
      "readyInMinutes": 45,
      "servings": 8,
      "sourceUrl": "https://www.foodista.com/recipe/CGYQCRH6/chicken-tortilla-chip-soup",
      "vegetarian": false,
      "vegan": false,
      "glutenFree": true,
      "dairyFree": true,
      "veryHealthy": false,
      "cheap": false,
      "veryPopular": false,
      "sustainable": false,
      "lowFodmap": true,
      "weightWatcherSmartPoints": 1,
      "gaps": "no",
      "preparationMinutes": null,
      "cookingMinutes": null,
      "aggregateLikes": 11,
      "healthScore": 10,
      "creditsText": "foodista.com",
      "license": null,
      "sourceName": "foodista.com",
      "pricePerServing": 109.32,
      "extendedIngredients": [
        {
          "id": 14412,
          "aisle": "Beverages",
          "image": "water.png",
          "consistency": "LIQUID",
          "name": "water",
          "nameClean": "water",
          "original": "5 cups water",
          "originalName": "water",
          "amount": 5,
          "unit": "cups",
          "meta": [],
          "measures": {
            "us": {
              "amount": 5,
              "unitShort": "cups",
              "unitLong": "cups"
            },
            "metric": {
              "amount": 1.183,
              "unitShort": "l",
              "unitLong": "liters"
            }
          }
        },
        {
          "id": 5062,
          "aisle": "Meat",
          "image": "chicken-breasts.png",
          "consistency": "SOLID",
          "name": "chicken breasts",
          "nameClean": "chicken breasts",
          "original": "4 chicken breasts",
          "originalName": "chicken breasts",
          "amount": 4,
          "unit": "",
          "meta": [],
          "measures": {
            "us": {
              "amount": 4,
              "unitShort": "",
              "unitLong": ""
            },
            "metric": {
              "amount": 4,
              "unitShort": "",
              "unitLong": ""
            }
          }
        },
        {
          "id": 1026076,
          "aisle": "Canned and Jarred",
          "image": null,
          "consistency": "SOLID",
          "name": "bouillon cubes",
          "nameClean": "bouillon cubes",
          "original": "2 bouillon cubes (chicken)",
          "originalName": "bouillon cubes (chicken)",
          "amount": 2,
          "unit": "",
          "meta": [
            "(chicken)"
          ],
          "measures": {
            "us": {
              "amount": 2,
              "unitShort": "",
              "unitLong": ""
            },
            "metric": {
              "amount": 2,
              "unitShort": "",
              "unitLong": ""
            }
          }
        },
        {
          "id": 11124,
          "aisle": "Produce",
          "image": "sliced-carrot.png",
          "consistency": "SOLID",
          "name": "carrots",
          "nameClean": "carrots",
          "original": "2 carrots, diced",
          "originalName": "carrots, diced",
          "amount": 2,
          "unit": "",
          "meta": [
            "diced"
          ],
          "measures": {
            "us": {
              "amount": 2,
              "unitShort": "",
              "unitLong": ""
            },
            "metric": {
              "amount": 2,
              "unitShort": "",
              "unitLong": ""
            }
          }
        },
        {
          "id": 11165,
          "aisle": "Produce",
          "image": "cilantro.png",
          "consistency": "SOLID",
          "name": "cilantro",
          "nameClean": "cilantro",
          "original": "1/2 cup diced cilantro (coriander)",
          "originalName": "diced cilantro (coriander)",
          "amount": 0.5,
          "unit": "cup",
          "meta": [
            "diced",
            "(coriander)"
          ],
          "measures": {
            "us": {
              "amount": 0.5,
              "unitShort": "cups",
              "unitLong": "cups"
            },
            "metric": {
              "amount": 8,
              "unitShort": "g",
              "unitLong": "grams"
            }
          }
        },
        {
          "id": 1042047,
          "aisle": "Spices and Seasonings",
          "image": "garlic-salt.jpg",
          "consistency": "SOLID",
          "name": "lawry's seasoned salt",
          "nameClean": "lawry's seasoned salt",
          "original": "1 teaspoon Lawry's seasoned salt",
          "originalName": "Lawry's seasoned salt",
          "amount": 1,
          "unit": "teaspoon",
          "meta": [],
          "measures": {
            "us": {
              "amount": 1,
              "unitShort": "tsp",
              "unitLong": "teaspoon"
            },
            "metric": {
              "amount": 1,
              "unitShort": "tsp",
              "unitLong": "teaspoon"
            }
          }
        }
      ],
      "summary": "Chicken-Tortilla Chip Soup could be just the \u003Cb\u003Egluten free, dairy free, fodmap friendly, and whole 30\u003C/b\u003E recipe you've been looking for. For \u003Cb\u003E$1.09 per serving\u003C/b\u003E, you get a main course that serves 8. One portion of this dish contains around \u003Cb\u003E24g of protein\u003C/b\u003E, \u003Cb\u003E3g of fat\u003C/b\u003E, and a total of \u003Cb\u003E137 calories\u003C/b\u003E. 11 person have tried and liked this recipe. Head to the store and pick up carrots, cilantro, bouillon cubes, and a few other things to make it today. It can be enjoyed any time, but it is especially good for \u003Cb\u003EAutumn\u003C/b\u003E. From preparation to the plate, this recipe takes about \u003Cb\u003E45 minutes\u003C/b\u003E. It is brought to you by Foodista. Taking all factors into account, this recipe \u003Cb\u003Eearns a spoonacular score of 58%\u003C/b\u003E, which is good. \u003Ca href=\"https://spoonacular.com/recipes/tortilla-chip-crusted-chicken-with-queso-sauce-1562207\"\u003ETortilla Chip Crusted Chicken with Queso Sauce\u003C/a\u003E, \u003Ca href=\"https://spoonacular.com/recipes/cheese-tortilla-chip-chicken-enchilada-chilaquiles-1014028\"\u003ECheese Tortilla Chip Chicken Enchilada Chilaquiles\u003C/a\u003E, and \u003Ca href=\"https://spoonacular.com/recipes/garden-of-eatin-tortilla-chip-chicken-strips-83735\"\u003EGarden Of Eatin’ Tortilla Chip Chicken Strips\u003C/a\u003E are very similar to this recipe.",
      "cuisines": [],
      "dishTypes": [
        "soup",
        "lunch",
        "main course",
        "main dish",
        "dinner"
      ],
      "diets": [
        "gluten free",
        "dairy free",
        "fodmap friendly",
        "whole 30"
      ],
      "occasions": [
        "fall",
        "winter"
      ],
      "instructions": "Boil all of the above for 30-40 minutes. On serving, add corn chips, Monterey Jack cheese and slices of avocado.",
      "analyzedInstructions": [
        {
          "name": "",
          "steps": [
            {
              "number": 1,
              "step": "Boil all of the above for 30-40 minutes. On serving, add corn chips, Monterey Jack cheese and slices of avocado.",
              "ingredients": [
                {
                  "id": 1001025,
                  "name": "monterey jack cheese",
                  "localizedName": "monterey jack cheese",
                  "image": "shredded-cheese-white.jpg"
                },
                {
                  "id": 19003,
                  "name": "corn chips",
                  "localizedName": "corn chips",
                  "image": "fritos-or-corn-chips.jpg"
                },
                {
                  "id": 9037,
                  "name": "avocado",
                  "localizedName": "avocado",
                  "image": "avocado.jpg"
                }
              ],
              "equipment": [],
              "length": {
                "number": 40,
                "unit": "minutes"
              }
            }
          ]
        }
      ],
      "originalId": null,
      "spoonacularScore": 60.9757766723633,
      "spoonacularSourceUrl": "https://spoonacular.com/chicken-tortilla-chip-soup-638488"
    },
    {
      "id": 716424,
      "image": "https://img.spoonacular.com/recipes/716424-556x370.jpg",
      "imageType": "jpg",
      "title": "Strawberry Basil Sorbet (no Ice Cream Maker Necessary!)",
      "readyInMinutes": 45,
      "servings": 1,
      "sourceUrl": "https://fullbellysisters.blogspot.com/2011/05/strawberry-basil-sorbet-no-ice-cream.html",
      "vegetarian": true,
      "vegan": true,
      "glutenFree": true,
      "dairyFree": true,
      "veryHealthy": false,
      "cheap": false,
      "veryPopular": false,
      "sustainable": false,
      "lowFodmap": false,
      "weightWatcherSmartPoints": 8,
      "gaps": "no",
      "preparationMinutes": null,
      "cookingMinutes": null,
      "aggregateLikes": 101,
      "healthScore": 2,
      "creditsText": "Full Belly Sisters",
      "license": "CC BY-SA 3.0",
      "sourceName": "Full Belly Sisters",
      "pricePerServing": 55.58,
      "extendedIngredients": [
        {
          "id": 2044,
          "aisle": "Produce",
          "image": "fresh-basil.jpg",
          "consistency": "SOLID",
          "name": "basil leaves",
          "nameClean": "basil leaves",
          "original": "about 1/4c finely chopped basil leaves",
          "originalName": "about finely chopped basil leaves",
          "amount": 0.25,
          "unit": "c",
          "meta": [
            "finely chopped"
          ],
          "measures": {
            "us": {
              "amount": 0.25,
              "unitShort": "cups",
              "unitLong": "cups"
            },
            "metric": {
              "amount": 6,
              "unitShort": "g",
              "unitLong": "grams"
            }
          }
        },
        {
          "id": 1044053,
          "aisle": "Oil, Vinegar, Salad Dressing",
          "image": "basil-oil.jpg",
          "consistency": "LIQUID",
          "name": "basil oil",
          "nameClean": "basil oil",
          "original": "1t basil oil (optional)",
          "originalName": "basil oil (optional)",
          "amount": 1,
          "unit": "t",
          "meta": [],
          "measures": {
            "us": {
              "amount": 0.321,
              "unitShort": "tsps",
              "unitLong": "teaspoons"
            },
            "metric": {
              "amount": 0.321,
              "unitShort": "tsps",
              "unitLong": "teaspoons"
            }
          }
        },
        {
          "id": 19912,
          "aisle": "Health Foods",
          "image": "agave.png",
          "consistency": "LIQUID",
          "name": "honey",
          "nameClean": "honey",
          "original": "2-3T honey or agave",
          "originalName": "honey or agave",
          "amount": 2,
          "unit": "T",
          "meta": [],
          "measures": {
            "us": {
              "amount": 2,
              "unitShort": "Tbsps",
              "unitLong": "Tbsps"
            },
            "metric": {
              "amount": 2,
              "unitShort": "Tbsps",
              "unitLong": "Tbsps"
            }
          }
        },
        {
          "id": 9316,
          "aisle": "Produce",
          "image": "strawberries.png",
          "consistency": "SOLID",
          "name": "strawberries",
          "nameClean": "strawberries",
          "original": "1 bag organic strawberries (my bag was 12 oz; 16 oz would be better!), thawed for about a 1/2 hour",
          "originalName": "organic strawberries (my bag was 12 oz; 16 oz would be better!), thawed for about a 1/2 hour",
          "amount": 1,
          "unit": "bag",
          "meta": [
            "organic",
            "thawed",
            "for a 1/2 hour",
            "(my bag was 12 oz; 16 oz would be better!)"
          ],
          "measures": {
            "us": {
              "amount": 1,
              "unitShort": "bag",
              "unitLong": "bag"
            },
            "metric": {
              "amount": 1,
              "unitShort": "bag",
              "unitLong": "bag"
            }
          }
        }
      ],
      "summary": "Strawberry Basil Sorbet (no Ice Cream Maker Necessary!) might be just the dessert you are searching for. This recipe serves 1 and costs 56 cents per serving. Watching your figure? This gluten free, dairy free, lacto ovo vegetarian, and vegan recipe has \u003Cb\u003E172 calories\u003C/b\u003E, \u003Cb\u003E0g of protein\u003C/b\u003E, and \u003Cb\u003E5g of fat\u003C/b\u003E per serving. If you have basil leaves, basil oil, honey, and a few other ingredients on hand, you can make it. Plenty of people made this recipe, and 101 would say it hit the spot. It is perfect for \u003Cb\u003EMother's Day\u003C/b\u003E. It is brought to you by fullbellysisters.blogspot.com. From preparation to the plate, this recipe takes approximately \u003Cb\u003E45 minutes\u003C/b\u003E. Overall, this recipe earns a \u003Cb\u003Erather bad spoonacular score of 25%\u003C/b\u003E. Similar recipes include \u003Ca href=\"https://spoonacular.com/recipes/strawberry-sorbet-without-an-ice-cream-maker-581814\"\u003EStrawberry Sorbet (without an ice cream maker)\u003C/a\u003E, \u003Ca href=\"https://spoonacular.com/recipes/coconut-mango-pineapple-sorbet-ice-cream-maker-giveaway-607524\"\u003ECoconut Mango-Pineapple Sorbet + Ice Cream Maker Giveaway\u003C/a\u003E, and \u003Ca href=\"https://spoonacular.com/recipes/no-ice-cream-maker-salted-caramel-bourbon-nutter-butter-and-chocolate-chunk-ice-cream-520118\"\u003ENo-Ice-Cream-Maker Salted Caramel, Bourbon, Nutter Butter and Chocolate Chunk Ice Cream\u003C/a\u003E.",
      "cuisines": [],
      "dishTypes": [
        "dessert"
      ],
      "diets": [
        "gluten free",
        "dairy free",
        "lacto ovo vegetarian",
        "vegan"
      ],
      "occasions": [
        "mother's day",
        "summer"
      ],
      "instructions": "",
      "analyzedInstructions": [],
      "originalId": null,
      "spoonacularScore": 19.9524974822998,
      "spoonacularSourceUrl": "https://spoonacular.com/strawberry-basil-sorbet-no-ice-cream-maker-necessary-716424"
    },
    {
      "id": 644848,
      "image": "https://img.spoonacular.com/recipes/644848-556x370.jpg",
      "imageType": "jpg",
      "title": "Gluten Free Pancakes",
      "readyInMinutes": 45,
      "servings": 12,
      "sourceUrl": "https://www.foodista.com/recipe/GG6LGJS5/gluten-free-pancakes",
      "vegetarian": true,
      "vegan": false,
      "glutenFree": true,
      "dairyFree": false,
      "veryHealthy": false,
      "cheap": false,
      "veryPopular": false,
      "sustainable": false,
      "lowFodmap": false,
      "weightWatcherSmartPoints": 3,
      "gaps": "no",
      "preparationMinutes": null,
      "cookingMinutes": null,
      "aggregateLikes": 2,
      "healthScore": 0,
      "creditsText": "foodista.com",
      "license": null,
      "sourceName": "foodista.com",
      "pricePerServing": 34.1,
      "extendedIngredients": [
        {
          "id": 19912,
          "aisle": "Health Foods",
          "image": "agave.png",
          "consistency": "LIQUID",
          "name": "agave nectar",
          "nameClean": "agave nectar",
          "original": "2 tablespoons agave nectar",
          "originalName": "agave nectar",
          "amount": 2,
          "unit": "tablespoons",
          "meta": [],
          "measures": {
            "us": {
              "amount": 2,
              "unitShort": "Tbsps",
              "unitLong": "Tbsps"
            },
            "metric": {
              "amount": 2,
              "unitShort": "Tbsps",
              "unitLong": "Tbsps"
            }
          }
        },
        {
          "id": 18369,
          "aisle": "Baking",
          "image": "white-powder.jpg",
          "consistency": "SOLID",
          "name": "baking powder",
          "nameClean": "baking powder",
          "original": "1 teaspoon baking powder",
          "originalName": "baking powder",
          "amount": 1,
          "unit": "teaspoon",
          "meta": [],
          "measures": {
            "us": {
              "amount": 1,
              "unitShort": "tsp",
              "unitLong": "teaspoon"
            },
            "metric": {
              "amount": 1,
              "unitShort": "tsp",
              "unitLong": "teaspoon"
            }
          }
        },
        {
          "id": 93740,
          "aisle": "Gluten Free",
          "image": "almond-meal-or-almond-flour.jpg",
          "consistency": "SOLID",
          "name": "blanched almond flour",
          "nameClean": "blanched almond flour",
          "original": "1 cup blanched almond flour",
          "originalName": "blanched almond flour",
          "amount": 1,
          "unit": "cup",
          "meta": [],
          "measures": {
            "us": {
              "amount": 1,
              "unitShort": "cup",
              "unitLong": "cup"
            },
            "metric": {
              "amount": 112,
              "unitShort": "g",
              "unitLong": "grams"
            }
          }
        },
        {
          "id": 1123,
          "aisle": "Milk, Eggs, Other Dairy",
          "image": "egg.png",
          "consistency": "SOLID",
          "name": "eggs",
          "nameClean": "eggs",
          "original": "2 large eggs",
          "originalName": "eggs",
          "amount": 2,
          "unit": "large",
          "meta": [],
          "measures": {
            "us": {
              "amount": 2,
              "unitShort": "large",
              "unitLong": "larges"
            },
            "metric": {
              "amount": 2,
              "unitShort": "large",
              "unitLong": "larges"
            }
          }
        },
        {
          "id": 1077,
          "aisle": "Milk, Eggs, Other Dairy",
          "image": "milk.png",
          "consistency": "LIQUID",
          "name": "preferred milk alternative",
          "nameClean": "preferred milk alternative",
          "original": "1/4 cup almond milk, or preferred milk alternative",
          "originalName": "almond milk, or preferred milk alternative",
          "amount": 0.25,
          "unit": "cup",
          "meta": [],
          "measures": {
            "us": {
              "amount": 0.25,
              "unitShort": "cups",
              "unitLong": "cups"
            },
            "metric": {
              "amount": 61,
              "unitShort": "ml",
              "unitLong": "milliliters"
            }
          }
        },
        {
          "id": 2047,
          "aisle": "Spices and Seasonings",
          "image": "salt.jpg",
          "consistency": "SOLID",
          "name": "salt",
          "nameClean": "salt",
          "original": "pinch of salt",
          "originalName": "pinch of salt",
          "amount": 1,
          "unit": "pinch",
          "meta": [],
          "measures": {
            "us": {
              "amount": 1,
              "unitShort": "pinch",
              "unitLong": "pinch"
            },
            "metric": {
              "amount": 1,
              "unitShort": "pinch",
              "unitLong": "pinch"
            }
          }
        },
        {
          "id": 93696,
          "aisle": "Health Foods",
          "image": "white-powder.jpg",
          "consistency": "SOLID",
          "name": "tapioca flour",
          "nameClean": "tapioca flour",
          "original": "3/4 cup tapioca flour",
          "originalName": "tapioca flour",
          "amount": 0.75,
          "unit": "cup",
          "meta": [],
          "measures": {
            "us": {
              "amount": 0.75,
              "unitShort": "cups",
              "unitLong": "cups"
            },
            "metric": {
              "amount": 90,
              "unitShort": "g",
              "unitLong": "grams"
            }
          }
        },
        {
          "id": 1052050,
          "aisle": "Baking",
          "image": "vanilla.jpg",
          "consistency": "SOLID",
          "name": "vanilla",
          "nameClean": "vanilla",
          "original": "1/2 teaspoon vanilla",
          "originalName": "vanilla",
          "amount": 0.5,
          "unit": "teaspoon",
          "meta": [],
          "measures": {
            "us": {
              "amount": 0.5,
              "unitShort": "tsps",
              "unitLong": "teaspoons"
            },
            "metric": {
              "amount": 0.5,
              "unitShort": "tsps",
              "unitLong": "teaspoons"
            }
          }
        },
        {
          "id": 14412,
          "aisle": "Beverages",
          "image": "water.png",
          "consistency": "LIQUID",
          "name": "warm water",
          "nameClean": "warm water",
          "original": "1 1/2 cups warm water",
          "originalName": "warm water",
          "amount": 1.5,
          "unit": "cups",
          "meta": [],
          "measures": {
            "us": {
              "amount": 1.5,
              "unitShort": "cups",
              "unitLong": "cups"
            },
            "metric": {
              "amount": 354.882,
              "unitShort": "ml",
              "unitLong": "milliliters"
            }
          }
        },
        {
          "id": 2053,
          "aisle": "Oil, Vinegar, Salad Dressing",
          "image": "vinegar-(white).jpg",
          "consistency": "LIQUID",
          "name": "distilled vinegar",
          "nameClean": "distilled vinegar",
          "original": "1/4 teaspoon distilled white vinegar",
          "originalName": "distilled white vinegar",
          "amount": 0.25,
          "unit": "teaspoon",
          "meta": [
            "white"
          ],
          "measures": {
            "us": {
              "amount": 0.25,
              "unitShort": "tsps",
              "unitLong": "teaspoons"
            },
            "metric": {
              "amount": 0.25,
              "unitShort": "tsps",
              "unitLong": "teaspoons"
            }
          }
        },
        {
          "id": 93626,
          "aisle": "Baking",
          "image": "white-powder.jpg",
          "consistency": "SOLID",
          "name": "xanthan gum",
          "nameClean": "xanthan gum",
          "original": "1 teaspoon xanthan gum",
          "originalName": "xanthan gum",
          "amount": 1,
          "unit": "teaspoon",
          "meta": [],
          "measures": {
            "us": {
              "amount": 1,
              "unitShort": "tsp",
              "unitLong": "teaspoon"
            },
            "metric": {
              "amount": 1,
              "unitShort": "tsp",
              "unitLong": "teaspoon"
            }
          }
        }
      ],
      "summary": "You can never have too many breakfast recipes, so give Gluten Free Pancakes a try. This recipe serves 12. Watching your figure? This gluten free and lacto ovo vegetarian recipe has \u003Cb\u003E105 calories\u003C/b\u003E, \u003Cb\u003E3g of protein\u003C/b\u003E, and \u003Cb\u003E6g of fat\u003C/b\u003E per serving. For \u003Cb\u003E34 cents per serving\u003C/b\u003E, this recipe \u003Cb\u003Ecovers 2%\u003C/b\u003E of your daily requirements of vitamins and minerals. A mixture of preferred milk alternative, baking powder, warm water, and a handful of other ingredients are all it takes to make this recipe so scrumptious. From preparation to the plate, this recipe takes roughly \u003Cb\u003E45 minutes\u003C/b\u003E. 2 people were glad they tried this recipe. It is brought to you by Foodista. With a spoonacular \u003Cb\u003Escore of 12%\u003C/b\u003E, this dish is not so amazing. Try \u003Ca href=\"https://spoonacular.com/recipes/2-ingredient-sweet-potato-pancakes-gluten-free-dairy-free-nut-free-1224983\"\u003E2-ingredient Sweet Potato Pancakes {gluten-free, dairy-free, nut-free}\u003C/a\u003E, \u003Ca href=\"https://spoonacular.com/recipes/2-ingredient-sweet-potato-pancakes-gluten-free-dairy-free-nut-free-630749\"\u003E2-ingredient Sweet Potato Pancakes {gluten-free, dairy-free, nut-free}\u003C/a\u003E, and \u003Ca href=\"https://spoonacular.com/recipes/2-ingredient-sweet-potato-pancakes-gluten-free-dairy-free-nut-free-1379303\"\u003E2-ingredient Sweet Potato Pancakes {gluten-free, dairy-free, nut-free}\u003C/a\u003E for similar recipes.",
      "cuisines": [],
      "dishTypes": [
        "morning meal",
        "brunch",
        "breakfast"
      ],
      "diets": [
        "gluten free",
        "lacto ovo vegetarian"
      ],
      "occasions": [],
      "instructions": "\u003Col\u003E\u003Cli\u003EStart by making the buttermilk. Mix together the almond milk and vinegar, set aside.\u003C/li\u003E\u003Cli\u003EIn a large bowl, whisk together all of the dry ingredients: almond flour, tapioca flour, xanthan gum, salt, and baking powder.\u003C/li\u003E\u003Cli\u003EIn a medium-sized bowl, whisk together all of the wet ingredients: agave nectar, eggs, milk mixture, water, and vanilla.\u003C/li\u003E\u003Cli\u003EWhisk the wet ingredients into the dry, mixing well. Add warm water one tablespoon at a time if the batter needs to be thinned out more.\u003C/li\u003E\u003Cli\u003EHeat a skillet or griddle over medium heat.\u003C/li\u003E\u003Cli\u003ELightly grease the skillet and, using an ice cream scoop, pour in the batter. Then, spread it out with the back of a spoon.\u003C/li\u003E\u003Cli\u003ECook for 1 minute, or until the bottom of the pancake is firm.\u003C/li\u003E\u003Cli\u003EFlip it over, squish it down with a spatula, and cook an additional 1-2 minutes or until done.\u003C/li\u003E\u003Cli\u003ESet aside on a plate and repeat with the remaining batter. Makes 10-12 pancakes.\u003C/li\u003E\u003Cli\u003EServe with Earth Balance butter and syrup or fruit. Delicious!\u003C/li\u003E\u003C/ol\u003E",
      "analyzedInstructions": [
        {
          "name": "",
          "steps": [
            {
              "number": 1,
              "step": "Start by making the buttermilk.",
              "ingredients": [
                {
                  "id": 1230,
                  "name": "buttermilk",
                  "localizedName": "buttermilk",
                  "image": "buttermilk.jpg"
                }
              ],
              "equipment": []
            },
            {
              "number": 2,
              "step": "Mix together the almond milk and vinegar, set aside.In a large bowl, whisk together all of the dry ingredients: almond flour, tapioca flour, xanthan gum, salt, and baking powder.In a medium-sized bowl, whisk together all of the wet ingredients: agave nectar, eggs, milk mixture, water, and vanilla.",
              "ingredients": [
                {
                  "id": 18369,
                  "name": "baking powder",
                  "localizedName": "baking powder",
                  "image": "white-powder.jpg"
                },
                {
                  "id": 93696,
                  "name": "tapioca starch",
                  "localizedName": "tapioca starch",
                  "image": "white-powder.jpg"
                },
                {
                  "id": 19912,
                  "name": "agave",
                  "localizedName": "agave",
                  "image": "agave.png"
                },
                {
                  "id": 10093740,
                  "name": "almond flour",
                  "localizedName": "almond flour",
                  "image": "almond-meal-or-almond-flour.jpg"
                },
                {
                  "id": 93607,
                  "name": "almond milk",
                  "localizedName": "almond milk",
                  "image": "almond-milk.png"
                },
                {
                  "id": 93626,
                  "name": "xanthan gum",
                  "localizedName": "xanthan gum",
                  "image": "white-powder.jpg"
                },
                {
                  "id": 1052050,
                  "name": "vanilla",
                  "localizedName": "vanilla",
                  "image": "vanilla.jpg"
                },
                {
                  "id": 2053,
                  "name": "vinegar",
                  "localizedName": "vinegar",
                  "image": "vinegar-(white).jpg"
                },
                {
                  "id": 14412,
                  "name": "water",
                  "localizedName": "water",
                  "image": "water.png"
                },
                {
                  "id": 1123,
                  "name": "egg",
                  "localizedName": "egg",
                  "image": "egg.png"
                },
                {
                  "id": 1077,
                  "name": "milk",
                  "localizedName": "milk",
                  "image": "milk.png"
                },
                {
                  "id": 2047,
                  "name": "salt",
                  "localizedName": "salt",
                  "image": "salt.jpg"
                }
              ],
              "equipment": [
                {
                  "id": 404661,
                  "name": "whisk",
                  "localizedName": "whisk",
                  "image": "https://spoonacular.com/cdn/equipment_100x100/whisk.png"
                },
                {
                  "id": 404783,
                  "name": "bowl",
                  "localizedName": "bowl",
                  "image": "https://spoonacular.com/cdn/equipment_100x100/bowl.jpg"
                }
              ]
            },
            {
              "number": 3,
              "step": "Whisk the wet ingredients into the dry, mixing well.",
              "ingredients": [],
              "equipment": [
                {
                  "id": 404661,
                  "name": "whisk",
                  "localizedName": "whisk",
                  "image": "https://spoonacular.com/cdn/equipment_100x100/whisk.png"
                }
              ]
            },
            {
              "number": 4,
              "step": "Add warm water one tablespoon at a time if the batter needs to be thinned out more.",
              "ingredients": [
                {
                  "id": 14412,
                  "name": "water",
                  "localizedName": "water",
                  "image": "water.png"
                }
              ],
              "equipment": []
            },
            {
              "number": 5,
              "step": "Heat a skillet or griddle over medium heat.Lightly grease the skillet and, using an ice cream scoop, pour in the batter. Then, spread it out with the back of a spoon.Cook for 1 minute, or until the bottom of the pancake is firm.Flip it over, squish it down with a spatula, and cook an additional 1-2 minutes or until done.Set aside on a plate and repeat with the remaining batter. Makes 10-12 pancakes.",
              "ingredients": [
                {
                  "id": 19095,
                  "name": "ice cream",
                  "localizedName": "ice cream",
                  "image": "https://spoonacular.com/cdn/ingredients_100x100/vanilla-ice-cream.png"
                },
                {
                  "id": 0,
                  "name": "spread",
                  "localizedName": "spread",
                  "image": ""
                }
              ],
              "equipment": [
                {
                  "id": 404742,
                  "name": "ice cream scoop",
                  "localizedName": "ice cream scoop",
                  "image": "https://spoonacular.com/cdn/equipment_100x100/ice-cream-scoop.jpg"
                },
                {
                  "id": 404645,
                  "name": "frying pan",
                  "localizedName": "frying pan",
                  "image": "https://spoonacular.com/cdn/equipment_100x100/pan.png"
                },
                {
                  "id": 404642,
                  "name": "spatula",
                  "localizedName": "spatula",
                  "image": "https://spoonacular.com/cdn/equipment_100x100/spatula-or-turner.jpg"
                }
              ],
              "length": {
                "number": 3,
                "unit": "minutes"
              }
            },
            {
              "number": 6,
              "step": "Serve with Earth Balance butter and syrup or fruit. Delicious!",
              "ingredients": [
                {
                  "id": 1001,
                  "name": "butter",
                  "localizedName": "butter",
                  "image": "butter-sliced.jpg"
                },
                {
                  "id": 9431,
                  "name": "fruit",
                  "localizedName": "fruit",
                  "image": "mixed-fresh-fruit.jpg"
                },
                {
                  "id": 0,
                  "name": "syrup",
                  "localizedName": "syrup",
                  "image": ""
                }
              ],
              "equipment": []
            }
          ]
        }
      ],
      "originalId": null,
      "spoonacularScore": 7.69554376602173,
      "spoonacularSourceUrl": "https://spoonacular.com/gluten-free-pancakes-644848"
    },
    {
      "id": 664615,
      "image": "https://img.spoonacular.com/recipes/664615-556x370.jpg",
      "imageType": "jpg",
      "title": "Vegetable Tart With Goat Cheese",
      "readyInMinutes": 25,
      "servings": 4,
      "sourceUrl": "https://www.foodista.com/recipe/NGWYYZNV/vegetable-tart-with-goat-cheese",
      "vegetarian": true,
      "vegan": false,
      "glutenFree": false,
      "dairyFree": false,
      "veryHealthy": false,
      "cheap": false,
      "veryPopular": false,
      "sustainable": false,
      "lowFodmap": false,
      "weightWatcherSmartPoints": 13,
      "gaps": "no",
      "preparationMinutes": null,
      "cookingMinutes": null,
      "aggregateLikes": 2,
      "healthScore": 45,
      "creditsText": "Foodista.com – The Cooking Encyclopedia Everyone Can Edit",
      "license": "CC BY 3.0",
      "sourceName": "Foodista",
      "pricePerServing": 163.67,
      "extendedIngredients": [
        {
          "id": 11463,
          "aisle": "Frozen",
          "image": "spinach-frozen.jpg",
          "consistency": "SOLID",
          "name": "spinach",
          "nameClean": "spinach",
          "original": "1 cup Spinach, if frozen, thaw and drain",
          "originalName": "Spinach, if frozen, thaw and drain",
          "amount": 1,
          "unit": "cup",
          "meta": [
            "frozen",
            "thaw"
          ],
          "measures": {
            "us": {
              "amount": 1,
              "unitShort": "cup",
              "unitLong": "cup"
            },
            "metric": {
              "amount": 156,
              "unitShort": "g",
              "unitLong": "grams"
            }
          }
        },
        {
          "id": 1159,
          "aisle": "Cheese",
          "image": "goat-cheese.jpg",
          "consistency": "SOLID",
          "name": "goat cheese",
          "nameClean": "goat cheese",
          "original": "1/4 cup crumbled goat cheese",
          "originalName": "crumbled goat cheese",
          "amount": 0.25,
          "unit": "cup",
          "meta": [
            "crumbled"
          ],
          "measures": {
            "us": {
              "amount": 0.25,
              "unitShort": "cups",
              "unitLong": "cups"
            },
            "metric": {
              "amount": 56.75,
              "unitShort": "g",
              "unitLong": "grams"
            }
          }
        },
        {
          "id": 11260,
          "aisle": "Produce",
          "image": "mushrooms.png",
          "consistency": "SOLID",
          "name": "mushrooms",
          "nameClean": "mushrooms",
          "original": "1 cup sliced mushrooms",
          "originalName": "sliced mushrooms",
          "amount": 1,
          "unit": "cup",
          "meta": [
            "sliced"
          ],
          "measures": {
            "us": {
              "amount": 1,
              "unitShort": "cup",
              "unitLong": "cup"
            },
            "metric": {
              "amount": 96,
              "unitShort": "ml",
              "unitLong": "milliliters"
            }
          }
        },
        {
          "id": 18337,
          "aisle": "Frozen",
          "image": "puff-pastry.png",
          "consistency": "SOLID",
          "name": "puff pastry",
          "nameClean": "puff pastry",
          "original": "1 sheet Puff Pastry",
          "originalName": "Puff Pastry",
          "amount": 1,
          "unit": "sheet",
          "meta": [],
          "measures": {
            "us": {
              "amount": 1,
              "unitShort": "sheet",
              "unitLong": "sheet"
            },
            "metric": {
              "amount": 1,
              "unitShort": "sheet",
              "unitLong": "sheet"
            }
          }
        },
        {
          "id": 11821,
          "aisle": "Produce",
          "image": "red-pepper.jpg",
          "consistency": "SOLID",
          "name": "bell pepper",
          "nameClean": "bell pepper",
          "original": "1 red Bell Pepper, sliced",
          "originalName": "red Bell Pepper, sliced",
          "amount": 1,
          "unit": "",
          "meta": [
            "red",
            "sliced"
          ],
          "measures": {
            "us": {
              "amount": 1,
              "unitShort": "",
              "unitLong": ""
            },
            "metric": {
              "amount": 1,
              "unitShort": "",
              "unitLong": ""
            }
          }
        },
        {
          "id": 1102047,
          "aisle": "Spices and Seasonings",
          "image": "salt-and-pepper.jpg",
          "consistency": "SOLID",
          "name": "salt and pepper",
          "nameClean": "salt and pepper",
          "original": "Salt and pepper to taste",
          "originalName": "Salt and pepper to taste",
          "amount": 4,
          "unit": "servings",
          "meta": [
            "to taste"
          ],
          "measures": {
            "us": {
              "amount": 4,
              "unitShort": "servings",
              "unitLong": "servings"
            },
            "metric": {
              "amount": 4,
              "unitShort": "servings",
              "unitLong": "servings"
            }
          }
        }
      ],
      "summary": "The recipe Vegetable Tart With Goat Cheese can be made \u003Cb\u003Ein around 25 minutes\u003C/b\u003E. One portion of this dish contains around \u003Cb\u003E10g of protein\u003C/b\u003E, \u003Cb\u003E27g of fat\u003C/b\u003E, and a total of \u003Cb\u003E399 calories\u003C/b\u003E. This lacto ovo vegetarian recipe serves 4 and costs \u003Cb\u003E$1.64 per serving\u003C/b\u003E. It is brought to you by Foodista. If you have salt and pepper, bell pepper, mushrooms, and a few other ingredients on hand, you can make it. Only a few people made this recipe, and 2 would say it hit the spot. With a spoonacular \u003Cb\u003Escore of 84%\u003C/b\u003E, this dish is super. \u003Ca href=\"https://spoonacular.com/recipes/savory-spring-vegetable-and-goat-cheese-tart-115490\"\u003ESavory Spring Vegetable and Goat Cheese Tart\u003C/a\u003E, \u003Ca href=\"https://spoonacular.com/recipes/goat-cheese-tart-552207\"\u003EGoat Cheese Tart\u003C/a\u003E, and \u003Ca href=\"https://spoonacular.com/recipes/pear-and-goat-cheese-tart-1047798\"\u003EPear and Goat Cheese Tart\u003C/a\u003E are very similar to this recipe.",
      "cuisines": [],
      "dishTypes": [],
      "diets": [
        "lacto ovo vegetarian"
      ],
      "occasions": [],
      "instructions": "\u003Col\u003E\u003Cli\u003EPre-heat oven to 350F. \u003C/li\u003E\u003Cli\u003ERoll out puff pastry onto a cookie sheet, leaving parchment paper on pan to keep it from sticking. \u003C/li\u003E\u003Cli\u003ESpread spinach over the top, leaving an inch of the sides uncovered. \u003C/li\u003E\u003Cli\u003ESpread mushrooms on top of spinach and add bell pepper slices on top. \u003C/li\u003E\u003Cli\u003ESprinkle crumbled goat cheese over the top. Salt and pepper to taste. \u003C/li\u003E\u003Cli\u003EBake for 15-20 minutes\u003C/li\u003E\u003C/ol\u003E",
      "analyzedInstructions": [
        {
          "name": "",
          "steps": [
            {
              "number": 1,
              "step": "Pre-heat oven to 350F.",
              "ingredients": [],
              "equipment": [
                {
                  "id": 404784,
                  "name": "oven",
                  "localizedName": "oven",
                  "image": "https://spoonacular.com/cdn/equipment_100x100/oven.jpg",
                  "temperature": {
                    "number": 350,
                    "unit": "Fahrenheit"
                  }
                }
              ]
            },
            {
              "number": 2,
              "step": "Roll out puff pastry onto a cookie sheet, leaving parchment paper on pan to keep it from sticking.",
              "ingredients": [
                {
                  "id": 18337,
                  "name": "puff pastry sheets",
                  "localizedName": "puff pastry sheets",
                  "image": "puff-pastry.png"
                },
                {
                  "id": 10118192,
                  "name": "cookies",
                  "localizedName": "cookies",
                  "image": "https://spoonacular.com/cdn/ingredients_100x100/shortbread-cookies.jpg"
                },
                {
                  "id": 0,
                  "name": "roll",
                  "localizedName": "roll",
                  "image": "dinner-yeast-rolls.jpg"
                }
              ],
              "equipment": [
                {
                  "id": 404770,
                  "name": "baking paper",
                  "localizedName": "baking paper",
                  "image": "https://spoonacular.com/cdn/equipment_100x100/baking-paper.jpg"
                },
                {
                  "id": 404727,
                  "name": "baking sheet",
                  "localizedName": "baking sheet",
                  "image": "https://spoonacular.com/cdn/equipment_100x100/baking-sheet.jpg"
                },
                {
                  "id": 404645,
                  "name": "frying pan",
                  "localizedName": "frying pan",
                  "image": "https://spoonacular.com/cdn/equipment_100x100/pan.png"
                }
              ]
            },
            {
              "number": 3,
              "step": "Spread spinach over the top, leaving an inch of the sides uncovered.",
              "ingredients": [
                {
                  "id": 10011457,
                  "name": "spinach",
                  "localizedName": "spinach",
                  "image": "spinach.jpg"
                },
                {
                  "id": 0,
                  "name": "spread",
                  "localizedName": "spread",
                  "image": ""
                }
              ],
              "equipment": []
            },
            {
              "number": 4,
              "step": "Spread mushrooms on top of spinach and add bell pepper slices on top.",
              "ingredients": [
                {
                  "id": 10211821,
                  "name": "bell pepper",
                  "localizedName": "bell pepper",
                  "image": "bell-pepper-orange.png"
                },
                {
                  "id": 11260,
                  "name": "mushrooms",
                  "localizedName": "mushrooms",
                  "image": "https://spoonacular.com/cdn/ingredients_100x100/mushrooms.png"
                },
                {
                  "id": 10011457,
                  "name": "spinach",
                  "localizedName": "spinach",
                  "image": "spinach.jpg"
                },
                {
                  "id": 0,
                  "name": "spread",
                  "localizedName": "spread",
                  "image": ""
                }
              ],
              "equipment": []
            },
            {
              "number": 5,
              "step": "Sprinkle crumbled goat cheese over the top. Salt and pepper to taste.",
              "ingredients": [
                {
                  "id": 1102047,
                  "name": "salt and pepper",
                  "localizedName": "salt and pepper",
                  "image": "salt-and-pepper.jpg"
                },
                {
                  "id": 1159,
                  "name": "goat cheese",
                  "localizedName": "goat cheese",
                  "image": "goat-cheese.jpg"
                }
              ],
              "equipment": []
            },
            {
              "number": 6,
              "step": "Bake for 15-20 minutes",
              "ingredients": [],
              "equipment": [
                {
                  "id": 404784,
                  "name": "oven",
                  "localizedName": "oven",
                  "image": "https://spoonacular.com/cdn/equipment_100x100/oven.jpg"
                }
              ]
            }
          ]
        }
      ],
      "originalId": null,
      "spoonacularScore": 85.6056060791016,
      "spoonacularSourceUrl": "https://spoonacular.com/vegetable-tart-with-goat-cheese-664615"
    },
    {
      "id": 632116,
      "image": "https://img.spoonacular.com/recipes/632116-556x370.jpg",
      "imageType": "jpg",
      "title": "Almond Cookie Bar",
      "readyInMinutes": 45,
      "servings": 22,
      "sourceUrl": "https://www.foodista.com/recipe/F3QRLC6D/almond-cookie-bar",
      "vegetarian": false,
      "vegan": false,
      "glutenFree": false,
      "dairyFree": false,
      "veryHealthy": false,
      "cheap": false,
      "veryPopular": false,
      "sustainable": false,
      "lowFodmap": false,
      "weightWatcherSmartPoints": 10,
      "gaps": "no",
      "preparationMinutes": null,
      "cookingMinutes": null,
      "aggregateLikes": 9,
      "healthScore": 1,
      "creditsText": "Foodista.com – The Cooking Encyclopedia Everyone Can Edit",
      "license": "CC BY 3.0",
      "sourceName": "Foodista",
      "pricePerServing": 72.09,
      "extendedIngredients": [
        {
          "id": 10112061,
          "aisle": "Baking",
          "image": "almonds.jpg",
          "consistency": "SOLID",
          "name": "almond flakes",
          "nameClean": "almond flakes",
          "original": "35g Almond flakes",
          "originalName": "Almond flakes",
          "amount": 35,
          "unit": "g",
          "meta": [],
          "measures": {
            "us": {
              "amount": 1.235,
              "unitShort": "oz",
              "unitLong": "ounces"
            },
            "metric": {
              "amount": 35,
              "unitShort": "g",
              "unitLong": "grams"
            }
          }
        },
        {
          "id": 19719,
          "aisle": "Nut butters, Jams, and Honey",
          "image": "apricot-jam.jpg",
          "consistency": "SOLID",
          "name": "apricot gel/jam",
          "nameClean": "apricot gel/jam",
          "original": "Apricot Gel/Jam, as needed",
          "originalName": "Apricot Gel/Jam, as needed",
          "amount": 22,
          "unit": "servings",
          "meta": [
            "as needed"
          ],
          "measures": {
            "us": {
              "amount": 22,
              "unitShort": "servings",
              "unitLong": "servings"
            },
            "metric": {
              "amount": 22,
              "unitShort": "servings",
              "unitLong": "servings"
            }
          }
        },
        {
          "id": 19334,
          "aisle": "Baking",
          "image": "light-brown-sugar.jpg",
          "consistency": "SOLID",
          "name": "brown sugar",
          "nameClean": "brown sugar",
          "original": "25g Brown sugar",
          "originalName": "Brown sugar",
          "amount": 25,
          "unit": "g",
          "meta": [],
          "measures": {
            "us": {
              "amount": 0.882,
              "unitShort": "oz",
              "unitLong": "ounces"
            },
            "metric": {
              "amount": 25,
              "unitShort": "g",
              "unitLong": "grams"
            }
          }
        },
        {
          "id": 1001,
          "aisle": "Milk, Eggs, Other Dairy",
          "image": "butter-sliced.jpg",
          "consistency": "SOLID",
          "name": "butter",
          "nameClean": "butter",
          "original": "50g Cold butter, cut to cubes",
          "originalName": "Cold butter, cut to cubes",
          "amount": 50,
          "unit": "g",
          "meta": [
            "cold"
          ],
          "measures": {
            "us": {
              "amount": 1.764,
              "unitShort": "oz",
              "unitLong": "ounces"
            },
            "metric": {
              "amount": 50,
              "unitShort": "g",
              "unitLong": "grams"
            }
          }
        },
        {
          "id": 10118192,
          "aisle": "Sweet Snacks",
          "image": "shortbread-cookies.jpg",
          "consistency": "SOLID",
          "name": "cookie base",
          "nameClean": "cookie base",
          "original": "Cookie Base",
          "originalName": "Cookie Base",
          "amount": 22,
          "unit": "servings",
          "meta": [],
          "measures": {
            "us": {
              "amount": 22,
              "unitShort": "servings",
              "unitLong": "servings"
            },
            "metric": {
              "amount": 22,
              "unitShort": "servings",
              "unitLong": "servings"
            }
          }
        },
        {
          "id": 1077,
          "aisle": "Milk, Eggs, Other Dairy",
          "image": "milk.png",
          "consistency": "LIQUID",
          "name": "milk",
          "nameClean": "milk",
          "original": "1 tbsp Fresh milk",
          "originalName": "Fresh milk",
          "amount": 1,
          "unit": "tbsp",
          "meta": [
            "fresh"
          ],
          "measures": {
            "us": {
              "amount": 1,
              "unitShort": "Tbsp",
              "unitLong": "Tbsp"
            },
            "metric": {
              "amount": 1,
              "unitShort": "Tbsp",
              "unitLong": "Tbsp"
            }
          }
        },
        {
          "id": 1008020,
          "aisle": "Bakery/Bread",
          "image": "img.spoonacular.",
          "consistency": "SOLID",
          "name": "oatmeal cornflakes",
          "nameClean": "oatmeal cornflakes",
          "original": "20g Oatmeal Crushed cornflakes",
          "originalName": "Oatmeal Crushed cornflakes",
          "amount": 20,
          "unit": "g",
          "meta": [
            "crushed"
          ],
          "measures": {
            "us": {
              "amount": 0.705,
              "unitShort": "oz",
              "unitLong": "ounces"
            },
            "metric": {
              "amount": 20,
              "unitShort": "g",
              "unitLong": "grams"
            }
          }
        },
        {
          "id": 20081,
          "aisle": "Baking",
          "image": "flour.png",
          "consistency": "SOLID",
          "name": "flour",
          "nameClean": "flour",
          "original": "100g Plain flour",
          "originalName": "Plain flour",
          "amount": 100,
          "unit": "g",
          "meta": [
            "plain"
          ],
          "measures": {
            "us": {
              "amount": 3.527,
              "unitShort": "oz",
              "unitLong": "ounces"
            },
            "metric": {
              "amount": 100,
              "unitShort": "g",
              "unitLong": "grams"
            }
          }
        },
        {
          "id": 20080,
          "aisle": "Baking",
          "image": "flour.png",
          "consistency": "SOLID",
          "name": "wholemeal flour",
          "nameClean": "wholemeal flour",
          "original": "80g Wholemeal flour",
          "originalName": "Wholemeal flour",
          "amount": 80,
          "unit": "g",
          "meta": [],
          "measures": {
            "us": {
              "amount": 2.822,
              "unitShort": "oz",
              "unitLong": "ounces"
            },
            "metric": {
              "amount": 80,
              "unitShort": "g",
              "unitLong": "grams"
            }
          }
        }
      ],
      "summary": "Almond Cookie Bar might be just the dessert you are searching for. One portion of this dish contains about \u003Cb\u003E3g of protein\u003C/b\u003E, \u003Cb\u003E10g of fat\u003C/b\u003E, and a total of \u003Cb\u003E255 calories\u003C/b\u003E. This recipe serves 22. For \u003Cb\u003E72 cents per serving\u003C/b\u003E, this recipe \u003Cb\u003Ecovers 5%\u003C/b\u003E of your daily requirements of vitamins and minerals. 9 people have made this recipe and would make it again. This recipe from Foodista requires wholemeal flour, apricot gel/jam, milk, and cookie base. From preparation to the plate, this recipe takes about \u003Cb\u003E45 minutes\u003C/b\u003E. All things considered, we decided this recipe \u003Cb\u003Edeserves a spoonacular score of 21%\u003C/b\u003E. This score is not so outstanding. Users who liked this recipe also liked \u003Ca href=\"https://spoonacular.com/recipes/raspberry-coconut-almond-cookie-bar-recipe-54149\"\u003ERaspberry Coconut-almond Cookie Bar Recipe\u003C/a\u003E, \u003Ca href=\"https://spoonacular.com/recipes/cookie-dough-frozen-yogurt-in-quest-bar-cookie-cups-video-included-616840\"\u003ECookie Dough Frozen Yogurt in Quest Bar Cookie Cups {video included!}\u003C/a\u003E, and \u003Ca href=\"https://spoonacular.com/recipes/the-cookie-bar-607756\"\u003EThe Cookie Bar\u003C/a\u003E.",
      "cuisines": [],
      "dishTypes": [
        "dessert"
      ],
      "diets": [],
      "occasions": [],
      "instructions": "\u003Col\u003E\u003Cli\u003EBeat butter and sugar until light and fluffy.\u003C/li\u003E\u003Cli\u003EIn a bowl combine wholemeal flour and plain flour together, then mix in the butter mixture with a rubber spatula and knead gently to a soft dough.\u003C/li\u003E\u003Cli\u003ETurn out the dough on to a flour surface or line with a plastic sheet below and with another plastic sheet on top. Then roll to a square. Chill for at least 1 hour.\u003C/li\u003E\u003Cli\u003ETransfer the dough on a non grease paper and cover with a plastic sheet on top, then roll to dough to about 3mm thick.\u003C/li\u003E\u003Cli\u003EPrick the dough with a fork and bake for about 15-18 minutes until brown at preheated oven 180C and leave biscuit to cool.\u003C/li\u003E\u003Cli\u003ESpread the apricot jam over the top of the biscuit, set aside.\u003C/li\u003E\u003Cli\u003EMix topping ingredients and spread evenly on the biscuit with a palette knife.\u003C/li\u003E\u003Cli\u003EBake for 15 minutes until golden.\u003C/li\u003E\u003Cli\u003ERemove cooked biscuit from the oven and leave to cool completely, then cut into bars.\u003C/li\u003E\u003C/ol\u003E",
      "analyzedInstructions": [
        {
          "name": "",
          "steps": [
            {
              "number": 1,
              "step": "Beat butter and sugar until light and fluffy.In a bowl combine wholemeal flour and plain flour together, then mix in the butter mixture with a rubber spatula and knead gently to a soft dough.Turn out the dough on to a flour surface or line with a plastic sheet below and with another plastic sheet on top. Then roll to a square. Chill for at least 1 hour.",
              "ingredients": [
                {
                  "id": 20080,
                  "name": "whole wheat flour",
                  "localizedName": "whole wheat flour",
                  "image": "flour.png"
                },
                {
                  "id": 20081,
                  "name": "all purpose flour",
                  "localizedName": "all purpose flour",
                  "image": "flour.png"
                },
                {
                  "id": 1001,
                  "name": "butter",
                  "localizedName": "butter",
                  "image": "butter-sliced.jpg"
                },
                {
                  "id": 0,
                  "name": "dough",
                  "localizedName": "dough",
                  "image": "pizza-dough"
                },
                {
                  "id": 19335,
                  "name": "sugar",
                  "localizedName": "sugar",
                  "image": "sugar-in-bowl.png"
                },
                {
                  "id": 0,
                  "name": "roll",
                  "localizedName": "roll",
                  "image": "dinner-yeast-rolls.jpg"
                }
              ],
              "equipment": [
                {
                  "id": 404642,
                  "name": "spatula",
                  "localizedName": "spatula",
                  "image": "https://spoonacular.com/cdn/equipment_100x100/spatula-or-turner.jpg"
                },
                {
                  "id": 404783,
                  "name": "bowl",
                  "localizedName": "bowl",
                  "image": "https://spoonacular.com/cdn/equipment_100x100/bowl.jpg"
                }
              ],
              "length": {
                "number": 60,
                "unit": "minutes"
              }
            },
            {
              "number": 2,
              "step": "Transfer the dough on a non grease paper and cover with a plastic sheet on top, then roll to dough to about 3mm thick.Prick the dough with a fork and bake for about 15-18 minutes until brown at preheated oven 180C and leave biscuit to cool.",
              "ingredients": [
                {
                  "id": 18009,
                  "name": "biscuits",
                  "localizedName": "biscuits",
                  "image": "buttermilk-biscuits.jpg"
                },
                {
                  "id": 0,
                  "name": "dough",
                  "localizedName": "dough",
                  "image": "pizza-dough"
                },
                {
                  "id": 0,
                  "name": "roll",
                  "localizedName": "roll",
                  "image": "dinner-yeast-rolls.jpg"
                }
              ],
              "equipment": [
                {
                  "id": 404784,
                  "name": "oven",
                  "localizedName": "oven",
                  "image": "https://spoonacular.com/cdn/equipment_100x100/oven.jpg",
                  "temperature": {
                    "number": 180,
                    "unit": "Celsius"
                  }
                }
              ],
              "length": {
                "number": 18,
                "unit": "minutes"
              }
            },
            {
              "number": 3,
              "step": "Spread the apricot jam over the top of the biscuit, set aside.",
              "ingredients": [
                {
                  "id": 19719,
                  "name": "apricot jam",
                  "localizedName": "apricot jam",
                  "image": "apricot-jam.jpg"
                },
                {
                  "id": 18009,
                  "name": "biscuits",
                  "localizedName": "biscuits",
                  "image": "buttermilk-biscuits.jpg"
                },
                {
                  "id": 0,
                  "name": "spread",
                  "localizedName": "spread",
                  "image": ""
                }
              ],
              "equipment": []
            },
            {
              "number": 4,
              "step": "Mix topping ingredients and spread evenly on the biscuit with a palette knife.",
              "ingredients": [
                {
                  "id": 18009,
                  "name": "biscuits",
                  "localizedName": "biscuits",
                  "image": "buttermilk-biscuits.jpg"
                },
                {
                  "id": 0,
                  "name": "spread",
                  "localizedName": "spread",
                  "image": ""
                }
              ],
              "equipment": [
                {
                  "id": 406915,
                  "name": "palette knife",
                  "localizedName": "palette knife",
                  "image": "https://spoonacular.com/cdn/equipment_100x100/palette-knife.jpg"
                }
              ]
            },
            {
              "number": 5,
              "step": "Bake for 15 minutes until golden.",
              "ingredients": [],
              "equipment": [
                {
                  "id": 404784,
                  "name": "oven",
                  "localizedName": "oven",
                  "image": "https://spoonacular.com/cdn/equipment_100x100/oven.jpg"
                }
              ],
              "length": {
                "number": 15,
                "unit": "minutes"
              }
            },
            {
              "number": 6,
              "step": "Remove cooked biscuit from the oven and leave to cool completely, then cut into bars.",
              "ingredients": [
                {
                  "id": 18009,
                  "name": "biscuits",
                  "localizedName": "biscuits",
                  "image": "buttermilk-biscuits.jpg"
                }
              ],
              "equipment": [
                {
                  "id": 404784,
                  "name": "oven",
                  "localizedName": "oven",
                  "image": "https://spoonacular.com/cdn/equipment_100x100/oven.jpg"
                }
              ]
            }
          ]
        }
      ],
      "originalId": null,
      "spoonacularScore": 30.2065258026123,
      "spoonacularSourceUrl": "https://spoonacular.com/almond-cookie-bar-632116"
    },
    {
      "id": 639125,
      "image": "https://img.spoonacular.com/recipes/639125-556x370.jpg",
      "imageType": "jpg",
      "title": "Chocolate Orange Madeleines",
      "readyInMinutes": 45,
      "servings": 8,
      "sourceUrl": "https://www.foodista.com/recipe/2R4XLSKW/chocolate-orange-madeleines",
      "vegetarian": true,
      "vegan": false,
      "glutenFree": false,
      "dairyFree": true,
      "veryHealthy": false,
      "cheap": false,
      "veryPopular": false,
      "sustainable": false,
      "lowFodmap": false,
      "weightWatcherSmartPoints": 10,
      "gaps": "no",
      "preparationMinutes": null,
      "cookingMinutes": null,
      "aggregateLikes": 3,
      "healthScore": 3,
      "creditsText": "Foodista.com – The Cooking Encyclopedia Everyone Can Edit",
      "license": "CC BY 3.0",
      "sourceName": "Foodista",
      "pricePerServing": 98.23,
      "extendedIngredients": [
        {
          "id": 20081,
          "aisle": "Baking",
          "image": "flour.png",
          "consistency": "SOLID",
          "name": "all purpose flour",
          "nameClean": "all purpose flour",
          "original": "1 cup of all purpose flour",
          "originalName": "all purpose flour",
          "amount": 1,
          "unit": "cup",
          "meta": [],
          "measures": {
            "us": {
              "amount": 1,
              "unitShort": "cup",
              "unitLong": "cup"
            },
            "metric": {
              "amount": 125,
              "unitShort": "g",
              "unitLong": "grams"
            }
          }
        },
        {
          "id": 18369,
          "aisle": "Baking",
          "image": "white-powder.jpg",
          "consistency": "SOLID",
          "name": "baking powder",
          "nameClean": "baking powder",
          "original": "1/4 teaspoon baking powder",
          "originalName": "baking powder",
          "amount": 0.25,
          "unit": "teaspoon",
          "meta": [],
          "measures": {
            "us": {
              "amount": 0.25,
              "unitShort": "tsps",
              "unitLong": "teaspoons"
            },
            "metric": {
              "amount": 0.25,
              "unitShort": "tsps",
              "unitLong": "teaspoons"
            }
          }
        },
        {
          "id": 19904,
          "aisle": "Sweet Snacks",
          "image": "dark-chocolate-pieces.jpg",
          "consistency": "SOLID",
          "name": "chocolate",
          "nameClean": "chocolate",
          "original": "7 ounces of chopped Dark chocolate",
          "originalName": "chopped Dark chocolate",
          "amount": 7,
          "unit": "ounces",
          "meta": [
            "dark",
            "chopped"
          ],
          "measures": {
            "us": {
              "amount": 7,
              "unitShort": "oz",
              "unitLong": "ounces"
            },
            "metric": {
              "amount": 198.447,
              "unitShort": "g",
              "unitLong": "grams"
            }
          }
        },
        {
          "id": 1123,
          "aisle": "Milk, Eggs, Other Dairy",
          "image": "egg.png",
          "consistency": "SOLID",
          "name": "eggs",
          "nameClean": "eggs",
          "original": "3 eggs",
          "originalName": "eggs",
          "amount": 3,
          "unit": "",
          "meta": [],
          "measures": {
            "us": {
              "amount": 3,
              "unitShort": "",
              "unitLong": ""
            },
            "metric": {
              "amount": 3,
              "unitShort": "",
              "unitLong": ""
            }
          }
        },
        {
          "id": 10719335,
          "aisle": "Baking",
          "image": "sugar-in-bowl.png",
          "consistency": "SOLID",
          "name": "granulated sugar",
          "nameClean": "granulated sugar",
          "original": "1/4 cup granulated sugar (for coating cookie press/bottom glass)",
          "originalName": "granulated sugar (for coating cookie press/bottom glass)",
          "amount": 0.25,
          "unit": "cup",
          "meta": [
            "(for coating cookie press/bottom glass)"
          ],
          "measures": {
            "us": {
              "amount": 0.25,
              "unitShort": "cups",
              "unitLong": "cups"
            },
            "metric": {
              "amount": 50,
              "unitShort": "g",
              "unitLong": "grams"
            }
          }
        },
        {
          "id": 9206,
          "aisle": "Beverages",
          "image": "orange-juice.jpg",
          "consistency": "LIQUID",
          "name": "orange juice",
          "nameClean": "orange juice",
          "original": "1 tablespoon orange juice ( use same orange )",
          "originalName": "orange juice ( use same orange )",
          "amount": 1,
          "unit": "tablespoon",
          "meta": [
            "( use same orange )"
          ],
          "measures": {
            "us": {
              "amount": 1,
              "unitShort": "Tbsp",
              "unitLong": "Tbsp"
            },
            "metric": {
              "amount": 1,
              "unitShort": "Tbsp",
              "unitLong": "Tbsp"
            }
          }
        },
        {
          "id": 9216,
          "aisle": "Produce",
          "image": "orange-zest.png",
          "consistency": "SOLID",
          "name": "orange zest",
          "nameClean": "orange zest",
          "original": "orange zest from 2 oranges",
          "originalName": "orange zest from oranges",
          "amount": 2,
          "unit": "",
          "meta": [],
          "measures": {
            "us": {
              "amount": 2,
              "unitShort": "",
              "unitLong": ""
            },
            "metric": {
              "amount": 2,
              "unitShort": "",
              "unitLong": ""
            }
          }
        },
        {
          "id": 1012047,
          "aisle": "Spices and Seasonings",
          "image": "salt.jpg",
          "consistency": "SOLID",
          "name": "sea salt",
          "nameClean": "sea salt",
          "original": "1/2 teaspoon of sea salt",
          "originalName": "sea salt",
          "amount": 0.5,
          "unit": "teaspoon",
          "meta": [],
          "measures": {
            "us": {
              "amount": 0.5,
              "unitShort": "tsps",
              "unitLong": "teaspoons"
            },
            "metric": {
              "amount": 0.5,
              "unitShort": "tsps",
              "unitLong": "teaspoons"
            }
          }
        }
      ],
      "summary": "Chocolate Orange Madeleines might be a good recipe to expand your dessert recipe box. One portion of this dish contains about \u003Cb\u003E6g of protein\u003C/b\u003E, \u003Cb\u003E12g of fat\u003C/b\u003E, and a total of \u003Cb\u003E257 calories\u003C/b\u003E. This recipe serves 8. For \u003Cb\u003E98 cents per serving\u003C/b\u003E, this recipe \u003Cb\u003Ecovers 9%\u003C/b\u003E of your daily requirements of vitamins and minerals. Head to the store and pick up orange juice, orange zest, chocolate, and a few other things to make it today. This recipe is liked by 3 foodies and cooks. From preparation to the plate, this recipe takes approximately \u003Cb\u003E45 minutes\u003C/b\u003E. It is brought to you by Foodista. It is a good option if you're following a \u003Cb\u003Edairy free and lacto ovo vegetarian\u003C/b\u003E diet. All things considered, we decided this recipe \u003Cb\u003Edeserves a spoonacular score of 32%\u003C/b\u003E. This score is rather bad. If you like this recipe, take a look at these similar recipes: \u003Ca href=\"https://spoonacular.com/recipes/blood-orange-dark-chocolate-madeleines-1094273\"\u003EBlood orange & dark chocolate madeleines\u003C/a\u003E, \u003Ca href=\"https://spoonacular.com/recipes/orange-madeleines-81184\"\u003EOrange Madeleines\u003C/a\u003E, and \u003Ca href=\"https://spoonacular.com/recipes/orange-madeleines-556010\"\u003EOrange Madeleines\u003C/a\u003E.",
      "cuisines": [],
      "dishTypes": [
        "dessert"
      ],
      "diets": [
        "dairy free",
        "lacto ovo vegetarian"
      ],
      "occasions": [],
      "instructions": "\u003Col\u003E\u003Cli\u003EPreheat the oven to 374F.\u003C/li\u003E\u003Cli\u003EGenerously grease and liberally flour a madeleine cookie tin.\u003C/li\u003E\u003Cli\u003EIn a small bowl, combine the flour, baking Powder and salt.\u003C/li\u003E\u003Cli\u003EWhisk together and set aside.\u003C/li\u003E\u003Cli\u003EIn a medium bowl, Beat the sugar and eggs on medium/high speed until the volume triples in size. This may take several minutes and you should have a beautiful thick 'ribbon' of batter when you lift the beaters out of the bowl.\u003C/li\u003E\u003Cli\u003EStir in the orange juice and orange zest.\u003C/li\u003E\u003Cli\u003EBeginning with the flour mixture, alternate adding to the egg/sugar batter with the melted butter.\u003C/li\u003E\u003Cli\u003EMix only until just combined. Refrigerate for about 45 minutes to an hour.\u003C/li\u003E\u003Cli\u003EDrop by rounded teaspoon fulls into center of the madeleine molds.\u003C/li\u003E\u003Cli\u003ELeave the batter mounded, don't spread it out.\u003C/li\u003E\u003Cli\u003EI found that I had to add more than a teaspoon, so adjust accordingly for the size of your mold. Don't worry if the dough does not fill out the entire mold. The cookies will take on the pretty pattern regardless of how big they become.\u003C/li\u003E\u003Cli\u003EBake for 10 -12 minutes or until the edges just start to turn gold and the center of the cookies spring back when lightly touched.\u003C/li\u003E\u003Cli\u003ERemove from oven and immediately tap the tin on the counter to loosen the cookies.\u003C/li\u003E\u003Cli\u003ECarefully remove the cookies and allow them to cool completely.\u003C/li\u003E\u003Cli\u003EPrepare the chocolate: Melt the chocolate in a saucepan and pour into a deep dish or cup with a wide mouth. Dip half or 1/4 of each cookie into the chocolate and place on a piece of parchment paper until the chocolate is set.\u003C/li\u003E\u003C/ol\u003E",
      "analyzedInstructions": [
        {
          "name": "",
          "steps": [
            {
              "number": 1,
              "step": "Preheat the oven to 374F.Generously grease and liberally flour a madeleine cookie tin.In a small bowl, combine the flour, baking Powder and salt.",
              "ingredients": [
                {
                  "id": 0,
                  "name": "madeleine",
                  "localizedName": "madeleine",
                  "image": "shortbread-cookies.jpg"
                },
                {
                  "id": 18369,
                  "name": "baking powder",
                  "localizedName": "baking powder",
                  "image": "white-powder.jpg"
                },
                {
                  "id": 20081,
                  "name": "all purpose flour",
                  "localizedName": "all purpose flour",
                  "image": "flour.png"
                },
                {
                  "id": 2047,
                  "name": "salt",
                  "localizedName": "salt",
                  "image": "salt.jpg"
                }
              ],
              "equipment": [
                {
                  "id": 404783,
                  "name": "bowl",
                  "localizedName": "bowl",
                  "image": "https://spoonacular.com/cdn/equipment_100x100/bowl.jpg"
                },
                {
                  "id": 404784,
                  "name": "oven",
                  "localizedName": "oven",
                  "image": "https://spoonacular.com/cdn/equipment_100x100/oven.jpg",
                  "temperature": {
                    "number": 374,
                    "unit": "Fahrenheit"
                  }
                }
              ]
            },
            {
              "number": 2,
              "step": "Whisk together and set aside.In a medium bowl, Beat the sugar and eggs on medium/high speed until the volume triples in size. This may take several minutes and you should have a beautiful thick 'ribbon' of batter when you lift the beaters out of the bowl.Stir in the orange juice and orange zest.Beginning with the flour mixture, alternate adding to the egg/sugar batter with the melted butter.",
              "ingredients": [
                {
                  "id": 9206,
                  "name": "orange juice",
                  "localizedName": "orange juice",
                  "image": "orange-juice.jpg"
                },
                {
                  "id": 9216,
                  "name": "orange zest",
                  "localizedName": "orange zest",
                  "image": "orange-zest.png"
                },
                {
                  "id": 1001,
                  "name": "butter",
                  "localizedName": "butter",
                  "image": "butter-sliced.jpg"
                },
                {
                  "id": 20081,
                  "name": "all purpose flour",
                  "localizedName": "all purpose flour",
                  "image": "flour.png"
                },
                {
                  "id": 19335,
                  "name": "sugar",
                  "localizedName": "sugar",
                  "image": "sugar-in-bowl.png"
                },
                {
                  "id": 1123,
                  "name": "egg",
                  "localizedName": "egg",
                  "image": "egg.png"
                }
              ],
              "equipment": [
                {
                  "id": 404661,
                  "name": "whisk",
                  "localizedName": "whisk",
                  "image": "https://spoonacular.com/cdn/equipment_100x100/whisk.png"
                },
                {
                  "id": 404783,
                  "name": "bowl",
                  "localizedName": "bowl",
                  "image": "https://spoonacular.com/cdn/equipment_100x100/bowl.jpg"
                }
              ]
            },
            {
              "number": 3,
              "step": "Mix only until just combined. Refrigerate for about 45 minutes to an hour.Drop by rounded teaspoon fulls into center of the madeleine molds.Leave the batter mounded, don't spread it out.I found that I had to add more than a teaspoon, so adjust accordingly for the size of your mold. Don't worry if the dough does not fill out the entire mold. The cookies will take on the pretty pattern regardless of how big they become.",
              "ingredients": [
                {
                  "id": 0,
                  "name": "madeleine",
                  "localizedName": "madeleine",
                  "image": "shortbread-cookies.jpg"
                },
                {
                  "id": 10118192,
                  "name": "cookies",
                  "localizedName": "cookies",
                  "image": "https://spoonacular.com/cdn/ingredients_100x100/shortbread-cookies.jpg"
                },
                {
                  "id": 0,
                  "name": "spread",
                  "localizedName": "spread",
                  "image": ""
                },
                {
                  "id": 0,
                  "name": "dough",
                  "localizedName": "dough",
                  "image": "pizza-dough"
                }
              ],
              "equipment": [],
              "length": {
                "number": 45,
                "unit": "minutes"
              }
            },
            {
              "number": 4,
              "step": "Bake for 10 -12 minutes or until the edges just start to turn gold and the center of the cookies spring back when lightly touched.",
              "ingredients": [
                {
                  "id": 10118192,
                  "name": "cookies",
                  "localizedName": "cookies",
                  "image": "https://spoonacular.com/cdn/ingredients_100x100/shortbread-cookies.jpg"
                }
              ],
              "equipment": [
                {
                  "id": 404784,
                  "name": "oven",
                  "localizedName": "oven",
                  "image": "https://spoonacular.com/cdn/equipment_100x100/oven.jpg"
                }
              ],
              "length": {
                "number": 12,
                "unit": "minutes"
              }
            },
            {
              "number": 5,
              "step": "Remove from oven and immediately tap the tin on the counter to loosen the cookies.Carefully remove the cookies and allow them to cool completely.Prepare the chocolate: Melt the chocolate in a saucepan and pour into a deep dish or cup with a wide mouth. Dip half or 1/4 of each cookie into the chocolate and place on a piece of parchment paper until the chocolate is set.",
              "ingredients": [
                {
                  "id": 19081,
                  "name": "chocolate",
                  "localizedName": "chocolate",
                  "image": "milk-chocolate.jpg"
                },
                {
                  "id": 10118192,
                  "name": "cookies",
                  "localizedName": "cookies",
                  "image": "https://spoonacular.com/cdn/ingredients_100x100/shortbread-cookies.jpg"
                },
                {
                  "id": 0,
                  "name": "dip",
                  "localizedName": "dip",
                  "image": ""
                }
              ],
              "equipment": [
                {
                  "id": 404770,
                  "name": "baking paper",
                  "localizedName": "baking paper",
                  "image": "https://spoonacular.com/cdn/equipment_100x100/baking-paper.jpg"
                },
                {
                  "id": 404669,
                  "name": "sauce pan",
                  "localizedName": "sauce pan",
                  "image": "https://spoonacular.com/cdn/equipment_100x100/sauce-pan.jpg"
                },
                {
                  "id": 404784,
                  "name": "oven",
                  "localizedName": "oven",
                  "image": "https://spoonacular.com/cdn/equipment_100x100/oven.jpg"
                }
              ]
            }
          ]
        }
      ],
      "originalId": null,
      "spoonacularScore": 38.7526321411133,
      "spoonacularSourceUrl": "https://spoonacular.com/chocolate-orange-madeleines-639125"
    },
    {
      "id": 663832,
      "image": "https://img.spoonacular.com/recipes/663832-556x370.jpg",
      "imageType": "jpg",
      "title": "Triple Chocolate Pumpkin Pie",
      "readyInMinutes": 45,
      "servings": 12,
      "sourceUrl": "https://www.foodista.com/recipe/2X4J3PMC/triple-chocolate-pumpkin-pie",
      "vegetarian": false,
      "vegan": false,
      "glutenFree": false,
      "dairyFree": false,
      "veryHealthy": false,
      "cheap": false,
      "veryPopular": false,
      "sustainable": false,
      "lowFodmap": false,
      "weightWatcherSmartPoints": 18,
      "gaps": "no",
      "preparationMinutes": null,
      "cookingMinutes": null,
      "aggregateLikes": 9,
      "healthScore": 4,
      "creditsText": "Foodista.com – The Cooking Encyclopedia Everyone Can Edit",
      "license": "CC BY 3.0",
      "sourceName": "Foodista",
      "pricePerServing": 121.68,
      "extendedIngredients": [
        {
          "id": 10018617,
          "aisle": "Sweet Snacks",
          "image": "graham-crackers.jpg",
          "consistency": "SOLID",
          "name": "ground graham cracker crumbs",
          "nameClean": "ground graham cracker crumbs",
          "original": "2 cups finely ground graham cracker crumbs (about 16 crackers)",
          "originalName": "finely ground graham cracker crumbs (about 16 crackers)",
          "amount": 2,
          "unit": "cups",
          "meta": [
            "finely",
            "( 16 crackers)"
          ],
          "measures": {
            "us": {
              "amount": 2,
              "unitShort": "cups",
              "unitLong": "cups"
            },
            "metric": {
              "amount": 168,
              "unitShort": "ml",
              "unitLong": "milliliters"
            }
          }
        },
        {
          "id": 1145,
          "aisle": "Milk, Eggs, Other Dairy",
          "image": "butter-sliced.jpg",
          "consistency": "SOLID",
          "name": "butter",
          "nameClean": "butter",
          "original": "3 ounces (6 tablespoons) unsalted butter, melted",
          "originalName": "ounces unsalted butter, melted",
          "amount": 6,
          "unit": "tablespoons",
          "meta": [
            "unsalted",
            "melted"
          ],
          "measures": {
            "us": {
              "amount": 6,
              "unitShort": "Tbsps",
              "unitLong": "Tbsps"
            },
            "metric": {
              "amount": 6,
              "unitShort": "Tbsps",
              "unitLong": "Tbsps"
            }
          }
        },
        {
          "id": 10719335,
          "aisle": "Baking",
          "image": "sugar-in-bowl.png",
          "consistency": "SOLID",
          "name": "granulated sugar",
          "nameClean": "granulated sugar",
          "original": "1 tablespoon granulated sugar",
          "originalName": "granulated sugar",
          "amount": 1,
          "unit": "tablespoon",
          "meta": [],
          "measures": {
            "us": {
              "amount": 1,
              "unitShort": "Tbsp",
              "unitLong": "Tbsp"
            },
            "metric": {
              "amount": 1,
              "unitShort": "Tbsp",
              "unitLong": "Tbsp"
            }
          }
        },
        {
          "id": 19334,
          "aisle": "Baking",
          "image": "light-brown-sugar.jpg",
          "consistency": "SOLID",
          "name": "light-brown sugar",
          "nameClean": "light-brown sugar",
          "original": "2 tablespoons packed light-brown sugar",
          "originalName": "packed light-brown sugar",
          "amount": 2,
          "unit": "tablespoons",
          "meta": [
            "packed"
          ],
          "measures": {
            "us": {
              "amount": 2,
              "unitShort": "Tbsps",
              "unitLong": "Tbsps"
            },
            "metric": {
              "amount": 2,
              "unitShort": "Tbsps",
              "unitLong": "Tbsps"
            }
          }
        },
        {
          "id": 1002047,
          "aisle": "Spices and Seasonings",
          "image": "salt.jpg",
          "consistency": "SOLID",
          "name": "coarse salt",
          "nameClean": "coarse salt",
          "original": "1/2 teaspoon coarse salt",
          "originalName": "coarse salt",
          "amount": 0.5,
          "unit": "teaspoon",
          "meta": [],
          "measures": {
            "us": {
              "amount": 0.5,
              "unitShort": "tsps",
              "unitLong": "teaspoons"
            },
            "metric": {
              "amount": 0.5,
              "unitShort": "tsps",
              "unitLong": "teaspoons"
            }
          }
        },
        {
          "id": 1012010,
          "aisle": "Spices and Seasonings",
          "image": "cinnamon.jpg",
          "consistency": "SOLID",
          "name": "ground cinnamon",
          "nameClean": "ground cinnamon",
          "original": "1/2 teaspoon ground cinnamon",
          "originalName": "ground cinnamon",
          "amount": 0.5,
          "unit": "teaspoon",
          "meta": [],
          "measures": {
            "us": {
              "amount": 0.5,
              "unitShort": "tsps",
              "unitLong": "teaspoons"
            },
            "metric": {
              "amount": 0.5,
              "unitShort": "tsps",
              "unitLong": "teaspoons"
            }
          }
        },
        {
          "id": 19903,
          "aisle": "Sweet Snacks",
          "image": "dark-chocolate-pieces.jpg",
          "consistency": "SOLID",
          "name": "bittersweet chocolate",
          "nameClean": "bittersweet chocolate",
          "original": "3 ounces bittersweet chocolate (preferably 61 percent cacao), finely chopped",
          "originalName": "bittersweet chocolate (preferably 61 percent cacao), finely chopped",
          "amount": 3,
          "unit": "ounces",
          "meta": [
            "finely chopped",
            "(preferably 61 percent cacao)"
          ],
          "measures": {
            "us": {
              "amount": 3,
              "unitShort": "oz",
              "unitLong": "ounces"
            },
            "metric": {
              "amount": 85.049,
              "unitShort": "g",
              "unitLong": "grams"
            }
          }
        },
        {
          "id": 19903,
          "aisle": "Sweet Snacks",
          "image": "dark-chocolate-pieces.jpg",
          "consistency": "SOLID",
          "name": "semisweet chocolate",
          "nameClean": "semisweet chocolate",
          "original": "6 ounces semisweet chocolate (preferably 55 percent cacao), chopped",
          "originalName": "semisweet chocolate (preferably 55 percent cacao), chopped",
          "amount": 6,
          "unit": "ounces",
          "meta": [
            "chopped",
            "(preferably 55 percent cacao)"
          ],
          "measures": {
            "us": {
              "amount": 6,
              "unitShort": "oz",
              "unitLong": "ounces"
            },
            "metric": {
              "amount": 170.097,
              "unitShort": "g",
              "unitLong": "grams"
            }
          }
        },
        {
          "id": 1145,
          "aisle": "Milk, Eggs, Other Dairy",
          "image": "butter-sliced.jpg",
          "consistency": "SOLID",
          "name": "butter",
          "nameClean": "butter",
          "original": "2 ounces (4 tablespoons) unsalted butter, cut into small pieces",
          "originalName": "ounces unsalted butter, cut into small pieces",
          "amount": 4,
          "unit": "tablespoons",
          "meta": [
            "unsalted",
            "cut into small pieces"
          ],
          "measures": {
            "us": {
              "amount": 4,
              "unitShort": "Tbsps",
              "unitLong": "Tbsps"
            },
            "metric": {
              "amount": 4,
              "unitShort": "Tbsps",
              "unitLong": "Tbsps"
            }
          }
        },
        {
          "id": 11424,
          "aisle": "Baking",
          "image": "pumpkin-puree.jpg",
          "consistency": "SOLID",
          "name": "solid-pack pumpkin",
          "nameClean": "solid-pack pumpkin",
          "original": "1 can (15 ounces) solid-pack pumpkin",
          "originalName": "can solid-pack pumpkin",
          "amount": 15,
          "unit": "ounces",
          "meta": [
            "canned"
          ],
          "measures": {
            "us": {
              "amount": 15,
              "unitShort": "oz",
              "unitLong": "ounces"
            },
            "metric": {
              "amount": 425.243,
              "unitShort": "g",
              "unitLong": "grams"
            }
          }
        },
        {
          "id": 1214,
          "aisle": "Baking",
          "image": "evaporated-milk.png",
          "consistency": "SOLID",
          "name": "evaporated milk",
          "nameClean": "evaporated milk",
          "original": "1 can (12 ounces) evaporated milk",
          "originalName": "can evaporated milk",
          "amount": 12,
          "unit": "ounces",
          "meta": [
            "canned"
          ],
          "measures": {
            "us": {
              "amount": 12,
              "unitShort": "oz",
              "unitLong": "ounces"
            },
            "metric": {
              "amount": 340.194,
              "unitShort": "g",
              "unitLong": "grams"
            }
          }
        },
        {
          "id": 19334,
          "aisle": "Baking",
          "image": "light-brown-sugar.jpg",
          "consistency": "SOLID",
          "name": "light-brown sugar",
          "nameClean": "light-brown sugar",
          "original": "3/4 cup packed light-brown sugar",
          "originalName": "packed light-brown sugar",
          "amount": 0.75,
          "unit": "cup",
          "meta": [
            "packed"
          ],
          "measures": {
            "us": {
              "amount": 0.75,
              "unitShort": "cups",
              "unitLong": "cups"
            },
            "metric": {
              "amount": 165,
              "unitShort": "g",
              "unitLong": "grams"
            }
          }
        },
        {
          "id": 1123,
          "aisle": "Milk, Eggs, Other Dairy",
          "image": "egg.png",
          "consistency": "SOLID",
          "name": "eggs",
          "nameClean": "eggs",
          "original": "3 large eggs",
          "originalName": "eggs",
          "amount": 3,
          "unit": "large",
          "meta": [],
          "measures": {
            "us": {
              "amount": 3,
              "unitShort": "large",
              "unitLong": "larges"
            },
            "metric": {
              "amount": 3,
              "unitShort": "large",
              "unitLong": "larges"
            }
          }
        },
        {
          "id": 20027,
          "aisle": "Baking",
          "image": "white-powder.jpg",
          "consistency": "SOLID",
          "name": "cornstarch",
          "nameClean": "cornstarch",
          "original": "1 tablespoon cornstarch",
          "originalName": "cornstarch",
          "amount": 1,
          "unit": "tablespoon",
          "meta": [],
          "measures": {
            "us": {
              "amount": 1,
              "unitShort": "Tbsp",
              "unitLong": "Tbsp"
            },
            "metric": {
              "amount": 1,
              "unitShort": "Tbsp",
              "unitLong": "Tbsp"
            }
          }
        },
        {
          "id": 2050,
          "aisle": "Baking",
          "image": "vanilla-extract.jpg",
          "consistency": "LIQUID",
          "name": "vanilla extract",
          "nameClean": "vanilla extract",
          "original": "1 teaspoon pure vanilla extract",
          "originalName": "pure vanilla extract",
          "amount": 1,
          "unit": "teaspoon",
          "meta": [
            "pure"
          ],
          "measures": {
            "us": {
              "amount": 1,
              "unitShort": "tsp",
              "unitLong": "teaspoon"
            },
            "metric": {
              "amount": 1,
              "unitShort": "tsp",
              "unitLong": "teaspoon"
            }
          }
        },
        {
          "id": 1002047,
          "aisle": "Spices and Seasonings",
          "image": "salt.jpg",
          "consistency": "SOLID",
          "name": "coarse salt",
          "nameClean": "coarse salt",
          "original": "1 1/2 teaspoons coarse salt",
          "originalName": "coarse salt",
          "amount": 1.5,
          "unit": "teaspoons",
          "meta": [],
          "measures": {
            "us": {
              "amount": 1.5,
              "unitShort": "tsps",
              "unitLong": "teaspoons"
            },
            "metric": {
              "amount": 1.5,
              "unitShort": "tsps",
              "unitLong": "teaspoons"
            }
          }
        },
        {
          "id": 1012010,
          "aisle": "Spices and Seasonings",
          "image": "cinnamon.jpg",
          "consistency": "SOLID",
          "name": "ground cinnamon",
          "nameClean": "ground cinnamon",
          "original": "3/4 teaspoon ground cinnamon",
          "originalName": "ground cinnamon",
          "amount": 0.75,
          "unit": "teaspoon",
          "meta": [],
          "measures": {
            "us": {
              "amount": 0.75,
              "unitShort": "tsps",
              "unitLong": "teaspoons"
            },
            "metric": {
              "amount": 0.75,
              "unitShort": "tsps",
              "unitLong": "teaspoons"
            }
          }
        },
        {
          "id": 2021,
          "aisle": "Spices and Seasonings",
          "image": "ginger.png",
          "consistency": "SOLID",
          "name": "ground ginger",
          "nameClean": "ground ginger",
          "original": "3/4 teaspoon ground ginger",
          "originalName": "ground ginger",
          "amount": 0.75,
          "unit": "teaspoon",
          "meta": [],
          "measures": {
            "us": {
              "amount": 0.75,
              "unitShort": "tsps",
              "unitLong": "teaspoons"
            },
            "metric": {
              "amount": 0.75,
              "unitShort": "tsps",
              "unitLong": "teaspoons"
            }
          }
        },
        {
          "id": 2025,
          "aisle": "Spices and Seasonings",
          "image": "ground-nutmeg.jpg",
          "consistency": "SOLID",
          "name": "ground nutmeg",
          "nameClean": "ground nutmeg",
          "original": "1/4 teaspoon ground nutmeg",
          "originalName": "ground nutmeg",
          "amount": 0.25,
          "unit": "teaspoon",
          "meta": [],
          "measures": {
            "us": {
              "amount": 0.25,
              "unitShort": "tsps",
              "unitLong": "teaspoons"
            },
            "metric": {
              "amount": 0.25,
              "unitShort": "tsps",
              "unitLong": "teaspoons"
            }
          }
        },
        {
          "id": 19081,
          "aisle": "Sweet Snacks",
          "image": "milk-chocolate.jpg",
          "consistency": "SOLID",
          "name": "milk chocolate",
          "nameClean": "milk chocolate",
          "original": "1 ounce milk chocolate, melted",
          "originalName": "milk chocolate, melted",
          "amount": 1,
          "unit": "ounce",
          "meta": [
            "melted"
          ],
          "measures": {
            "us": {
              "amount": 1,
              "unitShort": "oz",
              "unitLong": "ounce"
            },
            "metric": {
              "amount": 28.35,
              "unitShort": "g",
              "unitLong": "grams"
            }
          }
        },
        {
          "id": -1,
          "aisle": "?",
          "image": null,
          "consistency": "SOLID",
          "name": "ground",
          "nameClean": "ground",
          "original": "Ground cloves",
          "originalName": "Ground",
          "amount": 1,
          "unit": "cloves",
          "meta": [],
          "measures": {
            "us": {
              "amount": 1,
              "unitShort": "cloves",
              "unitLong": "clove"
            },
            "metric": {
              "amount": 1,
              "unitShort": "cloves",
              "unitLong": "clove"
            }
          }
        }
      ],
      "summary": "Triple Chocolate Pumpkin Pie might be just the dessert you are searching for. This recipe serves 12 and costs $1.22 per serving. One portion of this dish contains approximately \u003Cb\u003E6g of protein\u003C/b\u003E, \u003Cb\u003E23g of fat\u003C/b\u003E, and a total of \u003Cb\u003E415 calories\u003C/b\u003E. 9 people have made this recipe and would make it again. Head to the store and pick up butter, ground, milk chocolate, and a few other things to make it today. It is brought to you by Foodista. It is perfect for \u003Cb\u003EThanksgiving\u003C/b\u003E. From preparation to the plate, this recipe takes around \u003Cb\u003E45 minutes\u003C/b\u003E. Overall, this recipe earns a \u003Cb\u003Erather bad spoonacular score of 37%\u003C/b\u003E. Similar recipes include \u003Ca href=\"https://spoonacular.com/recipes/triple-chocolate-pumpkin-pie-24660\"\u003ETriple-chocolate Pumpkin Pie\u003C/a\u003E, \u003Ca href=\"https://spoonacular.com/recipes/triple-chocolate-pumpkin-pie-247792\"\u003ETriple Chocolate Pumpkin Pie\u003C/a\u003E, and \u003Ca href=\"https://spoonacular.com/recipes/triple-chocolate-pumpkin-pie-571283\"\u003ETriple Chocolate Pumpkin Pie\u003C/a\u003E.",
      "cuisines": [],
      "dishTypes": [
        "dessert"
      ],
      "diets": [],
      "occasions": [
        "thanksgiving"
      ],
      "instructions": "Make the crust: Preheat oven to 350 degrees. Combine graham cracker crumbs, butter, sugars, salt, and cinnamon in bowl. Firmly press mixture into bottom and up sides of a deep, 9 1/2-inch pie dish. Bake until firm, 8 to 10 minutes.\nRemove from oven, and sprinkle bittersweet chocolate over bottom of crust. Return to oven to melt chocolate, about 1 minute. Spread chocolate in a thin layer on bottom and up sides. Let cool on a wire rack. Reduce oven temperature to 325 degrees.\nMake the filling: In a large heatproof bowl set over a pot of simmering water, melt semisweet chocolate and butter, stirring until smooth. Remove from heat.\nMix pumpkin, milk, brown sugar, eggs, cornstarch, vanilla, salt, cinnamon, ginger, nutmeg, and a pinch of cloves in a medium bowl. Whisk 1/3 pumpkin mixture into chocolate mixture. Whisk in remaining pumpkin mixture until completely incorporated.\nTransfer pie dish to a rimmed baking sheet, and pour pumpkin mixture into crust. Bake until center is set but still a bit wobbly, 55 to 60 minutes. Let cool in pie dish on a wire rack. Refrigerate until well chilled, at least 8 hours (preferably overnight). Before serving, drizzle melted milk chocolate on top. Serve immediately.",
      "analyzedInstructions": [
        {
          "name": "",
          "steps": [
            {
              "number": 1,
              "step": "Make the crust: Preheat oven to 350 degrees.",
              "ingredients": [
                {
                  "id": 0,
                  "name": "crust",
                  "localizedName": "crust",
                  "image": ""
                }
              ],
              "equipment": [
                {
                  "id": 404784,
                  "name": "oven",
                  "localizedName": "oven",
                  "image": "https://spoonacular.com/cdn/equipment_100x100/oven.jpg"
                }
              ]
            },
            {
              "number": 2,
              "step": "Combine graham cracker crumbs, butter, sugars, salt, and cinnamon in bowl. Firmly press mixture into bottom and up sides of a deep, 9 1/2-inch pie dish.",
              "ingredients": [
                {
                  "id": 10018617,
                  "name": "graham cracker crumbs",
                  "localizedName": "graham cracker crumbs",
                  "image": "graham-crackers.jpg"
                },
                {
                  "id": 2010,
                  "name": "cinnamon",
                  "localizedName": "cinnamon",
                  "image": "https://spoonacular.com/cdn/ingredients_100x100/cinnamon.jpg"
                },
                {
                  "id": 1001,
                  "name": "butter",
                  "localizedName": "butter",
                  "image": "butter-sliced.jpg"
                },
                {
                  "id": 2047,
                  "name": "salt",
                  "localizedName": "salt",
                  "image": "salt.jpg"
                }
              ],
              "equipment": [
                {
                  "id": 405915,
                  "name": "pie form",
                  "localizedName": "pie form",
                  "image": "https://spoonacular.com/cdn/equipment_100x100/pie-pan.png"
                },
                {
                  "id": 404783,
                  "name": "bowl",
                  "localizedName": "bowl",
                  "image": "https://spoonacular.com/cdn/equipment_100x100/bowl.jpg"
                }
              ]
            },
            {
              "number": 3,
              "step": "Bake until firm, 8 to 10 minutes.",
              "ingredients": [],
              "equipment": [
                {
                  "id": 404784,
                  "name": "oven",
                  "localizedName": "oven",
                  "image": "https://spoonacular.com/cdn/equipment_100x100/oven.jpg"
                }
              ],
              "length": {
                "number": 8,
                "unit": "minutes"
              }
            },
            {
              "number": 4,
              "step": "Remove from oven, and sprinkle bittersweet chocolate over bottom of crust. Return to oven to melt chocolate, about 1 minute.",
              "ingredients": [
                {
                  "id": 19903,
                  "name": "bittersweet chocolate",
                  "localizedName": "bittersweet chocolate",
                  "image": "dark-chocolate-pieces.jpg"
                },
                {
                  "id": 19081,
                  "name": "chocolate",
                  "localizedName": "chocolate",
                  "image": "milk-chocolate.jpg"
                },
                {
                  "id": 0,
                  "name": "crust",
                  "localizedName": "crust",
                  "image": ""
                }
              ],
              "equipment": [
                {
                  "id": 404784,
                  "name": "oven",
                  "localizedName": "oven",
                  "image": "https://spoonacular.com/cdn/equipment_100x100/oven.jpg"
                }
              ],
              "length": {
                "number": 1,
                "unit": "minutes"
              }
            },
            {
              "number": 5,
              "step": "Spread chocolate in a thin layer on bottom and up sides.",
              "ingredients": [
                {
                  "id": 19081,
                  "name": "chocolate",
                  "localizedName": "chocolate",
                  "image": "milk-chocolate.jpg"
                },
                {
                  "id": 0,
                  "name": "spread",
                  "localizedName": "spread",
                  "image": ""
                }
              ],
              "equipment": []
            },
            {
              "number": 6,
              "step": "Let cool on a wire rack. Reduce oven temperature to 325 degrees.",
              "ingredients": [],
              "equipment": [
                {
                  "id": 405900,
                  "name": "wire rack",
                  "localizedName": "wire rack",
                  "image": "https://spoonacular.com/cdn/equipment_100x100/wire-rack.jpg"
                },
                {
                  "id": 404784,
                  "name": "oven",
                  "localizedName": "oven",
                  "image": "https://spoonacular.com/cdn/equipment_100x100/oven.jpg"
                }
              ]
            },
            {
              "number": 7,
              "step": "Make the filling: In a large heatproof bowl set over a pot of simmering water, melt semisweet chocolate and butter, stirring until smooth.",
              "ingredients": [
                {
                  "id": 19903,
                  "name": "semisweet chocolate",
                  "localizedName": "semisweet chocolate",
                  "image": "dark-chocolate-pieces.jpg"
                },
                {
                  "id": 1001,
                  "name": "butter",
                  "localizedName": "butter",
                  "image": "butter-sliced.jpg"
                },
                {
                  "id": 14412,
                  "name": "water",
                  "localizedName": "water",
                  "image": "water.png"
                }
              ],
              "equipment": [
                {
                  "id": 404783,
                  "name": "bowl",
                  "localizedName": "bowl",
                  "image": "https://spoonacular.com/cdn/equipment_100x100/bowl.jpg"
                },
                {
                  "id": 404752,
                  "name": "pot",
                  "localizedName": "pot",
                  "image": "https://spoonacular.com/cdn/equipment_100x100/stock-pot.jpg"
                }
              ]
            },
            {
              "number": 8,
              "step": "Remove from heat.",
              "ingredients": [],
              "equipment": []
            },
            {
              "number": 9,
              "step": "Mix pumpkin, milk, brown sugar, eggs, cornstarch, vanilla, salt, cinnamon, ginger, nutmeg, and a pinch of cloves in a medium bowl.",
              "ingredients": [
                {
                  "id": 19334,
                  "name": "brown sugar",
                  "localizedName": "brown sugar",
                  "image": "dark-brown-sugar.png"
                },
                {
                  "id": 20027,
                  "name": "corn starch",
                  "localizedName": "corn starch",
                  "image": "white-powder.jpg"
                },
                {
                  "id": 2010,
                  "name": "cinnamon",
                  "localizedName": "cinnamon",
                  "image": "https://spoonacular.com/cdn/ingredients_100x100/cinnamon.jpg"
                },
                {
                  "id": 11422,
                  "name": "pumpkin",
                  "localizedName": "pumpkin",
                  "image": "pumpkin.png"
                },
                {
                  "id": 1052050,
                  "name": "vanilla",
                  "localizedName": "vanilla",
                  "image": "vanilla.jpg"
                },
                {
                  "id": 1002011,
                  "name": "clove",
                  "localizedName": "clove",
                  "image": "cloves.jpg"
                },
                {
                  "id": 11216,
                  "name": "ginger",
                  "localizedName": "ginger",
                  "image": "ginger.png"
                },
                {
                  "id": 2025,
                  "name": "nutmeg",
                  "localizedName": "nutmeg",
                  "image": "ground-nutmeg.jpg"
                },
                {
                  "id": 1123,
                  "name": "egg",
                  "localizedName": "egg",
                  "image": "egg.png"
                },
                {
                  "id": 1077,
                  "name": "milk",
                  "localizedName": "milk",
                  "image": "milk.png"
                },
                {
                  "id": 2047,
                  "name": "salt",
                  "localizedName": "salt",
                  "image": "salt.jpg"
                }
              ],
              "equipment": [
                {
                  "id": 404783,
                  "name": "bowl",
                  "localizedName": "bowl",
                  "image": "https://spoonacular.com/cdn/equipment_100x100/bowl.jpg"
                }
              ]
            },
            {
              "number": 10,
              "step": "Whisk 1/3 pumpkin mixture into chocolate mixture.",
              "ingredients": [
                {
                  "id": 19081,
                  "name": "chocolate",
                  "localizedName": "chocolate",
                  "image": "milk-chocolate.jpg"
                },
                {
                  "id": 11422,
                  "name": "pumpkin",
                  "localizedName": "pumpkin",
                  "image": "pumpkin.png"
                }
              ],
              "equipment": [
                {
                  "id": 404661,
                  "name": "whisk",
                  "localizedName": "whisk",
                  "image": "https://spoonacular.com/cdn/equipment_100x100/whisk.png"
                }
              ]
            },
            {
              "number": 11,
              "step": "Whisk in remaining pumpkin mixture until completely incorporated.",
              "ingredients": [
                {
                  "id": 11422,
                  "name": "pumpkin",
                  "localizedName": "pumpkin",
                  "image": "pumpkin.png"
                }
              ],
              "equipment": [
                {
                  "id": 404661,
                  "name": "whisk",
                  "localizedName": "whisk",
                  "image": "https://spoonacular.com/cdn/equipment_100x100/whisk.png"
                }
              ]
            },
            {
              "number": 12,
              "step": "Transfer pie dish to a rimmed baking sheet, and pour pumpkin mixture into crust.",
              "ingredients": [
                {
                  "id": 11422,
                  "name": "pumpkin",
                  "localizedName": "pumpkin",
                  "image": "pumpkin.png"
                },
                {
                  "id": 0,
                  "name": "crust",
                  "localizedName": "crust",
                  "image": ""
                }
              ],
              "equipment": [
                {
                  "id": 404727,
                  "name": "baking sheet",
                  "localizedName": "baking sheet",
                  "image": "https://spoonacular.com/cdn/equipment_100x100/baking-sheet.jpg"
                },
                {
                  "id": 405915,
                  "name": "pie form",
                  "localizedName": "pie form",
                  "image": "https://spoonacular.com/cdn/equipment_100x100/pie-pan.png"
                }
              ]
            },
            {
              "number": 13,
              "step": "Bake until center is set but still a bit wobbly, 55 to 60 minutes.",
              "ingredients": [],
              "equipment": [
                {
                  "id": 404784,
                  "name": "oven",
                  "localizedName": "oven",
                  "image": "https://spoonacular.com/cdn/equipment_100x100/oven.jpg"
                }
              ],
              "length": {
                "number": 55,
                "unit": "minutes"
              }
            },
            {
              "number": 14,
              "step": "Let cool in pie dish on a wire rack. Refrigerate until well chilled, at least 8 hours (preferably overnight). Before serving, drizzle melted milk chocolate on top.",
              "ingredients": [
                {
                  "id": 19081,
                  "name": "milk chocolate",
                  "localizedName": "milk chocolate",
                  "image": "milk-chocolate.jpg"
                }
              ],
              "equipment": [
                {
                  "id": 405900,
                  "name": "wire rack",
                  "localizedName": "wire rack",
                  "image": "https://spoonacular.com/cdn/equipment_100x100/wire-rack.jpg"
                },
                {
                  "id": 405915,
                  "name": "pie form",
                  "localizedName": "pie form",
                  "image": "https://spoonacular.com/cdn/equipment_100x100/pie-pan.png"
                }
              ],
              "length": {
                "number": 480,
                "unit": "minutes"
              }
            },
            {
              "number": 15,
              "step": "Serve immediately.",
              "ingredients": [],
              "equipment": []
            }
          ]
        }
      ],
      "originalId": null,
      "spoonacularScore": 14.5556077957153,
      "spoonacularSourceUrl": "https://spoonacular.com/triple-chocolate-pumpkin-pie-663832"
    },
    {
      "id": 642540,
      "image": "https://img.spoonacular.com/recipes/642540-556x370.jpg",
      "imageType": "jpg",
      "title": "Falafel Burgers",
      "readyInMinutes": 45,
      "servings": 4,
      "sourceUrl": "https://www.foodista.com/recipe/FBWMX8MY/falafel-burgers",
      "vegetarian": true,
      "vegan": true,
      "glutenFree": false,
      "dairyFree": true,
      "veryHealthy": false,
      "cheap": false,
      "veryPopular": false,
      "sustainable": false,
      "lowFodmap": false,
      "weightWatcherSmartPoints": 20,
      "gaps": "no",
      "preparationMinutes": null,
      "cookingMinutes": null,
      "aggregateLikes": 70,
      "healthScore": 33,
      "creditsText": "foodista.com",
      "license": null,
      "sourceName": "foodista.com",
      "pricePerServing": 187.34,
      "extendedIngredients": [
        {
          "id": 16058,
          "aisle": "Canned and Jarred",
          "image": "chickpeas.png",
          "consistency": "SOLID",
          "name": "garbanzo beans",
          "nameClean": "garbanzo beans",
          "original": "2 cans garbanzo beans (chickpeas), drained and rinsed",
          "originalName": "garbanzo beans (chickpeas), drained and rinsed",
          "amount": 2,
          "unit": "cans",
          "meta": [
            "drained and rinsed",
            "(chickpeas)"
          ],
          "measures": {
            "us": {
              "amount": 2,
              "unitShort": "cans",
              "unitLong": "cans"
            },
            "metric": {
              "amount": 2,
              "unitShort": "cans",
              "unitLong": "cans"
            }
          }
        },
        {
          "id": 2009,
          "aisle": "Spices and Seasonings",
          "image": "chili-powder.jpg",
          "consistency": "SOLID",
          "name": "chili powder",
          "nameClean": "chili powder",
          "original": "1 tablespoon chili powder",
          "originalName": "chili powder",
          "amount": 1,
          "unit": "tablespoon",
          "meta": [],
          "measures": {
            "us": {
              "amount": 1,
              "unitShort": "Tbsp",
              "unitLong": "Tbsp"
            },
            "metric": {
              "amount": 1,
              "unitShort": "Tbsp",
              "unitLong": "Tbsp"
            }
          }
        },
        {
          "id": 11165,
          "aisle": "Produce",
          "image": "cilantro.png",
          "consistency": "SOLID",
          "name": "coriander",
          "nameClean": "coriander",
          "original": "1 tablespoon coriander",
          "originalName": "coriander",
          "amount": 1,
          "unit": "tablespoon",
          "meta": [],
          "measures": {
            "us": {
              "amount": 1,
              "unitShort": "Tbsp",
              "unitLong": "Tbsp"
            },
            "metric": {
              "amount": 1,
              "unitShort": "Tbsp",
              "unitLong": "Tbsp"
            }
          }
        },
        {
          "id": 1002014,
          "aisle": "Spices and Seasonings",
          "image": "ground-cumin.jpg",
          "consistency": "SOLID",
          "name": "cumin",
          "nameClean": "cumin",
          "original": "1 tablespoon cumin",
          "originalName": "cumin",
          "amount": 1,
          "unit": "tablespoon",
          "meta": [],
          "measures": {
            "us": {
              "amount": 1,
              "unitShort": "Tbsp",
              "unitLong": "Tbsp"
            },
            "metric": {
              "amount": 1,
              "unitShort": "Tbsp",
              "unitLong": "Tbsp"
            }
          }
        },
        {
          "id": 20081,
          "aisle": "Baking",
          "image": "flour.png",
          "consistency": "SOLID",
          "name": "flour",
          "nameClean": "flour",
          "original": "4 tablespoons flour",
          "originalName": "flour",
          "amount": 4,
          "unit": "tablespoons",
          "meta": [],
          "measures": {
            "us": {
              "amount": 4,
              "unitShort": "Tbsps",
              "unitLong": "Tbsps"
            },
            "metric": {
              "amount": 4,
              "unitShort": "Tbsps",
              "unitLong": "Tbsps"
            }
          }
        },
        {
          "id": 10511297,
          "aisle": "Produce",
          "image": "parsley.jpg",
          "consistency": "SOLID",
          "name": "parsley",
          "nameClean": "parsley",
          "original": "1 large handful parsley, chopped",
          "originalName": "parsley, chopped",
          "amount": 1,
          "unit": "large handful",
          "meta": [
            "chopped"
          ],
          "measures": {
            "us": {
              "amount": 1,
              "unitShort": "large handful",
              "unitLong": "large handful"
            },
            "metric": {
              "amount": 1,
              "unitShort": "large handful",
              "unitLong": "large handful"
            }
          }
        },
        {
          "id": 11215,
          "aisle": "Produce",
          "image": "garlic.png",
          "consistency": "SOLID",
          "name": "garlic",
          "nameClean": "garlic",
          "original": "2 cloves garlic, grated or finely chopped",
          "originalName": "garlic, grated or finely chopped",
          "amount": 2,
          "unit": "cloves",
          "meta": [
            "grated",
            "finely chopped"
          ],
          "measures": {
            "us": {
              "amount": 2,
              "unitShort": "cloves",
              "unitLong": "cloves"
            },
            "metric": {
              "amount": 2,
              "unitShort": "cloves",
              "unitLong": "cloves"
            }
          }
        },
        {
          "id": 9152,
          "aisle": "Produce",
          "image": "lemon-juice.jpg",
          "consistency": "LIQUID",
          "name": "juice of lemon",
          "nameClean": "juice of lemon",
          "original": "2 Zest and juice of lemons",
          "originalName": "Zest and juice of lemons",
          "amount": 2,
          "unit": "",
          "meta": [],
          "measures": {
            "us": {
              "amount": 2,
              "unitShort": "",
              "unitLong": ""
            },
            "metric": {
              "amount": 2,
              "unitShort": "",
              "unitLong": ""
            }
          }
        },
        {
          "id": 18413,
          "aisle": "Bakery/Bread",
          "image": "pita-bread.jpg",
          "consistency": "SOLID",
          "name": "pita pockets",
          "nameClean": "pita pockets",
          "original": "4 pita pockets",
          "originalName": "pita pockets",
          "amount": 4,
          "unit": "",
          "meta": [],
          "measures": {
            "us": {
              "amount": 4,
              "unitShort": "",
              "unitLong": ""
            },
            "metric": {
              "amount": 4,
              "unitShort": "",
              "unitLong": ""
            }
          }
        },
        {
          "id": 10011282,
          "aisle": "Produce",
          "image": "red-onion.png",
          "consistency": "SOLID",
          "name": "onion",
          "nameClean": "onion",
          "original": "1 small red onion, chopped",
          "originalName": "red onion, chopped",
          "amount": 1,
          "unit": "small",
          "meta": [
            "red",
            "chopped"
          ],
          "measures": {
            "us": {
              "amount": 1,
              "unitShort": "small",
              "unitLong": "small"
            },
            "metric": {
              "amount": 1,
              "unitShort": "small",
              "unitLong": "small"
            }
          }
        },
        {
          "id": 1102047,
          "aisle": "Spices and Seasonings",
          "image": "salt-and-pepper.jpg",
          "consistency": "SOLID",
          "name": "salt and pepper",
          "nameClean": "salt and pepper",
          "original": "Salt and pepper, to taste",
          "originalName": "Salt and pepper, to taste",
          "amount": 4,
          "unit": "servings",
          "meta": [
            "to taste"
          ],
          "measures": {
            "us": {
              "amount": 4,
              "unitShort": "servings",
              "unitLong": "servings"
            },
            "metric": {
              "amount": 4,
              "unitShort": "servings",
              "unitLong": "servings"
            }
          }
        },
        {
          "id": 12698,
          "aisle": "Ethnic Foods",
          "image": "tahini-paste.png",
          "consistency": "SOLID",
          "name": "tahini",
          "nameClean": "tahini",
          "original": "1/2 cup tahini",
          "originalName": "tahini",
          "amount": 0.5,
          "unit": "cup",
          "meta": [],
          "measures": {
            "us": {
              "amount": 0.5,
              "unitShort": "cups",
              "unitLong": "cups"
            },
            "metric": {
              "amount": 120,
              "unitShort": "ml",
              "unitLong": "milliliters"
            }
          }
        },
        {
          "id": 2043,
          "aisle": "Spices and Seasonings",
          "image": "turmeric.jpg",
          "consistency": "SOLID",
          "name": "turmeric",
          "nameClean": "turmeric",
          "original": "1 1/2 teaspoons turmeric",
          "originalName": "turmeric",
          "amount": 1.5,
          "unit": "teaspoons",
          "meta": [],
          "measures": {
            "us": {
              "amount": 1.5,
              "unitShort": "tsps",
              "unitLong": "teaspoons"
            },
            "metric": {
              "amount": 1.5,
              "unitShort": "tsps",
              "unitLong": "teaspoons"
            }
          }
        },
        {
          "id": 4669,
          "aisle": "Oil, Vinegar, Salad Dressing",
          "image": "vegetable-oil.jpg",
          "consistency": "LIQUID",
          "name": "vegetable oil",
          "nameClean": "vegetable oil",
          "original": "1/4 cup vegetable oil",
          "originalName": "vegetable oil",
          "amount": 0.25,
          "unit": "cup",
          "meta": [],
          "measures": {
            "us": {
              "amount": 0.25,
              "unitShort": "cups",
              "unitLong": "cups"
            },
            "metric": {
              "amount": 54.5,
              "unitShort": "ml",
              "unitLong": "milliliters"
            }
          }
        },
        {
          "id": 14412,
          "aisle": "Beverages",
          "image": "water.png",
          "consistency": "LIQUID",
          "name": "water",
          "nameClean": "water",
          "original": "3 tablespoons water",
          "originalName": "water",
          "amount": 3,
          "unit": "tablespoons",
          "meta": [],
          "measures": {
            "us": {
              "amount": 3,
              "unitShort": "Tbsps",
              "unitLong": "Tbsps"
            },
            "metric": {
              "amount": 3,
              "unitShort": "Tbsps",
              "unitLong": "Tbsps"
            }
          }
        }
      ],
      "summary": "Need a \u003Cb\u003Edairy free, lacto ovo vegetarian, and vegan main course\u003C/b\u003E? Falafel Burgers could be an excellent recipe to try. This recipe makes 4 servings with \u003Cb\u003E710 calories\u003C/b\u003E, \u003Cb\u003E23g of protein\u003C/b\u003E, and \u003Cb\u003E35g of fat\u003C/b\u003E each. For \u003Cb\u003E$1.87 per serving\u003C/b\u003E, this recipe \u003Cb\u003Ecovers 30%\u003C/b\u003E of your daily requirements of vitamins and minerals. Head to the store and pick up garbanzo beans, onion, vegetable oil, and a few other things to make it today. 70 people have tried and liked this recipe. This recipe is typical of American cuisine. It is brought to you by Foodista. From preparation to the plate, this recipe takes approximately \u003Cb\u003E45 minutes\u003C/b\u003E. Taking all factors into account, this recipe \u003Cb\u003Eearns a spoonacular score of 94%\u003C/b\u003E, which is super. Try \u003Ca href=\"https://spoonacular.com/recipes/falafel-burgers-1600153\"\u003EFalafel burgers\u003C/a\u003E, \u003Ca href=\"https://spoonacular.com/recipes/falafel-burgers-1353403\"\u003EFalafel Burgers\u003C/a\u003E, and \u003Ca href=\"https://spoonacular.com/recipes/falafel-burgers-308498\"\u003EFalafel Burgers\u003C/a\u003E for similar recipes.",
      "cuisines": [
        "American"
      ],
      "dishTypes": [
        "lunch",
        "main course",
        "main dish",
        "dinner"
      ],
      "diets": [
        "dairy free",
        "lacto ovo vegetarian",
        "vegan"
      ],
      "occasions": [],
      "instructions": "\u003Col\u003E\u003Cli\u003ECombine the chickpeas, onion, garlic, parsley, flour, spices, and salt, and pulse until the mixture is well combined. Form the mixture into 4 large patties.\u003C/li\u003E\u003Cli\u003EHeat the oil in a large, nonstick skillet set over medium-high heat. Cook for about 3 minutes per side.\u003C/li\u003E\u003Cli\u003EMake the tahini sauce: Whisk the tahini paste with the water, lemon juice and zest, salt, and freshly ground black pepper in a mixing bowl.\u003C/li\u003E\u003Cli\u003EServe the burgers in pita pockets or on a bun. Top them with tahini sauce, lettuce, and tomato.\u003C/li\u003E\u003C/ol\u003E",
      "analyzedInstructions": [
        {
          "name": "",
          "steps": [
            {
              "number": 1,
              "step": "Combine the chickpeas, onion, garlic, parsley, flour, spices, and salt, and pulse until the mixture is well combined. Form the mixture into 4 large patties.",
              "ingredients": [
                {
                  "id": 16057,
                  "name": "chickpeas",
                  "localizedName": "chickpeas",
                  "image": "chickpeas.png"
                },
                {
                  "id": 11297,
                  "name": "parsley",
                  "localizedName": "parsley",
                  "image": "parsley.jpg"
                },
                {
                  "id": 11215,
                  "name": "garlic",
                  "localizedName": "garlic",
                  "image": "garlic.png"
                },
                {
                  "id": 2035,
                  "name": "spices",
                  "localizedName": "spices",
                  "image": "spices.png"
                },
                {
                  "id": 20081,
                  "name": "all purpose flour",
                  "localizedName": "all purpose flour",
                  "image": "flour.png"
                },
                {
                  "id": 11282,
                  "name": "onion",
                  "localizedName": "onion",
                  "image": "brown-onion.png"
                },
                {
                  "id": 2047,
                  "name": "salt",
                  "localizedName": "salt",
                  "image": "salt.jpg"
                }
              ],
              "equipment": []
            }
          ]
        },
        {
          "name": "Heat the oil in a large, nonstick skillet set over medium-high heat. Cook for about 3 minutes per side.Make the tahini sauce",
          "steps": [
            {
              "number": 1,
              "step": "Whisk the tahini paste with the water, lemon juice and zest, salt, and freshly ground black pepper in a mixing bowl.",
              "ingredients": [
                {
                  "id": 1002030,
                  "name": "ground black pepper",
                  "localizedName": "ground black pepper",
                  "image": "pepper.jpg"
                },
                {
                  "id": 12698,
                  "name": "tahini",
                  "localizedName": "tahini",
                  "image": "tahini-paste.png"
                },
                {
                  "id": 9152,
                  "name": "lemon juice",
                  "localizedName": "lemon juice",
                  "image": "lemon-juice.jpg"
                },
                {
                  "id": 14412,
                  "name": "water",
                  "localizedName": "water",
                  "image": "water.png"
                },
                {
                  "id": 2047,
                  "name": "salt",
                  "localizedName": "salt",
                  "image": "salt.jpg"
                }
              ],
              "equipment": [
                {
                  "id": 405907,
                  "name": "mixing bowl",
                  "localizedName": "mixing bowl",
                  "image": "https://spoonacular.com/cdn/equipment_100x100/mixing-bowl.jpg"
                },
                {
                  "id": 404661,
                  "name": "whisk",
                  "localizedName": "whisk",
                  "image": "https://spoonacular.com/cdn/equipment_100x100/whisk.png"
                }
              ]
            },
            {
              "number": 2,
              "step": "Serve the burgers in pita pockets or on a bun. Top them with tahini sauce, lettuce, and tomato.",
              "ingredients": [
                {
                  "id": 11252,
                  "name": "lettuce",
                  "localizedName": "lettuce",
                  "image": "iceberg-lettuce.jpg"
                },
                {
                  "id": 12698,
                  "name": "tahini",
                  "localizedName": "tahini",
                  "image": "tahini-paste.png"
                },
                {
                  "id": 11529,
                  "name": "tomato",
                  "localizedName": "tomato",
                  "image": "tomato.png"
                },
                {
                  "id": 0,
                  "name": "sauce",
                  "localizedName": "sauce",
                  "image": ""
                },
                {
                  "id": 18413,
                  "name": "pita",
                  "localizedName": "pita",
                  "image": "pita-bread.jpg"
                },
                {
                  "id": 0,
                  "name": "roll",
                  "localizedName": "roll",
                  "image": "dinner-yeast-rolls.jpg"
                }
              ],
              "equipment": []
            }
          ]
        }
      ],
      "originalId": null,
      "spoonacularScore": 93.1691741943359,
      "spoonacularSourceUrl": "https://spoonacular.com/falafel-burgers-642540"
    },
    {
      "id": 653785,
      "image": "https://img.spoonacular.com/recipes/653785-556x370.jpg",
      "imageType": "jpg",
      "title": "Orange & Ginger Chicken",
      "readyInMinutes": 180,
      "servings": 4,
      "sourceUrl": "https://www.foodista.com/recipe/86QFSP6N/orange-ginger-chicken",
      "vegetarian": false,
      "vegan": false,
      "glutenFree": false,
      "dairyFree": true,
      "veryHealthy": false,
      "cheap": false,
      "veryPopular": false,
      "sustainable": false,
      "lowFodmap": false,
      "weightWatcherSmartPoints": 20,
      "gaps": "no",
      "preparationMinutes": null,
      "cookingMinutes": null,
      "aggregateLikes": 2,
      "healthScore": 7,
      "creditsText": "Foodista.com – The Cooking Encyclopedia Everyone Can Edit",
      "license": "CC BY 3.0",
      "sourceName": "Foodista",
      "pricePerServing": 139.68,
      "extendedIngredients": [
        {
          "id": 19334,
          "aisle": "Baking",
          "image": "light-brown-sugar.jpg",
          "consistency": "SOLID",
          "name": "brown sugar",
          "nameClean": "brown sugar",
          "original": "1 cup packed brown sugar",
          "originalName": "packed brown sugar",
          "amount": 1,
          "unit": "cup",
          "meta": [
            "packed"
          ],
          "measures": {
            "us": {
              "amount": 1,
              "unitShort": "cup",
              "unitLong": "cup"
            },
            "metric": {
              "amount": 220,
              "unitShort": "g",
              "unitLong": "grams"
            }
          }
        },
        {
          "id": 20081,
          "aisle": "Baking",
          "image": "flour.png",
          "consistency": "SOLID",
          "name": "flour",
          "nameClean": "flour",
          "original": "1 cup all-purpose flour",
          "originalName": "all-purpose flour",
          "amount": 1,
          "unit": "cup",
          "meta": [
            "all-purpose"
          ],
          "measures": {
            "us": {
              "amount": 1,
              "unitShort": "cup",
              "unitLong": "cup"
            },
            "metric": {
              "amount": 125,
              "unitShort": "g",
              "unitLong": "grams"
            }
          }
        },
        {
          "id": 10211216,
          "aisle": "Produce",
          "image": "ginger.png",
          "consistency": "SOLID",
          "name": "ginger root",
          "nameClean": "ginger root",
          "original": "1/2 teaspoon minced fresh ginger root",
          "originalName": "minced fresh ginger root",
          "amount": 0.5,
          "unit": "teaspoon",
          "meta": [
            "fresh",
            "minced"
          ],
          "measures": {
            "us": {
              "amount": 0.5,
              "unitShort": "tsps",
              "unitLong": "teaspoons"
            },
            "metric": {
              "amount": 0.5,
              "unitShort": "tsps",
              "unitLong": "teaspoons"
            }
          }
        },
        {
          "id": 11215,
          "aisle": "Produce",
          "image": "garlic.png",
          "consistency": "SOLID",
          "name": "garlic",
          "nameClean": "garlic",
          "original": "1/2 teaspoon minced garlic",
          "originalName": "minced garlic",
          "amount": 0.5,
          "unit": "teaspoon",
          "meta": [
            "minced"
          ],
          "measures": {
            "us": {
              "amount": 0.5,
              "unitShort": "tsps",
              "unitLong": "teaspoons"
            },
            "metric": {
              "amount": 0.5,
              "unitShort": "tsps",
              "unitLong": "teaspoons"
            }
          }
        },
        {
          "id": 11291,
          "aisle": "Produce",
          "image": "spring-onions.jpg",
          "consistency": "SOLID",
          "name": "green onion",
          "nameClean": "green onion",
          "original": "2 tablespoons chopped green onion",
          "originalName": "chopped green onion",
          "amount": 2,
          "unit": "tablespoons",
          "meta": [
            "chopped"
          ],
          "measures": {
            "us": {
              "amount": 2,
              "unitShort": "Tbsps",
              "unitLong": "Tbsps"
            },
            "metric": {
              "amount": 2,
              "unitShort": "Tbsps",
              "unitLong": "Tbsps"
            }
          }
        },
        {
          "id": 9152,
          "aisle": "Produce",
          "image": "lemon-juice.jpg",
          "consistency": "LIQUID",
          "name": "lemon juice",
          "nameClean": "lemon juice",
          "original": "1/4 cup lemon juice",
          "originalName": "lemon juice",
          "amount": 0.25,
          "unit": "cup",
          "meta": [],
          "measures": {
            "us": {
              "amount": 0.25,
              "unitShort": "cups",
              "unitLong": "cups"
            },
            "metric": {
              "amount": 61,
              "unitShort": "ml",
              "unitLong": "milliliters"
            }
          }
        },
        {
          "id": 4053,
          "aisle": "Oil, Vinegar, Salad Dressing",
          "image": "olive-oil.jpg",
          "consistency": "LIQUID",
          "name": "olive oil",
          "nameClean": "olive oil",
          "original": "3 tablespoons olive oil",
          "originalName": "olive oil",
          "amount": 3,
          "unit": "tablespoons",
          "meta": [],
          "measures": {
            "us": {
              "amount": 3,
              "unitShort": "Tbsps",
              "unitLong": "Tbsps"
            },
            "metric": {
              "amount": 3,
              "unitShort": "Tbsps",
              "unitLong": "Tbsps"
            }
          }
        },
        {
          "id": 9200,
          "aisle": "Produce",
          "image": "orange.png",
          "consistency": "SOLID",
          "name": "orange",
          "nameClean": "orange",
          "original": "1 orange",
          "originalName": "orange",
          "amount": 1,
          "unit": "",
          "meta": [],
          "measures": {
            "us": {
              "amount": 1,
              "unitShort": "",
              "unitLong": ""
            },
            "metric": {
              "amount": 1,
              "unitShort": "",
              "unitLong": ""
            }
          }
        },
        {
          "id": 1002030,
          "aisle": "Spices and Seasonings",
          "image": "pepper.jpg",
          "consistency": "SOLID",
          "name": "pepper",
          "nameClean": "pepper",
          "original": "1/4 teaspoon pepper",
          "originalName": "pepper",
          "amount": 0.25,
          "unit": "teaspoon",
          "meta": [],
          "measures": {
            "us": {
              "amount": 0.25,
              "unitShort": "tsps",
              "unitLong": "teaspoons"
            },
            "metric": {
              "amount": 0.25,
              "unitShort": "tsps",
              "unitLong": "teaspoons"
            }
          }
        },
        {
          "id": 1032009,
          "aisle": "Spices and Seasonings",
          "image": "red-pepper-flakes.jpg",
          "consistency": "SOLID",
          "name": "pepper flakes",
          "nameClean": "pepper flakes",
          "original": "1/4 teaspoon red pepper flakes",
          "originalName": "red pepper flakes",
          "amount": 0.25,
          "unit": "teaspoon",
          "meta": [
            "red"
          ],
          "measures": {
            "us": {
              "amount": 0.25,
              "unitShort": "tsps",
              "unitLong": "teaspoons"
            },
            "metric": {
              "amount": 0.25,
              "unitShort": "tsps",
              "unitLong": "teaspoons"
            }
          }
        },
        {
          "id": 1022053,
          "aisle": "Ethnic Foods",
          "image": "rice-vinegar.png",
          "consistency": "LIQUID",
          "name": "rice vinegar",
          "nameClean": "rice vinegar",
          "original": "cup rice vinegar",
          "originalName": "rice vinegar",
          "amount": 1,
          "unit": "cup",
          "meta": [],
          "measures": {
            "us": {
              "amount": 1,
              "unitShort": "cup",
              "unitLong": "cup"
            },
            "metric": {
              "amount": 255,
              "unitShort": "ml",
              "unitLong": "milliliters"
            }
          }
        },
        {
          "id": 2047,
          "aisle": "Spices and Seasonings",
          "image": "salt.jpg",
          "consistency": "SOLID",
          "name": "salt",
          "nameClean": "salt",
          "original": "1/2 teaspoon salt",
          "originalName": "salt",
          "amount": 0.5,
          "unit": "teaspoon",
          "meta": [],
          "measures": {
            "us": {
              "amount": 0.5,
              "unitShort": "tsps",
              "unitLong": "teaspoons"
            },
            "metric": {
              "amount": 0.5,
              "unitShort": "tsps",
              "unitLong": "teaspoons"
            }
          }
        },
        {
          "id": 1055062,
          "aisle": "Meat",
          "image": "chicken-breasts.png",
          "consistency": "SOLID",
          "name": "chicken breasts",
          "nameClean": "chicken breasts",
          "original": "2 boneless, skinless chicken breasts, cut into ½ pieces",
          "originalName": "boneless, skinless chicken breasts, cut into ½ pieces",
          "amount": 2,
          "unit": "",
          "meta": [
            "boneless",
            "skinless",
            "cut into ½ pieces"
          ],
          "measures": {
            "us": {
              "amount": 2,
              "unitShort": "",
              "unitLong": ""
            },
            "metric": {
              "amount": 2,
              "unitShort": "",
              "unitLong": ""
            }
          }
        },
        {
          "id": 16124,
          "aisle": "Condiments",
          "image": "soy-sauce.jpg",
          "consistency": "LIQUID",
          "name": "soy sauce",
          "nameClean": "soy sauce",
          "original": "2 1/2 tablespoons soy sauce",
          "originalName": "soy sauce",
          "amount": 2.5,
          "unit": "tablespoons",
          "meta": [],
          "measures": {
            "us": {
              "amount": 2.5,
              "unitShort": "Tbsps",
              "unitLong": "Tbsps"
            },
            "metric": {
              "amount": 2.5,
              "unitShort": "Tbsps",
              "unitLong": "Tbsps"
            }
          }
        },
        {
          "id": 14412,
          "aisle": "Beverages",
          "image": "water.png",
          "consistency": "LIQUID",
          "name": "water",
          "nameClean": "water",
          "original": "2 tablespoons water",
          "originalName": "water",
          "amount": 2,
          "unit": "tablespoons",
          "meta": [],
          "measures": {
            "us": {
              "amount": 2,
              "unitShort": "Tbsps",
              "unitLong": "Tbsps"
            },
            "metric": {
              "amount": 2,
              "unitShort": "Tbsps",
              "unitLong": "Tbsps"
            }
          }
        }
      ],
      "summary": "Orange & Ginger Chicken could be just the \u003Cb\u003Edairy free\u003C/b\u003E recipe you've been looking for. One portion of this dish contains around \u003Cb\u003E17g of protein\u003C/b\u003E, \u003Cb\u003E12g of fat\u003C/b\u003E, and a total of \u003Cb\u003E519 calories\u003C/b\u003E. This recipe serves 4 and costs $1.4 per serving. Only a few people made this recipe, and 2 would say it hit the spot. From preparation to the plate, this recipe takes roughly \u003Cb\u003E3 hours\u003C/b\u003E. A mixture of garlic, salt, orange, and a handful of other ingredients are all it takes to make this recipe so delicious. It is brought to you by Foodista. It works well as a main course. Overall, this recipe earns a \u003Cb\u003Esolid spoonacular score of 42%\u003C/b\u003E. If you like this recipe, take a look at these similar recipes: \u003Ca href=\"https://spoonacular.com/recipes/orange-ginger-chicken-474587\"\u003EOrange-Ginger Chicken\u003C/a\u003E, \u003Ca href=\"https://spoonacular.com/recipes/orange-ginger-chicken-1244385\"\u003EOrange & Ginger Chicken\u003C/a\u003E, and \u003Ca href=\"https://spoonacular.com/recipes/orange-and-ginger-chicken-182391\"\u003EOrange and Ginger Chicken\u003C/a\u003E.",
      "cuisines": [],
      "dishTypes": [
        "lunch",
        "main course",
        "main dish",
        "dinner"
      ],
      "diets": [
        "dairy free"
      ],
      "occasions": [],
      "instructions": "\u003Col\u003E\u003Cli\u003EPour 1 1/2 cups water, orange juice (about 1/4 cup from the fresh orange), lemon juice, rice vinegar, and soy sauce into a saucepan and set over medium-high heat.\u003C/li\u003E\u003Cli\u003EStir in the tablespoon orange zest, brown sugar, ginger, garlic, chopped onion, and red pepper flakes. Bring to a boil.\u003C/li\u003E\u003Cli\u003ERemove from heat, and cool 10 to 15 minutes.\u003C/li\u003E\u003Cli\u003EPlace the chicken pieces into a resealable plastic bag. When contents of saucepan have cooled, pour 1 cup of sauce into bag.\u003C/li\u003E\u003Cli\u003EReserve the remaining sauce. Seal the bag, and refrigerate at least 2 hours.\u003C/li\u003E\u003Cli\u003EIn another resealable plastic bag, mix the flour, salt, and pepper. Add the marinated chicken pieces, seal the bag, and shake to coat.\u003C/li\u003E\u003Cli\u003EHeat the olive oil in a large skillet over medium heat. Place chicken into the skillet, and brown on both sides. Drain on a plate lined with paper towels, and cover with aluminum foil.\u003C/li\u003E\u003Cli\u003EWipe out the skillet, and add the sauce. Bring to a boil over medium-high heat. Mix together the cornstarch and 2 tablespoons water; stir into the sauce. Reduce heat to medium low, add the chicken pieces, and simmer, about 5 minutes, stirring occasionally.\u003C/li\u003E\u003C/ol\u003E",
      "analyzedInstructions": [
        {
          "name": "",
          "steps": [
            {
              "number": 1,
              "step": "Pour 1 1/2 cups water, orange juice (about 1/4 cup from the fresh orange), lemon juice, rice vinegar, and soy sauce into a saucepan and set over medium-high heat.Stir in the tablespoon orange zest, brown sugar, ginger, garlic, chopped onion, and red pepper flakes. Bring to a boil.",
              "ingredients": [
                {
                  "id": 1032009,
                  "name": "red pepper flakes",
                  "localizedName": "red pepper flakes",
                  "image": "red-pepper-flakes.jpg"
                },
                {
                  "id": 9206,
                  "name": "orange juice",
                  "localizedName": "orange juice",
                  "image": "orange-juice.jpg"
                },
                {
                  "id": 1022053,
                  "name": "rice vinegar",
                  "localizedName": "rice vinegar",
                  "image": "rice-vinegar.png"
                },
                {
                  "id": 19334,
                  "name": "brown sugar",
                  "localizedName": "brown sugar",
                  "image": "dark-brown-sugar.png"
                },
                {
                  "id": 9152,
                  "name": "lemon juice",
                  "localizedName": "lemon juice",
                  "image": "lemon-juice.jpg"
                },
                {
                  "id": 9216,
                  "name": "orange zest",
                  "localizedName": "orange zest",
                  "image": "orange-zest.png"
                },
                {
                  "id": 16124,
                  "name": "soy sauce",
                  "localizedName": "soy sauce",
                  "image": "soy-sauce.jpg"
                },
                {
                  "id": 11215,
                  "name": "garlic",
                  "localizedName": "garlic",
                  "image": "garlic.png"
                },
                {
                  "id": 11216,
                  "name": "ginger",
                  "localizedName": "ginger",
                  "image": "ginger.png"
                },
                {
                  "id": 9200,
                  "name": "orange",
                  "localizedName": "orange",
                  "image": "orange.png"
                },
                {
                  "id": 11282,
                  "name": "onion",
                  "localizedName": "onion",
                  "image": "brown-onion.png"
                },
                {
                  "id": 14412,
                  "name": "water",
                  "localizedName": "water",
                  "image": "water.png"
                }
              ],
              "equipment": [
                {
                  "id": 404669,
                  "name": "sauce pan",
                  "localizedName": "sauce pan",
                  "image": "https://spoonacular.com/cdn/equipment_100x100/sauce-pan.jpg"
                }
              ]
            },
            {
              "number": 2,
              "step": "Remove from heat, and cool 10 to 15 minutes.",
              "ingredients": [],
              "equipment": [],
              "length": {
                "number": 10,
                "unit": "minutes"
              }
            },
            {
              "number": 3,
              "step": "Place the chicken pieces into a resealable plastic bag. When contents of saucepan have cooled, pour 1 cup of sauce into bag.Reserve the remaining sauce. Seal the bag, and refrigerate at least 2 hours.In another resealable plastic bag, mix the flour, salt, and pepper.",
              "ingredients": [
                {
                  "id": 1005006,
                  "name": "chicken pieces",
                  "localizedName": "chicken pieces",
                  "image": "chicken-parts.jpg"
                },
                {
                  "id": 1002030,
                  "name": "pepper",
                  "localizedName": "pepper",
                  "image": "pepper.jpg"
                },
                {
                  "id": 20081,
                  "name": "all purpose flour",
                  "localizedName": "all purpose flour",
                  "image": "flour.png"
                },
                {
                  "id": 0,
                  "name": "sauce",
                  "localizedName": "sauce",
                  "image": ""
                },
                {
                  "id": 2047,
                  "name": "salt",
                  "localizedName": "salt",
                  "image": "salt.jpg"
                }
              ],
              "equipment": [
                {
                  "id": 221671,
                  "name": "ziploc bags",
                  "localizedName": "ziploc bags",
                  "image": "https://spoonacular.com/cdn/equipment_100x100/plastic-bag.jpg"
                },
                {
                  "id": 404669,
                  "name": "sauce pan",
                  "localizedName": "sauce pan",
                  "image": "https://spoonacular.com/cdn/equipment_100x100/sauce-pan.jpg"
                }
              ],
              "length": {
                "number": 120,
                "unit": "minutes"
              }
            },
            {
              "number": 4,
              "step": "Add the marinated chicken pieces, seal the bag, and shake to coat.",
              "ingredients": [
                {
                  "id": 1005006,
                  "name": "chicken pieces",
                  "localizedName": "chicken pieces",
                  "image": "chicken-parts.jpg"
                },
                {
                  "id": 0,
                  "name": "shake",
                  "localizedName": "shake",
                  "image": ""
                }
              ],
              "equipment": []
            },
            {
              "number": 5,
              "step": "Heat the olive oil in a large skillet over medium heat.",
              "ingredients": [
                {
                  "id": 4053,
                  "name": "olive oil",
                  "localizedName": "olive oil",
                  "image": "olive-oil.jpg"
                }
              ],
              "equipment": [
                {
                  "id": 404645,
                  "name": "frying pan",
                  "localizedName": "frying pan",
                  "image": "https://spoonacular.com/cdn/equipment_100x100/pan.png"
                }
              ]
            },
            {
              "number": 6,
              "step": "Place chicken into the skillet, and brown on both sides.",
              "ingredients": [
                {
                  "id": 0,
                  "name": "chicken",
                  "localizedName": "chicken",
                  "image": "https://spoonacular.com/cdn/ingredients_100x100/whole-chicken.jpg"
                }
              ],
              "equipment": [
                {
                  "id": 404645,
                  "name": "frying pan",
                  "localizedName": "frying pan",
                  "image": "https://spoonacular.com/cdn/equipment_100x100/pan.png"
                }
              ]
            },
            {
              "number": 7,
              "step": "Drain on a plate lined with paper towels, and cover with aluminum foil.Wipe out the skillet, and add the sauce. Bring to a boil over medium-high heat.",
              "ingredients": [
                {
                  "id": 0,
                  "name": "sauce",
                  "localizedName": "sauce",
                  "image": ""
                }
              ],
              "equipment": [
                {
                  "id": 404765,
                  "name": "aluminum foil",
                  "localizedName": "aluminum foil",
                  "image": "https://spoonacular.com/cdn/equipment_100x100/aluminum-foil.png"
                },
                {
                  "id": 405895,
                  "name": "paper towels",
                  "localizedName": "paper towels",
                  "image": "https://spoonacular.com/cdn/equipment_100x100/paper-towels.jpg"
                },
                {
                  "id": 404645,
                  "name": "frying pan",
                  "localizedName": "frying pan",
                  "image": "https://spoonacular.com/cdn/equipment_100x100/pan.png"
                }
              ]
            },
            {
              "number": 8,
              "step": "Mix together the cornstarch and 2 tablespoons water; stir into the sauce. Reduce heat to medium low, add the chicken pieces, and simmer, about 5 minutes, stirring occasionally.",
              "ingredients": [
                {
                  "id": 1005006,
                  "name": "chicken pieces",
                  "localizedName": "chicken pieces",
                  "image": "chicken-parts.jpg"
                },
                {
                  "id": 20027,
                  "name": "corn starch",
                  "localizedName": "corn starch",
                  "image": "white-powder.jpg"
                },
                {
                  "id": 0,
                  "name": "sauce",
                  "localizedName": "sauce",
                  "image": ""
                },
                {
                  "id": 14412,
                  "name": "water",
                  "localizedName": "water",
                  "image": "water.png"
                }
              ],
              "equipment": [],
              "length": {
                "number": 5,
                "unit": "minutes"
              }
            }
          ]
        }
      ],
      "originalId": null,
      "spoonacularScore": 0.364420503377914,
      "spoonacularSourceUrl": "https://spoonacular.com/orange-ginger-chicken-653785"
    }
  ]
}
