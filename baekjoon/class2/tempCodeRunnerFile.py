import sys
input = sys.stdin.readline

N=int(input())
K = N // 5

for i in range(K,-1,-1) :
    tmp = N - 5*i
    result = i
    if tmp % 3 == 0 :
        result+=tmp//3
        print(result)
        exit()
print(-1)