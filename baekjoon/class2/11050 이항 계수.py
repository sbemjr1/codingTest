n,k=map(int, input().split())
nf=1
kf=1
nkf=1

for i in range(n,0,-1) :
    nf = nf * i

for i in range(k,0,-1) :
    kf = kf * i

for i in range(n-k,0,-1) :
    nkf = nkf * i

print(int(nf/(kf*nkf)))