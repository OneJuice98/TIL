### 분해합 #2231
import sys

N = int(sys.stdin.readline())
ans = 0

for i in range(1, N+1):
    temp = sum(map(int, str(i))) + i
    if temp == N:
        ans = i
        break
print(ans)
