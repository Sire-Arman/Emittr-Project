// main.go

package main

import (
	"Backend/handlers"
	"net/http"

	"github.com/gorilla/mux"
)

func main() {
	r := mux.NewRouter()

	// User Authentication Endpoints
	r.HandleFunc("/", handlers.Home).Methods("GET")
	r.HandleFunc("/register", handlers.Register).Methods("POST")
	r.HandleFunc("/login", handlers.Login).Methods("POST")

	// Game Endpoints
	r.HandleFunc("/play", handlers.Play).Methods("POST")

	// Leaderboard Endpoint
	r.HandleFunc("/leaderboard", handlers.Leaderboard).Methods("GET")

	http.ListenAndServe(":8080", r)
}
