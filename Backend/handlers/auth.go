// handlers/auth.go

package handlers

import (
	"Backend/models"
	"encoding/json"
	"net/http"
)

func Register(w http.ResponseWriter, r *http.Request) {
	var user models.User
	json.NewDecoder(r.Body).Decode(&user)

	// TODO: Validate user data

	// TODO: Add user to Redis

	json.NewEncoder(w).Encode("User registered successfully")
}

func Login(w http.ResponseWriter, r *http.Request) {
	var user models.User
	json.NewDecoder(r.Body).Decode(&user)

	// TODO: Authenticate user against Redis

	// TODO: Generate JWT token

	// TODO: Return token in response
}
