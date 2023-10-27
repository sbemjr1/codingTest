import sys
input = sys.stdin.readline

N=int(input())
a=[]

for _ in range(N) :
    x,y = map(int, input().split())
    a.append([x,y])

for i in sorted(a) :
    print(i[0],i[1])