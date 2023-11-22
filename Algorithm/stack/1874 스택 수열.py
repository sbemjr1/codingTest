import sys
input = sys.stdin.readline

n = int(input())
stack = []
start = 1
operator = []

for _ in range(n) :
    end = int(input())
    while start <= end :
        stack.append(start)
        operator.append('+')
        start += 1
    
    if stack[-1] == end :
        stack.pop()
        operator.append('-')
    else :
        print('NO')
        break
else :
    for i in operator :
        print(i)