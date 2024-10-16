<?php
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json");
header('Access-Control-Allow-Methods: GET, POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type, Authorization');
header("Access-Control-Allow-Credentials: true");

// Handle preflight request for OPTIONS method (sent before POST/GET requests)
/* if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
	http_response_code(204);
	exit();
} */
	
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    // Get the input data (username and password)
    $input = json_decode(file_get_contents('php://input'), true);
    $username = $input['username'] ?? '';
    $password = $input['password'] ?? '';

    // Simple authentication check
    if ($username == 'root' && $password == 'root') {
        echo json_encode(['status' => 'success', 'message' => 'Login successful']);
    } else {
        echo json_encode(['status' => 'error', 'message' => 'Invalid username']);
    }
    exit();
}else{
    echo json_encode(['status' => 'error', 'message' => 'Invalid request method']);
}
?>