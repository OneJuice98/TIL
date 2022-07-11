import sys


N = int(sys.stdin.readline())
S_nums = sys.stdin.readline().split()
M = int(sys.stdin.readline())
T_nums = sys.stdin.readline().split()
#print(S_nums, T_nums)
ans = ''
for i in T_nums:
    if i not in S_nums:
        ans += '0'
    else:
        ans += str(S_nums.count(i))
    ans += ' '
print(ans)
"""
    오늘 개피곤해서 더이상 알고리즘은 못하겠어요 ㅠㅠ
"""