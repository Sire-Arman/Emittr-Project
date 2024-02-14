// handlers/game.go

package handlers

import (
	"net/http"
)

func Play(w http.ResponseWriter, r *http.Request) {
	// TODO: Implement game logic

	// TODO: If user wins, increment points in Redis

	// Example response
	w.WriteHeader(http.StatusOK)
	w.Write([]byte("Game played successfully"))
}
