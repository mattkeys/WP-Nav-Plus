=== WP Nav Plus ===
Contributors: Matt Keys
Donate link: http://mattkeys.me/
Tags: menu, wp_nav_menu, start_depth, starting_depth, split menu, tertiary menu, secondary menu, divided menu, limit, offset, columns
Requires at least: 3.0.1
Tested up to: 3.8.1
License: GPLv2 or later
License URI: http://www.gnu.org/licenses/gpl-2.0.html

== Description ==

WP Nav Plus has been designed to fill gaps in the WordPress menu system which make it difficult to accomplish many popular website design patterns.

== Installation & Documentation ==

Please see the included documentation in the /documentation directory or online at: http://mattkeys.me/documentation/wp-nav-plus/

== Changelog ==

= 3.4.6 =
* Bugfix: Fix problem with UTF-8 decoding in divided menus with non-latin characters
* Bugfix: Fix bug when trying to locate the correct parent menu item of a single post

= 3.4.5 =
* Bugfix: Force UTF-8 entity decode of divided menu layouts on PHP 5.3 and earlier.

= 3.4.4 =
* Bugfix: Better handling of multiple post type archives in menu
* Bugfix: Check to see if menu_class key is set before accesing it

= 3.4.3 =
* Bugfix: Properly find parent menu item for single posts in custom post types
* New Feature: Set menu class from widget
* New Feature: Support menu items added from "Post Type Archive Link" plugin

= 3.4.2 =
* Bugfix: Allow for custom fallback_cb call in WP Nav Menu

= 3.4.1 =
* Bugfix: set proper UTF-8 encoding in divided menu handling to make sure accented characters are properly displayed.

= 3.4 =
* New Feature: added 'segment' argument. Use segment to specify a portion of your menu for display, regardless of the currently active page. Accepts Object ID or Menu Name.

= 3.3 =
* New Feature: added 'limit' argument. Use limit to specify the maximum number of parent menu items to return.
* New Feature: added 'offset' argument. Use offset to skip over a number of parent menu items (and their children).
* New Feature: added new arguments for easy creation of divided menus, such as menus with a logo in middle. New arguments include: 'divider_html', 'divider_class', 'divider_id', 'divider_offset', and 'divider_container'
* New Feature: added 'segment' argument. Use segment to return a portion of your menu regardless of the active page. Accepts title of menu item, or object ID.
* Addressed the funky way WooCommerce adds pages to the menu system so that WP Nav Plus can find them correctly
* Modified code to meet WordPress PHP Coding standards

= 3.2 =
* Fixed issues with menus dissapearing on taxonomy pages
* Improved function for finding custom links in menu to be able to find relative URLs
* Fixed PHP notice due to improper calling of a non-static function statically
* Fixed undefined $wp_nav_plus_options bug in find_category_ids()

= 3.1 =
* Added in an updator class that will allow customers to update WP Nav Plus from the plugins page

= 3.0 =
* This is a complete top to bottom rewrite of WP Nav Plus, and I am really excited about it.
* New Feature: the wp_nav_plus function has been depreciated, WP Nav Plus has been redesigned to work with the standard wp_nav_menu function built into WordPress
* New Feature: WP Nav Plus is now able to locate the menu position of "link" menu items. Example: a link to a custom post type archive page.
* Bug Fix: the widget now properly utilizes the before_title and after_title strings instead of hardcoded H3's
* Improvement: Massive performance improvements to the methods used to calculate the menu children

= 2.2.5 =
* Fixed a bug that cause the menu to dissapear on post pages when only one category was assigned. In some cases this bug could also produce a PHP error.

= 2.2.4 =
* Set default start_depth to 0
* Fixed a bug that was causing an infinite loop in rare situations where the object id returned results in the postmeta that were not associated with any menu in wp_term_relationships

= 2.2.3 =
* Fixed a bug that was causing the menu to not show then the menu term_id did not match the term_taxonomy_id.

= 2.2.2 =
* Tweaked widget output to make sure that no menu container is shown on the screen when there are no menu items.

= 2.2.1 =
* Tweaked logic to support Gecka Submenu plugin functionality

= 2.2 =
* This release adds widget functionality to WP Nav Plus to make it much easier for non developers to use the power of WP Nav Plus!
* Advanced users can continue to use the wp_nav_plus function in their templates as always

= 2.1 =
* This release includes a couple of bug fixes related to some less common menu configurations, including: multiple menus showing duplicate content, and fixing a couple of PHP notices being shown when the menu was included on pages like the 404 page.
* Fixed bug causing menu not to show on multisite installations
* This release expands the logic/ability of WP Nav Plus to allow users to show 3+ split menu's on a page. Meaning you could have independent menus for 1st level links, 2nd level links, and 3rd level links, all on the same page at once.
* This release also expands the logic/ability of WP Nav Plus to continue showing the menu even after users click into a blog post (something I have not seen another solution do yet)

= 2.0 =
* This release is a complete rethinking and rewrite of WP Nav Plus. Versions 1.x were too dependant on the page structure configured in the wordpress pages admin area.
* Added support for persistant menu on blog post pages (where most other solutions would dissapear)

= 1.1 =
* Fixed a bug that was preventing Custom & Category menu item types from appearing

= 1.0 =
* This is the first public release

== Upgrade Notice ==

= 3.4.6 =
Bugfix: Fix problem with UTF-8 decoding in divided menus with non-latin charactors
Bugfix: Fix bug when trying to locate the correct parent menu item of a single post

= 3.4.5 =
Bugfix: Force UTF-8 entity decode of divided menu layouts on PHP 5.3 and earlier.

= 3.4.4 =
Bugfix: Better handling of multiple post type archives in menu
Bugfix: Check to see if menu_class key is set before accesing it

= 3.4.3 =
Bugfix: Properly find parent menu item for single posts in custom post types
New Feature: Set menu class from widget
New Feature: Support menu items added from "Post Type Archive Link" plugin

= 3.4.2 =
Bugfix: Allow for custom fallback_cb call in WP Nav Menu

= 3.4.1 =
Bugfix: set proper UTF-8 encoding in divided menu handling to make sure accented characters are properly displayed.

= 3.4 =
Added a new feature which allows for a chunk or segment of the specified menu to be displayed on its own, regardless of the currently active page.

= 3.3 =
Added a bundle of major new functionality which will aid in the creation of many more menu design patterns such as divided menus, or menu's which span multiple columns. See the [product page](http://mattkeys.me/products/wp-nav-plus/) for full details. Please make a backup before upgrading in case you have trouble with any of the new functionality.