import sys

N = int(sys.stdin.readline())
seq = []

for i in range(N):
    seq.append(int(sys.stdin.readline()))
seq = sorted(seq)

for i in seq:
    print(i)
    
"""
    진짜 개같다. sys하나 안썼다고 이렇게 되다니 sort쓰면 그냥 끝나는 문제를 ㅋㅋ
    그래도 많이 배웠다. heap은 거의 나혼자서 구현을 못하긴했는데, merge는 가능했음!

"""