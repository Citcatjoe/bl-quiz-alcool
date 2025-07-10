<?php

ini_set('display_errors', '0');

// Config
require_once __DIR__ . '/vendor/autoload.php';

$dirs  = array();
$dirs[] = __DIR__;
// Local _blocks or global _blocks ? not finished
//$dirs[] = __DIR__ . '/templates';
//$dirs[] = __DIR__ . '/../__is_embed_somewhere/php';
// FTP
//$dirs[] = __DIR__ . '/../../__is_embed_somewhere/php';


// $templateFilePath1 = __DIR__ . '/templates/_header-and-share.html.twig';
// if (file_exists($templateFilePath1)) {
//     $dirs[] = __DIR__ . '/templates';
// } else {
//     $dirs[] = __DIR__ . '/../../__is_embed_somewhere/php'; 
// }

$templateFilePath1 = __DIR__ . '/templates/metas-and-scripts/_metas-and-scripts.html.twig';
if (file_exists($templateFilePath1)) {
    $dirs[] = __DIR__ . '/templates/metas-and-scripts';
} else {
    $dirs[] = __DIR__ . '/../../__is_embed_somewhere/php/metas-and-scripts'; 
}

$templateFilePath2 = __DIR__ . '/templates/header-and-share/_header-and-share.html.twig';
if (file_exists($templateFilePath2)) {
    $dirs[] = __DIR__ . '/templates/header-and-share';
} else {
    $dirs[] = __DIR__ . '/../../__is_embed_somewhere/php/header-and-share'; 
}
														 
$templateFilePath3 = __DIR__ . '/templates/html-elements/_html-elements.html.twig';
if (file_exists($templateFilePath3)) {
    $dirs[] = __DIR__ . '/templates/html-elements';
} else {
    $dirs[] = __DIR__ . '/../../__is_embed_somewhere/php/html-elements'; 
}




$debug = false;





$loader = new Twig_Loader_Filesystem($dirs);
$twig = new Twig_Environment($loader, ['debug' => $debug]);

// Variables
$variables = array();
if (file_exists(__DIR__ . '/variables.json')) {
	$variables = json_decode(file_get_contents(__DIR__ . '/variables.json'), TRUE);
}
$variables['debug'] = $debug;

// Application variables (as URL and more)
$app = new stdClass();

// @TODO Secure it !!!
$host = $_SERVER['HTTP_HOST'];
$uri = str_replace('index.php', '', $_SERVER['DOCUMENT_URI']);

$app->url = 'https://' . $host . $uri;
if (!isset($variables['dataLayer'])) {
	$variables['dataLayer'] = [
		'articleType' => 'blick_ro_visual'
	];
}else{
	$variables['dataLayer'] = array_merge($variables['dataLayer'], ['articleType' => 'blick_ro_visual']);
}
$variables = array_merge($variables, array('app' => $app));

// Si plusieurs pages
$template = 'index.html.twig';
if (isset($_GET['page']) && !empty($_GET['page'])) {
	if (file_exists(__DIR__ . '/' . $_GET['page'] . '.html.twig')) {
		$template = $_GET['page'] . '.html.twig';
	}
}

$content = file_get_contents($template);

 
// if (strpos($content, "block('bar_brand')") === false) {

// 	throw new Exception("Missing mandatory blocks!", 1);
// }

// if (strpos($content, "block('head_brand')") === false ||
// 	strpos($content, "block('bar_brand')") === false ||
// 	strpos($content, "block('footer_brand')") === false) {

// 	throw new Exception("Missing mandatory blocks!", 1);
// }

// Afficher le template
echo $twig->render($template, $variables);
