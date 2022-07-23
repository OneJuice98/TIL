### 플러그 #2010

N = int(input())

ans = 0
for _ in range(N):
    temp = int(input())
    ans += temp - 1
    
ans += 1
print(ans)