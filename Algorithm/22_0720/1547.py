### 공 #1547

M = int(input())

ball = [1, 0, 0]
for i in range(M):
    X, Y = map(int, input().split())
    temp = ball[X-1]
    ball[X-1] = ball[Y-1]
    ball[Y-1] = temp
    
print(ball.index(1))
        