import sys

N=int(sys.stdin.readline())
d=[]

for i in range(N) :
    d.append(int(sys.stdin.readline()))

d.sort()

for i in d :
    print(i)