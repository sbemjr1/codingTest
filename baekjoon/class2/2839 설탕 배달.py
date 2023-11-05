import sys
input = sys.stdin.readline

N=int(input())
K = N//5

while K >= 0 :
    tmp = N - 5*K
    result = K
    if tmp % 3 == 0 :
        result+=tmp//3
        print(result)
        exit()
    K -= 1

print(-1)