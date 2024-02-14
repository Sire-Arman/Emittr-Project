// handlers/leaderboard.go

package handlers

import (
	"encoding/json"
	"net/http"
)

func Leaderboard(w http.ResponseWriter, r *http.Request) {
	// TODO: Retrieve leaderboard data from Redis

	// Example leaderboard data
	leaderboard := map[string]int{"user1": 10, "user2": 8, "user3": 5}

	json.NewEncoder(w).Encode(leaderboard)
}
