<?php

/**
 * Brazil Routes functions and definitions
 *
 * @package Brazil Routes
 * @since Brazil Routes 1.0
 */

/**
 * Avoid direct access to function file
 */
if (!defined('ABSPATH')) {
	exit();
}

/**
 * Maximum content width
 * Limit the width of all uploaded images and embeds.
 */
if (!isset($content_width)) {
	$content_width = 1440; /* pixels */
}


if (!function_exists('cbc_setup')):

	/**
	 * Sets up theme defaults and registers support for various
	 * WordPress features.
	 *
	 * Note that this function is hooked into the after_setup_theme
	 * hook, which runs before the init hook. The init hook is too late
	 * for some features, such as indicating support post thumbnails.
	 */
	function cbc_setup()
	{

		/**
		 * Make theme available for translation.
		 * Translations can be placed in the /languages/ directory.
		 */
		load_theme_textdomain('cbc', get_template_directory() . '/languages');

		// Add support for block styles.
		add_theme_support('wp-block-styles');

		// Enqueue editor styles.
		add_editor_style('editor-style.css');

		add_theme_support('block-templates');
		add_theme_support('block-template-parts');

		/**
		 * Add default posts and comments RSS feed links to <head>.
		 */
		add_theme_support('automatic-feed-links');

		/**
		 * Enable support for post thumbnails and featured images.
		 */
		add_theme_support('post-thumbnails');

		/**
		 * Add support for two custom navigation menus.
		 */
		add_theme_support('menus');
		register_nav_menus(array(
			'main' => "Menu Principal",
			'footer' => "Menu do Rodapé",
		));

		/**
		 * Enable support for the following post formats:
		 * aside, gallery, quote, image, and video
		 */
		add_theme_support('post-formats', array('aside', 'gallery', 'quote', 'image', 'video'));
	}
endif; // cbc_setup
add_action('after_setup_theme', 'cbc_setup');


//Add ReactJs Components Support
function cbc__theme()
{

	wp_enqueue_script(
		"cbc",
		get_stylesheet_directory_uri() . "/dist/assets/index.js",
		array(),
		wp_get_theme()->get("Version"), //time()
		true
	);
	// wp_set_script_translations('cbc', 'cbc');

	// wp_enqueue_style(
	// 	"cbc",
	// 	get_stylesheet_directory_uri() . '/dist/assets/index.css',
	// 	wp_get_theme()->get("Version"), //time()
	// 	true
	// );

	wp_enqueue_style(
		"cbc",
		get_stylesheet_uri(),
		wp_get_theme()->get("Version"), //time()
		true
	);

}
add_action('wp_enqueue_scripts', 'cbc__theme');

// Allow SVG
add_filter('wp_check_filetype_and_ext', function ($data, $file, $filename, $mimes) {

	global $wp_version;
	if ($wp_version !== '4.7.1') {
		return $data;
	}

	$filetype = wp_check_filetype($filename, $mimes);

	return [
		'ext' => $filetype['ext'],
		'type' => $filetype['type'],
		'proper_filename' => $data['proper_filename']
	];
}, 10, 4);

function cc_mime_types($mimes)
{
	$mimes['svg'] = 'image/svg+xml';
	return $mimes;
}
add_filter('upload_mimes', 'cc_mime_types');

function fix_svg()
{
	echo '<style type="text/css">
        .attachment-266x266, .thumbnail img {
             width: 100% !important;
             height: auto !important;
        }
        </style>';
}
add_action('admin_head', 'fix_svg');