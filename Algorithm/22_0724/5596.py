### 시험 점수 # 5596

S = list(map(int, input().split()))
T = list(map(int, input().split()))

if (sum(S) >= sum(T)):
    print(sum(S))
    
else:
    print(sum(T))