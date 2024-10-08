<?php
	header("Access-Control-Allow-Origin: *");
	header("Content-Type: application/json");
	header('Access-Control-Allow-Methods: POST');
	header('Access-Control-Allow-Headers: Content-Type');
	
	if ($_SERVER['REQUEST_METHOD'] === 'POST') {
		// You can access the username and password here if needed
		$input = json_decode(file_get_contents('php://input'), true);
		$username = $input['username'] ?? '';
		$password = $input['password'] ?? '';
	
		// For now, just respond with a message
		echo json_encode(["message" => "Hello ". $username . ", from PHP!"]);
	}
?>