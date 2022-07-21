### 프린터 큐 #1986

from collections import deque

T = int(input())

for i in range(T):
    N, M = map(int, input().split())
    importance = list(map(int, input().split()))
    ans = [i for i in range(importance)]
    ans[M] = -1
    
    order = 0
    
    while True:
        if importance[0] == max(importance):
            order += 1
            
            if ans[0] == -1:
                print(order)
                break
            else:
                importance.pop(0)
                ans.pop(0)
        else:
            importance.append(importance.pop(0))
            ans.append(ans.pop(0))