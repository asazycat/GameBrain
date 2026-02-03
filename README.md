
( ⚠️ **Work in Progress** – This project is still under development. Features and UI may change.)

# 🎮 GameBrain

Gamebrain is a passion project of mine that borrows the api of the respected name it is named after (gamebrain.co). It combines endpoints from the public api with custom endpoints from the backend of a headless WordPress CMS. I make use of react to continuously improve the frontend application along with robust type checking from typescript , fetch requests for all endpoints (goto [gamebrain.co/docs](https://gamebrain.co/api/docs/quickstart) for more...), wordpress-cms for a make shift backend 'body' and tailwind css for a responsive and sleek look.

## Main Features

**-- Login page/Sign Up set up with WordPress CMS JWT Plugin**

**-- List of games released from the past decade or so, can be filtered and organised. Includes some pagination**

**-- Each user can select favourite game personally, this is stored in the Wordpress backend with WordPress CMS ACF Plugin**

**-- List of articles relevant to game selected, this is stored in the Wordpress backend in Posts**

## 🚀 Tech Stack
- **React**
- **TypeScript**
- **Tailwind CSS**
- **WordPress CMS**

## 🔗 Live Demo
👉 [game-brain.vercel.app](https://game-brain.vercel.app)


Note: HTTP 402 error for games tab means tokens have expired, meaning the api key in public/apiKey.ts would have to be replaced with another. This can be done by obtaining one from https://gamebrain.co/api/docs/quickstart 

## 📦 Local SetUp and Installation

```bash
If you would like to set this up locally for personnal use, follow the instructions below 

- Fork the project
- git clone https://github.com/asazycat/GameBrain.git
- cd gamebrain

Install Dependancies

- npm i

API Key and Local Headless WordPress Backend

Before you can run dev:

- Go to https://gamebrain.co/api/docs, retrieve your own api key (mine is a free version that is limited to 50 requests a day). Copy the key into apiKey.ts 

- Download a local Wordpress Server and make a custom domain , I used https://localwp.com/ocal. If you have your own, then you can set up the local wordpress server with that and make your     domain there.

- Copy the url of your local domain into public/localSiteDemo.ts (start the site in your local wordpress server)

- Go to plugins, install and activate the following: JWT Authentication for WP-API (For authentication), ACF (Active Custom Fields), Simple Local Avatars (for other user details like profile pic)

 Setting up Login

- You need to copy the JWT code below into wp.config.php  (this can be found in your localsite folder, public/app). Add it above this line:  `That`s all, stop editing! Happy blogging`.
 
# define('JWT_AUTH_SECRET_KEY', 'your-top-secret-key-here');

# define('JWT_AUTH_CORS_ENABLE', true);

Setting up Favourites (ACF)

- In WP Admin → Custom Fields → Add New

Create a Field Group called User Favourites

Under location (the select boxes): Show this field group if → User Form → is equal to → All

Go to themes/active_theme/function.php inside wp-content folder  (You can check which theme is active in Apperance/Themes on Wp-admin page). Select the functions.php and add the code below at the very end for custom fields into users 
---------------------------------
# <?php
# // Add this to your theme's functions.php

# /**
#  * Expose ACF 'favourite_games' field for users via REST API
#  */
# function add_favourite_games_to_rest() {
#     register_rest_field(
#         'user', // Applies to user objects
#         'favourite_games', // Field name in REST API
#         array(
#             'get_callback' => function($user_array) {
#                 // Get the field value from user meta
#                 $meta = get_user_meta($user_array['id'], 'favourite_games', true);
#                 // Return as array, or empty array if not set
#                 return $meta ? json_decode($meta) : [];
#             },
#             'update_callback' => function($value, $user) {
#                 // Ensure value is an array before saving
#                 if (is_array($value)) {
#                     update_user_meta($user->ID, 'favourite_games', json_encode($value));
#                     return true;
#                 }
#                 return false;
#             },
#             'schema' => array(
#                 'description' => 'List of favourite games as array of IDs',
#                 'type'        => 'array',
#                 'context'     => array('view', 'edit'),
#             ),
#         )
#     );
# }
# add_action('rest_api_init', 'add_favourite_games_to_rest'); 



-------------------------

Save everything and restart local site. Otherwise make an account in Users of WP-admin or use the  WP-admin login details to log into BrainGame.


 