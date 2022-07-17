### 숫자 카드2 #10816
# dict, hashmap!
import sys

N = int(sys.stdin.readline())
my_card = map(int, sys.stdin.readline().split())
M = int(sys.stdin.readline())
target_card = map(int, sys.stdin.readline().split())

ans = dict()

for i in my_card:
    if i in ans:
        ans[i] += 1
    else:
        ans[i] = 1

print(' '.join(str(ans[i]) if i in ans else "0" for i in target_card))


