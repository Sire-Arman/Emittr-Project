// redis/client.go

package redis

import (
	"context"

	"github.com/go-redis/redis/v8"
)

var ctx = context.Background()

// CreateRedisClient initializes and returns a new Redis client
func CreateRedisClient() *redis.Client {
	rdb := redis.NewClient(&redis.Options{
		Addr: "localhost:6379", // Redis server
	})
	return rdb
}
