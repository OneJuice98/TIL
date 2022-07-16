### 부녀회장이 될테야 # 2775

# a층의 b호에 살려면, a-1층의 1~b호까지의 사람들의 수의 합
# 1층 3호? 1층 1호(1명) 1층 2호(3명) 1층 3호(6명) ... 1층 14호(1+2+...+14명)
# 2층 3호? 2층 1호(1명) 2층 2호(1+3명) 2층 3호(1+3+6명)

t = int(input())

for _ in range(t):  
    floor = int(input())  # 층
    num = int(input())  # 호
    f0 = [x for x in range(1, num+1)] 
    for k in range(floor):  
        for i in range(1, num): 
            f0[i] += f0[i-1]  
    print(f0[-1])  