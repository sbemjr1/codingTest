# N=int(input())
# d=[]

# for i in range(N) :
#     d.append(input())

# d=list(set(d))
# d.sort()
# d.sort(key=len)

# for i in d :
#     print(i)

import sys

N=int(sys.stdin.readline())
d=[]

for i in range(N) :
    d.append(sys.stdin.readline().strip())

d=list(set(d))
d.sort()
d.sort(key=len)

for i in d :
    print(i)

