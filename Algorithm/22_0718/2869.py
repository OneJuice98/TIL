###달팽이는 올라가고 싶다 #2869

import sys
import math
A, B, V = map(int, sys.stdin.readline().split())

# (A*x, -B*(x-1)) = V
# Ax -Bx +B x(A-B) + B = V
# x = V-B / (A-B)

print(math.ceil((V-B) /(A-B)))
