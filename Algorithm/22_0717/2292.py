### 벌집 #2292

# 13 -> [1, 4, 13]
# 58 -> [1, 7, 18, 35, 58], [1, 6, 18, 35, 58], [1,6,17,34,58]

N = int(input())
cnt = 1
nums = 1
while N > nums:
    nums += 6 * cnt
    cnt += 1
    
print(cnt)